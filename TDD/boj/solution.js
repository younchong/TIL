/*
// boj 1644 two - pointer

function twoPointer(target) {
  let primes = [];
  for (let i = 0; i <= target; i++) {
    primes[i] = i;
  };
  for (let i = 2; i < Math.sqrt(target) + 1; i++) {
    if (primes[i]) {
      let j = 2;
      while (i * j <= target) {
        primes[i* j] = 0;
        j++
      }
    }
  }
  primes = new Set(primes);
  primes = [...primes];

  let end = 2;
  let sum = 0;
  let count = 0;
  for (let start = 2; start <= primes.length; start++) {
    while (sum < target && end < primes.length) {
      sum += primes[end];
      end++
    }
    if (sum === target) {
      count++;
    }
    sum -= primes[start]
  }

  return count;
}

module.exports = twoPointer;

// Boj 2470 two - pointer

function solution() {
  //const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const input = [
    5,
    "-2 4 -99 -1 98"
  ]
  const N = input[0] * 1;
  const liquidList = input[1].split(" ").map(value => +value).sort((a, b) => a - b);
  let sumMin = Infinity;
  let start = 0;
  let end = liquidList.length - 1;
  let answer;
  while (start < end) {
    let sum = Math.abs(liquidList[start] + liquidList[end]);
    if (sumMin > sum) {
      sumMin = sum;

      if (sum === 0) {
        break;
      }
      answer = [liquidList[start], liquidList[end]];
    }


    if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
  
  return answer;
}


// 3273 두 수의 합, two - pointer
function solution() {
  //const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const input = [
    9,
    "5 12 7 10 9 1 2 3 11",
    13
  ];
  const n = input[0] * 1;
  const numbers = input[1].split(" ").map(value => parseInt(value)).sort((a, b) => a - b);
  const target = input[2] * 1;

  let start = 0;
  let end = numbers.length - 1;
  let count = 0;
  while (start < end) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) {
      count++;
      start++;
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
  return count;
}

// 1904 BOJ DP
function solution() {
  const N = 4;
  const dp = new Array(100001).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= N; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp[N]);
}
solution();
// BOJ 1010 DP
function solution() {
  //const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const input = [
    3,
  "2 2",
  "1 5",
  "13 29"
  ];
  const N = input[0] * 1;
  const dp = Array.from(new Array(31), () => new Array().fill(0));
  for (let y = 0; y <= 30; y++) {
    for (let x = 0; x <= y; x++) {
        if (x === 0 || x === y) {
          dp[y][x] = 1;
        } else {
          dp[y][x] = dp[y - 1][x - 1] + dp[y -1][x];
        }
    }
  }
  let answer = [];
  for (let i = 1; i <= N; i++) {
    const [N, M] = input[i].split(" ").map(value => parseInt(value));
    
    answer.push(dp[M][N]);
  }

  return answer.join("\n")
}
*/
// BOJ 1049
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, M] = input[0].split(" ").map(value => parseInt(value));
  let cost = Infinity;
  let minPack = Infinity;
  let minSolo = Infinity;

  for (let i = 1; i <= M; i++) {
    const [pack, solo] = input[i].split(" ").map(value => parseInt(value));
    minPack = Math.min(minPack, pack);
    minSolo = Math.min(minSolo, solo);
    if (N <= 6) {
      cost = Math.min(cost, minPack, minSolo * N);
    } else {
      let ceil = Math.ceil(N / 6);
      let floor = Math.floor(N / 6);
      cost = Math.min(cost, minPack * floor + minSolo * (N - floor * 6), minPack * ceil, minSolo * N);
    }

  }
  console.log(cost)
  return cost;
}

solution();

module.exports = solution;