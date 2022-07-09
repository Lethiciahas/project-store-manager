const { expect } = require('chai');
const sinon = require('sinon');
const ProductController = require('../../../controllers/ProductController');
const ProductServices = require('../../../services/ProductService');

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
  });
});

describe('testa a função addProducts na camada controllers',() => {
  it('Testa se é enviado um body válido', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub()
    req.body = { id: 1,  name: 'Martelo de Thor'};
    sinon.stub(ProductServices, 'addProducts').resolves(1)
    await ProductController.addProducts(req, res);

    expect(res.status.calledWith(201)).to.be.equal(true);
    expect(res.json.calledWith({ id: 1,  name: 'Martelo de Thor' })).to.be.equal(true);
  });
});