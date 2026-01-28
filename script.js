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

/*Камень, Ножницы, Бумага*/
function openRPS() {
    const options = ["камень", "ножницы", "бумага"];
    
    let userChoice = prompt("Введите ваш ход: камень, ножницы или бумага");

    if (userChoice === null) return;

    userChoice = userChoice.toLowerCase().trim();

    if (!options.includes(userChoice)) {
        alert("Ошибка! Нужно ввести только: камень, ножницы или бумага");
        return;
    }

    const computerChoice = options[Math.floor(Math.random() * 3)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    alert(`Ваш выбор: ${userChoice}\nВыбор ПК: ${computerChoice}\n\n${result}`);
}

/*Задание №1*/
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

/*Задание №2*/
function isPositive(number) {
    return number > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(filter([3, -4, 1, 9], isPositive)); 

const people_1 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));

/*Задание №3*/
const intervalId = setInterval(() => {
    console.log(new Date());
}, 3000);

setTimeout(() => {
    clearInterval(intervalId); 
    console.log("30 секунд прошло");
}, 30000);

/*Задание №4*/
function delayForSecond(callback) {
    
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

/*Задание №5*/
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log('Привет, ${name}!');
}

delayForSecond(() => sayHi('Глеб'));

