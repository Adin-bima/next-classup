import { EnumDayOfWeek } from '@/core/enums';

import { Entity, EntityProps } from './Entity';

export type ScheduleEntityProps = EntityProps & {
  dayOfWeek: EnumDayOfWeek;
  subjectId: string;
  teacherId: string;
  classId: string;
};

export class ScheduleEntity extends Entity {
  public dayOfWeek: EnumDayOfWeek;
  public subjectId: string;
  public teacherId: string;
  public classId: string;

  constructor(props: ScheduleEntityProps) {
    super(props);
    this.dayOfWeek = props.dayOfWeek;
    this.subjectId = props.subjectId;
    this.teacherId = props.teacherId;
    this.classId = props.classId;
  }
}
