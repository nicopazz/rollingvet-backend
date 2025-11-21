import Turno from '../models/Turno.js';

// Crear un turno
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

// Obtener todos los turnos
export const listarTurnos = async (req, res) => {
    try {
        const turnos = await Turno.find();
        res.status(200).json(turnos);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'Error al buscar los turnos' });
    }
};

// Obtener un turno por ID
export const obtenerTurno = async (req, res) => {
    try {
        const turno = await Turno.findById(req.params.id);
        res.status(200).json(turno);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'No se encontró el turno solicitado' });
    }
};

// Editar un turno
export const editarTurno = async (req, res) => {
    try {
        await Turno.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ mensaje: 'El turno fue actualizado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al intentar editar el turno' });
    }
};

// Borrar un turno
export const borrarTurno = async (req, res) => {
    try {
        await Turno.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'El turno fue eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'Error al intentar borrar el turno' });
    }
};