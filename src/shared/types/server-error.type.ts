import { ServerErrorTypesEnum } from 'src/shared/enums/server-error.enum';

export type ServerErrorType = keyof typeof ServerErrorTypesEnum;

export type ServerErrorArgsType = {
  moduleName?: string;
  relationalModule?: string;
  [key: string]: string;
};
