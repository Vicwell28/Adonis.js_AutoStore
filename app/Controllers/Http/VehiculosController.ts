import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VehiculosController {
  public async index({request}: HttpContextContract) {
    const var1 = request
    return var1.toJSON()
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({request}: HttpContextContract) {
    return request.post()
   
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
