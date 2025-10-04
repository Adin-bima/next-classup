import { ErrorCategory } from '../ErrorCategory';

export const studentErrors = {
  notFound: {
    code: 'student.not_found',
    message: 'Student not found',
    category: ErrorCategory.NOT_FOUND,
  },

  create: {
    code: 'student.create',
    message: 'Student creation failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  update: {
    code: 'student.update',
    message: 'Student update failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  delete: {
    code: 'student.delete',
    message: 'Student deletion failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  restore: {
    code: 'student.restore',
    message: 'Student restoration failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  search: {
    code: 'student.search',
    message: 'Student search failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  getById: {
    code: 'student.get_by_id',
    message: 'Student get by id failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  createMany: {
    code: 'student.create_many',
    message: 'Student creation failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  updateMany: {
    code: 'student.update_many',
    message: 'Student update failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  deleteMany: {
    code: 'student.delete_many',
    message: 'Student deletion failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  restoreMany: {
    code: 'student.restore_many',
    message: 'Student restoration failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },
};
