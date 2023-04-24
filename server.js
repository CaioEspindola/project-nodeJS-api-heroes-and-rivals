import app from './src/app.js'

//Boas práticas para identificar se a porta é um servidor externo OU local.
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Servidor escutando na porta http://localhost:${port}`)
})
