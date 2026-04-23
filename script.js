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

/*Переверни текст*/
document.addEventListener('DOMContentLoaded', () => {
    
    const modal = document.getElementById('reverse-modal');
    const openBtn = document.getElementById('playReverseGame');
    const closeBtn = document.getElementById('reverseClose');
    const actionBtn = document.getElementById('reverseAction');
    const inputField = document.getElementById('reverseInput');
    const resultField = document.getElementById('reverseResult');

    if (openBtn) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modal-active');
            inputField.value = ''; 
            resultField.textContent = ''; 
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('modal-active');
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('modal-active');
        }
    });

    if (actionBtn) {
        actionBtn.addEventListener('click', () => {
            const text = inputField.value;

            if (text.trim() === "") {
                resultField.textContent = "Сначала введите текст!";
                resultField.style.color = "red";
                return;
            }

            const reversed = text.split('').reverse().join('');
            
            resultField.style.color = "#333";
            resultField.textContent = reversed;
        });
    }
});

/* Викторина*/
document.addEventListener('DOMContentLoaded', () => {
   
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    const quizBtn = document.getElementById('quiz-btn');

    if (quizBtn) {
        quizBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            let correctCount = 0; 

            for (let i = 0; i < quiz.length; i++) {
                const currentQuestion = quiz[i];
                
                const fullQuestionText = 
                    currentQuestion.question + "\n" + 
                    currentQuestion.options.join("\n") + "\n\n" + 
                    "Введите номер правильного ответа:";

                const userAnswer = prompt(fullQuestionText);

                if (parseInt(userAnswer) === currentQuestion.correctAnswer) {
                    correctCount++;
                }
            }

            alert("Викторина окончена!\nВаш результат: " + correctCount + " из " + quiz.length);
        });
    }
});

/*Задание №1*/
const str = 'js';
const result = str.toUpperCase();

console.log(result); 

/*Задание №2*/
function filterByStart(array, searchString) {
    const searchLower = searchString.toLowerCase();
    
    return array.filter(item => 
        item.toLowerCase().startsWith(searchLower)
    );
}

// Пример использования:
const words = ['Apple', 'banana', 'Apricot', 'Orange', 'application'];
const search = 'ap';

const filteredWords = filterByStart(words, search);
console.log(result); 

/*Задание №3*/
Math.floor(32.58884);
Math.ceil(32.58884); 
Math.round(32.58884); 

/*Задание №4*/
const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...numbers)); 
console.log(Math.min(...numbers)); 

/*Задние №5*/
function getRandomTen() {
    
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

// Вызов функции
getRandomTen();

/*Задание №6*/
function getRandomArray(n) {
    const result = [];
    
    const arrayLength = Math.floor(n / 2);

    for (let i = 0; i < arrayLength; i++) {
        
        const randomNum = Math.floor(Math.random() * (n + 1));
        result.push(randomNum);
    }

    return result;
}

// Пример использования:
console.log(getRandomArray(10)); 
console.log(getRandomArray(7));  

/*Задание №7*/
function getRandomInRange(min, max) {
     
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(1, 10));  
console.log(getRandomInRange(50, 100)); 

/*Задание №8*/
console.log(new Date()); 

/*Задание №9*/

let currentDate = new Date();
console.log("Сегодняшняя дата:", currentDate.toLocaleDateString());

let futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73);

console.log("Дата через 73 дня:", futureDate.toLocaleDateString())

/*Задание №10*/
function formatDateTime(date) {
    
    const dateOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const weekdayOptions = { weekday: 'long' };

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const dateStr = date.toLocaleDateString('ru-RU', dateOptions);
    const weekdayStr = date.toLocaleDateString('ru-RU', weekdayOptions);
    const timeStr = date.toLocaleTimeString('ru-RU', timeOptions);

    return `Дата: ${dateStr} — это ${weekdayStr}.\nВремя: ${timeStr}`;
}

const now = new Date();
console.log(formatDateTime(now));