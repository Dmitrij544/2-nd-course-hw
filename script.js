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

/*Задание №1*/
function getMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log("Результат getMin(8, 4):", getMin(8, 4)); 
console.log("Результат getMin(6, 6):", getMin(6, 6)); 
console.log("Результат getMin(15, 23):", getMin(15, 23)); 

/*Задание №2*/
function checkEven(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(checkEven(4));  
console.log(checkEven(7)); 
console.log(checkEven(0));

/*Задание №3*/
function logSquare(n) {
        console.log("Квадрат числа (вывод):", n * n);
    }

    function getSquare(n) {
        return n * n;
    }

    console.log("--- Проверка учебных функций ---");
    console.log("Минимум (8, 4):", getMin(8, 4));
    console.log("Четность (7):", checkEven(7));
    logSquare(5);
    let squareResult = getSquare(6);
    console.log("Результат функции возврата квадрата 6:", squareResult);

/*Задание №4*/
function checkAge() {
    
    const age = Number(prompt("Сколько вам лет?"));

    if (age < 0 || isNaN(age)) {
        
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        
        alert('Привет, друг!');
    } else if (age >= 13) {
        
        alert('Добро пожаловать!');
    }
}

/*Задание №5*/
function multiplyNumbers(a, b) {
    
    const num1 = Number(a);
    const num2 = Number(b);

    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        
        return num1 * num2;
    }
}

console.log("--- Проверка функции умножения ---");
console.log(multiplyNumbers(5, 10));     
console.log(multiplyNumbers("8", "3"));   
console.log(multiplyNumbers(10, "abc"));  
console.log(multiplyNumbers(undefined, 5)); 

/*Задание №6*/
function cubeNumber() {
   
    const input = prompt("Введите число, чтобы возвести его в куб:");
    
    const n = Number(input);

    if (input === null || input.trim() === "" || isNaN(n)) {
        
        const errorMsg = 'Переданный параметр не является числом';
        console.log(errorMsg);
        return errorMsg;
    } else {
        
        const result = n ** 3;
        const successMsg = `${n} в кубе равняется ${result}`;
        console.log(successMsg);
        return successMsg;
    }
}

function testCubeRange() {
    console.log("--- Автоматическая проверка кубов от 0 до 10 ---");
    for (let i = 0; i <= 10; i++) {
        const result = i ** 3;
        console.log(`${i} в кубе равняется ${result}`);
    }
}

testCubeRange();

/*Задание №7*/
function getCircleArea() {
    return Math.PI * (this.radius ** 2);
}

function getCirclePerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 5,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter
};

const circle2 = {
    radius: 10,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter
};

console.log("--- Данные круга 1 (радиус 5) ---");
console.log("Площадь:", circle1.getArea().toFixed(2));
console.log("Периметр:", circle1.getPerimeter().toFixed(2));

console.log("--- Данные круга 2 (радиус 10) ---");
console.log("Площадь:", circle2.getArea().toFixed(2));
console.log("Периметр:", circle2.getPerimeter().toFixed(2));
