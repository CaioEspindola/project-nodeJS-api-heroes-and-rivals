import Rival from '../models/Rival.js'

/*Este arquivo que controla as requisições do model Rival*/

class RivalController {
  //Método para LER/LISTAR toda a lista do db
  static listarRivais = async (_req, res) => {
    try {
      const rivais = await Rival.find().populate('rival').exec() // Inicialize a variável com um valor
      res.status(200).json(rivais)
    } catch (err) {
      console.error(err)
      res.status(500).send('Erro interno do servidor')
    }
  }
  //Método para LER/LISTAR um dos elementos por ID
  static listarRivalId = async (req, res) => {
    try {
      const id = req.params.id
      const rival = await Rival.findById(id)
      if (!rival) {
        return res
          .status(404)
          .send({ message: `Não foi encontrado um rival com o ID ${id}` })
      }
      res.status(200).send(rival)
    } catch (err) {
      res
        .status(500)
        .send({ message: `Erro ao buscar rival com ID ${id}: ${err.message}` })
    }
  }

  //Método para CRIAR, cadastrar, postar mais um objeto no array
  static cadastrarRival = async (req, res) => {
    try {
      let rival = await new Rival(req.body)
      rival.save()
      res.status(201).send(rival.toJSON())
    } catch (err) {
      res
        .status(500)
        .send({ message: `${err.message} falha ao cadastrar o Rival` })
    }
  }
  //Método para ATUALIZAR/UPDATE
  static atualizarRival = async (req, res) => {
    try {
      const id = req.params.id
      await Rival.findByIdAndUpdate(id, { $set: req.body })
      res
        .status(201)
        .send({ message: `Rival com o id: ${id} foi atualizado com sucesso` })
    } catch (err) {
      res
        .status(500)
        .send({ message: `${err.message} falha ao atualizar Rival` })
    }
  }
  //Método para DELETAR um objeto no array
  static deletarRival = async (req, res) => {
    try {
      const id = req.params.id
      const rival = await Rival.findByIdAndDelete(id)
      if (!rival) {
        return res.status(404).send({ message: 'Rival não encontrado.' })
      }
      res.status(200).send({ message: 'Herói removido com sucesso.' })
    } catch (err) {
      res.status(500).send({ message: 'Erro ao remover Rival' })
    }
  }
}

export default RivalController
