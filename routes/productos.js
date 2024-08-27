const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>Productos</h1><p>Bienvenido a la página de productos.</p>');
});

module.exports = router;
