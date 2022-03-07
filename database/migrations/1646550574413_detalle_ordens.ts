import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DetalleOrdens extends BaseSchema {
  protected tableName = 'detalle_ordens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('ordensID').unsigned().references('id').inTable('ordens')
      table.integer('vehiculosID').unsigned().references('id').inTable('vehiculos')
      table.float('precio', 8, 2)
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
