import { ErrorCategory } from '../ErrorCategory';

export const commonErrors = {
  notFound: {
    code: 'common.not_found',
    message: 'Not found',
    category: ErrorCategory.NOT_FOUND,
  },

  internal: {
    code: 'common.internal',
    message: 'Internal server error',
    category: ErrorCategory.INTERNAL,
  },

  invalidKey: {
    code: 'common.invalid_key',
    message: 'Invalid key',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  unprocessableEntity: {
    code: 'common.unprocessable_entity',
    message: 'Unprocessable entity',
    category: ErrorCategory.UNPROCESSABLE_ENTITY,
  },

  badRequest: {
    code: 'common.bad_request',
    message: 'Bad request',
    category: ErrorCategory.BAD_REQUEST,
  },

  unauthorized: {
    code: 'common.unauthorized',
    message: 'Unauthorized',
    category: ErrorCategory.UNAUTHORIZED,
  },

  forbidden: {
    code: 'common.forbidden',
    message: 'Forbidden',
    category: ErrorCategory.FORBIDDEN,
  },

  notImplemented: {
    code: 'common.not_implemented',
    message: 'Not implemented',
    category: ErrorCategory.NOT_IMPLEMENTED,
  },

  payloadTooLarge: {
    code: 'common.payload_too_large',
    message: 'Payload too large',
    category: ErrorCategory.PAYLOAD_TOO_LARGE,
  },

  unsupportedMediaType: {
    code: 'common.unsupported_media_type',
    message: 'Unsupported media type',
    category: ErrorCategory.UNSUPPORTED_MEDIA_TYPE,
  },

  tooManyRequests: {
    code: 'common.too_many_requests',
    message: 'Too many requests',
    category: ErrorCategory.TOO_MANY_REQUESTS,
  },

  serviceUnavailable: {
    code: 'common.service_unavailable',
    message: 'Service unavailable',
    category: ErrorCategory.SERVICE_UNAVAILABLE,
  },

  validation: {
    code: 'common.validation',
    message: 'Validation error',
    category: ErrorCategory.VALIDATION,
  },

  authentication: {
    code: 'common.authentication',
    message: 'Authentication error',
    category: ErrorCategory.AUTHENTICATION,
  },

  authorization: {
    code: 'common.authorization',
    message: 'Authorization error',
    category: ErrorCategory.AUTHORIZATION,
  },
};
