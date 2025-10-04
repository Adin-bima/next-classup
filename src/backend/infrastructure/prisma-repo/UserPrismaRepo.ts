import { User, Prisma, PrismaClient } from '@prisma/client';

import { EnumGender } from '@/core/enums';
import { Pagination } from '@/backend/domain/common';
import { UserEntity, UserEntityProps } from '@/backend/domain/entity';
import { DEFAULT_PAGINATION } from '@/backend/domain/helper/constant';
import { userErrors, commonErrors } from '@/backend/domain/error-handler';
import { BackendError } from '@/backend/domain/error-handler/BackendError';
import { IUserRepo, IUserSearchParams } from '@/backend/domain/repo/IUserRepo';

import { prismaRepoHandler } from '../prisma/repo-handler';

export class UserPrismaRepo implements IUserRepo {
  constructor(
    private readonly prisma: PrismaClient | Prisma.TransactionClient
  ) {}

  getById(id: string): Promise<UserEntity> {
    return prismaRepoHandler(async () => {
      const user = await this.prisma.user.findUnique({
        where: { id },
      });
      if (!user) {
        throw new BackendError(userErrors.notFound);
      }
      return this.mapToEntity(user);
    });
  }

  create(user: UserEntity): Promise<UserEntity> {
    return prismaRepoHandler(async () => {
      const createdUser = await this.prisma.user.create({
        data: this.mapToPrisma(user),
      });
      return this.mapToEntity(createdUser);
    });
  }

  createMany(users: UserEntity[]): Promise<UserEntity[]> {
    return prismaRepoHandler(async () => {
      await this.prisma.user.createMany({
        data: users.map(this.mapToPrisma),
      });

      const createdUsers = await this.prisma.user.findMany({
        where: {
          id: {
            in: users.map((user) => user.id),
          },
        },
      });

      return createdUsers.map(this.mapToEntity);
    });
  }

  update(id: string, user: UserEntity): Promise<UserEntity> {
    return prismaRepoHandler(async () => {
      const updatedUser = await this.prisma.user.update({
        where: { id },
        data: this.mapToPrisma(user),
      });
      return this.mapToEntity(updatedUser);
    });
  }

  delete(id: string): Promise<void> {
    return prismaRepoHandler(async () => {
      await this.prisma.user.delete({
        where: { id },
      });
    });
  }

  deleteMany(ids: string[]): Promise<void> {
    return prismaRepoHandler(async () => {
      await this.prisma.user.deleteMany({
        where: { id: { in: ids } },
      });
    });
  }

  restore(id: string): Promise<UserEntity> {
    return prismaRepoHandler(async () => {
      const restoredUser = await this.prisma.user.update({
        where: { id },
        data: { deleted_at: null },
      });
      return this.mapToEntity(restoredUser);
    });
  }

  restoreMany(ids: string[]): Promise<UserEntity[]> {
    return prismaRepoHandler(async () => {
      await this.prisma.user.updateMany({
        where: { id: { in: ids } },
        data: { deleted_at: null },
      });

      const restoredUsers = await this.prisma.user.findMany({
        where: { id: { in: ids } },
      });

      return restoredUsers.map(this.mapToEntity);
    });
  }

  search(params: IUserSearchParams): Promise<Pagination<UserEntity>> {
    return prismaRepoHandler(async () => {
      const {
        keyword,
        pagination = DEFAULT_PAGINATION,
        emailsIn,
        idsIn,
        rolesIn,
        schoolIdsIn,
        sortBy,
      } = params;

      const { page, limit } = pagination;

      const where: Prisma.UserWhereInput = {
        email: { in: emailsIn },
        id: { in: idsIn },
        user_roles: {
          some: { schoolId: { in: schoolIdsIn }, role: { in: rolesIn } },
        },
        name: { contains: keyword, mode: 'insensitive' },
      };

      const orderBy: Prisma.UserOrderByWithRelationInput[] =
        sortBy?.map((sort) => ({
          [this.mapToPrismaKey(sort.field)]: sort.order,
        })) ?? [];

      const [users, count] = await Promise.all([
        this.prisma.user.findMany({
          where,
          orderBy,
          skip: (page - 1) * limit,
          take: limit,
        }),
        this.prisma.user.count({ where, select: { id: true } }),
      ]);

      const res: Pagination<UserEntity> = {
        pagination: {
          page,
          limit,
          count: count.id,
        },
        items: users.map(this.mapToEntity),
      };

      return res;
    });
  }

  private mapToEntity(user: User): UserEntity {
    return new UserEntity({
      id: user.id,
      username: user.username,
      phone: user.phone || undefined,
      gender: user.gender as EnumGender,
      email: user.email,
      password: user.password,
      name: user.name,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
      deletedAt: user.deleted_at ?? undefined,
    });
  }

  private mapToPrisma(user: UserEntity): User {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      name: user.name,
      phone: user.phone || null,
      gender: user.gender,
      created_at: user.createdAt,
      updated_at: user.updatedAt,
      deleted_at: user.deletedAt ?? null,
    };
  }

  mapToPrismaKey(key: keyof UserEntityProps): keyof User {
    switch (key) {
      case 'email':
        return 'email';
      case 'password':
        return 'password';
      case 'name':
        return 'name';
      case 'phone':
        return 'phone';
      case 'gender':
        return 'gender';
      case 'createdAt':
        return 'created_at';
      case 'updatedAt':
        return 'updated_at';
      case 'deletedAt':
        return 'deleted_at';
      case 'id':
        return 'id';
      case 'username':
        return 'username';
      default:
        throw new BackendError(commonErrors.invalidKey);
    }
  }
}
