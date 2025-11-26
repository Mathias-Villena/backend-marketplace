// src/config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Soportar BOTH: variables propias (DB_*) y las de Clever Cloud (MYSQL_ADDON_*)
const dbName = process.env.DB_NAME || process.env.MYSQL_ADDON_DB;
const dbUser = process.env.DB_USER || process.env.MYSQL_ADDON_USER;
const dbPassword = process.env.DB_PASSWORD || process.env.MYSQL_ADDON_PASSWORD;
const dbHost = process.env.DB_HOST || process.env.MYSQL_ADDON_HOST;
const dbPort = process.env.DB_PORT || process.env.MYSQL_ADDON_PORT || 3306;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;

