// ### ****[Функция pow(x,n)](https://learn.javascript.ru/function-basics#funktsiya-pow-x-n)****

// Напишите функцию `pow(x,n)`, которая возвращает `x` в степени `n`. Иначе говоря, умножает `x` на себя `n` раз и возвращает результат.

function pow(x, n) {
  let result = x;
  if (n == 0 && x > 0) return 1;
  else if (x === 0) return 0;
  while (--n) {
    result *= x;
  }
  return result;
}

const arg = +prompt('Введите число', 1);
const degree = +prompt('Введите степень', 1);

alert(pow(arg, degree));
