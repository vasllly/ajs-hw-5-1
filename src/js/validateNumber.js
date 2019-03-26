export default function validateNumber(input) {
  try {
    if (input === input.match(/\d+/)[0] && input[0] !== '0') {
      return +input;
    }
  } catch (error) {
    throw new TypeError('Неверный тип вводимых данных');
  }
  throw new TypeError('Неверный тип вводимых данных');
}
