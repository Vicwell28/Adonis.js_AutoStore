import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Orden from "App/Models/Orden"
import CarritoCompra from "App/Models/CarritoCompra"

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombres: string

  @column()
  public apellidos: string

  @column()
  public username: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public token: string



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Orden, {
    foreignKey: 'users_id',
    localKey: 'id',
  })
  public Orden: HasMany<typeof Orden>

  @hasMany(() => CarritoCompra, {
    foreignKey: 'users_id',
    localKey: 'id',
  })
  public CarritoCompra: HasMany<typeof CarritoCompra>
}
