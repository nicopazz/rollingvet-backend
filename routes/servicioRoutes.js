import { Router } from 'express';
import {
    listarServicios,
    crearServicio,
    obtenerServicio,
    editarServicio,
    borrarServicio
} from '../controllers/servicioController.js';
import validarJWT from '../middleware/validarJWT.js';

const router = Router();

router.route('/servicios')
    .get(listarServicios) 
    .post([validarJWT], crearServicio); 

router.route('/servicios/:id')
    .get(obtenerServicio)
    .put([validarJWT], editarServicio)
    .delete([validarJWT], borrarServicio);

export default router;