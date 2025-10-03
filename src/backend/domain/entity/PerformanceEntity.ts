import { Entity, EntityProps } from './Entity';

export type PerformanceEntityProps = EntityProps & {
  studentId: string;
  classId: string;
  subjectId: string;
  score: number;
  datetime: Date;
};

export class PerformanceEntity extends Entity {
  public studentId: string;
  public classId: string;
  public subjectId: string;
  public score: number;
  public datetime: Date;

  constructor(props: PerformanceEntityProps) {
    super(props);
    this.studentId = props.studentId;
    this.classId = props.classId;
    this.subjectId = props.subjectId;
    this.score = props.score;
    this.datetime = props.datetime;
  }
}
