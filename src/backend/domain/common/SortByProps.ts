export enum SortByOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export type SortByProps<T> = {
  field: keyof T;
  order: SortByOrder;
};
