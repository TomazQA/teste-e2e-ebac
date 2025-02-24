/// <reference types="cypress" />
let dadosLogin2

import produtosPage from "../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    before(() => {
        cy.fixture('perfil').then(perfil => {
            dadosLogin2 = perfil
        })
    });

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.login(dadosLogin2.usuario, dadosLogin2.senha)
        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)
        })

        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
        })
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade)
        })
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[3].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[3].tamanho,
                dados[3].cor,
                dados[3].quantidade)
        })

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.infos('Enrico', 'Tomaz', 'Brasil', 'Rua dos Testes', 'São Luís', 'Maranhão', '65000000', 'enrico.teste@teste.com.br')
        cy.get('#payment_method_bacs').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });


})