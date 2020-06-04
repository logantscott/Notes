const { Input } = require('./input');

describe('Input Class', () => {
  let input;
  beforeEach(() => {
    const commandLineArguments = ['node', 'index.js', '--add', 'I am a note', '--list', 'hi there'];
    input = new Input(commandLineArguments);
  })

  it('returns true given valid input', () => {
    expect(input.valid()).toBeTruthy();
  });

  it('creates a new instance with both type and payload properties', () => {
    expect(input.type).toEqual('add');
    expect(input.payload).toEqual('I am a note');
  });

  it('returns false given invalid input', () => {
    inputWithoutAdd = new Input(['node', 'index.js', 'bad', 'I am a note', '--udpate', 'hi there']);
    expect(inputWithoutAdd.valid()).toBeFalsy();
    inputWithoutPayload = new Input(['node', 'index.js', '--add']);
    expect(inputWithoutPayload.valid()).toBeFalsy();
  });
});