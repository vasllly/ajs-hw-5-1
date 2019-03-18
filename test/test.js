import validator from '../src/js/script';

test('validator return 1', () => {
  const received = validator('1');
  const expected = 1;
  expect(received).toBe(expected);
});

test('validator return type error', () => {
  function inputString() {
    validator('string');
  }
  expect(inputString).toThrowError(new TypeError('Неверный тип вводимых данных'));
});
