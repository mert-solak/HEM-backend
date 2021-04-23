import * as _ from 'lodash';

import { ValidationError } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';

import { ServerError } from 'src/shared/utils/error.utils';

export const validationPipe = new ValidationPipe({
  transform: true,
  exceptionFactory: (validationErrors: ValidationError[]) => {
    const errorMessages: string[] = [];

    validationErrors.forEach((validationError: ValidationError) => {
      console.log(validationError);
      console.log(_.values(validationError.constraints));
      errorMessages.push(..._.values(validationError.constraints));
    });

    return new ServerError('VALIDATION_ERROR', { messages: errorMessages });
  },
});
