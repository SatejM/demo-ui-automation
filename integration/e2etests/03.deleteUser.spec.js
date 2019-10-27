


let firstName;


/** TEST DESCRIPTION:
 * Test Name: Delete existing user
 * Test Details
 *  This test verifies the following:
 *  1. Logins with valid credentials
 *  2. Delete user
 *  3. Verifies user is deleted
 */


/** TO DO:
* 1. Use parameterization or create OR for web elements.
* 2. Create reusable utility function for assertions.
*/



context('Customer deletes user on the website ', () => {


  it('Customer logins with valid credentials', () => {

    cy.visit('http://cafetownsend-angular-rails.herokuapp.com/login')

      .get('input[ng-model="user.name"]').type('Luke')

      .get('input[ng-model="user.password"]').type('Skywalker')

      .get('button[class="main-button"]').click();

  })


  it('Customer deletes user and verifies if it is deleted', () => {

    cy.get('li[ng-repeat="employee in employees"]').then(function ($lis, $index) {

      cy.wrap($lis[0]).click();

      firstName = cy.wrap($lis[0]).invoke('text')

    })

    cy.get('a[id="bDelete"]').click({force:true});

    cy.get('li[ng-repeat="employee in employees"]').then(function ($lis, $index) {

      cy.wrap($lis).invoke('text').then((text) => {

        cy.log(text);

        expect(text).to.not.include(firstName);

      })
    })

  })

})
