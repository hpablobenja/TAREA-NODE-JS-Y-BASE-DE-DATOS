'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define("Pedido", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  fecha: DataTypes.DATE,
  total: DataTypes.FLOAT
  });
  Pedido.associate = (models) => {
  Pedido.belongsTo(models.Cliente, { foreignKey: "clienteId" });
  };
  return Pedido;
  };