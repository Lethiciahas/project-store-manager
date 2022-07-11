const { expect } = require('chai');
const sinon = require('sinon');
// const connection = require('../../../models/connection');
const ProductServices = require('../../../services/ProductService');


describe('Teste a função getProductsById camada services', () => {
  before(() => {
    sinon.stub(ProductServices, 'getProductsById')
      .resolves(
        {
          id: 1,
          name: "Martelo de Thor",
        }
      );
  });
  after(() => {
    ProductServices.getProductsById.restore();
  });

  it('Teste se é retornado um objeto', async () => {
    const response = await ProductServices.getProductsById(1);

    expect(response).to.be.an('object');
  });

  it('Teste se o objeto não está vazio', async () => {
    const response = await ProductServices.getProductsById(1);

    expect(response).to.be.not.empty;
  });

  it('tal objeto possui as propriedades: "id", "name"', async () => {
      const item = await ProductServices.getProductsById(1);

      expect(item).to.include.all.keys('id', 'name');
  });

  
});
describe('Teste a função getProducts da camada service', () => {
  const object = [
    {
    id: 1,
    name: 'Martelo de Thor',
    }
  ];

  it('Teste se a lista retornada não está vazia', async () => {
    const response = await ProductServices.getProducts(1);
    expect(response).to.be.not.empty;
  });
  
   it('Teste se é retornado um objeto', async () => {
    const response = await ProductServices.getProducts(1);

    expect(response).to.be.an('object');
   });
  
});

