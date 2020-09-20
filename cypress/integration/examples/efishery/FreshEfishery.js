describe ('test efishery',()=>{
    it ('test fresh efishery dot com',()=>{


        cy.visit('https://fresh.efishery.com/landing')

        //memilih kota jakarta
        cy
          .get('span[class="f-16 f-bold"]').click()
        cy
          .get('.option-item')
          .find('#Jakarta').click({force:true})

        //memilih kota bandung
        cy
          .get('span[class="f-16 f-bold"]').click()
        cy
          .get('.option-item')
          .find('#Bandung').click({force:true})

        //memastikan ada banner  
        cy
          .get('img[alt="Payday Promo"]').eq(0)
          .should('be.visible')
        cy
          .get('img[alt="Dari Pembudidaya untuk Anda"]')
          .should('be.visible')
        cy
          .get('img[alt="Payday Promo"]').eq(2)
          .should('be.visible')

        //memastikan catalog option
        cy
          .get('.catalogue-card').should('have.length',4)
          .get('#eFisheryFresh').should('be.visible')
          .get('#Blibli').should('be.visible')
          .get('#Tokopedia').should('be.visible')
          .get('#Bukalapak').should('be.visible')


    })
})