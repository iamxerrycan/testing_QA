describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})
// add.cy.js
const { add } = require('../add')

it('adds numbers', () => {
  expect(add(2, 3)).to.equal(5)
})