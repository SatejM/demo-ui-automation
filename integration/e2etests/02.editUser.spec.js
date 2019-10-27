

let firstName = Math.random().toString(36).substring(7);




/** TEST DESCRIPTION:
 * Test Name: Edit existing user
 * Test Details
 *  This test verifies the following:
 *  1. Logins with valid credentials
 *  2. Edit Name of the user
 *  3. Verifies updated user details
 */


/** TO DO:
* 1. Use parameterization or create OR for web elements.
* 2. Create reusable utility function for assertions.
*/



context('Customer edits user on the website ', () => {


  it('Customer logins with valid credentials', () => {

    cy.visit('http://cafetownsend-angular-rails.herokuapp.com/login')

      .get('input[ng-model="user.name"]').type('Luke')

      .get('input[ng-model="user.password"]').type('Skywalker')

      .get('button[class="main-button"]').click();

  })


  it('Customer edits user and verifies if it is edited', () => {

    cy.get('li[ng-repeat="employee in employees"]').then(function ($lis, $index) {

      cy.wrap($lis[0]).click();
    })

    cy.get('a[id="bEdit"]').click()

      .get('input[ng-model="selectedEmployee.firstName"]').type(firstName)

      .get('button[ng-hide="isCreateForm"]').click();

    cy.get('li[ng-repeat="employee in employees"]').then(function ($lis, $index) {

      cy.wrap($lis).invoke('text').then((text) => {

        cy.log(text)

        expect(text).to.include(firstName)

      })
    })

  })

})
