const {
  // DB_HOST = 'localhost',
  // DB_PORT = '5432',
  // DB_USER = 'postgres',
  // DB_PASS = '',
  // DB_NAME = 'example_lux_heroku'
  DATABASE_URL = 'postgres://postgres@localhost:5432/example_lux_heroku'
} = process.env;

export default {
  development: {
    driver: 'pg',
    // database: DB_NAME,
    // host: DB_HOST,
    // port: DB_PORT,
    // username: DB_USER,
    // password: DB_PASS
    connectionString: DATABASE_URL
  },

  test: {
    driver: 'sqlite3',
    database: 'api_lux_test'
  },

  production: {
    driver: 'pg',
    // database: DB_NAME,
    // host: DB_HOST,
    // port: DB_PORT,
    // username: DB_USER,
    // password: DB_PASS
    connectionString: DATABASE_URL
  }
};
