import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './src/config/db.js';

import productRoutes from './src/routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
   cors({
      origin: [
         'http://localhost:5173',
         'https://simple-prodcts-frontend.vercel.app',
      ],
      credentials: true,
   })
);

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
   res.json({ message: 'Hello from backend' });
});

connectDB();

app.listen(PORT, () => {
   console.log('Server started at http://localhost:' + PORT);
});

// db password
// TE9RReePxHOfDN1e
export default app;
