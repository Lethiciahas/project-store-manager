const { expect } = require('chai');
const sinon = require('sinon');
const SalesController = require('../../../controllers/SalesController');

describe('teste a função getSales da camada controllers', () => {
  it('testa se retorna produtos na função getSales', () => {
    const res = {};
    const req = {};
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
    it('Verifica se é retornado "status" com codigo 200', async () => {
      await SalesController.getSales(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  })
});

describe('teste a função getSalesById da camada controllers', () => {
  it('testa se retorna produtos na função getSalesById', () => {
    const res = {};
    const req = {};
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
    it('Verifica se é retornado "status" com codigo 200', async () => {
      await SalesController.getSalesById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  })
});