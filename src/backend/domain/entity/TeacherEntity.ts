import { Entity, EntityProps } from './Entity';

export type TeacherEntityProps = EntityProps & {
  userId: string;
  schoolId: string;
};

export class TeacherEntity extends Entity {
  public userId: string;
  public schoolId: string;

  constructor(props: TeacherEntityProps) {
    super(props);
    this.userId = props.userId;
    this.schoolId = props.schoolId;
  }
}
