import { randomUUID } from 'crypto';

export type BaseEntityProps = {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export class BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;

  constructor(props: BaseEntityProps) {
    this.id = props.id || randomUUID();
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || new Date();
    this.deletedAt = props.deletedAt;
  }
}
