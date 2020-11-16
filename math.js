// імпортуємо клас для тредів
const { Worker } = require("worker_threads");

// функція яка створює проміс та новий воркер для кожної задачі
function runService(file, workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(file, { workerData });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

// головна функція
async function Math() {
  // запускаемо три треда для трьох файлів з функціями
  const resultF1 = runService("./f1.js");
  const resultF2 = runService("./f2.js");
  const resultF3 = runService("./f3.js");

  // очікуємо коли всі проміси закінчаться та виводимо результати у термінал
  Promise.allSettled([resultF1, resultF2, resultF3]).then((result) => {
    result.forEach((element) => {
      console.log(element.value.name + ": ");
      element.value.value.forEach((element) => {
        console.log(element);
      });
    });
  });
}

// запускаємо головну функцію
Math().catch((err) => console.error(err));
