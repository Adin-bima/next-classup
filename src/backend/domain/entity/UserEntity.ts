import { EnumGender } from '@/core/enums';

import { BaseEntity, BaseEntityProps } from '../common';

export type UserEntityProps = BaseEntityProps & {
  username: string;
  email: string;
  password: string;
  name: string;
  phone?: string;
  gender: EnumGender;
};

export class UserEntity extends BaseEntity {
  public username: string;
  public email: string;
  public password: string;
  public name: string;
  public phone?: string;
  public gender: EnumGender;

  public constructor(props: UserEntityProps) {
    super(props);
    this.username = props.username;
    this.email = props.email;
    this.password = props.password;
    this.name = props.name;
    this.phone = props.phone;
    this.gender = props.gender;
  }
}
