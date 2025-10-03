import { ErrorCategory } from '../ErrorCategory';

export class CommonErrors {
  static notFound = {
    code: 'common.not_found',
    message: 'Not found',
    category: ErrorCategory.NOT_FOUND,
  };

  static internal = {
    code: 'common.internal',
    message: 'Internal server error',
    category: ErrorCategory.INTERNAL,
  };

  static invalidKey = {
    code: 'common.invalid_key',
    message: 'Invalid key',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static unprocessableEntity = {
    code: 'common.unprocessable_entity',
    message: 'Unprocessable entity',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  };

  static badRequest = {
    code: 'common.bad_request',
    message: 'Bad request',
    category: ErrorCategory.BAD_REQUEST,
  };

  static unauthorized = {
    code: 'common.unauthorized',
    message: 'Unauthorized',
    category: ErrorCategory.UNAUTHORIZED,
  };

  static forbidden = {
    code: 'common.forbidden',
    message: 'Forbidden',
    category: ErrorCategory.FORBIDDEN,
  };

  static notImplemented = {
    code: 'common.not_implemented',
    message: 'Not implemented',
    category: ErrorCategory.NOT_IMPLEMENTED,
  };

  static preconditionFailed = {
    code: 'common.precondition_failed',
    message: 'Precondition failed',
    category: ErrorCategory.PRECONDITION_FAILED,
  };

  static payloadTooLarge = {
    code: 'common.payload_too_large',
    message: 'Payload too large',
    category: ErrorCategory.PAYLOAD_TOO_LARGE,
  };

  static unsupportedMediaType = {
    code: 'common.unsupported_media_type',
    message: 'Unsupported media type',
    category: ErrorCategory.UNSUPPORTED_MEDIA_TYPE,
  };

  static tooManyRequests = {
    code: 'common.too_many_requests',
    message: 'Too many requests',
    category: ErrorCategory.TOO_MANY_REQUESTS,
  };

  static conflict = {
    code: 'common.conflict',
    message: 'Conflict',
    category: ErrorCategory.CONFLICT,
  };

  static serviceUnavailable = {
    code: 'common.service_unavailable',
    message: 'Service unavailable',
    category: ErrorCategory.SERVICE_UNAVAILABLE,
  };

  static validation = {
    code: 'common.validation',
    message: 'Validation error',
    category: ErrorCategory.VALIDATION,
  };

  static authentication = {
    code: 'common.authentication',
    message: 'Authentication error',
    category: ErrorCategory.AUTHENTICATION,
  };

  static authorization = {
    code: 'common.authorization',
    message: 'Authorization error',
    category: ErrorCategory.AUTHORIZATION,
  };
}
