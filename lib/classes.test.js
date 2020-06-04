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

  });

  it('returns a note with both id and text properties if input is valid', () => {

  });
});