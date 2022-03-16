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


// 1991 Tree traversal
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = input[0] *1;
  const tree = {};
  for (let i = 1; i <= N; i++) {
    const [node, left, right] = input[i].split(" ");
    tree[node] = [left, right];
  }

  let result = "";

  function preOrder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    result += node;
    preOrder(lt);
    preOrder(rt);
  }

  function inOrder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    inOrder(lt);
    result += node;
    inOrder(rt);
  }

  function postOrder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    postOrder(lt);
    postOrder(rt);
    result += node;
  }

  preOrder("A");
  result += "\n";
  inOrder("A");
  result += "\n";
  postOrder("A");

  console.log(result);
}

solution();


//1655
//Heap 문제 아직 못 품
function solution() {
  //const input = require("fs").readFileSync("./input.txt").toString().split("\n").map(value => +value);
  const input = [
    7,
    1,
    5,
    2,
    10,
    -99,
    7,
    5
  ];
  const N = input[0];
  const minHeap = new MinHeap();
  const maxHeap = new MaxHeap();
  const answer = [];
  for (let i = 1; i <= N; i++) {
    const value = input[i];
    
    if (maxHeap.size() > minHeap.size()) {
      minHeap.add(value);
    } else {
      maxHeap.add(value);
    }

    if (maxHeap.top() > minHeap.top()) {
      let maxTop = maxHeap.remove();
      let minTop = minHeap.remove()
      maxTop.add(minTop);
      minTop.add(maxTop);
      answer.push(maxHeap.top());
    } else {
      answer.push(maxHeap.top());
    }

    
  }
  

  return answer.join("\n");
}

//maxHeap의 top 값을 remove
//max의 top이 min의 top보다 크면 두 값을 바꿔준 후 top값 출력


function MinHeap() {
  this.heap = [];

  this.size = () => this.heap.length;

  this.add = (value) => {
    this.heap.push(value);
    let index = this.heap.length - 1;

    while (index > 0) {
      if (Math.floor((index - 1) / 2) >= 0 && this.heap[index] <= this.heap[Math.floor((index - 1) / 2)]) {
        let temp = this.heap[Math.floor((index - 1) / 2)];
        this.heap[Math.floor((index - 1) / 2)] = this.heap[index];
        this.heap[index] = temp;
        index = Math.floor((index - 1) / 2);
      } else break;
    }
  }

  this.remove = () => {
    const deleted = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let index = 0;

    while (index * 2 + 1 < this.heap.length) {
      let minValue = this.heap[index * 2 + 1];
      let minIndex = index * 2 + 1;
      if (index * 2 + 2 < this.heap.length && this.heap[minIndex] > this.heap[index * 2 + 2]) {
        minValue = this.heap[index * 2 + 2];
        minIndex = index * 2 + 2;
      }

      if (this.heap[index] < minValue) {
        let temp = this.heap[minIndex];
        this.heap[minIndex] = this.heap[index];
        this.heap[index] = temp;
        index = minIndex;
      } else break;
    }

    return deleted;
  }

  this.top = () => {
    return this.heap[0];
  }

  this.show = () => {
    return this.heap;
  }
}

function MaxHeap() {
  this.heap = [];

  this.size = () => this.heap.length;

  this.add = (value) => {
    this.heap.push(value);
    let index = this.heap.length - 1;

    while (index > 0) {
      if (Math.floor((index - 1) / 2) >= 0 && this.heap[index] >= this.heap[Math.floor((index - 1) / 2)]) {
        let temp = this.heap[Math.floor((index - 1) / 2)];
        this.heap[Math.floor((index - 1) / 2)] = this.heap[index];
        this.heap[index] = temp;
        index = Math.floor((index - 1) / 2);
      } else break;
    }
  }

  this.remove = () => {
    const deleted = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let index = 0;

    while (index * 2 + 1 < this.heap.length) {
      let maxValue = this.heap[index * 2 + 1];
      let maxIndex = index * 2 + 1;
      if (index * 2 + 2 < this.heap.length && this.heap[maxIndex] < this.heap[index * 2 + 2]) {
        maxValue = this.heap[index * 2 + 2];
        maxIndex = index * 2 + 2;
      }

      if (this.heap[index] > maxValue) {
        let temp = this.heap[maxIndex];
        this.heap[maxIndex] = this.heap[index];
        this.heap[index] = temp;
        index = maxIndex;
      } else break;
    }

    return deleted;
  }

  this.top = () => {
    return this.heap[0];
  }

  this.show = () => {
    return this.heap;
  }
}



maxHeap, minHeap 두개를 이용
배열의 크기가 maxHeap > minHeap이면 minHeap에 삽입, 그 외엔 maxHeap삽입
maxHeap의 top 값을 remove
max의 top이 min의 top보다 크면 두 값을 바꿔준 후 top값 출력

구현해보기 

solution();


// BOJ 11728
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, M] = input[0].split(" ").map(value => +value);
  const A = input[1].split(" ").map(value => +value);
  const B = input[2].split(" ").map(value => +value);
  const joined = A.concat(B).sort();
  console.log(joined.join(" "));
}

solution();


function solution() {
  const input= require("fs").readFileSync("./input.txt").toString().split("\n");
  const[N, K] = input[0].split(" ").map(value => +value);
  const numbers = input[1].split(" ").map(value => +value);
  
  let max = -Infinity;
  let interSum = 0;
  let end = 0;
  let count = 0;

  for (let start = 0; start < N; start++) {
    while (count < K && end < N) {
      interSum += numbers[end];
      end++;
      count++;
    }

    if (max < interSum && count === K) {
      max = interSum;
    }
    interSum -= numbers[start];
    count--;
  }

  console.log(max);
  return max;
}

solution();



function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const liquidList = input[1].split(" ").map(value => +value).sort((a, b) => a- b);
  const answer = [0, 0, 0];
  let min = Infinity;

  for (let start = 0; start < N - 2; start++) {
    let mid = start + 1;
    let end = N - 1;
    while (mid < end) {
      let sum = liquidList[start] + liquidList[mid] + liquidList[end];
      if (Math.abs(sum) < min) {
        min = Math.abs(sum);
        answer[0] = liquidList[start];
        answer[1] = liquidList[mid];
        answer[2] = liquidList[end];
      }
      if (sum >= 0) {
        end--;
      } else {
        mid++;
      }
    }
  }

  console.log(answer);
}
solution();

// not yet robot cleaner simulation
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, M] = input[0].split(" ").map(value => +value);
  let [y, x, d] = input[1].split(" ").map(value => +value);
  const graph = Array.from(N, () => new Array());
  for (let i = 0; i < N; i++) {
    graph[i] = input[2 + i].split(" ").map(value => +value);
  }
  let count = 0;

  const my = [-1, 0, 1, 0];
  const mx = [0, -1, 0, 1];
  while (true) {
    let sw = false;
    if (graph[y][x] === 0) {
      graph[y][x] = 2;
      count++;
    }
    for (let i = 1; i < 5; i++) {
      const ny = y + my[(d + i) % 4];
      const nx = x + mx[(d + i) % 4];
      if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
        if (graph[ny][nx] === 0) {
          d = (d + i + 4) % 4;
          y = ny;
          x = nx;
          sw = true;
          
          break;
        }
      }
    }

    if (!sw) {
      const ny = y - my[d];
      const nx = x - mx[d];
      if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
        if (graph[ny][nx] === 1) {
          break;
        } else {
          y = ny;
          x = nx;
        }
      } else break;
    }

  }

  console.log(count)
}



function solution() {
  //const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const input = [
    3,
8,
"0 0",
"7 0",
100,
"0 0",
"30 50",
10,
"1 1",
"1 1"
  ]
  const T = +input[0];
  const answer = [];
  for (let i = 0; i < T; i++) {
    const I = +input[i* 3 + 1];
    const curPosition = input[i * 3 + 2].split(" ").map(value => +value);
    const goalPosition = input[i * 3 + 3].split(" ").map(value => +value);
    const graph = Array.from(new Array(I), () => new Array(I).fill(0));
    const queue = [];
    const mv = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];
    queue.push(curPosition);
    let count = 0;
    while(queue.length) {
      const[cy, cx] = queue.shift();
      if (cy === goalPosition[0] && cx === goalPosition[1])break;
      for (let i = 0; i < 8; i++) {
        let my = cy + mv[i][0];
        let mx = cx + mv[i][1];
        if (my >= 0 && my < I && mx >= 0 && mx < I) {
          if (!graph[my][mx]) {
            graph[my][mx] = graph[cy][cx] + 1;
            queue.push([my,mx]);
          }
        }
      }
    }
    
    answer.push(graph[goalPosition[0]][goalPosition[1]]);
  }

  return answer.join("\n");
}
solution();


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
      if (this.heap[parentIndex].value > lastInsertedNode.value) {
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
        rightChildIndex < count && this.heap[rightChildIndex].value < this.heap[leftChildIndex].value
        ? rightChildIndex
        : leftChildIndex

        if (this.heap[smallerChildIndex].value <= rootNode.value) {
          this.heap[index] = this.heap[smallerChildIndex];
          index = smallerChildIndex;
        } else break;
    }

    this.heap[index] = rootNode;
  }

  size = () => this.heap.length;
}


