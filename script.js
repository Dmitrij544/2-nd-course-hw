/*Задание №1*/
console.log("Привет");
console.log("Привет");
/*Задание №2*/
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
/*Задание №3*/
for (let i = 7; i <= 22; i++) {
  console.log(i);
}
/*Задание №4*/
const obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
};
/*Задание №5*/
for (let name in obj) {
  console.log(`${name} — зарплата ${obj[name]} долларов`);
}
let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2;
  num++;
}

console.log("Результат:", n);
console.log("Количество итераций:", num);
/*Задание №6*/
let firstFriday = 3; 

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}