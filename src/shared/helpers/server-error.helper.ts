import { Error } from 'sequelize';

import { ServerError } from 'src/shared/utils/error.utils';
import { ServerErrorArgsType } from 'src/shared/types/server-error.type';
import { ServerErrorTypesEnum } from '../enums/server-error.enum';

export const createError = (error: Error, args: ServerErrorArgsType) => {
  if (Object.keys(ServerErrorTypesEnum).includes(error.name)) {
    return error;
  }

  switch (error.name) {
    case 'SequelizeForeignKeyConstraintError':
      return new ServerError('RELATION_NOT_EXISTS', args);

    case 'SequelizeUniqueConstraintError':
      return new ServerError('ALREADY_EXISTS', args);

    case 'SequelizeUniqueConstraintError':
      return new ServerError('ALREADY_EXISTS', args);

    default:
      return new ServerError('UNHANDLED_ERROR', args);
  }
};
