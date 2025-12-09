import { Router } from 'express';
import {
    listarProductos,
    crearProducto,
    obtenerProducto,
    editarProducto,
    borrarProducto
} from '../controllers/productoController.js';
import validarJWT from '../middleware/validarJWT.js';

const router = Router();

router.route('/productos')
    .get(listarProductos) 
    .post([validarJWT], crearProducto); 

router.route('/productos/:id')
    .get(obtenerProducto)
    .put([validarJWT], editarProducto)
    .delete([validarJWT], borrarProducto);

export default router;