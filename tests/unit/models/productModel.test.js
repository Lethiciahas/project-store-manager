const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const ProductModel = require('../../../models/ProductModel');


describe('Teste a função getProductById da camada models', () => {
  before(() => {
    sinon.stub(ProductModel, 'getProductsById')
      .resolves(
        {
          id: 1,
          name: "Martelo de Thor",
        }
      );
  });
  after(() => {
    ProductModel.getProductsById.restore();
  });

  it('Teste se é retornado um objeto', async () => {
    const response = await ProductModel.getProductsById(1);

    expect(response).to.be.an('object');
  });

  it('Teste se o objeto não está vazio', async () => {
    const response = await ProductModel.getProductsById(1);

    expect(response).to.be.not.empty;
  });

  it('tal objeto possui as propriedades: "id", "name"', async () => {
      const item = await ProductModel.getProductsById(1);

      expect(item).to.include.all.keys('id', 'name');
  });
  
});
describe('Teste a função getProducts da camada models', () => {
  const object = [
    {
    id: 1,
    name: 'Martelo de Thor',
    }
  ];
  it('testa se os produtos são listados com id e name', async () => {
    sinon.stub(
      connection, 'execute').resolves(object);
    const response = await ProductModel.getProducts();
    expect(response).to.be.includes.keys('id', 'name');
  });

  it('Teste se a lista retornada não está vazia', async () => {
    const response = await ProductModel.getProducts(1);
    expect(response).to.be.not.empty;
  });
  
   it('Teste se é retornado um objeto', async () => {
    const response = await ProductModel.getProducts(1);

    expect(response).to.be.an('object');
  });
});
