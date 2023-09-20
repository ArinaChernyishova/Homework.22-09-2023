'use strict';

// ==== Задача 1: https://learn.javascript.ru/task/hello-alert ====
/*Задание: */ alert('Задача 1: Создайте страницу, которая отобразит сообщение «Я JavaScript!»');
alert('«Я JavaScript!»');

// ==== Задача 2: https://learn.javascript.ru/task/hello-variables ====
let admin;
let name;
name = 'Джон';
admin = name;
/*Задание: */ alert('Задача 2: Объявите две переменные: admin и name. Запишите строку "Джон" в переменную name. Скопируйте значение из переменной name в admin. Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).')
alert(admin);

// ==== Задача 3: https://learn.javascript.ru/task/simple-page ====
/*Задание: */ alert('Задача 3: Создайте страницу, которая спрашивает имя у пользователя и выводит его.')
let nameUser = prompt('Как Вас зовут?', "");
alert(nameUser);

// ==== Задача 4: https://learn.javascript.ru/task/fix-prompt ====
/*Задание: */ alert('Задача 4: Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму. Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию). В чём ошибка? Исправьте её. Результат должен быть 3.');
let a = +prompt('Первое число?', 1);
let b = +prompt('Второе число?', 2);
alert(a + b);

// ==== Задача 5: https://learn.javascript.ru/task/check-standard ====
/*Задание: */ alert('Задача 5: Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“ Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»')
let nameJs = prompt('Какое «официальное» название JavaScript?', '');
if (nameJs == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!')
};

// ==== Задача 6: https://learn.javascript.ru/task/sign ====
/*Задание: */ alert('Задача 6: Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert: 1, если значение больше нуля, -1, если значение меньше нуля, 0, если значение равно нулю. Предполагается, что пользователь вводит только числа.')
let num = prompt('Введите число', 'Ваше число?');
if (num < 0) {
    alert(1);
} else if (num > 0) {
    alert (-1);
} else {
    alert(0)
}

// ==== Задача 7: https://learn.javascript.ru/task/rewrite-if-question ====
/*Задание: БЕЗ ВЫВОДА */
let result;
result = (a + b < 4) ? 'Мало' : 'Много';

// ==== Задача 8: https://learn.javascript.ru/task/rewrite-if-else-question ====
/*Задание: БЕЗ ВЫВОДА */
message = (login == 'Сотрудник') ? message = 'Привет' :
    (login == 'Директор') ? message = 'Здравствуйте' :
    (login == '') ? message = 'Нет логина' :
    (message = '');

