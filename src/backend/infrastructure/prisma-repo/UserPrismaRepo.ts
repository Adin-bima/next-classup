import { User, Prisma, PrismaClient } from '@prisma/client';

import { EnumRole } from '@/core/enums';
import { UserEntity } from '@/backend/domain/entity';
import { Pagination } from '@/backend/domain/common/Pagination';
import { BackendError } from '@/backend/domain/error-handler/BackendError';
import { ErrorCategory } from '@/backend/domain/error-handler/ErrorCategory';
import { IUserRepo, IUserSearchParams } from '@/backend/domain/repo/IUserRepo';
import { UserErrors } from '@/backend/domain/error-handler/errors/user-errors';
import { CommonErrors } from '@/backend/domain/error-handler/errors/common-errors';
import {
  DEFAULT_SORT_BY,
  DEFAULT_PAGINATION,
} from '@/backend/domain/helper/constant';

export class UserPrismaRepo implements IUserRepo {
  constructor(
    private readonly prismaClient: PrismaClient | Prisma.TransactionClient
  ) {}

  private mapUserToEntity(user: User): UserEntity {
    return new UserEntity({
      id: user.id,
      email: user.email,
      password: user.password,
      name: user.name,
      role: user.role as EnumRole,
      schoolId: user.school_id || undefined,
    });
  }

  private mapUserToPrisma(user: UserEntity): User {
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      name: user.name,
      role: user.role,
      school_id: user.schoolId || null,
      created_at: user.createdAt,
      updated_at: user.updatedAt,
      deleted_at: user.deletedAt || null,
    };
  }

  private mapEntityKeyToPrismaKey(key: keyof UserEntity): keyof User {
    switch (key) {
      case 'email':
        return 'email';
      case 'password':
        return 'password';
      case 'name':
        return 'name';
      case 'role':
        return 'role';
      case 'schoolId':
        return 'school_id';
      case 'createdAt':
        return 'created_at';
      case 'updatedAt':
        return 'updated_at';
      case 'deletedAt':
        return 'deleted_at';
      default:
        throw new BackendError(CommonErrors.invalidKey);
    }
  }

  async create(user: UserEntity): Promise<UserEntity> {
    try {
      const createdUser = await this.prismaClient.user.create({
        data: this.mapUserToPrisma(user),
      });
      return this.mapUserToEntity(createdUser);
    } catch (error) {
      throw new BackendError(UserErrors.create);
    }
  }

  async createMany(users: UserEntity[]): Promise<UserEntity[]> {
    try {
      await this.prismaClient.user.createMany({
        data: users.map((user) => this.mapUserToPrisma(user)),
      });

      return users;
    } catch (error) {
      throw new BackendError(UserErrors.createMany);
    }
  }

  async update(id: string, user: UserEntity): Promise<UserEntity> {
    try {
      const updatedUser = await this.prismaClient.user.update({
        where: { id },
        data: this.mapUserToPrisma(user),
      });
      return this.mapUserToEntity(updatedUser);
    } catch (error) {
      throw new BackendError(UserErrors.update);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.prismaClient.user.update({
        where: { id },
        data: {
          deleted_at: new Date(),
        },
      });
    } catch (error) {
      throw new BackendError(UserErrors.delete);
    }
  }

  async deleteMany(ids: string[]): Promise<void> {
    try {
      await this.prismaClient.user.updateMany({
        where: { id: { in: ids } },
        data: {
          deleted_at: new Date(),
        },
      });
    } catch (error) {
      throw new BackendError(UserErrors.deleteMany);
    }
  }

  async restore(id: string): Promise<UserEntity> {
    try {
      const restoredUser = await this.prismaClient.user.update({
        where: { id },
        data: {
          deleted_at: null,
        },
      });
      return this.mapUserToEntity(restoredUser);
    } catch (error) {
      throw new BackendError(UserErrors.restore);
    }
  }

  async restoreMany(ids: string[]): Promise<UserEntity[]> {
    try {
      await this.prismaClient.user.updateMany({
        where: { id: { in: ids } },
        data: {
          deleted_at: null,
        },
      });
      const users = await this.prismaClient.user.findMany({
        where: { id: { in: ids } },
      });
      return users.map((user) => this.mapUserToEntity(user));
    } catch (error) {
      throw new BackendError(UserErrors.restoreMany);
    }
  }

  async search(params: IUserSearchParams): Promise<Pagination<UserEntity>> {
    try {
      const {
        emailsIn,
        rolesIn,
        schoolIdsIn,
        keyword,
        pagination = DEFAULT_PAGINATION,
        sortBy = [DEFAULT_SORT_BY],
      } = params;

      const sortByPrisma = sortBy?.map((sort) => ({
        [this.mapEntityKeyToPrismaKey(sort.field)]: sort.order,
      }));

      const users = await this.prismaClient.user.findMany({
        where: {
          email: { in: emailsIn },
          role: { in: rolesIn },
          school_id: { in: schoolIdsIn },
          name: { contains: keyword },
        },
        skip: pagination.page * pagination.limit,
        take: pagination.limit,
        orderBy: sortByPrisma,
      });

      const usersEntities = users.map((user) => this.mapUserToEntity(user));

      return new Pagination<UserEntity>({
        page: pagination.page,
        limit: pagination.limit,
        count: users.length,
        items: usersEntities,
      });
    } catch (error) {
      throw new BackendError(UserErrors.search);
    }
  }
  async getById(id: string): Promise<UserEntity> {
    try {
      const user = await this.prismaClient.user.findUnique({ where: { id } });
      if (!user) {
        throw new BackendError({
          code: 'user.not_found',
          message: 'User not found',
          category: ErrorCategory.NOT_FOUND,
        });
      }
      return this.mapUserToEntity(user);
    } catch (error) {
      throw new BackendError(UserErrors.getById);
    }
  }
}
