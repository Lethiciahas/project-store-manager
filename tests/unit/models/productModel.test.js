const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const ProductModel = require('../../../models/ProductModel');


describe('Teste se retorna um produto informando o "id"', () => {
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