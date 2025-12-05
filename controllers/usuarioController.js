import Usuario from '../models/Usuario.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const crearUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({ mensaje: 'Ya existe un usuario con este correo' });
        }

       
        usuario = new Usuario(req.body);

        
        const salt = bcrypt.genSaltSync(10); 
        usuario.password = bcrypt.hashSync(password, salt); 

       
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


export const loginUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ mensaje: 'Correo o contraseña incorrectos' });
        }

        
        const passwordValido = bcrypt.compareSync(password, usuario.password);
        if (!passwordValido) {
            return res.status(400).json({ mensaje: 'Correo o contraseña incorrectos' });
        }

        
        const token = jwt.sign(
            {
                uid: usuario._id,
                nombre: usuario.nombre,
                rol: usuario.role
            },
            process.env.SECRET_JWT, 
            { expiresIn: '2h' } 
        );

        
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



export const listarUsuarios = async (req, res) => {
    try {
        
        const usuarios = await Usuario.find().select('-password');
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(404).json({ mensaje: 'Error al buscar usuarios' });
    }
};

export const obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id).select('-password');
        res.status(200).json(usuario);
    } catch (error) {
        res.status(404).json({ mensaje: 'No se encontró el usuario' });
    }
};

export const editarUsuario = async (req, res) => {
    try {
        
        if(req.body.password){
             const salt = bcrypt.genSaltSync(10);
             req.body.password = bcrypt.hashSync(req.body.password, salt);
        }
        
        await Usuario.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ mensaje: 'Usuario editado correctamente' });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al editar el usuario' });
    }
};

export const borrarUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ mensaje: 'Error al eliminar usuario' });
    }
};