// src/app.js
const express = require('express');
const cors = require('cors');
const productsRoutes = require('./routes/products');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.get('/run-script', async (req, res) => {
  try {
    const sql = fs.readFileSync(path.join(__dirname, 'init.sql'), 'utf8');
    await sequelize.query(sql);
    res.json({ message: "Script ejecutado correctamente 🚀" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error ejecutando script" });
  }
});
app.use('/api/products', productsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API Mini Marketplace funcionando 🚀' });
});
app.use('/', (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada mi king' });
});

module.exports = app;
