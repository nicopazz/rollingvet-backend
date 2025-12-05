import mongoose from 'mongoose';

const pacienteSchema = new mongoose.Schema({
  
  nombreDueño: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  },
  apellidoDueño: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  },
  emailDueño: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  },
  telefonoDueño: {
    type: Number,
    required: true
  },
  
  nombreMascota: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  },
  especie: {
    type: String,
    required: true,
    enum: ['Perro', 'Gato', 'Ave', 'Roedor', 'Otro'] 
  },
  raza: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  }
});

export default mongoose.model('Paciente', pacienteSchema);