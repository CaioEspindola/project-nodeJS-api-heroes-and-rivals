import Hero from '../models/Hero.js'

/*Este arquivo que controla as requisições do model Hero*/

class HeroController {
  //Método para LER/LISTAR toda a lista do db
  static listarHeroes = async (_req, res) => {
    try {
      const heroes = await Hero.find().populate('rival').exec() // Inicialize a variável com um valor
      res.status(200).json(heroes)
    } catch (err) {
      console.error(err)
      res.status(500).send('Erro interno do servidor')
    }
  }
  //Método para LER/LISTAR um dos elementos por ID
  static listarHeroId = async (req, res) => {
    try {
      const id = req.params.id
      const hero = await Hero.findById(id).populate('rival', 'nome').exec()
      if (!hero) {
        return res
          .status(404)
          .send({ message: `Não foi encontrado um herói com o ID ${id}` })
      }
      res.status(200).send(hero)
    } catch (err) {
      res
        .status(500)
        .send({ message: `Erro ao buscar herói com ID ${id}: ${err.message}` })
    }
  }

  //Método para CRIAR, cadastrar, postar mais um objeto no array
  static cadastrarHero = async (req, res) => {
    try {
      let hero = await new Hero(req.body)
      hero.save()
      res.status(201).send(hero.toJSON())
    } catch (err) {
      res
        .status(500)
        .send({ message: `${err.message} Falha ao cadastrar o Heroi` })
    }
  }
  //Método para ATUALIZAR/UPDATE
  static atualizarHero = async (req, res) => {
    try {
      const id = req.params.id
      await Hero.findByIdAndUpdate(id, { $set: req.body })
      res
        .status(201)
        .send({ message: `Heroi com o id: ${id} foi atualizado com sucesso` })
    } catch (err) {
      res
        .status(500)
        .send({ message: `${err.message} falha ao atualizar Heroi` })
    }
  }
  //Método para DELETAR um objeto no array
  static deletarHero = async (req, res) => {
    try {
      const id = req.params.id
      const hero = await Hero.findByIdAndDelete(id)
      if (!hero) {
        return res.status(404).send({ message: 'Herói não encontrado.' })
      }
      res.status(200).send({ message: 'Herói removido com sucesso.' })
    } catch (err) {
      res.status(500).send({ message: 'Erro ao remover o Herói' })
    }
  }
}

export default HeroController
