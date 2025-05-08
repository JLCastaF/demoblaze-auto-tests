describe('template spec', () => {

    beforeEach(() => {
      // Before each test, clear the cache by closing and opening the browser
      cy.clearCookies();
      cy.clearLocalStorage();
      
    });
    
    it('passes', () => {
      cy.visit('https://staging-order.justsalad.com/')
  
      cy.wait(2000);

      //cy.contains('SIGN IN').click();
    
      cy.xpath('//*[@id="__next"]/div[1]/div/div[3]/div/div[4]/a[1]/div/div/div').click();
  
  
      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/form/div/div[2]/div/div[7]/div[1]/div/div[1]/input').type('nlazo+078@justsalad.com');

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/form/div/div[2]/div/div[7]/div[2]/div/div[1]/input').type('Password.1');

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/form/div/div[2]/div/div[7]/div[4]/a/div').click();

     // cy.get('.css-175oi2r').type('nayibi+staging@justsalad.com');
      
    })
  })