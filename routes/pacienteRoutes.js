import { Router } from 'express';
import {
    listarPacientes,
    crearPaciente,
    obtenerPaciente,
    editarPaciente,
    borrarPaciente
} from '../controllers/pacienteController.js';
import validarJWT from '../middleware/validarJWT.js';

const router = Router();


router.route('/pacientes')
    .get(listarPacientes) 
    .post([validarJWT], crearPaciente); 

router.route('/pacientes/:id')
    .get(obtenerPaciente) 
    .put([validarJWT], editarPaciente) 
    .delete([validarJWT], borrarPaciente); 

export default router;