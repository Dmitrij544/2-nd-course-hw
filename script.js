/*Задание №1*/
let password = 'пароль';
let userGuess = prompt('Введите пароль');

if (userGuess === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неверно');
}

/*Задание №2*/
let c = 0;

if (c > 0 && c < 10) {
    alert('Верно'); 
} else {
    alert('Неверно'); 
}

/*Задание №3*/
let d = 150;
let e = 50;  

if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

/*Задание №4*/
let a = '2';
let b = '3';
alert(+a + +b);

/*Задание №5*/
let monthNumber = Number(prompt('Введите номер месяца (от 1 до 12):'));

if (monthNumber > 12 || monthNumber < 1) {
    alert('Ошибка: в году всего 12 месяцев.');
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            alert('Зима');
            break;
        case 3:
        case 4:
        case 5:
            alert('Весна');
            break;
        case 6:
        case 7:
        case 8:
            alert('Лето');
            break;
        case 9:
        case 10:
        case 11:
            alert('Осень');
            break;
    }
}
