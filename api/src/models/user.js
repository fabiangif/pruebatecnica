const { DataTypes } = require('sequelize');

module.exports = sequelize => {
   sequelize.define('user', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      photo:{
         type: DataTypes.STRING,
         allowNull:true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: true
      },      
      phone: {
         type: DataTypes.STRING,
         unique: true
      },
      wallet: {
         type: DataTypes.FLOAT,
         defaultValue: 0
      },
      adress: {
         type: DataTypes.STRING,
         allowNull: true
      },
      isAdmin: {
         type: DataTypes.BOOLEAN,
         defaultValue: false
      },
   })
}


