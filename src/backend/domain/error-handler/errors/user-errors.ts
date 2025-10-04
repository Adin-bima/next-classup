import { ErrorCategory } from '../ErrorCategory';

export const userErrors = {
  notFound: {
    code: 'user.not_found',
    message: 'User not found',
    category: ErrorCategory.NOT_FOUND,
  },

  create: {
    code: 'user.create',
    message: 'User creation failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  update: {
    code: 'user.update',
    message: 'User update failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  delete: {
    code: 'user.delete',
    message: 'User deletion failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  restore: {
    code: 'user.restore',
    message: 'User restoration failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  search: {
    code: 'user.search',
    message: 'User search failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  getById: {
    code: 'user.get_by_id',
    message: 'User get by id failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  createMany: {
    code: 'user.create_many',
    message: 'User creation failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  updateMany: {
    code: 'user.update_many',
    message: 'User update failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  deleteMany: {
    code: 'user.delete_many',
    message: 'User deletion failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  restoreMany: {
    code: 'user.restore_many',
    message: 'User restoration failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },
};
