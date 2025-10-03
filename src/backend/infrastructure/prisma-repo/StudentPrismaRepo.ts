import { Prisma, Student, PrismaClient } from '@prisma/client';

import { EnumGender } from '@/core/enums';
import { StudentEntity } from '@/backend/domain/entity';
import { Pagination } from '@/backend/domain/common/Pagination';
import { BackendError } from '@/backend/domain/error-handler/BackendError';
import { CommonErrors } from '@/backend/domain/error-handler/errors/common-errors';
import { StudentErrors } from '@/backend/domain/error-handler/errors/student-errors';
import {
  DEFAULT_SORT_BY,
  DEFAULT_PAGINATION,
} from '@/backend/domain/helper/constant';
import {
  IStudentRepo,
  IStudentSearchParams,
} from '@/backend/domain/repo/IStudentRepo';

export class StudentPrismaRepo implements IStudentRepo {
  constructor(
    private readonly prismaClient: PrismaClient | Prisma.TransactionClient
  ) {}

  private mapStudentToEntity(student: Student): StudentEntity {
    return new StudentEntity({
      id: student.id,
      gender: student.gender as EnumGender,
      studentNumber: student.student_number,
      userId: student.user_id,
      schoolId: student.school_id,
      classId: student.class_id || undefined,
      createdAt: student.created_at,
      updatedAt: student.updated_at,
      deletedAt: student.deleted_at || undefined,
    });
  }

  private mapStudentToPrisma(student: StudentEntity): Student {
    return {
      id: student.id,
      gender: student.gender,
      student_number: student.studentNumber,
      user_id: student.userId,
      school_id: student.schoolId,
      class_id: student.classId || null,
      created_at: student.createdAt,
      updated_at: student.updatedAt,
      deleted_at: student.deletedAt || null,
    };
  }

  private mapEntityKeyToPrismaKey(key: keyof StudentEntity): keyof Student {
    switch (key) {
      case 'gender':
        return 'gender';
      case 'studentNumber':
        return 'student_number';
      case 'userId':
        return 'user_id';
      case 'schoolId':
        return 'school_id';
      case 'classId':
        return 'class_id';
      case 'createdAt':
        return 'created_at';
      case 'updatedAt':
        return 'updated_at';
      case 'deletedAt':
        return 'deleted_at';
      default:
        throw new BackendError(CommonErrors.invalidKey);
    }
  }

  async getById(id: string): Promise<StudentEntity> {
    const student = await this.prismaClient.student.findUnique({
      where: { id },
    });
    if (!student) {
      throw new BackendError(StudentErrors.notFound);
    }
    return this.mapStudentToEntity(student);
  }

  async create(student: StudentEntity): Promise<StudentEntity> {
    try {
      const createdStudent = await this.prismaClient.student.create({
        data: this.mapStudentToPrisma(student),
      });
      return this.mapStudentToEntity(createdStudent);
    } catch (error) {
      throw new BackendError(StudentErrors.create);
    }
  }

  async createMany(students: StudentEntity[]): Promise<StudentEntity[]> {
    try {
      await this.prismaClient.student.createMany({
        data: students.map((student) => this.mapStudentToPrisma(student)),
      });
      return students;
    } catch (error) {
      throw new BackendError(StudentErrors.createMany);
    }
  }

  async update(id: string, student: StudentEntity): Promise<StudentEntity> {
    try {
      const updatedStudent = await this.prismaClient.student.update({
        where: { id },
        data: this.mapStudentToPrisma(student),
      });
      return this.mapStudentToEntity(updatedStudent);
    } catch (error) {
      throw new BackendError(StudentErrors.update);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.prismaClient.student.update({
        where: { id },
        data: { deleted_at: new Date() },
      });
    } catch (error) {
      throw new BackendError(StudentErrors.delete);
    }
  }

  async deleteMany(ids: string[]): Promise<void> {
    try {
      await this.prismaClient.student.updateMany({
        where: { id: { in: ids } },
        data: { deleted_at: new Date() },
      });
    } catch (error) {
      throw new BackendError(StudentErrors.deleteMany);
    }
  }

  async restore(id: string): Promise<StudentEntity> {
    try {
      const restoredStudent = await this.prismaClient.student.update({
        where: { id },
        data: { deleted_at: null },
      });
      return this.mapStudentToEntity(restoredStudent);
    } catch (error) {
      throw new BackendError(StudentErrors.restore);
    }
  }

  async restoreMany(ids: string[]): Promise<StudentEntity[]> {
    try {
      await this.prismaClient.student.updateMany({
        where: { id: { in: ids } },
        data: { deleted_at: null },
      });
      const students = await this.prismaClient.student.findMany({
        where: { id: { in: ids } },
      });
      return students.map((student) => this.mapStudentToEntity(student));
    } catch (error) {
      throw new BackendError(StudentErrors.restoreMany);
    }
  }

  async search(
    params: IStudentSearchParams
  ): Promise<Pagination<StudentEntity>> {
    try {
      const {
        idsIn,
        schoolId,
        classId,
        userId,
        studentNumber,
        pagination = DEFAULT_PAGINATION,
        sortBy = [DEFAULT_SORT_BY],
      } = params;

      const sortByPrisma = sortBy?.map((sort) => ({
        [this.mapEntityKeyToPrismaKey(sort.field)]: sort.order,
      }));

      const students = await this.prismaClient.student.findMany({
        where: {
          id: { in: idsIn },
          school_id: schoolId,
          class_id: classId,
          user_id: userId,
          student_number: studentNumber,
        },
        skip: pagination.page * pagination.limit,
        take: pagination.limit,
        orderBy: sortByPrisma,
      });
      const studentsEntities = students.map((student) =>
        this.mapStudentToEntity(student)
      );
      return new Pagination<StudentEntity>({
        page: pagination.page,
        limit: pagination.limit,
        count: students.length,
        items: studentsEntities,
      });
    } catch (error) {
      throw new BackendError(StudentErrors.search);
    }
  }
}
