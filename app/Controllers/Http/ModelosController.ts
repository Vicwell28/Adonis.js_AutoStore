import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Modelo from "App/Models/Modelo"
import { schema } from '@ioc:Adonis/Core/Validator'


export default class ModelosController {
  public async index({ response }: HttpContextContract) {
    try{
      const modelo = await Modelo
      .query()
      .preload('marca')

      const modeloJSON = modelo.map((modelo) => modelo.serialize())

      response.status(200).json({
        message: 'Successfully created a new model.',
        data: modeloJSON
      })
    }
    catch(error){
      response.status(404).json({
        message : "Failing created a new model."
      })
    }
    
  }

  public async create({}: HttpContextContract) {

  }

  public async store({request, response}: HttpContextContract) {
    try {
      const modelo = new Modelo()

      modelo.nombre = request.input("Nombre")
      modelo.marcaID = request.input("Marca")
      modelo.save()
      
      response.status(200).json({
        message: 'Successfully created a new model.',
        data: modelo
      })

    } catch (error) {
      response.status(404).json({
        message : "Failing created a new model."
      })
    }
  }

  public async show({}: HttpContextContract) {
    const modelo = await Modelo.find(1)
    return modelo
  }

  public async edit({}: HttpContextContract) {

  }

  public async update({}: HttpContextContract) {
    const modelo = await Modelo.findOrFail(1)
    await modelo.delete()
    return modelo
  }

  public async destroy({}: HttpContextContract) {

  }
}
