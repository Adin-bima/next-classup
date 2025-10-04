import { EnumRole } from '@/core/enums';

import { UserEntity } from '../entity';
import { SortByProps } from '../common/SortByProps';
import { Pagination, PaginationParams } from '../common/Pagination';

export type IUserSearchParams = {
  idsIn?: string[];
  emailsIn?: string[];
  rolesIn?: EnumRole[];
  schoolIdsIn?: string[];
  keyword?: string;
  pagination?: PaginationParams;
  sortBy?: SortByProps<UserEntity>[];
};

export interface IUserRepo {
  getById(id: string): Promise<UserEntity>;
  create(user: UserEntity): Promise<UserEntity>;
  createMany(users: UserEntity[]): Promise<UserEntity[]>;
  update(id: string, user: UserEntity): Promise<UserEntity>;
  delete(id: string): Promise<void>;
  deleteMany(ids: string[]): Promise<void>;
  restore(id: string): Promise<UserEntity>;
  restoreMany(ids: string[]): Promise<UserEntity[]>;
  search(params: IUserSearchParams): Promise<Pagination<UserEntity>>;
}
