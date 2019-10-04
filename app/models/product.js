const { Model, STRING, NUMBER } = require('sequelize');

class Product extends Model {}
Product.init(
  {
    // attributes
    id: {
      type: NUMBER,
      allowNull: false
    },
    name: {
      type: STRING
      // allowNull defaults to true
    }
  },
  {
    sequelize,
    modelName: 'Product'
    // options
  }
);
