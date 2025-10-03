
import { EnumAttendanceStatus } from '@/core/enums';

import { Entity, EntityProps } from './Entity';

export type AttendanceEntityProps = EntityProps & {
  studentId: string;
  scheduleId: string;
  status: EnumAttendanceStatus;
  datetime: Date;
};

export class AttendanceEntity extends Entity {
  public studentId: string;
  public scheduleId: string;
  public status: EnumAttendanceStatus;
  public datetime: Date;

  constructor(props: AttendanceEntityProps) {
    super(props);
    this.studentId = props.studentId;
    this.scheduleId = props.scheduleId;
    this.status = props.status;
    this.datetime = props.datetime;
  }
}
