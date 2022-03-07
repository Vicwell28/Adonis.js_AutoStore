import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Modelo from "App/Models/Modelo"

export default class ModelosController {
  public async index({}: HttpContextContract) {
    // const modelo = await Modelo.all()
    // return modelo
  }

  public async create({}: HttpContextContract) {

  }

  public async store({}: HttpContextContract) {
    const modelo = new Modelo()

    modelo.nombre = "X3"

    modelo.marcaID = 1

    await modelo.save()
    return modelo
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
