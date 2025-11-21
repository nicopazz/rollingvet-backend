import { Router } from 'express';
import {
    crearTurno,
    listarTurnos,
    obtenerTurno,
    editarTurno,
    borrarTurno
} from '../controllers/turnoController.js';

const router = Router();

router.route('/turnos')
    .get(listarTurnos)
    .post(crearTurno);

router.route('/turnos/:id')
    .get(obtenerTurno)
    .put(editarTurno)
    .delete(borrarTurno);

export default router;