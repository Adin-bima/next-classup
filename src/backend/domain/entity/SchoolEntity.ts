import { Entity, EntityProps } from './Entity';

export type SchoolEntityProps = EntityProps & {
  name: string;
  address?: string;
  adminId: string;
};

export class SchoolEntity extends Entity {
  public name: string;
  public address?: string;
  public adminId: string;

  constructor(props: SchoolEntityProps) {
    super(props);
    this.name = props.name;
    this.address = props.address;
    this.adminId = props.adminId;
  }
}
