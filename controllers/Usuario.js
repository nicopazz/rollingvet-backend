import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true, // Importante: No permite emails repetidos
    trim: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ // Valida que sea un email real
  },
  password: {
    type: String,
    required: true,
    minLength: 8 // Mínimo 8 caracteres por seguridad
  },
  role: {
    type: String,
    enum: ['admin', 'usuario'], // Solo permite estos dos valores
    default: 'usuario'
  }
});

export default mongoose.model('Usuario', usuarioSchema);