function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [V, E] = input[0].split(" ").map(E => +E);
  const Edges = Array.from(Array(V + 1), () => new Array());
  const visited = new Array(V + 1).fill(false);
  let result = 0;

  for (let i = 1; i <= E; i++) {
    const [start, end, cost] = input[i].split(" ").map(E => +E);
    Edges[start].push([cost, end]);
    Edges[end].push([cost, start]);
  }

  heap.insert(1, 0); //  node,cost

  while (heap.size()) {
    const node = heap.peak();
    heap.remove();
    if (!visited[node.key]) {
      visited[node.key] = true;
      result += node.value;
      for (let next of Edges[node.key]) {
        if (!visited[next[1]]) heap.insert(next[1], next[0]);
      }
    }
  }

  return result;
}
// MST문제인데 JS에선 따로 heap 라이브러리가 없어서 구현하는데 좀 시간 더 걸려서, 다른 방법을 찾아보자. -> union find 이용
// 우선 개념은 최소힙을 이용해서 간선 비용이 최소인 값이 연결되지 않았을 때 연결시키는 것
solution();


function findParent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }

  return parent[x];
}

function unionFind(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a > b) {
    parent[a] = b;
  } else {
    parent[b] = a;
  }

  return parent;
}

function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [V, E] = input[0].split(" ").map(E => +E);
  const Edges = [];
  let parents = new Array(V + 1)
  let result = 0;
  for (let i = 0; i <= V; i++) {
    parents[i] = i;
  }
  for (let i = 1; i <= E; i++) {
    const [start, end, cost] = input[i].split(" ").map(E => +E);
    Edges.push([start, end, cost]);
  }

  Edges.sort((a, b) => a[2] - b[2]);

  Edges.forEach(edge => {
    const [a, b, c] = edge;
    if (findParent(parents, a) !== findParent(parents, b)) {
      parents = unionFind(parents, a, b);
      result += c;
    }
  })
  console.log(result);
}

solution();

//1922
function solution() {
  //const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const input = [
    6,
    9,
    "1 2 5",
    "1 3 4",
    "2 3 2",
    "2 4 7",
    "3 4 6",
    "3 5 11",
    "4 5 3",
    "4 6 8",
    "5 6 8"
  ]
  const N = +input[0];
  const M = +input[1];
  const edges = [];
  for (let i = 2; i < M + 2; i++) {
    edges.push(input[i].split(" ").map(v => +v));
  }
  let parents = new Array(N + 1);
  for (let i = 0; i <= N; i++) {
    parents[i] = i;
  }
  let result = 0;

  edges.sort((a, b) => a[2] - b[2]);
  edges.forEach(edge => {
    const [a, b, c] = edge;
    if (findParent(parents, a) !== findParent(parents, b)) {
      unionFind(parents, a, b);
      result += c;
    }
  })

  return result;
}

function findParent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }

  return parent[x];
}

function unionFind(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a > b) {
    parent[a] = b;
  } else {
    parent[b] = a;
  }
  return parent;
}

// 못품 원숭이 마을 연결
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [V, E] = input[0].split(" ").map(v => +v);
  const edges = [];
  for (let i = 1; i < E + 1; i++) {
    edges.push(input[i].split(" ").map(v => +v));
  }
  edges.sort((a, b) => a[2] - b[2]);
  let parent = new Array(V + 1);
  for (let i = 0; i <= V; i++) {
    parent[i] = i;
  }
  let result = 0;

  edges.forEach(edge => {
    const [a, b, c] = edge;
    if (findParent(parent, a) !== findParent(parent, b)) {
      unionParent(parent, a, b);
      result += c;
    }
  })

  console.log(result);
}

function findParent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }

  return parent[x];
}

function unionParent(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a > b) {
    parent[a] = b;
  } else {
    parent[b] = a;
  }

  return parent;
}
solution();

//2864 greedy
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split(" ").map(v => +v);
  const [A, B] = input;
  const answer = [];
  let stringA = A.toString();
  let stringB = B.toString();
  
  if (stringA.includes(6) || stringB.includes(6)) {
    while (stringA.includes(6) || stringB.includes(6)) {
      stringA = stringA.replace("6", "5");
      stringB = stringB.replace("6", "5")
    } 
    answer.push(stringA * 1 + stringB * 1);
  } else {
    answer.push(A + B)
  }

  if (stringA.includes(5) || stringB.includes(5)) {
    while (stringA.includes(5) || stringB.includes(5)) {
      stringA = stringA.replace("5", "6");
      stringB = stringB.replace("5", "6")
    } 
    answer.push(stringA * 1 + stringB * 1);
  } else {
    answer.push(A + B)
  }
  // 최솟값은 둘다 5로 보는것이고, 최댓값은 둘다 6으로 보는것
  console.log(answer.join(" "));

}
solution();

//15686BOJ
function solution() {
  //const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const input = [
    "q",
"1 2 0 2 1",
"1 2 0 2 1",
"1 2 0 2 1",
"1 2 0 2 1",
"1 2 0 2 1"
  ]
  const [N, M] = input[0].split(" ").map(v => +v);
  const graph = Array.from(new Array(N), () => new Array());
  for (let i = 0; i < N; i++) {
    graph[i] = input[i + 1].split(" ").map(v => +v);
  }
  // graph 0 index없이 구현, 그래서 각 좌표에서 1씩 빼줘야됨
  const BBQ = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (graph[y][x] === 2) {
        BBQ.push([y, x]);
      }
    }
  }
  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });
  
    return results; // 결과 담긴 results return
  }
  // 여기서 M곳을 선택해서 거리 계산
  const selectedBBQ = getCombinations(BBQ, M);
  let answer = Infinity;
  while(selectedBBQ.length) {
    const selected = selectedBBQ.pop();
    let result = 0;
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (graph[y][x] === 1) {
          let min = Infinity;
          selected.forEach(solo => {
            min = Math.min(min, getDistance(solo, [y, x]));
          })
          result += min;
        }
      }
    }
    answer = Math.min(answer, result);
  }
  return answer;
}

function getDistance(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}


solution();

// boj 2579 DP
function solution() {
  const input =require("fs").readFileSync("./input.txt").toString().split("\n").map(v => +v);
  const N = input[0];
  const stairs = input;
  const dp = new Array(N + 1).fill(0);
  dp[1] = [stairs[1], 0];
  dp[2] = [dp[1][0] + stairs[2], stairs[2]];
  for (let i = 3; i <=N; i++) {
    dp[i] = [dp[i - 1][1]+ stairs[i], Math.max(...dp[i - 2]) + stairs[i]]
  }
  console.log(Math.max(...dp[N]));
}

solution();

// boj tomato 시간초과
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [M, N] = input[0].split(" ").map(value => +value);
  const graph = Array.from(new Array(N), () => new Array());
  const queue = [];
  for (let i = 1; i <= N; i++) {
    graph[i - 1] = input[i].split(" ").map(v => +v);
    let index = -1;
    while(true) {
      index = graph[i - 1].indexOf(1, index + 1);
      if (index === - 1)break;
      queue.push([i - 1, index]);
    }
  }
  const my = [1, -1, 0, 0];
  const mx = [0, 0, 1, -1];
  let result = 0;

  while(queue.length) {
    const [qy, qx] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const ny = qy + my[i];
      const nx = qx + mx[i];
      if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
        if (graph[ny][nx] === 0) {
          graph[ny][nx] = graph[qy][qx] + 1;
          queue.push([ny, nx]);
          result = graph[ny][nx] - 1;
        }
      }
    }
  }

  graph.forEach(row => row.find(el => el === 0 ? result = -1 : result));
  console.log(result)
}
solution();

// boj 4963 20% 틀림
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  let index = 0;
  while (true) {
    const [N, M] = input[index].split(" ").map(value => +value);
    if (N === 0 || M === 0) break;
    const graph = Array.from(new Array(M), () => new Array());
    const visited = Array.from(new Array(M), () => new Array(N).fill(false));
    
    for (let i = 0; i < M; i++) {
      graph[i] = input[index + i + 1].split(" ").map(v => +v);
    }

    let count = 0;
    for (let y = 0; y < M; y++) {
      for (let x = 0; x < N; x++) {
        if (graph[y][x] === 1 && !visited[y][x]) {
          count++;
          bfs(y, x);
        }
      }
    }

    function bfs(y, x) {
      const queue = [];
      queue.push([y, x]);
      visited[y][x] = true;

      const mx = [1, -1, 0, 0, 1, -1, 1, -1];
      const my = [0, 0, 1, -1, 1, 1, -1, 1];

      while (queue.length) {
        const [qy, qx] = queue.shift();
        for (let i = 0; i < 8; i++) {
          const ny = qy + my[i];
          const nx = qx + mx[i];
          if (ny >= 0 && ny < M && nx >= 0 && nx < N) {
            if (graph[ny][nx] === 1 && !visited[ny][nx]) {
              visited[ny][nx] = true;
              queue.push([ny, nx]);
            }
          }
        }
      }
    }
    index += M + 1;
  }

}


