import knex, { Knex } from 'knex'
const connection = require('./knexfile')

export const knexApi: Knex = knex(connection)