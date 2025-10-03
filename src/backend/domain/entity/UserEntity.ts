import { EnumRole } from '@/core/enums';

import { Entity, EntityProps } from './Entity';

export type UserEntityProps = EntityProps & {
  email: string;
  password: string;
  name: string;
  role: EnumRole;
  schoolId?: string;
};

export class UserEntity extends Entity {
  public email: string;
  public password: string;
  public name: string;
  public role: EnumRole;
  public schoolId?: string;

  constructor(props: UserEntityProps) {
    super(props);
    this.email = props.email;
    this.password = props.password;
    this.name = props.name;
    this.role = props.role;
    this.schoolId = props.schoolId;
  }
}
