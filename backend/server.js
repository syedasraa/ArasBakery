import Express from 'express';
import data from './data.js';

const app = Express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});
//test
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