function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n").map(v => v.split(" ").map(x => +x));
  const dir = [
    [-1,0],
    [-1,1],
    [0,1],
    [1,1],
    [1,0],
    [1,-1],
    [0,-1],
    [-1,-1]
  ];
  let answer = [];

  for (let i = 0; i < input.length - 1; i++) {
    const [N, M] = input[i];
    const map = [];
    for (let j = 1; j <= M; j++) {
      map.push(input[j + i]);
    }
    i += M;

    let count = 0;
    for (let y = 0; y < M; y++) {
      for (let x = 0; x < N; x++) {
        if (map[y][x] === 1) {
          count++;
          let queue = [[y, x]];
          while (queue.length) {
            const [qy, qx] = queue.shift();
            dir.forEach(v => {
              const ny = qy + v[0];
              const nx = qx + v[1];
              if (ny >= 0 && ny < M && nx >= 0 && nx < N && map[ny][nx] === 1) {
                map[ny][nx] = 0;
                queue.push([ny, nx]);
              }
            })
          }
        }
      }
    }
    answer.push(count);
  }
console.log(answer.join("\n"));
}
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
let index = 0;
  while (true) {
    const [N, M] = input[index].split(" ").map(value => +value);
    if (N === 0 || M === 0) break;
    const graph = Array.from(new Array(M), () => new Array());
 
    for (let i = 0; i < M; i++) {
      graph[i] = input[index + i + 1].split(" ").map(v => +v);
    }
    let count = 0;
    for (let y = 0; y < M; y++) {
      for (let x = 0; x < N; x++) {
        if (graph[y][x] === 1) {
          count++;
          bfs(y, x);
        }
      }
    }

    function bfs(y, x) {
      const queue = [];
      queue.push([y, x]);

      const mx = [1, -1, 0, 0, 1, -1, 1, -1];
      const my = [0, 0, 1, -1, 1, 1, -1, 1];

      while (queue.length) {
        const [qy, qx] = queue.shift();
        for (let i = 0; i < 8; i++) {
          const ny = qy + my[i];
          const nx = qx + mx[i];
          if (ny >= 0 && ny < M && nx >= 0 && nx < N && graph[ny][nx] === 1) {
            queue.push([ny, nx]);
            graph[ny][nx] = 0;
          }
        }
      }
    }
      
    console.log(count);
    index += M + 1;
  }

}
solution();

// boj 1789
function solution() {
  const S = 200;
  let cur = 1;
  let interSum = 1;
while (interSum <= S) {
    cur++
    interSum += cur;
}

console.log(cur - 1)
}

//1449 boj
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n")
  const [N, L] = input[0].split(" ").map(v => +v);
  const locations = input[1].split(" ").map(v => +v).sort((a, b) => a - b);
  let count = 0;
  let fix = 0;
  for (let i = 0; i < N; i++) {
    if (fix < locations[i]) {
      count++;
      fix = locations[i] + L - 1;
    }

  }

  console.log(count);
}
solution();


// boj 2583
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [M, N, K] = input[0].split(" ").map(v => +v);
  const graph = Array.from(new Array(M), () => new Array(N).fill(0));
  for (let i = 1; i <= K; i++) {
    const location = input[i].split(" ").map(v => +v);
    const leftBottom = [location[0], location[1]]; //x, y
    const rightTop = [location[2] - 1, location[3] - 1];
    for (let y = leftBottom[1]; y <= rightTop[1]; y++) {
      for (let  x = leftBottom[0]; x <= rightTop[0]; x++) {
        graph[y][x] = 1;
      }
    }
  }
  let count = 0;
  let area = [];
  for (let y = 0; y < M; y++) {
    for (let x = 0; x < N; x++) {
      if (graph[y][x] === 0) {
        count++;
        area.push(dfs(y, x));
      }
    }
  }
  console.log(count);
  console.log(area.sort((a, b) => a - b).join(" "));

  function dfs(y, x) {
    const stack = [[y, x]];
    graph[y][x] = 1;
    const move = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let area = 1;
    while (stack.length) {
      const [qy, qx] = stack.pop();
      
      for (let i = 0; i < 4; i++) {
        const ny = qy + move[i][0];
        const nx = qx + move[i][1];
        if (ny >= 0 && ny < M && nx >= 0 && nx < N) {
          if (!graph[ny][nx]) {
            area++;
            stack.push([ny, nx]);
            graph[ny][nx] = area;
          }
          
        }
      }
    }
    return area;
  }

}

solution();

// 1057 brute force
function solution() {
  let [N, A, B] = [23781,15127, 15461];
  let round = 0
  while (A !== B) {
    A = Math.round(A / 2);
    B = Math.round(B / 2);
    round++;
  }
  return round;
}

solution();


// 4849  boj
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const answer = [];

  for (let i = 0; i < input.length; i++) {
    const sentence = input[i];
    if (sentence === ".") break;
    const stack = [];
    let isBalanced = "yes";
    for (let j = 0; j < sentence.length; j++) {
      const letter = sentence[j];
      if (letter === "(" || letter === "[") {
        stack.push(letter);
      } else if (letter === ")") {
        if (stack.pop() === "(") {
          isBalanced = "yes";
        } else {
          isBalanced = "no";
          break;
        }
        
      } else if (letter === "]") {
        if (stack.pop() === "[") {
          isBalanced = "yes";
        } else {
          isBalanced = "no";
          break;
        }
      }
    }
    if (stack.length) isBalanced = "no";
    answer.push(isBalanced);
  }

  console.log(answer.join("\n"));
}

solution();


// boj 2644
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = input[0] * 1;
  const target = input[1].split(" ").map(v => +v);
  const m = input[2] * 1;
  const relations = Array.from(new Array(N + 1), () => new Array(N + 1).fill(0));
  const visited = new Array(N + 1).fill(false);
  const queue = [];
  for (let i = 3; i < m + 3; i++) {
    const [x, y] = input[i].split(" ").map(v => +v);
    relations[x][y] = 1;
    relations[y][x] = 1;
  }
  queue.push([target[0], 0]);
  visited[target[0]] = true;
  
  while (queue.length) {
    const [start, count] = queue.shift();
    const row = relations[start];
    for (let i = 1; i < row.length; i++) {
      if (row[i] === 1 && !visited[i]) {
        visited[i] = count + 1;
        if (i === target[1]) {
          break;
        }
        queue.push([i, count + 1]);
      }
    }
  }

console.log(visited[target[1]] ? visited[target[1]] : -1);
}

solution();

// 1753 레퍼런스 에러 나옴
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
const [V, E] = input[0].split(" ").map(v => +v);
const startNode = +input[1];

const Node = function (vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
    this.link = null;
} 

const Graph = function(size) {
    this.graph = Array.from({length: size}, (e, i) => new Node(i));
    
    const insertNode = (v1, v2, w) => {
        const v1Node = new Node(v1, w);
        const v2Node = new Node(v2, w);
        let graph1 = this.graph[v1];
        
        if (graph1.link === null) {
            graph1.link = v2Node;
        } else {
            while (graph1.link !== null) {
                graph1 = graph1.link
            }
            graph1.link = v2Node;
        }
        
        return;
    }
    
    Graph.prototype.insertEdge = function(v1, v2, w) {
        insertNode(v1, v2, w);
    }
    
    Graph.prototype.getGraph = function() {
        return this.graph;
    }
}

const heapPush = (h, g, move, isVisited) => {
    while(g.link !== null) {
        g = g.link;
        
        let idx = g.vertex;
        
        if (!isVisited[idx]) {
            if (!h.length) h.push({v: g.vertex, w: g.weight + move});
            else {
                if (h[0].w > g.weight) {
                    let temp = h[0];
                    h[0] = {v: g.vertex, w: g.weight + move};
                    h.push(temp);
                } else {
                    h.push({v: g.vertex, w: g.weight + move});
                }
            }
        }
    }
}

const heapPop = (h) => {
    const item = h[0];
    const lastItem = h.pop();
    let idx = 0;
    
    if (!h.length) return item;
    
    h[0] = lastItem;
    
    while (h[idx * 2 + 1] || h[idx * 2 + 2]) {
        let temp = 0;
        
        if (h[0].w > h[idx * 2 + 1].w) {
            temp = h[0];
            h[0] = h[idx * 2 + 1];
            h[idx * 2 + 1] = temp;
            idx = idx * 2 + 1;
        } else if (h[0].w > h[index * 2 + 2].w) {
            temp = h[0];
            h[0] = h[idx * 2 + 2];
            h[idx * 2 + 2] = temp;
            idx = idx * 2 + 2;
        } else idx++;
    }
    return item;
}

const dijkstra = (start, graph) => {
    const size = graph.length;
    const isVisited = new Array(size).fill(false);
    const dist = [];
    const heap = [];
    let move = 0;
    let idx = start;
    let g = graph[idx];
    heap.push({v:g.vertex, w:g.weight});
    
    while (heap.length) {
        g = heapPop(heap);
        idx = g.v;
        
        if (!isVisited[idx]) {
            isVisited[idx] = true;
            move = g.w;
            dist[idx] = move;
            heapPush(heap, graph[idx], move, isVisited);
        }
    }
    
    for (let i = 1; i <= V; i++) {
        console.log(dist[i] || dist[i] === 0 ? dist[i] : "INF");
    }
}

const main = (function() {
    const graph = new Graph(E);
    for (let i = 2; i < 2 + E; i++) {
        const [a, b, w] = input[i].split(" ").map(v => +v);
        graph.insertEdge(a, b, w);
    }
    
    dijkstra(startNode, graph.getGraph());
}());
}
solution();

