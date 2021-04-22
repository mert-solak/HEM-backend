import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.status || exception.statusCode || 500;

    const responseJSON = {
      method: request.method,
      statusCode: status,
      route: request.route,
      path: request.url,
      error: exception,
    };

    response.status(status).json(exception);
  }
}
