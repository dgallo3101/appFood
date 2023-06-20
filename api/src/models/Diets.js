const DatatTypes = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Diets', {
        ID: {
            type: DatatTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 

        Nombre: {
            type: DatatTypes.STRING,
            allowNull: false,
        }
    })
}