import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Marca from "App/mOdels/Marca"

export default class MarcasController {
  public async index({}: HttpContextContract) {
    const marca = await Marca.all()
    return marca
  }

  public async create({}: HttpContextContract) {

  }

  public async store({}: HttpContextContract) {
    const marca = new Marca()

    marca.nombre = "Ford"

    await marca.save()
    return marca

  }

  public async show({}: HttpContextContract) {
    const marca = await Marca.find(1)
    return marca
  }

  public async edit({}: HttpContextContract) {

  }

  public async update({}: HttpContextContract) {
    const marca = await Marca.findOrFail(1)
    await marca.delete()
    return marca
  }

  public async destroy({}: HttpContextContract) {

  }
}
