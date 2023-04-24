/*Este arquivo o schema que representa o objeto*/
import mongoose from 'mongoose'

const rivalSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  habilidade: { type: String, required: true },
  universo: { type: String, required: true },
  idade: { type: Number },
  rival: { type: mongoose.Schema.Types.ObjectId, ref: 'heroes', required: true }
})

const Rival = mongoose.model('rivais', rivalSchema)

export default Rival
