https://swapi.co/api/planets/1/

describe('SW Planet', () => {
    it('Get Tatooine', () => {
        cy.request('https://swapi.co/api/planets/1/').then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property("name", "Tatooine")
            expect(response.body).to.have.property("rotation_period", "23")
            expect(response.body).to.have.property("orbital_period", "304")
            expect(response.body).to.have.property("diameter", "10465")
            expect(response.body).to.have.property("climate", "arid")
            expect(response.body).to.have.property("gravity", "1 standard")
            expect(response.body).to.have.property("terrain", "desert")
            expect(response.body).to.have.property("surface_water", "1")
            expect(response.body).to.have.property("population", "200000")
         })
    })
  })