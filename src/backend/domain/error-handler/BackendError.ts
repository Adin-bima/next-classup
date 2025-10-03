import { ErrorCategory } from './ErrorCategory';

export type BackendErrorProps = {
  code: string;
  message: string;
  category?: ErrorCategory;
};

export class BackendError extends Error {
  public code: string;
  public category: ErrorCategory;

  constructor({ code, message, category }: BackendErrorProps) {
    super(message);
    this.name = 'BackendError';
    this.code = code;
    this.category = category || ErrorCategory.UNKNOWN;
    Error.captureStackTrace(this, this.constructor);
  }
}
