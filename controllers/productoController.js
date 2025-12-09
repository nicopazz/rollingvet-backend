import Producto from '../models/Producto.js';


export const listarProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'Error al buscar los productos' });
    }
};


export const crearProducto = async (req, res) => {
    try {
        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        res.status(201).json({ mensaje: 'El producto fue creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al intentar agregar un producto' });
    }
};


export const obtenerProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        res.status(200).json(producto);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'No se encontró el producto' });
    }
};


export const editarProducto = async (req, res) => {
    try {
        await editarProducto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ mensaje: 'El producto fue editado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: 'Error al intentar editar el producto' });
    }
};


export const borrarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'El producto fue eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: 'Error al intentar borrar el producto' });
    }
};