import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { conectarDB } from './config/db.js';
import pacienteRouter from './routes/pacienteRoutes.js';
import turnoRouter from './routes/turnoRoutes.js';
import usuarioRouter from './routes/usuarioRoutes.js';
import servicioRouter from './routes/servicioRoutes.js';
import ProductoRouter from './routes/productoRoutes.js';
import profesionalesRouter from './routes/profesionalesRoutes.js';

// variables de entorno
dotenv.config();

// Express
const app = express();

// Conexión a la DB
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
app.use('/api', servicioRouter);
app.use('/api', ProductoRouter);
app.use('/api', profesionalesRouter);


// Iniciar sv backend
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});