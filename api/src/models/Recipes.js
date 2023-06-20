const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('recipe', {
    ID: {
      type: DatatTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
    },

    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Resumen: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    HealthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    PasoAPaso: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};