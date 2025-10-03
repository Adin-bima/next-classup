import { randomUUID } from 'crypto';

export type EntityProps = {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export class Entity {
  public id: string;
  public createdAt: Date;
  public updatedAt: Date;
  public deletedAt?: Date;

  constructor(props: EntityProps) {
    this.id = props.id || randomUUID();
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || new Date();
    this.deletedAt = props.deletedAt;
  }
}