function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  class minHeap {
    constructor() {
      this.heap = [];
    }

    size() {
      return this.heap.length;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    } 
    
    add([vertex, weight]) {
      this.heap.push([vertex, weight]);
      let index = this.heap.length - 1;

      while (index > 0) {
        if (Math.floor((index - 1) / 2) >= 0 && this.heap[index][1] < this.heap[Math.floor((index - 1) / 2)][1]) {
          this.swap(index, Math.floor((index - 1) / 2));
          index = Math.floor((index - 1) / 2)
        } else break;
      }
    }

    remove() {
      
      this.swap(0, this.heap.length - 1);
      const deleted = this.heap.pop();
      let index = 0;

      while (index * 2 + 1 < this.heap.length) {
        let minIndex = index * 2 + 1;
        let minValue = this.heap[index * 2 + 1];
        if (index * 2 + 2 < this.heap.length && this.heap[index * 2 + 2][1] < this.heap[minIndex][1]) {
          minIndex = index * 2 + 2;
          minValue = this.heap[index * 2 + 2];
        }

        if (this.heap[index][1] > this.heap[minIndex][1]) {
          this.swap(index, minIndex);
          index = minIndex;
        } else break;
      }

      return deleted;
    }

  } // heap end

  const [V, E] = input[0].split(" ").map(v => +v);
  const K = +input[1];
  const graph = Array.from({length: V + 1}, () => []);
  const isVisited = new Array(V + 1).fill(false);
  const heap = new minHeap();
  const dist = Array.from({length: V + 1}, () => Infinity);
  for  (let i = 2; i < E + 2; i++) {
    const [src, dst, weight] = input[i].split(" ").map(v => +v);
    graph[src].push([dst, weight]);
  }

  heap.add([K, 0]);
  dist[K] = 0;

  while(heap.size()) {
    const [vertex, weight] = heap.remove();

    graph[vertex].forEach((v) => {
      const [dst, weight] = v;
      if (!isVisited[dst] && dist[dst] > dist[vertex] + weight) {
        dist[dst] = dist[vertex] + weight;
        heap.add([dst, dist[dst]]);
      }
    });
    isVisited[vertex] = true;
  }

  const answer = [];

  dist.forEach((v, k) => {
    if (k) {
      if(v === Infinity) {
        answer.push("INF");
      } else {
        answer.push(v);
      }
    }
  })
  console.log(answer.join("\n"));
}

solution();


// boj 18532 시간초과, 다익스트라 사용
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, M, K, X] = input[0].split(" ").map(v => +v);
  const graph = Array.from({length: N + 1}, () => new Array());
  const dist = new Array(N + 1).fill(Infinity);
  const isVisited = new Array(N + 1).fill(false);
  const heap = [];
  for (let i = 1; i < M + 1; i++) {
    const [A, B] = input[i].split(" ").map(v => +v);
    graph[A].push([B, 1]);
  }

  heap.push([X, 0]);
  dist[X] = 0;

  while(heap.length) {
    const [origin, weight] = heap.shift();

    graph[origin].forEach(v => {
      const [dst, w] = v;
      
      if (!isVisited[dst] && dist[dst] > dist[origin] + w) {
        dist[dst] = dist[origin] + w;
        heap.push([dst, dist[dst]]);
      }
    })
    isVisited[origin] = true;
  }

  const answer = []
  dist.filter((v, i) => {
    if (v === K) {
      answer.push(i);
    }
  });
  console.log(answer.length ? answer.join("\n") : -1);
}

function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, M, K, X] = input[0].split(" ").map(v => +v);
  const graph = Array.from({length: N + 1}, () => new Array());
  const dist = new Array(N + 1).fill(Infinity);
  const isVisited = new Array(N + 1).fill(false);
  for (let i = 1; i < M + 1; i++) {
    const [A, B] = input[i].split(" ").map(v => +v);
    graph[A].push(B);
  }
  const queue = [X];
  dist[X] = 0;

  while (queue.length) {
    const vertex = queue.shift();
    graph[vertex].forEach(v => {
      if (!isVisited[v] && dist[v] > dist[vertex] + 1) {
        dist[v] = dist[vertex] + 1;
        queue.push(v);
      }
    })
    isVisited[vertex] = true;
  }
  const answer = [];
  dist.forEach((v, i) => {
    if (v === K) {
      answer.push(i);
    }
  })
  console.log(answer)
}
solution();


function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  let index = 0;

  class MinHeap {
    constructor() {
      this.heap = [];
    }

    show() {
      console.log(this.heap);
    }

    size() {
      return this.heap.length;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    } 
    
    add([vertex, weight]) {
      this.heap.push([vertex, weight]);
      let index = this.heap.length - 1;

      while (index > 0) {
        if (Math.floor((index - 1) / 2) >= 0 && this.heap[index][1] < this.heap[Math.floor((index - 1) / 2)][1]) {
          this.swap(index, Math.floor((index - 1) / 2));
          index = Math.floor((index - 1) / 2)
        } else break;
      }
    }

    remove() {
      
      this.swap(0, this.heap.length - 1);
      const deleted = this.heap.pop();
      let index = 0;

      while (index * 2 + 1 < this.heap.length) {
        let minIndex = index * 2 + 1;
        let minValue = this.heap[index * 2 + 1];
        if (index * 2 + 2 < this.heap.length && this.heap[index * 2 + 2][1] < this.heap[minIndex][1]) {
          minIndex = index * 2 + 2;
          minValue = this.heap[index * 2 + 2];
        }

        if (this.heap[index][1] > this.heap[minIndex][1]) {
          this.swap(index, minIndex);
          index = minIndex;
        } else break;
      }

      return deleted;
    }
  } 
  let solNum = 1;
  const move = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (parseInt(input[index]) !== 0) {
    const N = parseInt(input[index])
    const graph = [];
    const dist = Array.from({length: N}, () => new Array(N).fill(Infinity));
    const isVisited = Array.from({length: N}, () => new Array(N).fill(false));
    const heap = new MinHeap();
    for (let i = index + 1; i <= index + N; i++ ) {
      graph.push(input[i].split(" ").map(v => +v));
    }
    heap.add([[0, 0], graph[0][0]]);
    dist[0][0] = graph[0][0];

    while (heap.size()) {
      const [position, weight] = heap.remove();
      //console.log(position)
      for (let i = 0 ; i < 4; i++) {
        const [ny, nx] = [position[0] + move[i][0], position[1] + move[i][1]];
        
        if (ny >= 0 && ny < N && nx >= 0 && nx < N && !isVisited[ny][nx]) {
          if (dist[ny][nx] > dist[position[0]][position[1]] + graph[ny][nx]) {
            dist[ny][nx] = dist[position[0]][position[1]] + graph[ny][nx];
            //console.log(dist);
            heap.add([[ny, nx], dist[ny][nx]]);
          }
        }
      }
      
      isVisited[position[0]][position[1]] = true;
    }
    console.log(`Problem ${solNum}: ${dist[N -1][N -1]}`);


    index += N + 1;
    solNum++;
  } 
}


//boj 1238 dijkstra 
// 답은 나오는데 reference error
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, M, X] = input[0].split(" ").map(v => +v);
  const graph = Array.from(new Array(N + 1), () => new Array());
  const result = new Array(N + 1).fill(0);

  for (let i = 1; i <= M; i++) {
    const [A, B, T] = input[i].split(" ").map(v => +v);
    graph[A].push([B, T])
  }
  // 각자의 dist 구해서 비교
  let index = 1;
  while (index <= N) {
    let isVisited = new Array(N + 1).fill(false);
    let heap = new MinHeap();
    let dist = new Array(N + 1).fill(Infinity);
    heap.add([index, 0]);
    dist[index] = 0;
    while (heap.size()) {
      const [vertex, weight] = heap.remove();
      
      graph[vertex].forEach(v => {
        const [dst, w] = v;
        if (dist[dst] > dist[vertex] + w && !isVisited[dst]) {
          dist[dst] = dist[vertex] + w;
          heap.add([dst, dist[dst]]);
        }
      })
      isVisited[vertex] = true;
      
    }
    
    if (index === X) {
      result.forEach((v, i) => result[i] += dist[i]);
    } else {
      result[index] += dist[X];
    }
    index++;
  }
  result.shift()
  console.log(Math.max(...result));
}

