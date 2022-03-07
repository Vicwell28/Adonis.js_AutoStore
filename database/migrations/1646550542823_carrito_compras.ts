import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CarritoCompras extends BaseSchema {
  protected tableName = 'carrito_compras'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('vehiculosID').unsigned().references('id').inTable('vehiculos')
      table.integer('userID').unsigned().references('id').inTable('users')
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
