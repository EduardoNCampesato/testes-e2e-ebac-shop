class Produtos {
    
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
}
export default new Produtos