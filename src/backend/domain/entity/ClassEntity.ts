import { Entity, EntityProps } from './Entity';

export type ClassEntityProps = EntityProps & {
  name: string;
  grade: number;
  schoolId: string;
  academicYearId: string;
};

export class ClassEntity extends Entity {
  public name: string;
  public grade: number;
  public schoolId: string;
  public academicYearId: string;

  constructor(props: ClassEntityProps) {
    super(props);
    this.name = props.name;
    this.grade = props.grade;
    this.schoolId = props.schoolId;
    this.academicYearId = props.academicYearId;
  }
}
