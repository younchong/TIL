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