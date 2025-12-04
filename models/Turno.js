import mongoose from 'mongoose';

const turnoSchema = new mongoose.Schema({
  detalleCita: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 200
  },
  veterinario: {
    type: String,
    required: true,
  },
  mascota: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  hora: {
    type: String,
    required: true,
    match: /^([0-9]{2})\:([0-9]{2})$/ 
  },
  estado: {
    type: String,
    enum: ['pendiente', 'realizado', 'cancelado'],
    default: 'pendiente'
  }
});

turnoSchema.index({ fecha: 1, hora: 1, veterinario: 1 }, { unique: true });
export default mongoose.model('Turno', turnoSchema);