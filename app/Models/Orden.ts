import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from "App/Models/User"
import DetalleOrden from "App/Models/DetalleOrden"

export default class Orden extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.date({
    serialize: (value) => value.toFormat('dd LLL yyyy')
  })
  public dob: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'userID',
  })
  public User: BelongsTo<typeof User>

  @hasMany(() => DetalleOrden, {
    foreignKey: 'ordensID',
  })
  public DetalleOrden: HasMany<typeof DetalleOrden>

  
}
