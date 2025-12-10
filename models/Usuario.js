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
    unique: true, 
    trim: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ 
  },
  password: {
    type: String,
    required: true,
    minLength: 8 
  },
  role: {
    type: String,
    enum: ['admin', 'usuario'], 
    default: 'usuario'
  }
});

export default mongoose.model('Usuario', usuarioSchema);