import * as envLoader from 'load-env-var';

import { LogLevel } from '@nestjs/common';

export const loggerConfig: {
  loggerLevel: LogLevel[];
} = {
  loggerLevel:
    envLoader.loadString('NODE_ENV') === 'production'
      ? ['warn', 'error']
      : ['log', 'debug', 'error', 'warn', 'verbose'],
};
