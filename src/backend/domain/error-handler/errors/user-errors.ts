import { ErrorCategory } from '../ErrorCategory';

export class UserErrors {
  static notFound = {
    code: 'user.not_found',
    message: 'User not found',
    category: ErrorCategory.NOT_FOUND,
  };

  static create = {
    code: 'user.create',
    message: 'User creation failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static update = {
    code: 'user.update',
    message: 'User update failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static delete = {
    code: 'user.delete',
    message: 'User deletion failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static restore = {
    code: 'user.restore',
    message: 'User restoration failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static search = {
    code: 'user.search',
    message: 'User search failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static getById = {
    code: 'user.get_by_id',
    message: 'User get by id failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static createMany = {
    code: 'user.create_many',
    message: 'User creation failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static updateMany = {
    code: 'user.update_many',
    message: 'User update failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static deleteMany = {
    code: 'user.delete_many',
    message: 'User deletion failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static restoreMany = {
    code: 'user.restore_many',
    message: 'User restoration failed',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };
}
