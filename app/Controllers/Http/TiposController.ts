import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Tipo from 'App/Models/Tipo'

export default class TiposController {
  //List all
  public async index({}: HttpContextContract) {
    const TipoAuto = await Tipo.all()
    return TipoAuto
  }

  //Display a form to create a post
  public async create({}: HttpContextContract) {

  }

  //Handle post creation form request
  public async store({}: HttpContextContract) {
    const TipoAuto = new Tipo()

    TipoAuto.nombre = "Sedan" 

    await TipoAuto.save()
    console.log(TipoAuto.$isPersisted)
    return TipoAuto
  }

  //Return a single post
  public async show({}: HttpContextContract) {
    
    try{
      const TipoAuto = await Tipo.find(2)
      return TipoAuto
    }
    catch(error){
      return error
    }
  }

  ///posts/:id/edit
  public async edit({}: HttpContextContract) {

  }

  //Handle post update form submission
  public async update({}: HttpContextContract) {
    const TipoAuto = await Tipo.findOrFail(1)
    TipoAuto.nombre = "Suv"
    await TipoAuto.save()
    return TipoAuto
  }

  //Delete post
  public async destroy({}: HttpContextContract) {
    const TipoAuto = await Tipo.findOrFail(1)
    await TipoAuto.delete()
    return TipoAuto
  }

  public async sfindBy({}: HttpContextContract){
    // const TipoAuto = await Tipo.query().where("nombre", "Sedan")
    // return TipoAuto

    const Tipo = await Database
    .rawQuery('select * from users where id = ?', [1])
    return Tipo
  }
}
