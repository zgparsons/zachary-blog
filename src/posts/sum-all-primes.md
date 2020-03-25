---
layout: layouts/post.njk
title: Sum All Primes
metaTitle: Sum All Primes - Free Code Camp Solution and Walkthrough
date: 2020-01-22T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - blog
---
From the FreeCodeCamp intermediate algorithms [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes):

> A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
> 
> Rewrite `sumPrimes` so it returns the sum of all prime numbers that are less than or equal to num.
> 
> FreeCodeCamp - [Sum all Primes](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes)

Although I'm not great at maths, I am aware of prime numbers... And so I didn't think this would be quite so hard as it actually turned out to be!

My approach (I'm sure there are others, many better I've no doubt) involved writing a function which would check whether or not a number was prime. Then using a for loop to go through the numbers from 0 to 'num' (the given number from the function argument), checking each one for [primality](https://en.wikipedia.org/wiki/Primality_test), and then adding those that are prime to an array. Once I had this array all I'd need to do is run a `.reduce()` method with a function that would add each array entry to the next. A bit like I had done in the [previous challenge](/sum-all-odd-fibonacci-numbers/).


Simple right?

Not as simple as you might imagine. Writing a prime function is _a bit_ difficult.

I read through a few examples online, and found [this one](https://studymaths.co.uk/topics/checkIfPrime.php) the most helpful in the end. If I'm honest, some of them I struggled to understand and couldn't really work out.

In the end I decided the best thing to do would be to eliminate the base cases of 'num' being either less than 2, or 2, and also if 'num' is divisible by 2 (and isn't 2). Essentially the function needs to reply true for 2, but false for 0 or 1.

I used an if statement to catch anything less than or equal to 2 (and returned it true if num == 2, but false if else. And then a simple if `(num % 2 == 0)` check too.

Then, using the logic from the post mentioned above, I assumed that 'num' would be a prime and then tried to prove that it's not as a check. To do this we can check the primality of num by using a for loop which starts at 2, and goes up to the square root of 'num'. Prime numbers obviously don't have a rational square root and so the check given (using a modulus to check if the remainder of the division is equal to zero) will always be false for a prime number, and true for a non-prime number.

So anyway, once the math-sy bit was out the way I could just go from 0 up to 'num' using a for loop, checking for primes, and add any primes into an array. I did this, and wrote a quick return statement using `primes.reduce((a,b) => a+b)`. This would ensure that each entry (a) in the primes array was added to the next (b), which would result in one figure - all of the primes added together.

I hit the 'Run the tests' button with absolute confidence!

😒 But no - a failed test, how could this be!?

So the test for '10' was returning fine, but the test for '977' was not working! 🤔

That's a large number I thought, I'll never be able to work this out I thought! I'm doomed... 😢🤷‍♂️

But actually, I calmed down and took a breath, and looked at my code once more. At this point I tried a test of my own - I knew that the number 11 was a prime so I `console.log()`-ed the function with an 11. But the output was still '17', the same as my result for 10.

That's it - that's the issue.

10 is not a prime number, 11 is. So my code must not be pushing the final prime number in the sequence (from 0 to 'num') onto the array. If the given 'num' is a prime number then my reduce statement isn't adding that final value on, because it's not in the array.

I checked and '977' is a prime number, and the final check result was off by, you guessed it, 977!

So my for loop for pushing the primes onto the array needed to read `for (let i = 0; i <= num; i++)` instead of `i < num`!

My solution:

```javascript
function sumPrimes(num) {
  let primes = [];
  for (let i = 0; i <= num; i++) {
    if (isPrime(i) == true) {
      primes.push(i);
    }
  }
  return primes.reduce((a,b) => a+b);
  //console.log(primes)
  //console.log(isPrime())
  function isPrime(num) {
    // Base cases:
    if (num <= 2) return (num == 2);
    if (num % 2 == 0) return false;
    // Logic:
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {prime = false}
    }
    return prime;
  }
}

sumPrimes(10); // '17'
sumPrimes(977); // '73156', not '72179'!
```