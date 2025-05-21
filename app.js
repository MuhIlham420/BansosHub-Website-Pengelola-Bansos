const express = require('express');
const app = express();

const authRoutes = require('./routes/authRoutes');           // untuk login / register

// middleware
app.use(express.json());

// route groups
app.use('/', authRoutes);

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server jalan di http://localhost:${PORT}`);
});
