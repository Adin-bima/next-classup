import { EnumGender } from '@/core/enums';

import { Entity, EntityProps } from './Entity';

export type StudentEntityProps = EntityProps & {
  gender: EnumGender;
  studentNumber: string;
  userId: string;
  schoolId: string;
  classId?: string;
};

export class StudentEntity extends Entity {
  public gender: EnumGender;
  public studentNumber: string;
  public userId: string;
  public schoolId: string;
  public classId?: string;

  constructor(props: StudentEntityProps) {
    super(props);
    this.gender = props.gender;
    this.studentNumber = props.studentNumber;
    this.userId = props.userId;
    this.schoolId = props.schoolId;
    this.classId = props.classId;
  }
}
