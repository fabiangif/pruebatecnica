const { DataTypes } = require('sequelize');

module.exports = sequelize => {
   sequelize.define('otherproduct', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      price: {
         type: DataTypes.STRING,
         allowNull: false
      },
      code: {
         type: DataTypes.STRING,
         allowNull: false
      },
      existence: {
         type: DataTypes.STRING,
         allowNull: false
      },
      dealer: {
         type: DataTypes.STRING,
         allowNull: false
      },
      quantity: {
         type: DataTypes.STRING,
         allowNull: false
      }
   },
      { timestamps: false }
   )
}

