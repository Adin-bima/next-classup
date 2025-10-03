import { Entity, EntityProps } from './Entity';

export type ExamEntityProps = EntityProps & {
  subject: string;
  datetime: Date;
  teacherId: string;
  classId: string;
};

export class ExamEntity extends Entity {
  public subject: string;
  public datetime: Date;
  public teacherId: string;
  public classId: string;

  constructor(props: ExamEntityProps) {
    super(props);
    this.subject = props.subject;
    this.datetime = props.datetime;
    this.teacherId = props.teacherId;
    this.classId = props.classId;
  }
}
