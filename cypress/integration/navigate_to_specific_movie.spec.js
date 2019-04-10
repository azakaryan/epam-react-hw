context('Viewport', () => {

  before(function() {
    cy.visit('http://localhost:8080');
  });

  after(function() {
    cy.clock();
  });

  it('10 movies should be rendered when navigating to home page', () => {
    cy.wait(20);
    const moviesEl = cy.get('#movies');
    moviesEl.should('be.visible');
    moviesEl.children().should('have.length', 10)
  });

  it('When clicking to specific movie the details page of movie should be opened', () => {
    const movieEl = cy.get('#movie').first();
    movieEl.should('be.visible');

    movieEl.click();

    const movieDetailsEl = cy.get('#movie-details');
    movieDetailsEl.should('be.visible');
  });

  it('When clicking to SEARCH button should navigate to movies home', () => {
    cy.get('#search-btn').should('be.visible').click();

    cy.wait(20);
    cy.get('#movie-home').should('be.visible');
  });

});
