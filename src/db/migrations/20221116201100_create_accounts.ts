import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Accounts', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.integer('balance');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('test_setup');
}

