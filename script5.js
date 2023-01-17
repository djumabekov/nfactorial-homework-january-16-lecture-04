// ### Т****[рансформировать в массив имён](https://learn.javascript.ru/array-methods#transformirovat-v-massiv-imyon)****

// У вас есть массив объектов `user`, и в каждом из них есть `user.name`. Напишите код, который преобразует их в массив имён.

// Например:
{
  let vasya = { name: 'Вася', age: 25 };
  let petya = { name: 'Петя', age: 30 };
  let masha = { name: 'Маша', age: 28 };

  let users = [vasya, petya, masha];

  let names = users.map((obj) => obj.name);

  alert(names); // Вася, Петя, Маша
}
