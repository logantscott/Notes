const { add, execute } = require('./notes');

// Nothing is returned if no command given
// If the command and data were both valid, assert that a note is returned (a note is an object { text: 'My Note' })

describe('notes functions', () => {
  it('adds a note', () => {
    const action = {
      type: 'add',
      payload: 'My Note'
    };

    const note = add(action);

    // TODO notes should have ids
    expect(note).toEqual({
      id: expect.any(Number),
      text: 'My Note'
    });
  });
});