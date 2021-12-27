const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    description: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "product",
    timestamps: false
  }
);

module.exports = Product