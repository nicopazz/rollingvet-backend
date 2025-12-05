import { Router } from 'express';
import { 
    listarProfesionales,
    crearProfesional,
    editarProfesional, 
    borrarProfesional 
} from '../controllers/profesionalesController.js';
import validarJWT from '../middleware/validarJWT.js';

const router = Router();

router.route('/profesionales')
    .get(listarProfesionales)
    .post([validarJWT], crearProfesional);
    

router.route('/profesionales/:id')
    .put([validarJWT], editarProfesional)
    .delete([validarJWT], borrarProfesional);

export default router;