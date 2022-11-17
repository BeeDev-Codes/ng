require('ts-node/register');
import * as path from 'path'
import vars from '../vars'

module.exports = {
  client: 'pg',
  connection: vars.postgres.databaseUrl,
  migrations: {
    directory: path.resolve('../db/migrations'),
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: path.resolve('../db/seeds'),
  },
}