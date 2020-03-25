---
layout: layouts/post.njk
title: Sum All Odd Fibonacci Numbers
metaTitle: Sum All Odd Fibonacci Numbers - Free Code Camp Solution and Walkthrough
date: 2020-01-21T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp intermediate algorithms [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers):

> Given a positive integer `num`, return the sum of all odd Fibonacci numbers that are less than or equal to `num`.
> 
> The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
> 
> For example, `sumFibs(10)` should return `10` because all odd Fibonacci numbers less than or equal to `10` are 1, 1, 3, and 5.
> 
> FreeCodeCamp - [Sum all Odd Fibonacci Numbers](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers)

Looking back at my notes from this challenge I have only written the following sentences:

> I'm finally beginning to understand the:
> 
> .map, .filter and .reduce
> 
> methods! Amazing. Great posts about them [here](https://codeburst.io/learn-understand-javascripts-map-function-ffc059264783).
> 
> Me!

Haha - something must have clicked whilst I was working out the code for this challenge. Let's have a look.

The first thing that leaps out is that I've gone functional! I've written a function to find out the Fibonacci sequence up to a number - which is obviously helpful because the object of the challenge is sum all of the odd numbers less than or equal to the given number, from the sequence. Initially we need to know all of the numbers in the sequence up to the given number and then we can filter out the odd ones and return the sum of them.

The fib function I have written might not stand up with the best around but it'll do for this...

*   Declare an array, and pre-populate it with the first two values of the fib sequence: `[1, 1]`
*   Begin a for loop - which starts at 2, and goes up to the given number (it must include the given number)
*   And add onto the array the preceding two elements of the array added together - `arr.push(arr[j - 1] + arr[j - 2]);` where j is the incremental loop value which began at 2.
*   That's it.

Now to get into the second function which takes care of the deliverable we need for the challenge.

So although there are a few lines of code, thanks to the .filter, and .reduce methods, this could be written in one line. It's return statement which does all the work by stringing together:

1.  A function call - to fib() which is explained above. This is to get the full sequence of Fibonacci numbers, which will include both odd and even numbers.
2.  The .filter() method - this uses a function to filter out the even numbers, and so only returns the odd numbers.
3.  The .reduce() method - this takes the odd numbers returned from step 2, and reduces them into one final return value. It does this by adding them together.

Let's look at number 2 and 3 a little bit closer (as we already did with number 1 above).

2 - the .filter() method looks at every value in the given array, and checks it via a function. If the result of running the value through the function is true it will return the value at the end along with any other true values. Any false values it will 'filter' out, and they won't be returned.

3 - the .reduce() method takes a number of values and 'reduces' them down to one final value which it returns. To do this it takes a function which it applies to the values. In this case it takes the first value in the array, and adds it to the second - then it takes that value and adds it to the next, and so on, until only one value remains.

My solution:

```javascript
function sumFibs(num) {
  return fib(num).filter(val => {
    return (val % 2 !== 0) && (val <= num);
  }).reduce((x, y) => {
    return x + y;
  });

  function fib(i) {
    let arr = [1, 1];
    for (let j = 2; j < i + 1; j++) {
      arr.push(arr[j - 1] + arr[j - 2]);
    }
    return arr;
  }
}

sumFibs(10);
```