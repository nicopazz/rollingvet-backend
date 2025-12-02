import { Router } from 'express';
import {
    crearTurno,
    listarTurnos,
    obtenerTurno,
    editarTurno,
    borrarTurno
} from '../controllers/turnoController.js';
import validarJWT from '../middleware/validarJWT.js';

const router = Router();

router.route('/turnos')
    .get(listarTurnos)
    .post([validarJWT],crearTurno);

router.route('/turnos/:id')
    .get(obtenerTurno)
    .put([validarJWT],editarTurno)
    .delete([validarJWT],borrarTurno);

export default router;