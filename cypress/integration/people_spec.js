https://swapi.co/api/people/1/

describe('SW People', () => {
    it('Get Luke Skywalker', () => {
        cy.request('https://swapi.co/api/people/1/').then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property("name", "Luke Skywalker")
            expect(response.body).to.have.property("height", "172")
            expect(response.body).to.have.property("mass", "77")
            expect(response.body).to.have.property("hair_color", "blond")
            expect(response.body).to.have.property("skin_color", "fair")
            expect(response.body).to.have.property("eye_color", "blue")
            expect(response.body).to.have.property("birth_year", "19BBY")
            expect(response.body).to.have.property("gender", "male")
         })
    })
  })