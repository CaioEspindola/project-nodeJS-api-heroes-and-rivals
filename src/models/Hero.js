/*Este arquivo o schema que representa o objeto*/
import mongoose from 'mongoose'

const heroSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  habilidade: { type: String, required: true },
  idade: { type: Number },
  universo: { type: String, required: true },
  rival: { type: mongoose.Schema.Types.ObjectId, ref: 'rivais', required: true }
})

const Hero = mongoose.model('heroes', heroSchema)

export default Hero
