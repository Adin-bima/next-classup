import { UserEntity } from '@/backend/domain/entity';
import { Pagination } from '@/backend/domain/common/Pagination';
import { IUserSearchParams } from '@/backend/domain/repo/IUserRepo';
import { UnitOfWork } from '@/backend/infrastructure/prisma/UnitOfWork';

export class UserService {
  constructor(private readonly unitOfWork: UnitOfWork) {}

  // Write operations - use transactions
  async createUser(user: UserEntity): Promise<UserEntity> {
    return this.unitOfWork.executeWrite(async ({ userRepo }) =>
      userRepo.create(user)
    );
  }

  async updateUser(id: string, user: UserEntity): Promise<UserEntity> {
    return this.unitOfWork.executeWrite(async ({ userRepo }) =>
      userRepo.update(id, user)
    );
  }

  async deleteUser(id: string): Promise<void> {
    return this.unitOfWork.executeWrite(async ({ userRepo }) =>
      userRepo.delete(id)
    );
  }

  async restoreUser(id: string): Promise<UserEntity> {
    return this.unitOfWork.executeWrite(async ({ userRepo }) =>
      userRepo.restore(id)
    );
  }

  // Read operations - no transactions for better performance
  async getUserById(id: string): Promise<UserEntity> {
    return this.unitOfWork.execute(async ({ userRepo }) =>
      userRepo.getById(id)
    );
  }

  async searchUsers(
    params: IUserSearchParams
  ): Promise<Pagination<UserEntity>> {
    return this.unitOfWork.execute(async ({ userRepo }) =>
      userRepo.search(params)
    );
  }

  // Batch operations - use transactions for consistency
  async createManyUsers(users: UserEntity[]): Promise<UserEntity[]> {
    return this.unitOfWork.executeWrite(async ({ userRepo }) =>
      userRepo.createMany(users)
    );
  }

  async deleteManyUsers(ids: string[]): Promise<void> {
    return this.unitOfWork.executeWrite(async ({ userRepo }) =>
      userRepo.deleteMany(ids)
    );
  }

  async restoreManyUsers(ids: string[]): Promise<UserEntity[]> {
    return this.unitOfWork.executeWrite(async ({ userRepo }) =>
      userRepo.restoreMany(ids)
    );
  }
}
