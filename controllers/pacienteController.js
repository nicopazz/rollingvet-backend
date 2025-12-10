import Paciente from '../models/Paciente.js';


export const listarPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.find();
        res.status(200).json(pacientes);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'Error al buscar los pacientes' });
    }
};


export const crearPaciente = async (req, res) => {
    try {
        
        const pacienteNuevo = new Paciente(req.body);
        await pacienteNuevo.save();
        res.status(201).json({ mensaje: 'El paciente fue creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al intentar agregar un paciente' });
    }
};

export const obtenerPaciente = async (req, res) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.status(200).json(paciente);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'No se pudo encontrar el paciente' });
    }
};


export const editarPaciente = async (req, res) => {
    try {
        await Paciente.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ mensaje: 'El paciente fue editado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al intentar editar el paciente' });
    }
};


export const borrarPaciente = async (req, res) => {
    try {
        await Paciente.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'El paciente fue eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'Error al intentar borrar el paciente' });
    }
};