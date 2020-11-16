const { workerData, parentPort } = require("worker_threads");

const { multiply, subtract } = require("mathjs");

const mk = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

const ml = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

const mg = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

firstMove = multiply(mk, ml);
secondMove = multiply(firstMove, mg);
thirdMove = subtract(secondMove, mk);

parentPort.postMessage({ name: "F2 (MF)", value: thirdMove });
