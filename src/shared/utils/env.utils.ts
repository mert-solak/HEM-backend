import * as envLoader from 'load-env-var';

export const env = {
  productionMode: envLoader.loadString('NODE_ENV') === 'production' ? true : false,
  port: envLoader.loadNumber('PORT'),
  host: envLoader.loadString('HOST'),
  dbHost: envLoader.loadString('DB_HOST'),
  dbPort: envLoader.loadNumber('DB_PORT'),
  dbName: envLoader.loadString('DB_NAME'),
  dbUserName: envLoader.loadString('DB_USERNAME'),
  dbPassword: envLoader.loadString('DB_PASSWORD'),
};
