const { expect } = require('chai');
const sinon = require('sinon');
const ProductController = require('../../../controllers/ProductController');

describe('teste a função getProducts da camada controllers', () => {
  it('testa se retorna produtos na função getProducts', () => {
    const res = {};
    const req = {};
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
    it('Verifica se é retornado "status" com codigo 200', async () => {
      await ProductController.getProducts(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  })
});

describe('teste a função getProductsById da camada controllers', () => {
  it('testa se retorna produtos na função getProductsById', () => {
    const res = {};
    const req = {};
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
    it('Verifica se é retornado "status" com codigo 200', async () => {
      await ProductController.getProductsById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  })
})