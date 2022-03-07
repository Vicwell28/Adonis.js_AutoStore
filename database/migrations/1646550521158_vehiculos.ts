import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vehiculos extends BaseSchema {
  protected tableName = 'vehiculos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('modelosID').unsigned().references('id').inTable('modelos')
      table.integer('tiposID').unsigned().references('id').inTable('tipos')
      table.integer('colorsID').unsigned().references('id').inTable('colors')
      table.integer('transmicionsID').unsigned().references('id').inTable('transmicions')
      table.integer('combustiblesID').unsigned().references('id').inTable('combustibles')
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
