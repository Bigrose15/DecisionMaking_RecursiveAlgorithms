//Fibonacci Sequence

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

/* This function calculates the nth Fibonacci number.

Fibonacci Sequence:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,

Each number is the sum of the two preceding numbers:

- Fibonacci(0) = 0
- Fibonacci(1) = 1
- Fibonacci(2) = Fibonacci(1) + Fibonacci(0) = 1 + 0 = 1
- Fibonacci(3) = Fibonacci(2) + Fibonacci(1) = 1 + 1 = 2
- Fibonacci(4) = Fibonacci(3) + Fibonacci(2) = 2 + 1 = 3 and so on till the 10th fibonacci number.

Function Explanation:

function fibonacci(n) {
  if (n <= 0) return 0; // base case: Fibonacci(0) = 0
  if (n === 1) return 1; // base case: Fibonacci(1) = 1
  return fibonacci(n - 1) + fibonacci(n - 2); // recursive case*/
