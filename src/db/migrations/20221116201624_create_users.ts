import knex, { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Users', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('username', 150).notNullable().unique();
    table.string('password', 150).notNullable();
    table.integer('accountId').unique().unsigned();
    table.foreign('accountId')
      .references('Accounts.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Account')
}

