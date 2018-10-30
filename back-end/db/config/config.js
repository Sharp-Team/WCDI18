require('dotenv').config()

module.exports = {
  development: {
    username: process.env.CDI_USERNAME,
    password: process.env.CDI_PASSWORD,
    database: process.env.CDI_DB_NAME,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: process.env.CDI_USERNAME,
    password: process.env.CDI_PASSWORD,
    database: process.env.CDI_DB_NAME,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.CDI_USERNAME,
    password: process.env.CDI_PASSWORD,
    database: process.env.CDI_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'mysql'
  }
}
