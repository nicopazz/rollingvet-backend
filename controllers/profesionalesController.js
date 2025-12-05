import Profesional from '../models/Profesionales.js';

export const listarProfesionales = async (req, res) => {
    try {
        const profesionales = await Profesional.find();
        res.status(200).json(profesionales);
    } catch (error) {
        res.status(404).json({ mensaje: 'Error al buscar profesionales' });
    }
};

export const crearProfesional = async (req, res) => {
    try {
       
        const existe = await Profesional.findOne({ nombre: req.body.nombre });
        if(existe){
            return res.status(400).json({ mensaje: 'Ya existe un profesional con este nombre' });
        }

        const nuevoProfesional = new Profesional(req.body);
        await nuevoProfesional.save();
        res.status(201).json({ mensaje: 'Profesional creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al crear profesional' });
    }
};

export const editarProfesional = async (req, res) => {
    try {
        await Profesional.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ mensaje: 'El profesional fue editado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al intentar editar el profesional' });
    }
};


export const borrarProfesional = async (req, res) => {
    try {
        await Profesional.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'Profesional eliminado' });
    } catch (error) {
        res.status(404).json({ mensaje: 'Error al eliminar profesional' });
    }
};