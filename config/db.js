import mongoose from 'mongoose';

export const conectarDB = async () => {
    try {
        const dbURL = process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/rollingvet';
        await mongoose.connect(dbURL);
        console.log('Base de datos conectada');
    } catch (error) {
        console.error('Error al conectar la base de datos:', error);
        process.exit(1);
    }
};