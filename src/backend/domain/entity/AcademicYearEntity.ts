import { Entity, EntityProps } from './Entity';

export type AcademicYearEntityProps = EntityProps & {
  yearStart: number;
  yearEnd: number;
  schoolId: string;
  isCurrent: boolean;
};

export class AcademicYearEntity extends Entity {
  public yearStart: number;
  public yearEnd: number;
  public schoolId: string;
  public isCurrent: boolean;

  constructor(props: AcademicYearEntityProps) {
    super(props);
    this.yearStart = props.yearStart;
    this.yearEnd = props.yearEnd;
    this.schoolId = props.schoolId;
    this.isCurrent = props.isCurrent;
  }
}
