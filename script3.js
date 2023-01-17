// ### ****[Перепишите с использованием функции-стрелки](https://learn.javascript.ru/arrow-functions-basics#perepishite-s-ispolzovaniem-funktsii-strelki)****

// Замените код Function Expression стрелочной функцией:

const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  'Вы согласны?',
  function () {
    alert('Вы согласились.');
  },
  function () {
    alert('Вы отменили выполнение.');
  },
);
