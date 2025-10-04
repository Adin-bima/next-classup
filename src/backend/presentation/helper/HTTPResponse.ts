import { BackendError } from '../../domain/error-handler/BackendError';
import { SUCCESS_CODE, SUCCESS_MESSAGE } from '../../domain/helper/constant';

type Props<T> = {
  error?: BackendError;
  data?: T;
};

export class HTTPResponse<T> {
  code: string;
  message: string;
  error?: BackendError;
  data?: T;

  constructor({ error, data }: Props<T>) {
    if (error) {
      this.code = error.code;
      this.message = error.message;
      this.error = error;
      this.data = data;
      return;
    }
    this.code = SUCCESS_CODE;
    this.message = SUCCESS_MESSAGE;
    this.error = undefined;
    this.data = data;
  }
}
