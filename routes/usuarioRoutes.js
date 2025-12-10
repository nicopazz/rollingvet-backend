import { Router } from 'express';
import { 
    crearUsuario, 
    loginUsuario, 
    listarUsuarios, 
    borrarUsuario, 
    editarUsuario, 
    obtenerUsuario 
} from '../controllers/usuarioController.js';
import validarJWT from '../middleware/validarJWT.js';

const router = Router();


router.post('/registro', crearUsuario);
router.post('/login', loginUsuario);


router.route('/usuarios')
    .get([validarJWT], listarUsuarios) 
    .post([validarJWT], crearUsuario); 

router.route('/usuarios/:id')
    .get([validarJWT], obtenerUsuario)
    .put([validarJWT], editarUsuario)
    .delete([validarJWT], borrarUsuario);

export default router;