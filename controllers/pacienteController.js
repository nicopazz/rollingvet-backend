import Paciente from '../models/Paciente.js';

// 1. Obtener todos los pacientes
export const listarPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.find();
        res.status(200).json(pacientes);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'Error al buscar los pacientes' });
    }
};

// 2. Crear un paciente nuevo
export const crearPaciente = async (req, res) => {
    try {
        // req.body contiene los datos que envía el frontend
        const pacienteNuevo = new Paciente(req.body);
        await pacienteNuevo.save();
        res.status(201).json({ mensaje: 'El paciente fue creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al intentar agregar un paciente' });
    }
};

// 3. Obtener un solo paciente por su ID
export const obtenerPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.status(200).json(paciente);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'No se pudo encontrar el paciente' });
    }
};

// 4. Editar un paciente
export const editarPaciente = async (req, res) => {
    try {
        await Paciente.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ mensaje: 'El paciente fue editado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al intentar editar el paciente' });
    }
};

// 5. Borrar un paciente
export const borrarPaciente = async (req, res) => {
    try {
        await Paciente.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'El paciente fue eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'Error al intentar borrar el paciente' });
    }
};