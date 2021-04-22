import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';

import exceptionLogger from 'src/shared/loggers/exception.logger';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const statusCode = exception.status || exception.statusCode || 500;
    const errorCode = exception.errorCode || -1;

    const log = {
      method: request.method,
      path: request.url,
      error: exception,
      statusCode,
      errorCode,
    };

    exceptionLogger.debug(log);

    response.status(statusCode).json(exception);
  }
}
