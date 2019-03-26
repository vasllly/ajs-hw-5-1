import validateNumber from '../src/js/validateNumber';

test('validator return 1', () => {
  const received = validateNumber('1');
  const expected = 1;
  expect(received).toBe(expected);
});

test('validator return type error', () => {
  function inputString() {
    validateNumber('string');
  }
  expect(inputString).toThrowError(new TypeError('Неверный тип вводимых данных'));
});

test('testing numeric input, should be ok', () => {
  const input = '555';
  const expected = 555;
  const received = validateNumber(input);
  expect(received).toBe(expected);
});

test('a text input should throw an error', () => {
  const input = 'one';
  const received = () => validateNumber(input);
  expect(received).toThrow();
});

test('a hexadecimal number should throw an error', () => {
  const input = '0xabc';
  const received = () => validateNumber(input);
  expect(received).toThrow();
});

test('an binar number should throw an error', () => {
  const input = '0b011111111';
  const received = () => validateNumber(input);
  expect(received).toThrow();
});

test('an octal number should throw an error', () => {
  const input = '07333';
  const received = () => validateNumber(input);
  expect(received).toThrow();
});

test('a float should throw an error', () => {
  const input = '5.5';
  const received = () => validateNumber(input);
  expect(received).toThrow();
});

test('zero should throw an error', () => {
  const input = '0';
  const received = () => validateNumber(input);
  expect(received).toThrow();
});

test('a negative number should throw an error', () => {
  const input = '-5';
  const received = () => validateNumber(input);
  expect(received).toThrow();
});

test('a empty string should throw an error', () => {
  const input = '';
  const received = () => validateNumber(input);
  expect(received).toThrow();
});