function MinHeap() {
  this.heap = [];

  this.size = () => this.heap.length;

  this.swap = (a, b) => {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  this.add = ([vertex, weight]) => {
    this.heap.push([vertex, weight]);
    let index = this.heap.length - 1;
    while (index > 0) {
      if (Math.floor((index - 1) / 2) > 0 && this.heap[Math.floor((index - 1) / 2)][1] > this.heap[index][1]) {
        swap(index, Math.floor((index - 1) / 2));
        index = Math.floor((index - 1) / 2);
      } else break;
    }
  }

  this.remove = () => {
    const deleted = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let index = 0;

    while(index * 2 + 1 < this.heap.length) {
      let minValue = this.heap[index * 2 + 1][1];
      let minIndex = index * 2 + 1;
      if (index * 2 + 2 < this.heap.length && minValue > this.heap[index * 2 + 2][1]) {
        minValue = this.heap[index * 2 + 2][1];
        minIndex = index * 2 + 2;
      }

      if (minValue > this.heap[index][1]) {
        swap(index, minIndex);
        index = minIndex;
      } else break;
    }

    return deleted;
  }
}
solution();


//boj dijkstra 1916
function solution() {
  //const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const input = [
    5,
8,
"1 2 2",
"1 3 3",
"1 4 1",
"1 5 10",
"2 4 2",
"3 4 1",
"3 5 1",
"4 5 3",
"1 5"
  ]
  const N = +input[0];
  const M = +input[1];
  const [start, destination] = input[M + 2].split(" ").map(v => +v) ;
  const graph = Array.from({length: N + 1}, () => []);
  for (let i = 2; i < M + 2; i++) {
    const [A, B, W] = input[i].split(" ").map(v => +v);
    graph[A].push([B, W]);
  }
  const heap = new MinHeap();
  const dist = new Array(N + 1).fill(Infinity);
  const isVisited = new Array(N + 1).fill(false);

  heap.add([start, 0]);
  dist[start] = 0;

  while (heap.size()) {
    const [vertex, weight] = heap.remove();

    graph[vertex].forEach(v => {
      const [dst, w] = v;
      if (dist[dst] > dist[vertex] + w) {
        dist[dst] = dist[vertex] + w;
        heap.add([dst, dist[dst]]);
      }
    })
    isVisited[vertex] = true;
  }

  return(dist[destination]);
}

function MinHeap() {
  this.heap = [];

  this.size = () => this.heap.length;

  this.swap = (a, b) => {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  this.add = ([vertex, weight]) => {
    this.heap.push([vertex, weight]);
    let index = this.heap.length - 1;
    while (index > 0) {
      if (Math.floor((index - 1) / 2) > 0 && this.heap[Math.floor((index - 1) / 2)][1] > this.heap[index][1]) {
        this.swap(index, Math.floor((index - 1) / 2));
        index = Math.floor((index - 1) / 2);
      } else break;
    }
  }

  this.remove = () => {
    const deleted = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let index = 0;

    while(index * 2 + 1 < this.heap.length) {
      let minValue = this.heap[index * 2 + 1][1];
      let minIndex = index * 2 + 1;
      if (index * 2 + 2 < this.heap.length && minValue > this.heap[index * 2 + 2][1]) {
        minValue = this.heap[index * 2 + 2][1];
        minIndex = index * 2 + 2;
      }

      if (minValue > this.heap[index][1]) {
        this.swap(index, minIndex);
        index = minIndex;
      } else break;
    }

    return deleted;
  }
}

solution();

// boj 1543 greedy
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const origin = input[0].split("");
  const target = input[1].split("");
  let count = 0;

  for (let i = 0; i < origin.length - target.length + 1; i++) {
    if (origin[i] === target[0]) {
      let index = 0;
      let isSame = true;
      while (index < target.length) {
        if (origin[i + index] === target[index]) {
          index++;
        } else {
          isSame = false;
          break;
        }
      }
      
      if (isSame) {
        i += target.length - 1;
        count++;
      }
    }
  }
  console.log(count);
}

solution();

// boj 1389
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, M] = input[0].split(" ").map(v => +v);
  const graph = Array.from({length: N + 1}, () => new Array());
  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(v => +v);
    graph[a].push(b);
    graph[b].push(a);
  }
  let minValue = Infinity;
  let minIndex = null;
  for (let i = 1; i <= N; i++) {
    const queue = [i];
    const visited = new Array(N + 1).fill(0);
    while (queue.length) {
      const start = queue.shift();
      for (let i = 0; i < graph[start].length; i++) {
        const next = graph[start][i];
        if (!visited[next]) {
          visited[next] = visited[start] + 1;
          queue.push(next);
        }
        
      }
    }

    if (minValue > visited.reduce((a, c) => a + c)) {
      minIndex = i
      minValue = visited.reduce((a, c) => a + c)
    }
  }
  console.log(minIndex);
}
//clear
solution();


// boj 1325 unsolved, don't know reason
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, M] = input[0].split(" ").map(v => +v);
  const graph = Array.from({length: N + 1}, () => new Array());
  for (let i = 1; i <= M; i++) {
    const [A, B] = input[i].split(" ").map(v => +v);
    graph[B].push(A);
  }
  let maxValue= 0;
  const result = [];
  for (let i = 1 ; i <= N; i++) {
    const queue = [i];
    const visited = new Array(N + 1).fill(0);
    let count = 0;
    while (queue.length) {
      const start = queue.shift();
      for (let i = 0; i < graph[start].length; i++) {
        const next = graph[start][i];
        if (!visited[next]) {
          visited[next] = visited[start] + 1;
          queue.push(next);
        }
        
      }
      // graph[start].forEach((v) => {
      //   if (!visited[v]) {
      //     visited[v] = visited[start] + 1;
      //     queue.push(v);
      //   }
      // })
    }
    result.push(Math.max(...visited));
    maxValue <= Math.max(...visited) ? maxValue = Math.max(...visited) : 0;
  }
  const answer = result.map((v, i) => {
      if (v === maxValue) {
          return i + 1;
      }
  })
  console.log(answer.sort((a, b) => a - b).join(" "));
}

solution();


// boj 2251, 케이스 다 나눠서 풀어야함... 아직 잘 모르겠다. unsolved
function solution() {
  const [A, B, C] = require("fs").readFileSync("./input.txt").toString().split(" ").map(v => +v);
  const bottle = new Array(3).fill(0);
  bottle[2] = C;
  const answer = [];

  while (true) {
    //b에 가득 채우는 방법
    // a에 채우고 비로 옮기는 방법
    // b 거치는 방법
    // a 거치는 방법
  }
}



// boj 16198  backtracking pass
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const marbles = input[1].split(" ").map(v => +v);
  const visited = new Array(N).fill(false);
  let max = 0;
  const output = []
  const result = [];

  function recur (num) {
    if (num === marbles.length - 2) {
      result.push([...output]);
      return;
    }

    for (let i = 1; i < marbles.length - 1; i++) {
      if (visited[i])continue;
      visited[i] = true;
      output.push(i);
      recur(num + 1);
      output.pop();
      visited[i] = false;
    }
  }
  
  recur(0);

  while (result.length) {
    const order = result.pop();
    const visited = new Array(marbles.length).fill(false);
    let sum = 0;
    order.forEach(selecIndex => {
      visited[selecIndex] = true;
      let prevIndex = selecIndex - 1;
      let nextIndex = selecIndex + 1;
      while (visited[prevIndex]) {
        prevIndex--;
      }
      while (visited[nextIndex]) {
        nextIndex++;
      }
      
      sum += marbles[prevIndex] * marbles[nextIndex];
    })

    max = Math.max(max, sum);
  }
  
  console.log(max);
}

solution();


// 1940 boj two poiner pass
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const M = +input[1];
  const materials = input[2].split(" ").map(v => +v).sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = N - 1;
  while (left < right) {
    let sum = materials[left] + materials[right];
    if (sum === M) {
      count++;
      left++;
    } else if (sum < M) {
      left++;
    } else {
      right--;
    }
  }

  console.log(count);
}

solution();


// boj 11404 플로이드 pass
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const M = +input[1];
  const result = Array.from({length: N + 1}, () => new Array(N + 1).fill(Infinity));
  for (let i = 1; i <= N; i++) {
    result[i][i] = 0;
  }

  for (let i = 2; i < 2 + M; i++) {
    const [start, destination, cost] = input[i].split(" ").map(v => +v);
    result[start][destination] = Math.min(result[start][destination], cost);
  }

  for (let k = 1; k < N + 1; k++) {
    for (let j = 1; j < N + 1; j++) {
      for (let i = 1; i < N + 1; i++) {
        if (result[j][i] > result[j][k] + result[k][i]) {
          result[j][i] = result[j][k] + result[k][i];
        }
      }
    }
  }
let answer = "";
  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      if (result[i][j] === Infinity) {
        result[i][j] = 0;
      }
      answer += `${result[i][j]} `
    }
    answer += "\n";
  }
  console.log(answer);
}

solution();

// boj 11403 pass
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const result = Array.from({length: N}, () => new Array(N).fill(Infinity));
  

  for (let start = 1; start < N + 1; start++) {
    const destinations = input[start].split(" ").map(v => +v);
    destinations.forEach((value, destination) => {
      if (value) {
        result[start - 1][destination] = 1;
      }
    })
  }

  for (let k = 0; k < N; k++) {
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        if (result[j][i] === Infinity && result[j][k] + result[k][i] !== Infinity) {
          result[j][i] = 1;
        }
      }
    }
  }
  let answer = "";
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (result[i][j] === Infinity) {
        result[i][j] = 0;
      }
      answer += `${result[i][j]} `;
    }
    answer += "\n";
  }
  console.log(answer);
}

// boj 10159 unsolved 모르겠음
function solution() {
  const input =require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const M = +input[1];
  const result = Array.from({length: N + 1}, () => new Array(N + 1).fill(Infinity));
  
  for (let i = 2; i < 2 + M; i++) {
    const [a, b] = input[i].split(" ").map(v => +v);
    result[a][b] = 1;
  }

  for (let k = 1; k < N + 1; k++) {
    for (let j = 1; j < N + 1; j++) {
      for (let i = 1; i < N + 1; i++) {
        if (result[j][i] > result[j][k] +result[k][i]) {
          result[j][i] = Math.min(result[j][i], result[j][k] + result[k][i]);
        }
        
      }
    }
  }

  console.log(result.join("\n"));
}

