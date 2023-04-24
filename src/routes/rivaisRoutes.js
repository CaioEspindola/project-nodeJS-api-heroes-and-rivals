import express from 'express'
import RivalController from '../controller/rivaisController.js'

const router = express.Router()

router
  .get('/rivais', RivalController.listarRivais)
  .get('/rivais/:id', RivalController.listarRivalId)
  .post('/rivais', RivalController.cadastrarRival)
  .put('/rivais/:id', RivalController.atualizarRival)
  .delete('/rivais/:id', RivalController.deletarRival)

export default router
