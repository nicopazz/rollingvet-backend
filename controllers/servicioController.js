import Servicio from '../models/Servicio.js';


export const listarServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find();
        res.status(200).json(servicios);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'Error al buscar los servicios' });
    }
};


export const crearServicio = async (req, res) => {
    try {
        const servicioNuevo = new Servicio(req.body);
        await servicioNuevo.save();
        res.status(201).json({ mensaje: 'El servicio fue creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al intentar agregar un servicio' });
    }
};


export const obtenerServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findById(req.params.id);
        res.status(200).json(servicio);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'No se encontró el servicio' });
    }
};


export const editarServicio = async (req, res) => {
    try {
        await Servicio.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ mensaje: 'El servicio fue editado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al intentar editar el servicio' });
    }
};


export const borrarServicio = async (req, res) => {
    try {
        await Servicio.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'El servicio fue eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'Error al intentar borrar el servicio' });
    }
};