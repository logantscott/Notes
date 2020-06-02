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

  it('adds a not and console.logs', () => {
    // { log: () => print to screen }
    console.log = jest.fn();

    const action = {
      type: 'add',
      payload: 'My Note'
    };

    const note = add(action);

    // expect that a console.log happened
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`Note added: ${note.text}`)
  });

  it('execute on an action', () => {
    const action = {
      type: 'add',
      payload: 'My Note'
    };

    const note = execute(action);

    expect(note).toEqual({
      id: expect.any(Number),
      text: 'My Note'
    });
  });

  it('does nothing if the action type is not understood', () => {
    const action = {
      type: 'badType',
      payload: 'whatever'
    };

    const result = execute(action);

    expect(result).toBeUndefined();
  });
});