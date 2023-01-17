// ### ****[Получить средний возраст](https://learn.javascript.ru/array-methods#poluchit-sredniy-vozrast)****

// Напишите функцию `getAverageAge(users)`, которая принимает массив объектов со свойством `age`и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: `(age1 + age2 + ... + ageN) / N`.

// Например:
{
  let vasya = { name: 'Вася', age: 25 };
  let petya = { name: 'Петя', age: 30 };
  let masha = { name: 'Маша', age: 29 };

  let arr = [vasya, petya, masha].map((obj) => obj.age);

  function getAverageAge(arr) {
    return arr.reduce((accum, age) => accum + age, 0) / arr.length;
  }

  alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
}
