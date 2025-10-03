import { Entity, EntityProps } from './Entity';

export type SubjectEntityProps = EntityProps & {
  name: string;
  teacherId: string;
};

export class SubjectEntity extends Entity {
  public name: string;
  public teacherId: string;

  constructor(props: SubjectEntityProps) {
    super(props);
    this.name = props.name;
    this.teacherId = props.teacherId;
  }
}
