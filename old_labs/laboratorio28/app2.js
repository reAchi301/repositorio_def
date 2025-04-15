const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'laboratorio28')));

app.use('/entregan', require('./routes/entregan.routes'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'laboratorio28', 'entregan.html'));
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
