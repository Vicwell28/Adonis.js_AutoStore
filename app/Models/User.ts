import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Orden from "App/Models/Orden"
import CarritoCompra from "App/Models/CarritoCompra"

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Orden, {
    foreignKey: 'userID',
    localKey: 'id',
  })
  public Orden: HasMany<typeof Orden>

  @hasMany(() => CarritoCompra, {
    foreignKey: 'userID',
    localKey: 'id',
  })
  public CarritoCompra: HasMany<typeof CarritoCompra>
}
