import validator from '../src/js/script';

test('fetchData return status error', () => {
  const received = validator('1');
  const expected = 1;
  expect(received).toBe(expected);
});

test('fetchData return status error', () => {
  function inputString() {
    validator('string');
  }
  expect(inputString).toThrowError(new TypeError('Неверный тип вводимых данных'));
});
