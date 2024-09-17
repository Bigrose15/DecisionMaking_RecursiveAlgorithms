//Power Function

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(7, 3));

//explaination
/*Here's the step-by-step calculation:


1. power(7, 3) calls power(7, 2)
2. power(7, 2) calls power(7, 1)
3. power(7, 1) calls power(7, 0)
4. power(7, 0) returns 1 (base case)

Now, the recursive calls return:


1. power(7, 1) returns 7 * 1 = 7
2. power(7, 2) returns 7 * 7 = 49
3. power(7, 3) returns 7 * 49 = 343
*/
