/*Угадай число*/
window.onload = function() {
    
    const openBtns = document.querySelectorAll('.product-2__btn, .product-3__btn');
    const modal = document.querySelector('.game-modal');
    const closeBtn = document.querySelector('.game-modal__close');
    const checkBtn = document.querySelector('.game-modal__btn');
    const input = document.querySelector('.game-modal__input');
    const message = document.querySelector('.game-modal__text');
    const resetBtn = document.querySelector('.game-modal__btn2');

    let randomNumber;
    let attempts = 0;

    openBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); 
            modal.style.display = 'flex'; 
            initGame();
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    if (checkBtn) {
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
    }

    function initGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        if (message) message.textContent = 'Удачи!';
        if (input) input.value = '';
        if (resetBtn) resetBtn.style.display = 'none';
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', initGame);
    }
};

/*Простая арифметика*/
document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.product-3__btn2, .product-2__btn2');
    const modal = document.querySelector('.math-modal-overlay');
    const close = document.querySelector('.math-close');
    const questionEl = document.querySelector('.math-question');
    const inputEl = document.querySelector('.math-input');
    const checkBtn = document.querySelector('.math-submit-btn');
    const msgEl = document.querySelector('.math-message');

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

    btns.forEach(oneBtn => {
        oneBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
            generateTask();
        });
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
    
    const openBtns = document.querySelectorAll('.product-2__btn3, .product-3__btn3');
    
    const modal = document.querySelector('.reverse-modal');
    const closeBtn = document.querySelector('.reverseClose');
    const actionBtn = document.querySelector('.reverseAction');
    const inputField = document.querySelector('.reverseInput');
    const resultField = document.querySelector('.reverseResult');

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modal) {
                modal.style.display = 'flex'; 
                inputField.value = ''; 
                resultField.textContent = ''; 
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

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

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
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

    const quizBtns = document.querySelectorAll('.product-2__btn6, .product-3__btn6');

    quizBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            let correctCount = 0; 

            for (let i = 0; i < quiz.length; i++) {
                const currentQuestion = quiz[i];
                
                const fullQuestionText = 
                    `${currentQuestion.question}\n` + 
                    `${currentQuestion.options.join("\n")}\n\n` + 
                    "Введите номер правильного ответа:";

                const userAnswer = prompt(fullQuestionText);

                if (userAnswer === null) break;

                if (parseInt(userAnswer) === currentQuestion.correctAnswer) {
                    correctCount++;
                }
            }

            alert(`Викторина окончена!\nВаш результат: ${correctCount} из ${quiz.length}`);
        });
    });
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
/*Генератор случайных цветов*/
document.addEventListener('DOMContentLoaded', () => {
    
    const colorBtns = document.querySelectorAll('.product-2__btn5, .product-3__btn5');

    const getRandomColor = () => {
        return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    };

    colorBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const card = btn.closest('.product-2_3, .product-3_3');
            
            if (card) {
                const newColor = getRandomColor();
                card.style.backgroundColor = newColor;
                card.style.transition = 'background-color 0.3s ease';
                console.log("Цвет изменен на:", newColor);
            }
        });
    });
});

