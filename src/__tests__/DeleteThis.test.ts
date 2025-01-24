// This test ensures jest is able to test Node function properly
// Important for ensuring the templates functionality stays in-tact over time
// Feel free to delete this file after cloning template
function example() {
  return 'something'
}

describe('example', () => {
  it('passes', () => {
    const result = example()

    expect(result).toEqual('something')
  })
})
