const { Cliente } = require('../models');
exports.obtenerClientes = async (req, res) => {
const clientes = await Cliente.findAll();
res.json(clientes);
};
exports.obtenerClienteId = async (req, res) => {
    const clienteId = parseInt( req.params.id );
    const cliente = await Cliente.findByPk(clienteId);
    res.status(200).json(cliente);
    };
exports.crearCliente = async (req, res) => {
const cliente = await Cliente.create(req.body);
res.status(201).json(cliente);
};
exports.actualizarCliente = async (req, res) => {
    try {
        const clienteId = parseInt(req.params.id);

        // Buscar el cliente por su ID
        const cliente = await Cliente.findByPk(clienteId);

        // Si no existe el cliente, enviar un error 404
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        // Actualizar el cliente con los datos enviados en el cuerpo de la solicitud
        await cliente.update(req.body);

        // Enviar el cliente actualizado como respuesta
        res.status(200).json(cliente);
    } catch (error) {
        console.error('Error al actualizar cliente:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Eliminar un cliente (DELETE)
exports.eliminarCliente = async (req, res) => {
    try {
        const clienteId = parseInt(req.params.id);

        // Buscar el cliente por su ID
        const cliente = await Cliente.findByPk(clienteId);

        // Si no existe el cliente, enviar un error 404
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        // Eliminar el cliente
        await cliente.destroy();

        // Enviar una respuesta exitosa
        res.status(200).json({ message: 'Cliente eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar cliente:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};