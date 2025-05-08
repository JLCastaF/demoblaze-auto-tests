describe('template spec', () => {

  beforeEach(() => {
    // Before each test, clear the cache by closing and opening the browser
    cy.clearCookies();
    cy.clearLocalStorage();
    
  });
  
  it('passes', () => {
    cy.visit('https://staging-order.justsalad.com/')

    cy.wait(2000);

    cy.contains('Login').click();

    cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/form/div/div[3]/div[1]/div/input').type('nayibi+staging@justsalad.com');

    cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/form/div/div[3]/div[2]/div/input').type('Password.1');

    cy.xpath('//*[@id="__next"]/div[1]/div[2]/div[2]/form/div/div[3]/div[3]/a/div/div/div').click();
    
   // cy.get('.css-175oi2r').type('nayibi+staging@justsalad.com');
    
  })
})