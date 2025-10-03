import { StudentEntity } from '../entity';
import { Pagination } from '../common/Pagination';
import { SortByProps } from '../common/SortByProps';
import { PaginationProps } from '../common/PaginationProps';

export type IStudentSearchParams = {
  idsIn?: string[];
  keyword?: string;
  schoolId?: string;
  classId?: string;
  userId?: string;
  studentNumber?: string;
  pagination?: PaginationProps;
  sortBy?: SortByProps<StudentEntity>[];
};

export interface IStudentRepo {
  getById(id: string): Promise<StudentEntity>;
  create(student: StudentEntity): Promise<StudentEntity>;
  createMany(students: StudentEntity[]): Promise<StudentEntity[]>;
  update(id: string, student: StudentEntity): Promise<StudentEntity>;
  delete(id: string): Promise<void>;
  deleteMany(ids: string[]): Promise<void>;
  restore(id: string): Promise<StudentEntity>;
  restoreMany(ids: string[]): Promise<StudentEntity[]>;
  search(params: IStudentSearchParams): Promise<Pagination<StudentEntity>>;
}
