const sequelize = require('sequelize');
const {
  DB: { HOST, NAME, PASSWORD, PORT, USER }
} = require('./constants');

exports.connection = new sequelize(NAME, USER, PASSWORD, {
  dialect: 'mysql',
  host: HOST,
  logging: false,
  port: PORT
});
