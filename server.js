import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { conectarDB } from './config/db.js';
import pacienteRouter from './routes/pacienteRoutes.js';
import turnoRouter from './routes/turnoRoutes.js';
import usuarioRouter from './routes/usuarioRoutes.js';

// Configuro variables de entorno
dotenv.config();

// Inicializo Express
const app = express();

// Conexión a la Base de Datos
conectarDB();

// Configuraciones
app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', pacienteRouter);
app.use('/api', turnoRouter);
app.use('/api/auth', usuarioRouter);

// Iniciar servidor backend
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});