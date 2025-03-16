const express = require('express');
const router = express.Router();
const { obtenerClienteId, obtenerClientes, crearCliente, actualizarCliente, eliminarCliente } = require('../controllers/cliente.controller');
router.get('/clientes', obtenerClientes);
router.post('/clientes', crearCliente);
router.get('/clientes/:id', obtenerClienteId);
router.put('/clientes/:id', actualizarCliente);
router.delete('/clientes/:id', eliminarCliente);

module.exports = router;
