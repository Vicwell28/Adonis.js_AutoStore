import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
export default class UsersController {
  public async index({ response }: HttpContextContract) {
    try{
      const user = await User.all()

      const userJSON = user.map((user) => user.serialize())

      response.status(200).json({
        message: 'Satifactorio. Se encontro todos los User.',
        data: userJSON
      })
    }
    catch(error){
      response.status(404).json({
        message : "ERROR. No se encontro ningun User."
      })
    }
    
  }

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {
    try {
      const user = new User()

      user.nombres = request.input("Nombre")
      user.apellidos = request.input("Apellidos")
      user.username = request.input("Username")
      user.email = request.input("Email")
      user.password = request.input("Password")
      user.token = request.input("Token")

      user.save()
      const userJSON = user.serialize()
      
      response.status(200).json({
        message: 'Satifactorio. Creaste un User nuevo.',
        data: userJSON
      })

    } catch (error) {
      response.status(400).json({
        message : "ERROR. No has creado User nuevo."
      })
    }
  }

  public async show({params, response}: HttpContextContract) {
    try{
      const user = await User.findOrFail(params.id)
      const userJSON = user.serialize()

      response.status(200).json({
        message: 'Satifactorio. Se Encotnro el User.',
        data : userJSON
      })
    }
    catch(error){
      response.status(400).json({
        message : "ERROR. Nos se ha encontrado User."
      })
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({request,params, response}: HttpContextContract) {
    try{
      const user = await User.findOrFail(params.id)
      user.nombres = request.input("Nombre")
      user.apellidos = request.input("Apellidos")
      user.username = request.input("Username")
      user.email = request.input("Email")
      user.password = request.input("Password")
      user.token = request.input("Token")
      user.save()
      const userJSON = user.serialize()
      
      response.status(200).json({
        message: 'Satifactorio. Se encontro y actualizaste uno User.',
        data : userJSON
      })
    }
    catch(error){
      response.status(400).json({
        message : "ERROR. No se encontro y no se actualizo uno User."
      })
    }
  }

  public async destroy({params, response}: HttpContextContract) {
    try{
      const user = await User.findOrFail(params.id)
      await user.delete()
      
      response.status(200).json({
        message: 'Satifactorio. Has elimiado un User.',
        data: user
      })
    }
    catch{
      response.status(200).json({
        message : "ERROR. No has eliminado un User."
      })
    }
  }
}