// boj 11265 solved
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, M] = input[0].split(" ").map(v => +v);
  const road = Array.from({length: N}, () => new Array());
  for (let i = 1; i < N + 1; i++) {
    road[i - 1] = input[i].split(" ").map(v => +v);
  }
  
  for (let k = 0; k < N; k++) {
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        if (road[j][i] > road[j][k] + road[k][i]) {
          road[j][i] = road[j][k] + road[k][i];
        }
      }
    }
  }
  
  for (let i = N + 1; i < N + 1 + M; i++) {
    const [now, next, time] = input[i].split(" ").map(v => +v);
    if (road[now - 1][next - 1] <= time) {
      console.log("Enjoy other party")
    } else {
      console.log("Stay here");
    }
  }

}


// boj 18243 solved
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, K] = input[0].split(" ").map(v => +v);
  const relation = Array.from({length: N + 1}, () => new Array(N + 1).fill(Infinity));
  for (let i = 1; i < K + 1; i++) {
    const [a, b] = input[i].split(" ").map(v => +v);
    relation[a][b] = 1;
    relation[b][a] = 1;
  }

  for (let k = 1; k < N + 1; k++) {
    for (let j = 1; j < N + 1; j++) {
      for (let i = 1; i < N + 1; i++) {
        if (relation[j][i] > relation[j][k] && relation[k][i]) {
          relation[j][i] = Math.min(relation[j][i], relation[j][k] + relation[k][i]); 
        }
      }
    }
  }

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      if (relation[i][j] > 6 || relation[i][j] === Infinity) {
        console.log("Big World!");
        return;
      } 
    }
  }

  console.log("Small World!")
}

// boj 11581 solved pass ,자기 자신으로 돌아오는 길과 처음 1에서 출발해서 도착하는지를 확인해야 됨
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const road = Array.from({length: N + 1}, () => new Array(N + 1).fill(Infinity));
  for (let i = 1; i <= (N - 1) * 2; i = i + 2) {
    const nodeCount = +input[i];
    const intersection = input[i + 1].split(" ").map(v => +v);
    for (let j = 0; j < nodeCount; j++) {
      const node = intersection[j];
      road[Math.floor(i / 2) + 1][node] = 1;
    }
  }

  for (let k = 1; k < N + 1; k++) {
    for (let j = 1; j < N + 1; j++) {
      for (let i = 1; i < N + 1; i++) {
        road[j][i] = Math.min(road[j][i], road[j][k] + road[k][i]);
      }
      
    }
  }
  console.log(road);
  for (let i = 1; i < N; i++) {
    if (road[i][i] !== Infinity && road[1][i] !== Infinity) {
      console.log("CYCLE");
      return;
    }
  }

  console.log("NO CYCLE");
}

// boj 2458 
function solution() {
  // 비교결과가 전부다 있으면 자신의 위치 알 수 있음
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, M] = input[0].split(" ").map(v => +v);
  const students = Array.from({length: N + 1}, () => new Array(N + 1).fill(Infinity));
  for (let i = 1; i < M + 1; i++) {
    const [smaller, bigger] = input[i].split(" ").map(v => +v);
    students[smaller][bigger] = 1;
  }

  for (let k = 1 ; k < N + 1; k++) {
    for (let j = 1 ; j < N + 1; j++) {
      for (let i = 1 ; i < N + 1; i++) {
        if (students[j][i] > students[j][k] + students[k][i] && i !== j) {
          students[j][i] =  students[j][k] + students[k][i];
        }
      }
    }
  }
  console.log(students.join("\n"))
  let count = 0;
  for (let i = 1; i < N + 1; i++) {
    let flag = 0;
    for (let j = 1; j < N + 1; j++) {
      if (students[i][j] === Infinity && students[j][i] === Infinity && i !== j) {
        flag = 1;
      }
    }
    if (!flag)count++;
  }

  console.log(count);
}
// 끝에서 컨트롤 

// boj 1058 
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const relations = Array.from({length: N}, () => new Array(N).fill(Infinity));
  for (let i = 1; i < N + 1; i++) {
    const relation = input[i].split("");
    relation.forEach((v, index) => {
      if (v === "Y") {
        relations[i - 1][index] = 1;
        if (i - 1 === index) {
          relations[i - 1][index] = 0;
        }
      }
    })
  }

  for (let k = 0; k < N; k++) {
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        if (relations[j][i] > relations[j][k] + relations[k][i]) {
          relations[j][i] = relations[j][k] + relations[k][i]
        }
      }
    }
  }
  let max = 0;
  for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = 0; j < N; j++) {
      if (relations[i][j] <= 2 && i !== j) {
        count++;
      }
    }
    max = Math.max(max, count);
  }
  console.log(max)
}
// 플로이드 와샬과 BFS라고 생각...  아직 모르겟음
// 내일 재도전
// 처음 relations 설정할 때 친구관계 아닐때 0으로 설정한게 오류였다. 관계 없을 땐 Infinity, 플로이드와샬이라서 꼭 그러기 보단. 식의 관계
// 그래프에서 관계 없을 땐 Infinity!


function solution() {
  const [X, Y] = require("fs").readFileSync("./input.txt").toString().split(" ").map(v => +v);
  const Z = Math.floor(100 * Y / X);
  if (Z >= 99) {
    console.log(-1);
    return;
  }
  let count = 0;
  while (true) {
    count++;
    if (Math.floor(100 * (Y + count) / (X + count)) !== Z) {
      console.log(count);
      return;
    }
  }
}

// boj 1966 solved
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  for (let i = 1; i <= N * 2; i = i + 2) {
    const [N, M] = input[i].split(" ").map(v => +v); // 문서의 갯수와 타겟 문서
    let priorities = input[i + 1].split(" ").map(v => +v); // 이걸 애초에 객체로 만들어서 index로 구분
    const orders = [];
    for (let j = 0; j < N; j++) {
      orders[j] = j;
    }

    const target = priorities[M];
    let priority = Math.max(...priorities);
    let count = 0;
    let isFind = false;
    console.log(`${i}번째 ${target}`)

    // target change target을 중요도 같은 것과 구분지어줄 새로운 배열로 만들어야 된다고 생각 고민
    while (!isFind) {
      let out = priorities.shift();
      let order = orders.shift();
      if (out === target && out === priority && order === M) {
        count++;
        console.log(count);
        isFind = true;
        break;
      } else if (out === priority ) {
        count++;
        priority = Math.max(...priorities);
      } else {
        priorities.push(out);
        orders.push(order)
      }
    }
  }
}



// boj 7576 shift로 시간초과 문제 계속 발생... but solved
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [M, N] = input[0].split(" ").map(v => +v);
  const graph = [];
  for (let i = 0; i < N; i++) {
    graph.push(input[i + 1].split(" ").map(v => +v));
  }
  const visited = Array.from({length: N}, () => new Array(M).fill(false));
  const queue = [];
  let count = M * N;
  let time;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (graph[y][x] === 1) {
        queue.push([y, x, 0]);
        visited[y][x] = true;
        count--;
        continue;
      } 
      if (graph[y][x] === -1) {
        count--;
        visited[y][x] = true;
        continue;
      }
    }
  }

  const move = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let prevIdx = 0;
  let day = 0;
  while (true) {
    const curIdx = queue.length;
    let change = 0;
    for (let i = prevIdx; i < curIdx; i++) {
      const [qy, qx] = queue[i];
      for (let j = 0; j < 4; j++) {
        const [my, mx] = [qy + move[j][0], qx + move[j][1]];
        if (0 <= my && my < N && 0 <= mx && mx < M && !visited[my][mx]) {
          count--;
          change = 1;
          visited[my][mx] = true;
          queue.push([my, mx]);
        }
      }
    }
    if (!change) break;
    day++;
    prevIdx = curIdx;
  }

  if (count) {
    console.log(-1);
  } else {
    console.log(day);
  }

}

// boj 1946 입력방식에서 문제있었음 그래도 solved 풀이 방법은 맞음 ==> sort문제였음.  그냥 sort하면 시간초과남
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  let T = +input[0];
  let index = 1;
  while (T) {
    const N = +input[index];
    const scoreList = [];
    let count = 1;
    for (let i = 0; i < N; i++) {
      scoreList.push(input[i + index + 1].split(" ").map(v => +v));
    }
    scoreList.sort((a, b) => a[0] - b[0]);
    let min = scoreList[0][1];
    for (let i = 0; i < scoreList.length; i++) {
      if (scoreList[i][1] < min) {
        count++;
        min = scoreList[i][1];
      }
    }

    console.log(count);
    index += N + 1;
    T--;
  }
}
// 모두와 비교했을 때 둘다 뒤쳐지면 안됨, 하나라도 우수해야 합격


//boj 2210 DFS => backtracking 문제였다... 검색도움 solved
function solution() {
  const input =require("fs").readFileSync("./input.txt").toString().split("\n");
  const graph = Array.from({length: 5}, () => new Array());
  for (let i = 0; i < 5; i++) {
    graph[i] = input[i].split(" ").map(v => +v);
  }
  const answer = [];
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      backtracking(y, x, graph[y][x].toString());
    }
  }
