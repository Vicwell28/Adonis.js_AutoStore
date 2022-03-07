import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Color from "App/Models/Color"
import Combustible from "App/Models/Combustible"
import Modelo from "App/Models/Modelo"
import Tipo from "App/Models/Tipo"
import Transmicion from "App/Models/Transmicion"
import imgVehiculo from "App/Models/ImgVehiculo"
import DetalleOrden from "App/Models/DetalleOrden"
import CarritoCompra from "App/MOdels/CarritoCompra"

export default class Vehiculo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  //BELONGS TO
  
  @belongsTo(() => Color, {
    foreignKey: 'colorID',
  })
  public Color: BelongsTo<typeof Color>
  
  @belongsTo(() => Tipo, {
    foreignKey: 'tipoID',
  })
  public Tipo: BelongsTo<typeof Tipo>

  @belongsTo(() => Combustible, {
    foreignKey: 'combustibleID',
  })
  public Combustiblec: BelongsTo<typeof Combustible>

  @belongsTo(() => Modelo, {
    foreignKey: 'modeloID',
  })
  public Modelo: BelongsTo<typeof Modelo>

  @belongsTo(() => Transmicion, {
    foreignKey: 'transmicionID',
  })
  public Transmicion: BelongsTo<typeof Transmicion>

  //HAS MANY

  @hasMany(() => imgVehiculo, {
    foreignKey: 'vehiculosID',
    localKey: 'id',
  })
  public imgVehiculo: HasMany<typeof imgVehiculo>

  @hasMany(() => CarritoCompra, {
    foreignKey: 'vehiculosID',
    localKey: 'id',
  })
  public CarritoCompra: HasMany<typeof CarritoCompra>

  @hasMany(() => DetalleOrden, {
    foreignKey: 'vehiculosID',
    localKey: 'id',
  })
  public DetalleOrden: HasMany<typeof DetalleOrden>


}
