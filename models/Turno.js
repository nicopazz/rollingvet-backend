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
    // Podrías validar aquí si el nombre coincide con tus veterinarios reales
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
    match: /^([0-9]{2})\:([0-9]{2})$/ // Valida formato HH:MM (Ej: 09:30)
  },
  estado: {
    type: String,
    enum: ['pendiente', 'realizado', 'cancelado'],
    default: 'pendiente'
  }
});

export default mongoose.model('Turno', turnoSchema);