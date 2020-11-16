// імпортуємо клас для отримання данних (не використовуємо) та для відправки даних
const { workerData, parentPort } = require("worker_threads");

// імпортуємо бібліотеку для обчислювання
const { multiply, add } = require("mathjs");

// задаємо та обчислюємо матриці та вектори
const mo = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

const me = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

const a = [
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
];

const b = [
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
];

firstMove = multiply(mo, me);
secondMove = multiply(firstMove, b);
thirdMove = add(a, secondMove);

// відправляємо ім'я та дані у головну функцію
parentPort.postMessage({ name: "F1 (C)", value: thirdMove });
