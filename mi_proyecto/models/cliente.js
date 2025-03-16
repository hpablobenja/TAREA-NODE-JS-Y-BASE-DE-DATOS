'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define("Cliente", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  nombre: DataTypes.STRING,
  correo: DataTypes.STRING
  });
  Cliente.associate = (models) => {
  Cliente.hasMany(models.Pedido, { foreignKey: "clienteId" });
  };
  return Cliente;
  };