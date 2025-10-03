import HTTPResponse from '../../domain/common/HTTPResponse';
import { BackendError } from '../../domain/error-handler/BackendError';

export const responseFormatter = <T>(data: T, error?: BackendError) => {
  if (error) {
    return new HTTPResponse({
      data,
      error,
    });
  }
  return new HTTPResponse({
    data,
  });
};
