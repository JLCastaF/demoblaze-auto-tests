describe('template spec', () => {

    beforeEach(() => {
        // Before each test, clear the cache by closing and opening the browser
        cy.clearCookies();
        cy.clearLocalStorage();
        
      });

    it('passes', () => {
      cy.visit('https://staging-order.justsalad.com/')
  
      cy.wait(2000);
  
      cy.xpath('//*[@id="__next"]/div[1]/div/div[3]/div/div[1]/div[2]/div/div[2]/a[1]/div/div/div').click();
      
      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div/div/div[3]/div[12]/div/div/div/button[1]').click().click().click();
            
      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div/div/div[3]/div[1]/div[2]/div/div[3]/div[57]/img').click();

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[2]/div/div[2]/div/div[2]/div[1]/div[2]/div[2]/div[2]/a/div/div/div').click();
      
      cy.wait(2000);

      cy.xpath('//*[@id="__next"]/div[1]/div/div[3]/div/div/div[2]/div[2]/div[2]/div/div/div/div[1]/img').click();
  

     // Greens

      cy.wait(2000);

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/a[2]/div/div/div').click();

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[1]/div[2]/div[2]/div/div[1]/a/div/div/div').click();

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[1]/div[2]/div[3]/div/div[1]/img').click();

      // Essentials

      cy.wait(2000);

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div/div/div[1]/div/div/button[2]/div').click();

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[2]/div[3]/div[3]/div/div[1]/a/div/div/div').click();

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[2]/div[3]/div[20]/div/div[1]/img').click();

     // Premiums

      cy.wait(2000);

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div/div/div[1]/div/div/button[3]/div').click();
      
      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/div[3]/div[1]/div/div[1]/a/div/div/div').click();

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/div[3]/div[4]/div/div[1]/img').click();
     
     // Proteins

      cy.wait(2000);
      
      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div/div/div[1]/div/div/button[4]/div').click();

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[4]/div[3]/div[1]/div/div[1]/a/div/div/div').click();

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[4]/div[3]/div[2]/div/div[1]/img').click();

     // Cheese

      cy.wait(2000);
      
      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div/div/div[1]/div/div/button[5]/div').click();

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[5]/div[3]/div[1]/div/div[1]/a/div/div/div').click();

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[5]/div[3]/div[4]/div/div[1]/img').click();

     // Other

      cy.wait(2000);

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[6]/div[3]/div[1]/div/div[1]/img').click();

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[6]/div[3]/div[1]/div/div[1]/a/div/div/div').click();

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[6]/div[3]/div[5]/div/div[1]/img').click();


     // Dressings

     cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[7]/div[3]/div[2]/div/div[1]/a/div/div/div').click();

     cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div[7]/div[3]/div[4]/div/div[1]/img').click();
     

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/a[1]/div/div/div').click();
      
      cy.wait(2000);

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/a[1]/div/div/div').click();

      cy.wait(2000);

      cy.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/div[2]/div/div/div/a/div/div/div').click();
      

      //Guest Checkout

      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/form/div/div[3]/div[10]/a/div/div/div').click();
 
      
      
      cy.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/div[3]/div[3]/div[1]/div[1]/div[2]/div[1]/input').type('Nayibi');

      cy.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/div[3]/div[3]/div[1]/div[1]/div[2]/div[2]/input').type('Lazo');

      cy.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/div[3]/div[3]/div[1]/div[1]/div[3]/div[1]/input').type('nayibi+staging@justsalad.com');

      cy.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/div[3]/div[3]/div[1]/div[1]/div[3]/div[2]/input').type('(556) 321 - 3213');


      cy.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/div[3]/div[3]/div[1]/div[5]/div[2]/div/div[3]/div/div').click();

      //ADD ONE TIME PAYMENT
            
      //cy.xpath('/html/body/div[5]').click({ force: true });
         
      cy.xpath('/html/body/div[6]/div/div[2]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/input').invoke('show').type('Nayibi Lazo');

      cy.xpath('/html/body/div[6]/div/div[2]/div/div/div/div[2]/div[2]/div[2]/div[2]/div/input').type('4111111111111111');

      cy.xpath('/html/body/div[6]/div/div[2]/div/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/input').type('06/27');

      cy.xpath('/html/body/div[6]/div/div[2]/div/div/div/div[2]/div[2]/div[2]/div[3]/div[2]/input').type('123');

      cy.xpath('/html/body/div[6]/div/div[2]/div/div/div/div[2]/div[2]/div[2]/div[4]/div/input').type('33101');

      cy.xpath('/html/body/div[6]/div/div[2]/div/div/div/div[2]/div[3]/a/div/div/div').click();

      cy.wait(2000);
      
      cy.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/div[4]/div/a/div/div/div/span[2]').click();

      cy.wait(2000);

      cy.contains('ORDER SUBMITTED').should('be.visible');
           
      //cy.get('[id="location_search"]').click().type('Midtown West (55th + 6th){enter}');

    
     
      
      //cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div').click();
                  
      /*cy.contains('Login').click();
  
      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/form/div/div[3]/div[1]/div/input').type('nayibi+staging@justsalad.com');
  
      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/form/div/div[3]/div[2]/div/input').type('Password.1');
  
      cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/form/div/div[3]/div[3]/a/div/div/div').click();*/
      
     // cy.get('.css-175oi2r').type('nayibi+staging@justsalad.com');
      
    })
  })