---
layout: layouts/post.njk
title: Smallest Common Multiple
metaTitle: Smallest Common Multiple - Free Code Camp Solution and Walkthrough
metaDesc: A post about the Free Code Camp problem Smallest Common Multiple -
  written by Zachary Parsons and published at zacharyparsons.co.uk
date: 2020-01-23T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp intermediate algorithms [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple):

> Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
> 
> The range will be an array of two numbers that will not necessarily be in numerical order.
> 
> For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers _between_ 1 and 3. The answer here would be 6.
> 
> FreeCodeCamp - [Smallest Common Multiple](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple)

Tricky. From the challenge description I could tell there would need to be a two-pronged attack with this one. I knew I would need to write a function to find the lowest common multiple of the two given numbers, but then I was initially not sure of how I would then check each of the numbers in the range.... As I said [yesterday](https://zed.code.blog/2020/01/22/sum-all-primes/) - maths is not my strongest subject!

Anyway, I thought I would plough ahead and then deal with the issue later. So that's what I did. At first I sorted the array so that it would be easy to grab the smallest and largest values. I needed a little bit of google for this, as I knew there is a sort Array method, but I knew that if you called it without a function it sometimes does [funny things - logical, but still funny](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

So a quick google told me that you need to specify which of the values would be lowest by providing the function with a value of less than zero. This sounds like it doesn't make sense but, as with all programming, it makes perfect sense. Let's use an array of 1 and 5 as an example.

let arr = [1, 5];

arr.sort((a,b) => a - b);

So, in this example we can substitute a and b directly for 1 and 5. 1 - 5 is -4. If we swapped these around and arr = [5, 1], the sort function would do this: 5 - 1 = 4.

This tells the function that each item is in the incorrect place. It is effectively saying a needs to be less than b. If the array was [5, 1, 3, 7, 4] - then the function would sort it in sequence.

*   5 - 1 = 4 (these need to be swapped)
    *   1 - 5 = -4 (good swap)
*   5 - 3 = 2 (these need to be swapped)
    *   3 - 5 = - 2 (good swap)
*   5 - 7 = -2 (these do not need to be swapped)
*   7 - 4 = 3 (these need to be swapped)
    *   4 - 7 = -3 (good swap)
    *   At this point the array is [1, 3, 5, 4, 7] (not completely sorted).
*   5 - 4 = 1 (need to be swapped)
    *   4 - 5 = -1 (good)
*   Final sorted array = [1, 3, 4, 5, 7]

If that makes sense…? That's how my mind worked it out anyway - I'm not sure if that's the exact order it would be done in, or if a sort like this is good or bad in terms of time complexity. Harvard University's [CS50 course](https://online-learning.harvard.edu/course/cs50-introduction-computer-science) was really interesting and helps newbs like me to understand things like this a little better.

Sorry - that was quite a long winded way to explain a sort function, but going through it like that helped me to understand it anyway!

Anyway - so that's the first line of code reviewed! 😂😲

You can see in my solution I commented today's code because I knew I'd need to refer to them to make it easier to see what's going on.

Populating the range array is fairly standard - I've taken the two numbers and with a for loop pushed each number from the min up to and including the max (it's important to include the max to get the correct output for this challenge). So in our example of arr = [1, 5], our shiny new 'range' array = [1, 2, 3, 4, 5].

And then, with some help from [this FreeCodeCamp forum answer](https://www.freecodecamp.org/forum/t/stuck-on-smallest-common-multiple/163048/2) (thanks!) I worked out that finding the lowest common multiple (lcm) of every number in the range could be done by finding the first two's lcm, and then that number and the next in the ranges's (that forum answer explains it well using sum of 1, 2 and 3 as a good example). We need to get one number from a group of numbers, and so we need to 'reduce' the numbers down to that final output - can you guess which method we'll need to use!? But of course I need a function (which will be to obtain the lcm) to go into the reduce method, otherwise it is useless.

The lcm function at the bottom of the code block is fairly simple. The pseudocode would be something like:

```
let originalMax = // some value
let min = // some value
let max = originalMax;
while (max % min !==  0) {
	max = max + originalMax;
} 
return max;
```

Or, in words:

While the max number divided by the minimum number does not divide without a remainder, add the original max amount to the max and then try again. Once the (new) maximum and the minimum divide without a remainder the new maximum is the lowest common multiple.

So with 1 and 5. 5 divided by 1 is 5 and there are no remainders so 5 is the lcm.

With 2 and 5. 5 divided by 2 is 2.5 - or 2 with a remainder of 1. So we would add 5 to 5 and try again. 10 divided by 2 is 5. No remainder. And so 10 is the lcm.

And there you have it.

I'm sure that's mostly all [gibberish](https://en.wikipedia.org/wiki/Gibberish) to anyone who will read this. But that's my thought process anyway... 😂 How would you approach this problem?

My solution:

```javascript
function smallestCommons(arr) {
      // sort arr from smallest to largest
      arr.sort((a, b) => a - b);
    
      // declare variables and give values
      let min, max, range = [];
      min = arr[0];
      max = arr[1];
      // populate range array
      for (let i = min; i <= max; i++) {
        range.push(i);
      }
      
      // return a reduction of the range - reduced to lcm with lcm function
      return range.reduce(lcm);
    
      // function to find lowest common multiple (lcm)
      function lcm(min, max) {
        let i = max;
        while (i % min !== 0) {
          i+=max;
        }
        return i;
      }
    }
    
    smallestCommons([1, 5]);
    ```