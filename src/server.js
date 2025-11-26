// src/server.js
require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a MySQL en Clever Cloud exitosa');

    // Crea la tabla si no existe
    await sequelize.sync({alter:true}); 
    console.log('✅ Modelos sincronizados');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
}

startServer();
