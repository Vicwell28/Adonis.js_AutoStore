import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombres', 100).notNullable()
      table.string('apellidos', 100).notNullable()
      table.string('username').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('token').nullable()
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
