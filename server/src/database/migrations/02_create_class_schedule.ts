import Knex from 'Knex';

export async function up(knex: any) {
  return knex.schema.createTable('class_schedule', (table: { increments: (arg0: string) => { (): any; new(): any; primary: { (): void; new(): any; }; }; integer: (arg0: string) => { (): any; new(): any; notNullable: { (): { (): any; new(): any; references: { (arg0: string): { (): any; new(): any; inTable: { (arg0: string): { (): any; new(): any; onUpdate: { (arg0: string): { (): any; new(): any; onDelete: { (arg0: string): void; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => {
    table.increments('id').primary();

    table.integer('week_day').notNullable(); // 0 a 6
    table.integer('from').notNullable(); // 08:00
    table.integer('to').notNullable(); // 09:00

    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: any) {
  return knex.schema.dropTable('class_schedule');
}