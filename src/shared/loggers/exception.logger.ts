import pino from 'pino';
import { join } from 'path';

import { paths } from 'src/shared/utils/path.utils';
import { loggerConfig } from 'src/shared/configs/logger.config';
import { env } from 'src/shared/utils/env.utils';

export default pino(
  {
    level: 'debug',
    prettyPrint: {
      ignore: 'level,pid,hostname',
      levelFirst: true,
      colorize: true,
    },
  },
  env.productionMode ? pino.destination(join(paths.basePath, loggerConfig.loggerPath)) : undefined,
);
