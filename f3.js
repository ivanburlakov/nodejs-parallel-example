const { workerData, parentPort } = require("worker_threads");

const { multiply, transpose } = require("mathjs");

const mp = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

const mr = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

const t = [
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
];

firstMove = multiply(mp, mr);
secondMove = transpose(firstMove);
thirdMove = multiply(secondMove, t);

parentPort.postMessage({ name: "F3 (O)", value: thirdMove });
