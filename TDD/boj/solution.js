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


// BOJ 1927 Heap
function solution () {
  //const input = require("fs").readFileSync("./input.txt").toString().split("\n").map(value => parseInt(value));
  const input = [
    9,
    0,
    12345678,
    1,
    2,
    0,
    0,
    0,
    0,
    32
  ];
  const N = input[0];
  const heap = new Heap();
  const answer = [];
  for (let i = 1; i <= N; i++) {
    const x = input[i];
    if (x) {
      heap.insert(x, x);
    } else {
      let root = heap.peak();
      root ? answer.push(root.value) : answer.push(0);
      heap.remove();
    }
  }

  return answer.join("\n");
}

class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  peak = () => this.heap[0];

  insert = (key, value) => {
    const node = { key, value }
    this.heap.push(node);
    this.heapifyUp()
  }

  heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) { //루트 노드가 되기 전까지
      const parentIndex = this.getParentIndex(index);

      // 부모 노드의 key 값이 마지막에 삽입된 노드의 키 값 보다 크면 부모의 자리를 계속해서 아래로 내림
      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  }

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop(); // 끝에 있는 노드를 부모 노드로 만들고 재구성
      this.heapifyDown();
    }
  }

  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      const smallerChildIndex = 
        rightChildIndex < count && this.heap[rightChildIndex].key < this.heap[leftChildeIndex]
        ? rightChildIndex
        : leftChildIndex

        if (this.heap[smallerChildIndex].key <= rootNode.key) {
          this.heap[index] = this.heap[smallerChildIndex];
          index = smallerChildIndex;
        } else break;
    }

    this.heap[index] = rootNode;
  }
}

// boj 11286 Heap
function solution() {
  //const input = require("fs").readFileSync("./input.txt").toString().split("\n").map(value => +value);
  const input = [
    18,
1,
-1,
0,
0,
0,
1,
1,
-1,
-1,
2,
-2,
0,
0,
0,
0,
0,
0,
0
  ]
  
  const N = input[0];
  const heap = new Heap();
  const answer = [];
  for (let i = 1; i <= N; i++) {
    const value = input[i];
    if (value) {
      heap.add(value);
    } else {
      answer.push(heap.remove());
    }
    
  }
  return answer.join("\n");
}
function Heap() {
  this.heap = [0];
    
  this.add = (value) => {
    this.heap.push(value);
    let index = this.heap.length - 1;
    
    while (index > 1) {
      if ( Math.abs(this.heap[Math.floor(index / 2)]) > Math.abs(this.heap[index]) || Math.abs(this.heap[Math.floor(index / 2)]) === Math.abs(this.heap[index]) && this.heap[Math.floor(index / 2)] > this.heap[index]) {
        let temp = this.heap[Math.floor(index / 2)];
        this.heap[Math.floor(index / 2)] = this.heap[index];
        this.heap[index] = temp;
        index = Math.floor(index / 2);
      } else break;
    }
    
  }

  this.remove = () => {
    if (this.heap.length - 1 < 1) {
      return 0;
    }

    let deleted = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let index = 1;

    while (index * 2 < this.heap.length) {
      let minValue = this.heap[index * 2];
      let minIndex = index * 2;
      if (index * 2 + 1 < this.heap.length && Math.abs(minValue) > Math.abs(this.heap[index * 2 + 1]) || Math.abs(minValue) === Math.abs(this.heap[index * 2 + 1]) && minValue > this.heap[index * 2 + 1] ) {
        minValue = this.heap[index * 2 + 1];
        minIndex = index * 2 + 1;
      }
      
      if (Math.abs(this.heap[index]) < Math.abs(minValue) || Math.abs(this.heap[index]) === Math.abs(minValue) && this.heap[index] < minValue) break;
      
      let temp = this.heap[minIndex];
      this.heap[minIndex] = this.heap[index];
      this.heap[index] = temp;
      index = minIndex;
    }

    return deleted;
  }

}

solution();
// 시간초과남 -> function으로 변경 후 add 함수  비교하는 부분 정리 후 통과
*/

function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n").map(value => +value);
  const N = input[0];
  const heap = new MinHeap();
  for (let i = 1; i <= N; i++) {
    const value = input[i];
    heap.add(value);
    heap.show();
  }
  
}

function MinHeap() {
  this.heap = [];

  this.size = () => this.heap.length;

  this.add = (value) => {
    this.heap.push(value);
    let index = this.heap.length - 1;

    while (index > 0) {
      if (this.heap[index] <= this.heap[Math.floor((index - 1) / 2)]) {
        let temp = this.heap[Math.floor((index - 1) / 2)];
        this.heap[Math.floor((index - 1) / 2)] = this.heap[index];
        this.heap[index] = temp;
        index = Math.floor((index - 1) / 2);
      } else break;
    }
  }

  this.show = () => {
    console.log(this.heap);
  }
}

/*
maxHeap, minHeap 두개를 이용
배열의 크기가 maxHeap > minHeap이면 minHeap에 삽입, 그 외엔 maxHeap삽입
maxHeap의 top 값을 remove
max의 top이 min의 top보다 크면 두 값을 바꿔준 후 top값 출력

구현해보기
 */
solution();
module.exports = solution;