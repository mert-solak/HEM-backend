import { ServerErrorType, ServerErrorArgsType } from 'src/shared/types/server-error.type';
import { ServerErrorTypesEnum } from 'src/shared/enums/server-error.enum';
import { setWithDefault } from 'src/shared/helpers/variable.helper';

export class ServerError extends Error {
  readonly name: string;
  readonly message: string = 'Internal Server Error';
  readonly errorCode: number;
  readonly statusCode: number = 500;

  constructor(type: ServerErrorType, args: ServerErrorArgsType, statusCode?: number) {
    super();

    this.name = type;
    this.errorCode = ServerErrorTypesEnum[type];

    switch (type) {
      case 'ALREADY_EXISTS':
        this.message = `${setWithDefault(args.moduleName, 'data')} already exists`;
        this.statusCode = setWithDefault(statusCode, 409);
        break;

      case 'RELATION_NOT_EXISTS':
        this.message = `${setWithDefault(args.relationalModule, 'data')} not exists`;
        this.statusCode = setWithDefault(statusCode, 409);
        break;

      case 'VALIDATION_ERROR':
        this.message = args.messages.join(',');
        this.statusCode = setWithDefault(statusCode, 400);
        break;

      default:
    }
  }
}
