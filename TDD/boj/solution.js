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
*/
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
module.exports = solution;