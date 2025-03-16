const { Pedido } = require('../models');
exports.obtenerPedidos = async (req, res) => {
const pedidos = await Pedido.findAll();
res.json(pedidos);
};
exports.crearPedido = async (req, res) => {
const pedido = await Pedido.create(req.body);
res.status(201).json(pedido);
};
exports.obtenerPedidoId = async (req, res) => {
    const PedidoId = parseInt( req.params.id );
    const pedido = await Pedido.findByPk(PedidoId);
    res.status(200).json(pedido);
    };
exports.actualizarPedido = async (req, res) => {
            try {
                const pedidoId = parseInt(req.params.id);
                const pedido = await Pedido.findByPk(pedidoId);
                if (!pedido) {
                    return res.status(404).json({ error: 'Cliente no encontrado' });
                }
                await pedido.update(req.body);
                res.status(200).json(pedido);
            } catch (error) {
                console.error('Error al actualizar cliente:', error);
                res.status(500).json({ error: 'Error interno del servidor' });
            }
        };
        
exports.eliminarPedido = async (req, res) => {
            try {
                const pedidoId = parseInt(req.params.id);        
                const pedido = await Pedido.findByPk(pedidoId);
                if (!pedido) {
                    return res.status(404).json({ error: 'Cliente no encontrado' });
                }
                await pedido.destroy();
                res.status(200).json({ message: 'Cliente eliminado con éxito' });
            } catch (error) {
                console.error('Error al eliminar cliente:', error);
                res.status(500).json({ error: 'Error interno del servidor' });
            }
        };
