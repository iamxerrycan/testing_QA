// add.cy.js
const { add } = require('../add')

it('adds numbers', () => {
  expect(add(2, 3)).to.equal(5)
})