const { DataTypes } = require('sequelize');

module.exports = sequelize => {
   sequelize.define('cart', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      product: {
         type: DataTypes.STRING,
         allowNull: false
      },
      amount: {
         type: DataTypes.STRING,
         allowNull: false
      },
      existence: {
         type: DataTypes.STRING,
         allowNull: false
      },
   },
      { timestamps: false }
   )
}

