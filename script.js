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
const title = document.querySelector('.section__title');
const btn = document.querySelector('.section__btn');

btn.textContent = 'Скрыть';

btn.addEventListener('click', () => {
    
    if (title.style.display === 'none') {
        title.style.display = 'block';
        btn.textContent = 'Скрыть';
    } else {
        title.style.display = 'none';
        btn.textContent = 'Показать';
    }
});

/*Задание №2*/
const text = document.querySelector('.section1__text');
const btn1 = document.querySelector('.section1__btn');

btn1.textContent = 'Изменить цвет';

btn1.addEventListener('click', () => {
    text.style.color = 'blue';
    btn1.textContent = 'Цвет изменен';
}, { once: true }); 

/*Задание №3*/
const title2 = document.querySelector('.section2__title');
const btn2 = document.querySelector('.section2__btn');

btn2.textContent = 'Изменить текст';
title2.textContent = 'Lorem';

btn2.addEventListener('click', () => {
    title2.textContent = 'Привет, мир!';
    btn2.textContent = 'Текст изменён';
}, { once: true }); 

/*Задание №4*/
const description = document.querySelectorAll('.description');

description.forEach((item) => {
    item.textContent = 'Изменённый текст';
});

/*Задание №5*/
const description1 = document.querySelectorAll('.description1');

description1.forEach((item) => {
    item.textContent = 'Новый текст';
});

/*Задание №6*/
const btn3 = document.querySelector('.btn3');
const newDiv = document.createElement('div');
newDiv.textContent = 'Новый элемент';

btn3.textContent = 'Добавить элемент';

btn3.addEventListener('click', () => {
    document.body.appendChild(newDiv);
    btn3.textContent = 'Элемент добавлен';
}, { once: true }); 

/*Задание №7*/
const description2 = document.querySelector('.description2');
const btn4 = document.querySelector('.btn4');

btn4.textContent = 'Удалить элемент';

btn4.addEventListener('click', () => {
    description2.remove()
    btn3.textContent = 'Элемент удалён';
}, { once: true }); 









