

let firstName = Math.random().toString(36).substring(7);

let lastName = Math.random().toString(36).substring(7);

/** TEST DESCRIPTION:
 * Test Name: Add new user
 * Test Details
 *  This test verifies the following:
 *  1. Logins with valid credentials
 *  2. Creates new user
 *  3. Verifies new use is created
 */


 /** TO DO:
 * 1. Use parameterization or create OR for web elements.
 * 2. Create reusable utility function for assertions.
 */



context('Customer creates a new user on the website ', () => {


  it('Customer logins with valid credentials', () => {

    cy.visit('http://cafetownsend-angular-rails.herokuapp.com/login')

      .get('input[ng-model="user.name"]').type('Luke')

      .get('input[ng-model="user.password"]').type('Skywalker')

      .get('button[class="main-button"]').click();

  })

  it('Customer creates new user', () => {

    
    cy.get('a[id="bAdd"]').click()

      .get('input[ng-model="selectedEmployee.firstName"]').type(firstName)

      .get('input[ng-model="selectedEmployee.lastName"]').type(lastName)

      .get('input[ng-model="selectedEmployee.startDate"]').type('2019-10-27')

      .get('input[ng-model="selectedEmployee.email"]').type('satej.mirpagar@gmail.com')

      .get('button[ng-show="isCreateForm"]').click()

    cy.get('li[ng-repeat="employee in employees"]').then(function ($lis, $index) {

      cy.wrap($lis).invoke('text').then((text) => {

        cy.log(text)

        expect(text).to.include(firstName)

        expect(text).to.include(lastName)

      })
    })

  })

})
