import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './src/config/db.js';

import productRoutes from './src/routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
   res.json({ message: 'Hello from backend' });
});

app.listen(PORT, () => {
   connectDB();
   console.log('Server started at http://localhost:' + PORT);
});
// db password
// TE9RReePxHOfDN1e
