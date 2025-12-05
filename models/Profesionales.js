import mongoose from 'mongoose';

const profesionalSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50
  },
  especialidad: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50
  },
  imagen: {
    type: String,
    required: true,
    match: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
  }
});


profesionalSchema.index({ nombre: 1 }, { unique: true });

export default mongoose.model('Profesional', profesionalSchema);