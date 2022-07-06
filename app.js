const express = require('express');
const bodyParser = require('body-parser');

const ProductController = require('./controllers/ProductController');
const SaleController = require('./controllers/SalesController');

const app = express();

app.use(express());
app.use(bodyParser.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', ProductController.getProducts);
app.get('/products/:id', ProductController.getProductsById);
app.post('/products', ProductController.addProducts);

app.get('/sales', SaleController.getSales);
app.get('/sales/:id', SaleController.getSaleById);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;