export type Pagination<T> = {
  pagination: {
    page: number;
    limit: number;
    count: number;
  };
  items: T[];
};

export type PaginationParams = {
  page: number;
  limit: number;
};
