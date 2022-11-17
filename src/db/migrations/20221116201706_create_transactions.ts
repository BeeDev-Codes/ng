import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Transactions', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.integer('debitedAccountId');
    table.integer('creditedAccountId');
    table.integer('value');
    table.timestamps(true, true);

    table.foreign('debitedAccountId')
        .references('Accounts.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    table.foreign('creditedAccountId')
      .references('Accounts.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
   });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Transactions')
}