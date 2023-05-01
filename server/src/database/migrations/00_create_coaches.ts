import Knex from 'Knex';

export async function up(knex: any) {
  return knex.schema.createTable('coaches', (table: { increments: (arg0: string) => { (): any; new(): any; primary: { (): void; new(): any; }; }; string: (arg0: string) => { (): any; new(): any; notNullable: { (): void; new(): any; }; }; }) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('avatar').notNullable();
      table.string('whatsapp').notNullable();
      table.string('bio').notNullable();
    });
}

export async function down(knex: any) {
  return knex.schema.dropTable('coaches');
}