import { isDefined } from 'class-validator';

export const returnIfDefined = <T>(value: T | null | undefined, defaultValue: Exclude<T, undefined | null>): T => {
  if (isDefined(value)) {
    return value;
  }

  return defaultValue;
};
