import Turno from '../models/Turno.js';

export const crearTurno = async (req, res) => {
    try {
        const turnoNuevo = new Turno(req.body);
        await turnoNuevo.save();
        res.status(201).json({ mensaje: 'El turno se reservó correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al reservar el turno' });
    }
};


export const listarTurnos = async (req, res) => {
    try {
        const { email } = req.query; 
        let filtro = {};

        if (email) {
            
            filtro = { emailDueño: email }; 
        }

        
        const turnos = await Turno.find(filtro); 
        res.status(200).json(turnos);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'Error al buscar los turnos' });
    }
};


export const obtenerTurno = async (req, res) => {
    try {
        const turno = await Turno.findById(req.params.id);
        res.status(200).json(turno);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'No se encontró el turno solicitado' });
    }
};


export const editarTurno = async (req, res) => {
    try {
        await Turno.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ mensaje: 'El turno fue actualizado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al intentar editar el turno' });
    }
};

export const borrarTurno = async (req, res) => {
    try {
        await Turno.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'El turno fue eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'Error al intentar borrar el turno' });
    }
};