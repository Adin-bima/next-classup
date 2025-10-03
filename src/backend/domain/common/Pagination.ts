export type PaginationProps<T> = {
  page: number;
  limit: number;
  count: number;
  items: T[];
};

export class Pagination<T> {
  public page: number;
  public limit: number;
  public count: number;
  public items: T[];

  constructor(props: PaginationProps<T>) {
    this.page = props.page;
    this.limit = props.limit;
    this.count = props.count;
    this.items = props.items;
  }
}
