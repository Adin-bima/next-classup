import { ErrorCategory } from '../ErrorCategory';

export class StudentErrors {
  static notFound = {
    code: 'student.not_found',
    message: 'Student not found',
    category: ErrorCategory.NOT_FOUND,
  };

  static create = {
    code: 'student.create',
    message: 'Student creation failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static update = {
    code: 'student.update',
    message: 'Student update failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static delete = {
    code: 'student.delete',
    message: 'Student deletion failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static restore = {
    code: 'student.restore',
    message: 'Student restoration failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static search = {
    code: 'student.search',
    message: 'Student search failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static getById = {
    code: 'student.get_by_id',
    message: 'Student get by id failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static createMany = {
    code: 'student.create_many',
    message: 'Student creation failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static updateMany = {
    code: 'student.update_many',
    message: 'Student update failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static deleteMany = {
    code: 'student.delete_many',
    message: 'Student deletion failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static restoreMany = {
    code: 'student.restore_many',
    message: 'Student restoration failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };
}