console.log(answer.length);

  function backtracking(y, x, str) {
    const move = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    if (str.length === 6) {
      if (!answer.includes(str)) {
        answer.push(str);
      }

      return answer;
    }
    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + move[i][0], x + move[i][1]];
      if (0 <= ny && ny < 5 && 0 <= nx && nx < 5) {
        backtracking(ny, nx, str + graph[ny][nx]);
      }
    }
  }
}

//boj 3184 예제는 다 맞는데 어디서 틀린지를 모르겠음 나중에 다시....
function solution() {
  const input =require("fs").readFileSync("./input.txt").toString().split("\n");
  const [R, C] = input[0].split(" ").map(v => +v);
  const graph = Array.from({length: R}, () => new Array());
  for (let i = 1; i <= R; i++) {
    graph[i - 1] = input[i].split(""); 
  }
  const visited = Array.from({length: R}, () => new Array(C).fill(false));
  const fence = "#";
  const sheep = "o";
  const wolf = "v";
  let w = 0;
  let s = 0;
  let answer = [0, 0];
  for (let y = 0; y < R; y++) {
    for (let x = 0; x < C; x++) {
      if (graph[y][x] === wolf && !visited[y][x]) {
        w++;
        DFS(y, x);
        w >= s ? answer[1] += w : answer[0] += s;
        w = 0;
        s = 0;
      }
    }
  }

  console.log(answer.join(" "))
  function DFS(y, x) {
    const move = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    visited[y][x] = true;
    
    for (let i = 0; i < 4; i++) {
      const [my, mx] = [y + move[i][0], x + move[i][1]];
      if (0 <= my && my < R && 0 <= mx && mx < C && !visited[my][mx]) {
        if (graph[my][mx] !== fence) {
          if (graph[my][mx] === wolf) w++;
          if (graph[my][mx] === sheep) s++;
          DFS(my, mx)
        }
      }
    }
  }
}


// 12015 boj binary search solved
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const numbers = input[1].split(" ").map(v => +v);
  const answer = [numbers[0]];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > answer[answer.length - 1]) {
      answer.push(numbers[i]);
    } else {
      let left = 0;
      let right = answer.length - 1;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (answer[mid] < numbers[i]) {
          left = mid + 1;
        } else if (answer[mid] > numbers[i]) {
          right = mid;
        } else {
          answer[mid] = numbers[i];
          break;
        }
      }
      if (left >= right) {
        answer[right] = numbers[i];
      }
    }

  }

  console.log(answer);
}


// boj 1300 binarySearch 모르겠음 어디서 bs가 사용되는지
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const k = +input[1];
  const array = Array.from({length: N}, ()=> new Array(N).fill(0));
  const B = [];
  for (let y = 0; y < N; y++) {
    array[y] = array[y].map((_, i) => (y + 1) * (i + 1));
    B.push(...array[y]);
  }
  B.sort((a, b) => a - b);
  //k target
  console.log(B[k]);
}

// boj 1446 dijkstra
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, D] = input[0].split(" ").map(v => +v);
  const graph = new Array(D + 1).fill(0).map((v, i) => v + i);
  for (let i = 1; i <= N; i++) {
    const [start, end, cost] = input[i].split(" ").map(v => +v);
    if (end - start > cost) {
      graph[end] = Math.min(cost + graph[start], graph[end]);
    } 
  }

  for (let i = 1; i <= D; i++) {
    graph[i] = graph[i] > graph[i - 1] + 1 ? graph[i - 1] + 1 : graph[i];
  }
  console.log(graph[899])
}
solution();
// 432 나와야됨

//boj 1504 
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, E] = input[0].split(" ").map(v => +v);
  const graph = Array.from({length: N + 1}, () => new Array());
  for (let i  = 1; i <= E; i++) {
    const [start, destination, cost] = input[i].split(" ").map(v => +v);
    graph[start].push([destination, cost]);
    graph[destination].push([start, cost]);
  }


  class minHeap {
    constructor() {
      this.heap = [];
    }

    size() {
      return this.heap.length;
    }

    swap(a, b) {
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    add(value) {
      this.heap.push(value);
      let index = this.heap.length - 1;

      while(index > 0) {
        if (Math.floor((index - 1) / 2) >= 0 && this.heap[Math.floor((index - 1) / 2)][1] > this.heap[index][1]) {
          this.swap(Math.floor((index - 1) / 2), index);
          index = Math.floor((index - 1) / 2);
        } else break;
      }
    }

    remove() {
      this.swap(0, this.heap.length - 1);
      const deleted = this.heap.pop();
      let index = 0;
      while (index * 2 + 1 < this.heap.length) {
        let minIndex = index * 2 + 1;
        let minValue = this.heap[minIndex][1];
        if (index * 2 + 2 < this.heap.length && this.heap[index * 2 + 2][1] < minValue) {
          minIndex = index * 2 + 2;
          minValue = this.heap[index * 2 + 2][1];
        }

        if (minValue < this.heap[index]) {
          this.swap(minIndex, index);
          index = minIndex;
        } else break;
      }

      return deleted;
    }

  }//heap end

  const [a, b] = input[E + 1].split(" ").map(v => +v);
  const path1 = route(1, a) + route(a, b) + route(b, N);
  const path2 = route(1, b) + route(b, a) + route(a,  N);
  
  function route(start, next) {
    const heap = new minHeap();
    const dist = Array.from({length: N + 1}, () => Infinity);
    heap.add([start, 0]);
    dist[start] = 0;
  
    while (heap.size()) {
      const [vertex, weight] = heap.remove();
  
      graph[vertex].forEach((v) => {
        const [dst, w] = v;
        if (dist[dst] > dist[vertex] + w) {
          dist[dst] = dist[vertex] + w;
          heap.add([dst, dist[dst]]);
        }
      });
    }

    return dist[next];
  }
  const answer = Math.min(path1, path2);
  if (answer !== Infinity) {
    console.log(answer);
  } else {
    console.log(-1);
  }
}
// visited를 넣어두면 안됨, 똑같은 길 갈 수 있으니까
solution();

// boj 13549
function solution() {
  const [N, K] = require("fs").readFileSync("./input.txt").toString().split(" ");
  // cost 1의 앞 뒤 이동 or cost 0의 순간이동
}

// boj 10026 solved dfs
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const painting = Array.from({length: N}, ()=> new Array());
  const rbPainting = Array.from({length: N}, ()=> new Array());
  for (let i = 1; i <= N; i++) {
    painting[i - 1] = input[i].split("");
    rbPainting[i - 1] = input[i].split("").map(v => {
      if (v === "G") return "R";
      return v;
    })
  }
  const answer = [];
  let visited = Array.from({length: N}, ()=> new Array(N).fill(false));
  let rCount = 0;
  let gCount = 0;
  let bCount = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (painting[y][x] === "R" && !visited[y][x]) {
        dfs(y, x, painting, "R");
        rCount++;
      } else if (painting[y][x] === "G" && !visited[y][x]) {
        dfs(y, x, painting, "G");
        gCount++;
      } else if (painting[y][x] === "B" && !visited[y][x]) {
        dfs(y, x, painting, "B");
        bCount++;
      }
    }
  }
  answer.push(rCount + gCount + bCount);
  visited = Array.from({length: N}, ()=> new Array(N).fill(false));
  rCount = 0;
  bCount = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (rbPainting[y][x] === "R" && !visited[y][x]) {
        dfs(y, x, rbPainting, "R");
        rCount++;
      } else if (rbPainting[y][x] === "B" && !visited[y][x]) {
        dfs(y, x, rbPainting, "B");
        bCount++;
      }
    }
  }
  answer.push(rCount + bCount);

  function dfs(y, x, graph, condition) {
    visited[y][x] = true;
    const move = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let i = 0; i < 4; i++) {
      const [my, mx] = [y + move[i][0], x + move[i][1]];
      if (0 <= my && my < N && 0 <= mx && mx < N) {
        if (graph[my][mx] === condition && !visited[my][mx]) {
          dfs(my, mx, graph, condition);
        }
      }
    }
  }
  console.log(answer.join(" "));
}

