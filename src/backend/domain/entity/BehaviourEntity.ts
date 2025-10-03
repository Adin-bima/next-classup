import { EnumRemark } from '@/core/enums';

import { Entity, EntityProps } from './Entity';

export type BehaviourEntityProps = EntityProps & {
  studentId: string;
  classId: string;
  teacherId: string;
  description: string;
  datetime: Date;
  remark: EnumRemark;
  notes?: string;
};

export class BehaviourEntity extends Entity {
  public studentId: string;
  public classId: string;
  public teacherId: string;
  public description: string;
  public datetime: Date;
  public remark: EnumRemark;
  public notes?: string;

  constructor(props: BehaviourEntityProps) {
    super(props);
    this.studentId = props.studentId;
    this.classId = props.classId;
    this.teacherId = props.teacherId;
    this.description = props.description;
    this.datetime = props.datetime;
    this.remark = props.remark;
    this.notes = props.notes;
  }
}
