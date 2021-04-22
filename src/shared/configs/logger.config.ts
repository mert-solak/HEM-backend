import * as moment from 'moment';
import { LogLevel } from '@nestjs/common';

import { env } from 'src/shared/utils/env.utils';

export const loggerConfig: {
  loggerLevel: LogLevel[];
  loggerPath: string;
} = {
  loggerLevel: env.productionMode ? ['warn', 'error'] : ['log', 'debug', 'error', 'warn', 'verbose'],
  loggerPath: `logs/${moment().format('YYYY-MM-DD_HH:mm')}_log.txt`,
};
