const { parse, valid } = require('./input');

describe('input functions', () => {
  it('can parse command line arguments', () => {
    const commandLineArguments = ['node', 'index.js', '--add', 'I am a note', '--list', 'hi there'];
    const action = parse(commandLineArguments);
    console.log('=============', action)

    expect(action).toEqual({
      type: 'add',
      payload: 'I am a note'
    });
  });

  it('can validate command line arguments with add', () => {
    const action = {
      type: 'add',
      payload: 'my note'
    };

    const isValid = valid(action);

    expect(isValid).toBeTruthy();
  });
  
  it('can invalidate bad command line arguments', () => {
    const action = {
      type: 'badType',
      payload: 'my note'
    };

    const isValid = valid(action);

    expect(isValid).toBeFalsy();
  });
});