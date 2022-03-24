/// <reference types="cypress" />
import loginPage from '../support/page_objects/login.page';
import pedidoFluxoPage from '../support/page_objects/pedidoFluxo.page';
import produtoPage from '../support/page_objects/produto.page';




context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      loginPage.EfetuarLogin()
      produtoPage.AdicionarCarrinho()
      pedidoFluxoPage.PreencherCheckout('Eduardo', 'Campesato', 'Bate Papo', 'Brasil', 'Rua Monsenhor Naline', '321', 'São Paulo', 'São Paulo', '04358-030', '11999871255', 'eduh.campesato@teste.com')
      pedidoFluxoPage.FinalizarCompra()
    });

    


})