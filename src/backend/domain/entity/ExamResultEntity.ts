import { Entity, EntityProps } from './Entity';

export type ExamResultEntityProps = EntityProps & {
  examId: string;
  studentId: string;
  score: number;
  notes?: string;
};

export class ExamResultEntity extends Entity {
  public examId: string;
  public studentId: string;
  public score: number;
  public notes?: string;

  constructor(props: ExamResultEntityProps) {
    super(props);
    this.examId = props.examId;
    this.studentId = props.studentId;
    this.score = props.score;
    this.notes = props.notes;
  }
}
