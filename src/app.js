// src/app.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const sequelize = require("./config/database");

// Rutas
const productsRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

// Middlewares
const { auth } = require('./middleware/auth');
const { isAdmin } = require('./middleware/isAdmin');

const app = express();

// Middleware globales
app.use(cors());
app.use(express.json());

/* ===========================================================
   EJECUTAR SCRIPT init.sql MANUALMENTE DESDE EL NAVEGADOR
   =========================================================== */
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

/* ===========================================================
   RUTAS DEL BACKEND
   =========================================================== */

// Rutas públicas
app.use('/auth', authRoutes);

// Rutas solo para usuarios autenticados
app.use('/api/products', auth, productsRoutes);

// Rutas exclusivas ADMIN (ejemplo)
app.get('/admin/secret', auth, isAdmin, (req, res) => {
  res.json({ message: "Bienvenido ADMIN 👑" });
});

/* ===========================================================
   RUTA PRINCIPAL STATUS
   =========================================================== */
app.get('/', (req, res) => {
  res.json({ message: 'API Mini Marketplace funcionando 🚀' });
});

/* ===========================================================
   MANEJO DE RUTA NO ENCONTRADA
   =========================================================== */
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada mi king' });
});

module.exports = app;
