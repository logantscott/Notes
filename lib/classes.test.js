// temp placeholder for class tests

const { Notes } = require('./notes');

describe('Note Class', () => {
  it('returns nothing from execute method if no command given', () => {
    const action = {
      type: '',
      payload: 'My Note'
    };

    const note = Notes.execute(action);
    // console.log(note);

    expect(note).toBeFalsy();
  });

  it('returns a console.log if input is valid', () => {
    // { log: () => print to screen }
    console.log = jest.fn();

    const action = {
      type: 'add',
      payload: 'My Note'
    };

    const note = Notes.execute(action);

    // expect that a console.log happened
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`Note added: ${note.text}`)
  });

  it('returns a note with both id and text properties if input is valid', () => {
    const action = {
      type: 'add',
      payload: 'My Note'
    };

    const note = Notes.execute(action);

    expect(note).toEqual({
      id: expect.any(Number),
      text: 'My Note'
    });
  });
});