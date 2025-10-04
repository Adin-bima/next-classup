import { NextResponse } from 'next/server';

import { HTTPErrorCode } from './HTTPCode';
import { HTTPResponse } from './HTTPResponse';
import { BackendError } from '../../domain/error-handler/BackendError';

export class ResponseFormatter {
  static error(error: BackendError) {
    const httpResponse = new HTTPResponse({ error });
    return NextResponse.json(httpResponse, {
      status: HTTPErrorCode[error.category],
    });
  }

  static success<T>(data: T) {
    const httpResponse = new HTTPResponse({ data });
    return NextResponse.json(httpResponse, { status: 200 });
  }
}
