const { expect } = require('chai');
// const sinon = require('sinon');
// const connection = require('../../../models/connection');
const SalesModel = require('../../../models/SalesModel');


describe('Teste a função getSaleById da camada models', () => {
    it('Teste se é retornado um objeto', async () => {
    const response = await SalesModel.getSaleById(1);

    expect(response).to.be.an('object');
  });

  it('Teste se o objeto não está vazio', async () => {
    const response = await SalesModel.getSaleById(1);

    expect(response).to.be.not.empty;
  });

});
