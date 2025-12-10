import jwt from 'jsonwebtoken';

const validarJWT = (req, res, next) => {
    const token = req.header('x-token');

    
    if (!token) {
        return res.status(401).json({ mensaje: 'No hay token en la petición' });
    }

    try {
       
        const payload = jwt.verify(token, process.env.SECRET_JWT);
        
        
        req.uid = payload.uid;
        req.nombre = payload.nombre;

        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({ mensaje: 'Token no válido o expirado' });
    }
}

export default validarJWT;