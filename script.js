/*Угадай число*/
window.onload = function() {
    
    const modal = document.getElementById('gameModal');
    const openBtn = document.getElementById('openGame');
    const closeBtn = document.getElementById('closeModal');
    const checkBtn = document.getElementById('checkBtn');
    const input = document.getElementById('userGuess');
    const message = document.getElementById('gameMessage');
    const resetBtn = document.getElementById('resetBtn');

    let randomNumber;
    let attempts = 0;

    openBtn.addEventListener('click', function(e) {
        e.preventDefault(); 
        modal.style.display = 'flex';
        initGame();
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    checkBtn.addEventListener('click', function() {
        const userGuess = Number(input.value);
        attempts++;

        if (userGuess === randomNumber) {
            message.textContent = `Победа! Угадано за ${attempts} попыток.`;
            resetBtn.style.display = 'block';
        } else if (userGuess > randomNumber) {
            message.textContent = 'Меньше...';
        } else {
            message.textContent = 'Больше...';
        }
    });

    function initGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        message.textContent = 'Удачи!';
        input.value = '';
        resetBtn.style.display = 'none';
    }

    resetBtn.addEventListener('click', initGame);
};

/*Простая арифметика*/
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('math-game-btn');
    const modal = document.getElementById('math-modal');
    const close = document.querySelector('.math-close');
    const questionEl = document.getElementById('math-question');
    const inputEl = document.getElementById('math-answer');
    const checkBtn = document.getElementById('math-check');
    const msgEl = document.getElementById('math-message');

    let result = 0;

    const generateTask = () => {
        const ops = ['+', '-', '*', '/'];
        const op = ops[Math.floor(Math.random() * ops.length)];
        let a, b;

        if (op === '/') {
            result = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            a = result * b;
        } else if (op === '*') {
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            result = a * b;
        } else {
            a = Math.floor(Math.random() * 100) + 1;
            b = Math.floor(Math.random() * 100) + 1;
            result = op === '+' ? a + b : a - b;
        }

        questionEl.textContent = `${a} ${op} ${b} = ?`;
        inputEl.value = '';
        msgEl.textContent = '';
    };

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        generateTask();
    });

    close.onclick = () => modal.style.display = 'none';
    
    checkBtn.onclick = () => {
        if (parseInt(inputEl.value) === result) {
            msgEl.textContent = "✅ Правильно!";
            msgEl.style.color = "green";
            setTimeout(generateTask, 1000);
        } else {
            msgEl.textContent = "❌ Попробуй еще раз";
            msgEl.style.color = "red";
        }
    };
});

/*Задание №1*/
const number = [1, 5, 4, 10, 0, 3];

for (const value of numbers) {
  console.log(value);
  if (value === 10) {
    break;
  }
}

/*Задание №2*/
const array = [1, 5, 4, 10, 0, 3];
const index = array.indexOf(4);

console.log(index); 

/*Задание №3*/
const numbe = [1, 3, 5, 10, 20];
const resul = numbers.join(' ');

console.log(result); 

/*Задание №4*/
const matri = [];

for (let i = 0; i < 3; i++) {
  const row = []; 
  
  for (let j = 0; j < 3; j++) {
    row.push(1); 
  }
  
  matrix.push(row);
}

console.log(matrix);

/*Задание №5*/
const numb = [1, 1, 1];
numbers.push(2, 2, 2);

console.log(numbers); 

/*Задание №6*/
const arr = [9, 8, 7, 'a', 6, 5];

arr.sort(); 

arr.pop(); 

console.log(arr); 

/*Задание №7*/
const num = [9, 8, 7, 6, 5];

const userGuess = Number(prompt('Угадайте число из массива:'));

if (numbers.includes(userGuess)) {
  alert('Угададал');
} else {
  alert('Не угадал');
}

/*Задание №8*/
const str = 'abcdef';

const resu = str.split('').reverse().join('');

console.log(result); 

/*Задание №9*/
const matrix = [[1, 2, 3], [4, 5, 6]];
const flatArray = matrix.flat();

console.log(flatArray); 

const nu = [3, 7, 1, 9, 4, 2, 8];

for (let i = 0; i < numbers.length - 1; i++) {
  const sum = numbers[i] + numbers[i + 1];
  console.log(`Сумма ${numbers[i]} и ${numbers[i + 1]} равна: ${sum}`);
}

/*Задание №10*/
const getSquares = (arr) => arr.map(num => num ** 2);

const n = [2, 5, 8, 10];
const squares = getSquares(numbers);

console.log(squares); 

/*Задание №11*/
const getWordLengths = (words) => words.map(word => word.length);

const strings = ['apple', 'banana', 'cherry'];
const lengths = getWordLengths(strings);

console.log(lengths); 

/*задание №12*/
const getLengths = (arr) => arr.map(str => str.length);

const fruits = ['яблоко', 'банан', 'груша', 'киви'];
const result = getLengths(fruits);

console.log(result); 

/*Задание №13*/
const getNegativeNumbers = (numbers) => numbers.filter(num => num < 0);

const data = [10, -5, 3, -2, 0, -8, 15];
const negatives = getNegativeNumbers(data);

console.log(negatives); 

/*Задние №14*/

const originalArray = [];
for (let i = 0; i < 10; i++) {
 
  const randomNumber = Math.floor(Math.random() * 11);
  originalArray.push(randomNumber);
}

const evenArray = originalArray.filter(num => num % 2 === 0);

console.log('Исходный массив:', originalArray);
console.log('Массив с четными значениями:', evenArray);

/*Задание №15*/

const numbers = [];
for (let i = 0; i < 6; i++) {

  numbers.push(Math.floor(Math.random() * 10) + 1);
}

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

const average = sum / numbers.length;

console.log('Сгенерированный массив:', numbers);
console.log('Среднее арифметическое:', average.toFixed(2)); 


