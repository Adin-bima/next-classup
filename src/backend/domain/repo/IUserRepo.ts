import { EnumRole } from '@/core/enums';

import { UserEntity } from '../entity';
import { Pagination } from '../common/Pagination';
import { SortByProps } from '../common/SortByProps';
import { PaginationProps } from '../common/PaginationProps';

export type IUserSearchParams = {
  idsIn?: string[];
  emailsIn?: string[];
  rolesIn?: EnumRole[];
  schoolIdsIn?: string[];
  keyword?: string;
  pagination?: PaginationProps;
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
