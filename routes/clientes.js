const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>Clientes</h1><p>Bienvenido a la página de clientes.</p>');
});

module.exports = router;
