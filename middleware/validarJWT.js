import jwt from 'jsonwebtoken';

const validarJWT = (req, res, next) => {
    const token = req.header('x-token');

    //Verifico si el token existe
    if (!token) {
        return res.status(401).json({ mensaje: 'No hay token en la petición' });
    }

    try {
        //Verifico si el token es válido usando nuestra clave secreta
        const payload = jwt.verify(token, process.env.SECRET_JWT);
        
        //Guardo datos del usuario en la petición por si los necesitamos despues
        req.uid = payload.uid;
        req.nombre = payload.nombre;

        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({ mensaje: 'Token no válido o expirado' });
    }
}

export default validarJWT;