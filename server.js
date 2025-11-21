import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
// Importamos la conexión desde la carpeta config
import { conectarDB } from './config/db.js';

// 1. Configurar variables de entorno
dotenv.config();

// 2. Inicializar Express
const app = express();

// 3. Conectar a la Base de Datos
conectarDB();

// 4. Configuraciones
app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 5. Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Bienvenido al backend de RollingVet!');
});

// 6. Iniciar servidor
app.listen(app.get('port'), () => {
    
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
    
});