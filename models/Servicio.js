import mongoose from 'mongoose';

const servicioSchema = new mongoose.Schema({
  nombreServicio: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    unique: true 
  },
  descripcion: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 300
  },
  precio: {
    type: Number,
    required: true,
    min: 0,
    max: 100000
  },
  imagen: {
    type: String,
    required: true,
    match: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/ 
  }
});

export default mongoose.model('Servicio', servicioSchema);