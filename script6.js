// ### ****[Трансформировать в объекты](https://learn.javascript.ru/array-methods#transformirovat-v-obekty)****

// У вас есть массив объектов `user`, и у каждого из объектов есть `name`, `surname` и `id`.

// Напишите код, который создаст ещё один массив объектов с параметрами `id` и `fullName`, где `fullName` – состоит из `name` и `surname`.

// Например:
{
  let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
  let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
  let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

  let users = [vasya, petya, masha];

  let usersMapped = users.map((obj) => {
    return {
      fullName: `${obj.name} ${obj.surname}`,
      id: obj.id,
    };
  });

  alert(usersMapped[0].id); // 1
  alert(usersMapped[0].fullName); // Вася Пупки
}
