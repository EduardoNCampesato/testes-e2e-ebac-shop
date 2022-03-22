class PedidoFluxo {

    EfetuarLogin() {

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    }

    AdicionarCarrinho() {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3111 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.plus').click()
        cy.get('.single_add_to_cart_button').click()


        cy.get('.woocommerce-message').should('contain', 'no seu carrinho')

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-2622 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.plus').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', 'no seu carrinho')

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3647 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-XL').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.plus').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', 'no seu carrinho')

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3073 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.plus').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', 'no seu carrinho')

    }


    PreencherCheckout(nome, sobrenome, empresa, endereco, numero, cidade, estado, cep, telefone, email) {

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type('Brasil{enter}')
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().click().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
    

        

    }

    FinalizarCompra() {
        cy.get('#terms').click()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Seu pedido foi recebido')
    }



}

export default new PedidoFluxo()