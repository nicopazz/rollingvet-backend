import { Router } from 'express';
import { crearUsuario, loginUsuario } from '../controllers/usuarioController.js';

const router = Router();

router.post('/registro', crearUsuario);
router.post('/login', loginUsuario);

export default router;