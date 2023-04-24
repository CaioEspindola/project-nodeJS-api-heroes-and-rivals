import express from 'express'
import HeroController from '../controller/heroesController.js'

const router = express.Router()

router
  .get('/heroes', HeroController.listarHeroes)
  .get('/heroes/:id', HeroController.listarHeroId)
  .post('/heroes', HeroController.cadastrarHero)
  .put('/heroes/:id', HeroController.atualizarHero)
  .delete('/heroes/:id', HeroController.deletarHero)

export default router
