import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Vehiculo from "App/Models/Vehiculo"
import Orden from "App/Models/Orden"

export default class DetalleOrden extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => Vehiculo, {
    foreignKey: 'vehiculosID',
  })
  public Vehiculos: BelongsTo<typeof Vehiculo>

  
  @belongsTo(() => Orden, {
    foreignKey: 'ordensID',
  })
  public Orden: BelongsTo<typeof Orden>
}
