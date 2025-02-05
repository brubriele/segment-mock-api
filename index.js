const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Mapa de CPFs e seus segmentos
const cpfSegments = {
  '123.456.789-00': 'A',
  '987.654.321-00': 'B'
};

app.get('/customer-segment', (req, res) => {
  const { cpf } = req.query;
  
  if (!cpf) {
    return res.status(400).json({ error: 'CPF is required' });
  }

  const segment = cpfSegments[cpf] || 'A'; // default to A if CPF not found
  
  res.json({ segment });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Mock API running on port ${PORT}`);
});