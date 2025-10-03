import { Entity, EntityProps } from './Entity';

export type ParentEntityProps = EntityProps & {
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export class ParentEntity extends Entity {
  public userId: string;

  constructor(props: ParentEntityProps) {
    super(props);
    this.userId = props.userId;
  }
}
