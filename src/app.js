//Funcionalidade definida. Cuidar das rotas.
import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'

/*Para testar se a conexão funcionou e retornar a info em nosso terminal */
db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
  console.log('Conexão com o banco de dados deu boa !')
})

const app = express()
//recurso do express que vai conseguir interpretar o que chega do POSTMAN
app.use(express.json())

routes(app)

export default app
