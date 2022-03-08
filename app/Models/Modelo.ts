import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Vehiculo from "App/Models/Vehiculo"
import Marca from "App/Models/Marca"

export default class Modelo extends BaseModel {
  
  public static table = "modelos"

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre_modelo: string

  @column({ columnName: 'marcas_id' })
  public marca_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => Marca, {
    foreignKey: 'marcas_id'
  })
  public marca: BelongsTo<typeof Marca>

  @hasMany(() => Vehiculo, {
    foreignKey: 'modelos_id',
    localKey: 'id',
  })

  public vehiculo: HasMany<typeof Vehiculo>

}
