import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vehiculos extends BaseSchema {
  protected tableName = 'vehiculos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('modelos_id').unsigned().references('id').inTable('modelos')
      table.integer('tipos_id').unsigned().references('id').inTable('tipos')
      table.integer('colors_id').unsigned().references('id').inTable('colors')
      table.integer('transmicions_id').unsigned().references('id').inTable('transmicions')
      table.integer('combustibles_id').unsigned().references('id').inTable('combustibles')
      table.float('precio', 8, 2).notNullable()
      table.integer('kilometraje').notNullable()
      table.date('Ano').notNullable()
      table.integer('puertas').notNullable()
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
