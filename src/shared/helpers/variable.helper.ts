import { isDefined } from 'class-validator';

export const setWithDefault = <T>(value: T | null | undefined, defaultValue: Exclude<T, undefined | null>): T => {
  if (isDefined(value)) {
    return value;
  }

  return defaultValue;
};
