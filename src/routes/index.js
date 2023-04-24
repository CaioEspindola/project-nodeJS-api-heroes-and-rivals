import express from 'express'
import heroes from './heroesRoutes.js'
import rivais from './rivaisRoutes.js'
const routes = app => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Project Node Heroes and Rivals' })
  })
  app.use(express.json(), heroes, rivais)
}

export default routes