// boj 시간초과
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, M] = input[0].split(" ").map(v => +v);
  const cantSeeHear = [];
  const real = [];
  for (let i = 1; i <= N; i++) {
    cantSeeHear.push(input[i]);
  }
  cantSeeHear.sort();
  for (let i = N + 1; i <= N + M; i++) {
    if (cantSeeHear.includes(input[i])) {
      binarySearch(cantSeeHear, input[i])
    } 
  }
  
  console.log(real.length);
  console.log(real.join("\n"))

  function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      if (arr[mid] === target) {
        real.push(target);
        break;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
}
// 14888 boj backtracking solved
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const numbList = input[1].split(" ").map(v => +v);
  const operatorList = input[2].split(" ").map(v => +v); //+ - x /
  let operators = "";
  operatorList.forEach((v, i) => {
    if (v) {
      if (i === 0) {
        operators += "+".repeat(v);
      } else if (i === 1) {
        operators += "-".repeat(v);
      } else if (i === 2) {
        operators += "*".repeat(v);
      } else {
        operators += "/".repeat(v);
      }
    }
  })
  const easy = operators.split("");
  const M = easy.length;
  let max = -Infinity;
  let min = Infinity;
  const output = [];
  const result = [];
  const visited = new Array(N).fill(false);
  function recur(num) {
    if (num === M) {
      result.push([...output]);
      return;
    }

    for (let i = 0; i < M; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      output.push(easy[i]);
      recur(num + 1);
      visited[i] = false;
      output.pop();
    }
  }

  recur(0);

  for (let i = 0; i < result.length; i++) {
    const ex = result[i];
    let sum =0;
    for (let j = 0; j < numbList.length - 1; j++) {
      const operator = ex[j];
      if (j === 0) {
        if (operator === "+") {
          sum += numbList[j] + numbList[j + 1];
        } else if (operator === "-") {
          sum += numbList[j] - numbList[j + 1];
        } else if (operator === "*") {
          sum += numbList[j] * numbList[j + 1];
        } else {
          sum += parseInt(numbList[j] / numbList[j + 1]);
        }
      } else {
        if (operator === "+") {
          sum = sum + numbList[j + 1];
        } else if (operator === "-") {
          sum = sum - numbList[j + 1];
        } else if (operator === "*") {
          sum = sum * numbList[j + 1];
        } else {
          if (sum < 0) {
            let temp = sum * -1;
            sum = parseInt(temp / numbList[j + 1]) * -1;
          } else {
            sum = parseInt(sum / numbList[j + 1]);
          }
          
        }
      }
      
    }
    max = Math.max(max, sum);
    min = Math.min(min, sum);
  }
  console.log(max ? max : 0);
  console.log(min)
}
// 같은 문제 refac
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const numbList = input[1].split(" ").map(v => +v);
  const operatorList = input[2].split(" ").map(v => +v);

  let max = -Infinity;
  let min = Infinity;

  function operation(num1, num2, operator) {
    switch(operator) {
      case 0:
        return num1 + num2;
      case 1:
        return num1 - num2;
      case 2:
        return num1 * num2;
      case 3:
        const result = num1 > 0 ? parseInt(num1 / num2) : -parseInt(-num1 / num2);
        return result;
    }
  }

  function recur(index, result, operator) {
    if (index === numbList.length) {
      max = Math.max(max, result);
      min = Math.min(min, result);
    }

    for (let i = 0; i < 4; i++) {
      if (operator[i]) {
        const newOpers = JSON.parse(JSON.stringify(operator));
        newOpers[i]--;
        recur(index + 1, operation(result, numbList[index], i), newOpers);
      }
    }
  }
  recur(1, numbList[0], operatorList)
  console.log(max ? max : 0)
  console.log(min ? min : 0)
}

// boj 2531 two pointer solved
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [N, d, k, c] = input[0].split(" ").map(v => +v);
  const dishes = [];
  for (let i = 1; i <= N; i++) {
    dishes.push(+input[i]);
  }
  let selected = [];
  let max = -Infinity;
  let end = 0;
  for (let start = 0; start < N; start++) {
    while(selected.length !== k) {
      selected.push(dishes[end]);
      end = end + 1 === N ? 0 : end + 1;
    } 

    let size = [... new Set(selected)].length;

    max = !selected.includes(c) ? Math.max(max, size + 1) : Math.max(max, size);
    selected.shift();
  }
  console.log(max);
}
// two pointer 구현 앞 뒤도 중요하지만, 계속 같은 과정 반복하지 않도록 끝과정 잘  처리하는 것도 중요!!


// boj 9461 DP solved easy
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n").map(v => +v);
  const N = input[0];
  const maxNumber = Math.max(...input);
  // 1 1 1 2(1, 1) 2 (2) 3(1, 2) 4(1, 3) 5(1, 4) 7(2, 5) 9(2, 7) 12(3, 9) 16 (4, 12) 21 (5, 16)
  const dp = [1, 1, 1, 2, 2]
  for (let i = 5; i <= maxNumber; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }
  for (let i = 1; i < N + 1; i++) {
    console.log(dp[input[i] - 1]);
  }
}
// boj 9251 
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const value = input[0].split("");
  const other = input[1].split("");
  const dp = Array.from({length: other.length}, () => new Array(value.length).fill(0));
  dp[0][0] = 0;
  for (let i = 0 ; i < other.length; i++) {
    for (let j = 0; j < value.length; j++) {
      const str = value[j];
      const oStr = other[i];
      if (str === oStr) {
        if (i && j) {
          dp[i][j] = dp[i - 1][j -1] + 1;
        } else {
          dp[i][j] = 1;
        } 
      } else {
        if (i === 0 && j === 0) {
          dp[i][j] = 0;
          continue;
        }

        if (i && j) {
          dp[i][j] = Math.max(dp[i -1][j], dp[i][j -1]);
        } else if (i === 0) {
          dp[i][j] = dp[i][j - 1];
        } else {
          dp[i][j] = dp[i - 1][j];
        }
        
      }
    }
  }
  console.log(dp[other.length - 1][value.length - 1]);
}

// boj 9205 graph theory bfs solved
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  let t = +input[0];
  let index = 1;
  // n
  // 집
  // 편의점 n개
  // festival
  while (t > 0) {
    const n = +input[index];
    const position = [];
    
    let leftBeer = 20;
    let isHappy = false;

    for (let i = index + 1; i < index + n + 3; i++) {
      position.push(input[i].split(" ").map(v => +v));
    }
    const visited = new Array(position.length).fill(false);
    const queue = [position[0]];
    visited[0] = true;
    while (queue.length) {
      const [x, y] = queue.shift();
      if (x === position[position.length - 1][0] && y === position[position.length - 1][1]) isHappy = true;
      for (let i = 1; i < position.length; i++) {
        const nextPosition = position[i];
        const nextX = nextPosition[0];
        const nextY = nextPosition[1];
        if (!visited[i]) {
          if (Math.abs(x - nextX) + Math.abs(y - nextY) <= 1000) {
            queue.push(nextPosition);
            visited[i] = true;
          }
        }
        
      }
    }
    
    

    isHappy ? console.log("happy") : console.log("sad");
    index += n + 3;
    t--;
  }
}

// boj 1766 priority queue 틀림 이유 모르겠음
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const [n, m] = input[0].split(" ").map(v => +v);
  const cards = input[1].split(" ").map(v => +v);
  
  class minHeap{
    constructor() {
      this.heap = [];
    }
    show() {
      console.log(this.heap)
    }
    result() {
      return this.heap.reduce((acc, cur) => acc + cur);
    }
    isEmpty() {
      return this.heap.length === 0;
    }

    swap(a, b) {
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    enqueue(value) {
      this.heap.push(value);
      let index = this.heap.length - 1;
      while (index > 0) {
        if (Math.floor((index - 1) / 2) >= 0 && this.heap[index] < this.heap[Math.floor((index - 1) / 2)]) {
          this.swap(index, Math.floor((index - 1) / 2));
          index = Math.floor((index - 1) / 2);
        } else break;
      }
    }

    dequeue() {
      const deleted = this.heap[0];
      this.swap(0, this.heap.length - 1);
      this.heap.pop();
      let index = 0;
      while(index * 2 + 1 < this.heap.length) {
        let minIndex = index * 2 + 1;
        let minValue = this.heap[minIndex];
        if (index * 2 + 2 < this.heap.length && minValue > this.heap[index * 2 + 2]) {
          minIndex = index * 2 + 2;
          minValue = this.heap[minIndex];
        }

        if (this.heap[index] > minValue) {
          this.swap(index, minIndex);
          index = minIndex;
        } else break;
      }

      return deleted
    }
    
  }
  const heap = new minHeap();
  for (let i = 0; i < n; i++) {
    heap.enqueue(cards[i]);
  }
  for (let i = 0; i < m; i++) {
    const a = heap.dequeue();
    const b = heap.dequeue();
    const sum = a + b;
    heap.enqueue(sum);
    heap.enqueue(sum);
  }
  console.log(heap.result())
}

// boj 10825 sort 한번에 sort로 오름차순, 내림차순 하는 방식
function solution() {
  const input = require("fs").readFileSync("./input.txt").toString().split("\n");
  const N = +input[0];
  const studentsInfo = [];
  for (let i = 1; i <= N; i++) {
    studentsInfo.push(input[i].split(" ").map((v, i) => i ? +v : v));
  }
  const answer = [];
  studentsInfo.sort((a, b) => {
    const aScore = (100 - a[1])*10**6 + a[2]*10**3 + (100 - a[3]);
    const bScore = (100 - b[1])*10**6 + b[2]*10**3 + (100 - b[3]);
    if (aScore === bScore) {
      if (a[0] > b[0]) return 1;
      else if (a[0] < b[0]) return -1;
      else return 0;
    } else {
      return aScore - bScore;
    }
  }).forEach(student => answer.push(student[0]))
  console.log(answer.join("\n"));
}
*/

// boj 1300 binarySearch
// 코드는 간단하지만, 이분탐색을 어떻게 적용해야 될지 어려운 문제, 아직 완벽히 이해하지 못한것 같다.
// count 안에 k가 들어가면 범위를 줄이고, count가 더 작으면 범위를 넓히는 게 이분탐색의 기본이고 핵심아이디어

function solution() {
  const [N, k] = require("fs").readFileSync("./input.txt").toString().split("\n").map(v => +v);
  let left = 1;
  let right = N * N;
  let result = 0;
  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    let count = 0;

    for (let i = 1; i<= N; i++) {
      count += Math.min(N, parseInt(mid / i));
    }

    if (count >= k) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log(result);
}
solution();
module.exports = solution;
