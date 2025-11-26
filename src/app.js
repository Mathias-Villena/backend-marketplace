// src/app.js
const express = require('express');
const cors = require('cors');
const productsRoutes = require('./routes/products');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API Mini Marketplace funcionando 🚀' });
});
app.use('/', (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada mi king' });
});

module.exports = app;
