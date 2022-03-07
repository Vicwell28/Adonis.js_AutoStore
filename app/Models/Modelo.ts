import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Vehiculo from "App/Models/Vehiculo"
import Marca from "App/Models/Marca"

export default class Modelo extends BaseModel {
  
  public static table = "modelos"

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column({ columnName: 'MarcaID' })
  public marcaID: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Vehiculo, {
    foreignKey: 'modeloID',
    localKey: 'id',
  })
  public Vehiculos: HasMany<typeof Vehiculo>

  @belongsTo(() => Marca, {
    foreignKey: 'MarcaID',
  })
  public Marcas: BelongsTo<typeof Marca>
}
