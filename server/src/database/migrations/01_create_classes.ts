import Knex from 'Knex';

export async function up(knex: any) {
  return knex.schema.createTable('classes', (table: { increments: (arg0: string) => { (): any; new(): any; primary: { (): void; new(): any; }; }; string: (arg0: string) => { (): any; new(): any; notNullable: { (): void; new(): any; }; }; integer: (arg0: string) => { (): any; new(): any; notNullable: { (): { (): any; new(): any; references: { (arg0: string): { (): any; new(): any; inTable: { (arg0: string): { (): any; new(): any; onUpdate: { (arg0: string): { (): any; new(): any; onDelete: { (arg0: string): void; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.string('cost').notNullable();

    table.integer('coach_id')
      .notNullable()
      .references('id')
      .inTable('coaches')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: any) {
  return knex.schema.dropTable('classes');
}