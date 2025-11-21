import { Router } from 'express';
import {
    listarPacientes,
    crearPaciente,
    obtenerPaciente,
    editarPaciente,
    borrarPaciente
} from '../controllers/pacienteController.js';

const router = Router();

// Definimos las rutas y qué función del controlador se ejecuta
// URL base: /api/pacientes

router.route('/pacientes')
    .get(listarPacientes)
    .post(crearPaciente);

router.route('/pacientes/:id')
    .get(obtenerPaciente)
    .put(editarPaciente)
    .delete(borrarPaciente);

export default router;