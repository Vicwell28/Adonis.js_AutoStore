/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import TiposController from 'App/Controllers/Http/TiposController'

Route.post('/', async (request) => {
  return request
})

Route.resource("/User", "UsersController")
Route.resource("/Marca", "MarcasController")
Route.resource("/Modelo", "ModelosController")
Route.resource("/Tipo", "TiposController")
Route.resource("/Color", "ColorsController")
Route.resource("/Transmicion", "TransmicionsController")
Route.resource("/Combustible", "CombustiblesController")
Route.resource("/Vehiculo", "VehiculosController")
Route.resource("/CarritoCompra", "CarritoComprasController")
Route.resource("/Orden", "OrdensController")
Route.resource("/DetalleOrden", "DetalleOrdensController")
Route.resource("/ImagenVehiculo", "ImgVehiculosController")

//Route.get("/Tipo/Buscar/:Modelo", "TiposController.sfindBy")

