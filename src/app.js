const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');
const categoriesRouter = require('./routes/categories');

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://frontend-marketplace-delta-rust.vercel.app'
  ],
  credentials: true
}));

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);

app.get('/', (req, res) => {
  res.json({ message: 'API E-commerce funcionando' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = app;