describe('template spec', () => {

    beforeEach(() => {
      // Before each test, clear the cache by closing and opening the browser
      cy.clearCookies();
      cy.clearLocalStorage();
      
    });
    
    it('passes', () => {
      cy.visit('https://staging-order.justsalad.com/')
  
      cy.wait(2000);

      cy.xpath('//*[@id="__next"]/div[1]/div/div[4]/div/div/div[2]/div/div[3]/a[1]/div').click(); /*Start Order*/
      
      cy.xpath('//*[@id="store-item-171"]/div/div[2]/a/div').click(); /*Cilck en tienda 171*/
            
      cy.xpath('//*[@id="100"]/div[2]/div[1]/div/div[1]/div/div[3]/div[1]/div').click(); /*Click Winter Harvest*/

      /* cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[2]/div/div[2]/div/div[2]/div[1]/div[2]/div[2]/div[2]/a/div/div/div').click();
      
      cy.wait(2000);

      cy.xpath('//*[@id="__next"]/div[1]/div/div[3]/div/div/div[2]/div[2]/div[2]/div/div/div/div[1]/img').click();*/

    })
})
