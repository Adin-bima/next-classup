import { BaseEntity } from '../common';
import { SortByOrder, SortByProps } from '../common/SortByProps';

export const SUCCESS_CODE = 'response.success';
export const SUCCESS_MESSAGE = 'Success';

export const DEFAULT_SORT_BY: SortByProps<BaseEntity> = {
  field: 'createdAt',
  order: SortByOrder.DESC,
};

export const DEFAULT_PAGINATION = {
  page: 0,
  limit: 25,
};
