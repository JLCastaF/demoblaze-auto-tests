describe('template spec', () => {

    beforeEach(() => {
      // Before each test, clear the cache by closing and opening the browser
      cy.clearCookies();
      cy.clearLocalStorage();
      
    });
    
    it('passes', () => {
      cy.visit('https://www.demoblaze.com/')
  
      cy.wait(2000);

      cy.xpath('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click(); /*Samsung galaxy s6*/
      
      cy.wait(1000);

      cy.xpath('//*[@id="tbodyid"]/div[2]/div/a').click(); /*Add to cart*/
    
      cy.wait(1000);

      cy.xpath('//*[@id="navbarExample"]/ul/li[4]/a').click(); /*Cart*/

      cy.wait(1000);

      cy.xpath('//*[@id="page-wrapper"]/div/div[2]/button').click(); /*Place Order*/

      cy.wait(1000);

      cy.xpath('//*[@id="name"]').type('Bora Bora');
       
      cy.xpath('//*[@id="country"]').type('Polinesia Francesa');

      cy.xpath('//*[@id="city"]').type('Islas de la Sociedad');

      cy.xpath('//*[@id="card"]').type('4111 1111 1111 1111');

      cy.xpath('//*[@id="month"]').type('05');

      cy.xpath('//*[@id="year"]').type('2028');


      cy.xpath('//*[@id="orderModal"]/div/div/div[3]/button[2]').click(); /*Purchase*/
           

      cy.xpath('/html/body/div[10]/div[7]/div/button').click(); /*Ok*/


    })
})
