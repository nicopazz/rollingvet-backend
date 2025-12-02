import Usuario from '../models/Usuario.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//REGISTRO DE USUARIO
export const crearUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        //Verifica si el email ya existe
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({ mensaje: 'Ya existe un usuario con este correo' });
        }

        //Crea el nuevo objeto de usuario
        usuario = new Usuario(req.body);

        //Encripta la contraseña
        const salt = bcrypt.genSaltSync(10); 
        usuario.password = bcrypt.hashSync(password, salt); 

        //Guarda en Base de Datos
        await usuario.save();

        res.status(201).json({
            mensaje: 'Usuario creado exitosamente',
            nombre: usuario.nombre,
            uid: usuario._id
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al registrar el usuario' });
    }
};

//LOGIN DE USUARIO
export const loginUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        //Verifica si el email existe
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ mensaje: 'Correo o contraseña incorrectos' });
        }

        //Verifica si la contraseña coincide
        const passwordValido = bcrypt.compareSync(password, usuario.password);
        if (!passwordValido) {
            return res.status(400).json({ mensaje: 'Correo o contraseña incorrectos' });
        }

        //Genera el Token (El pase de seguridad)
        // Guardamos en el token el ID y el ROL del usuario
        const token = jwt.sign(
            {
                uid: usuario._id,
                nombre: usuario.nombre,
                rol: usuario.role
            },
            process.env.SECRET_JWT, // La clave secreta del .env
            { expiresIn: '2h' } // El token expira en 2 horas
        );

        //Responde al frontend con el token
        res.status(200).json({
            mensaje: 'Login exitoso',
            uid: usuario._id,
            nombre: usuario.nombre,
            rol: usuario.role,
            token: token
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al intentar loguear' });
    }
};