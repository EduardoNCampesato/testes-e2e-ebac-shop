/// <reference types="cypress" />
import FluxoPedido from '../support/page_objects/nome-funcionliada.page'



context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
       FluxoPedido.EfetuarLogin()
       FluxoPedido.AdicionarCarrinho()
       FluxoPedido.PreencherCheckout('Eduardo', 'Negrão', 'Litoral do Brasil', 'Rua Monsenhor Naline', '31', 'São Paulo', 'São Paulo', '04358-031', '11999871255', 'teste002@teste.com')
       FluxoPedido.FinalizarCompra()
    });

    


})