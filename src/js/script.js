export default function validator(input) {
  if (!Number.isNaN(+input)) {
    return +input;
  }
  throw new TypeError('Неверный тип вводимых данных');
}
