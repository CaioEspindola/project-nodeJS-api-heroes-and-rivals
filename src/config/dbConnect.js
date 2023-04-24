import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://caio:123321@caio-heroes.yxj3nmb.mongodb.net/caio-heroes'
)

let db = mongoose.connection

export default db
