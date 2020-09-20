describe ('test efishery',()=>{
    it ('test fresh efishery dot com',()=>{


        cy.visit('https://fresh.efishery.com/landing')

        //memilih kota jakarta
        cy
          .get('span[class="f-16 f-bold"]').click()
          .wait(3000)
        cy
          .get('.option-item')
          .find('#Jakarta').click({force:true})

        //memilih kota bandung
        cy
          .get('span[class="f-16 f-bold"]').click()
          .wait(3000)
        cy
          .get('.option-item')
          .find('#Bandung').click({force:true})
          

        //memastikan ada banner  
        cy
          .wait(5000)
          .get('img[alt="Payday Promo"]').eq(0)
          .should('be.visible')
        cy
          .wait(3000)
          .get('.carousel-control-next-icon').click()
          .get('img[alt="Dari Pembudidaya untuk Anda"]')
          .should('be.visible')
        cy
          .wait(3000)
          .get('.carousel-control-next-icon').click()
          .get('img[alt="Payday Promo"]').eq(2)
          .should('be.visible')

        //memastikan catalog option
        cy
          .get('#eFisheryFresh').should('be.visible')
          .get('#Blibli').should('be.visible')
          .get('#Tokopedia').should('be.visible')
          .get('#Bukalapak').should('be.visible')


    })
})