---
layout: layouts/post.njk
title: Sum All Numbers in a Range
metaTitle: Sum All Numbers in a Range - Free Code Camp Solution and Walkthrough
date: 2020-01-10T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp Intermediate Algorithms Challenges:

> We’ll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
> 
> For example, `sumAll([4,1])` should return `10` because sum of all the numbers between 1 and 4 (both inclusive) is 10.
> 
> FreeCodeCamp – [Sum All Numbers in a Range](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range)

For this problem it becomes clear quite quickly that you need to create a list of numbers which can then be added up. The list needs to contain each number in the given array, and each of the numbers which fall between those numbers. So in the example of \[4,1\], the list which you create needs to contain 1, 2, 3 and 4. In another example of \[2,4\], the list will need to contain 2, 3 and 4.

To do this you need to first sort the given array to be smallest to largest. This is so that the logic which you use later will always be able to grab the highest number from the same spot in the array.

So to do this you can quite easily use the `sort()` method on the given array. However, the default `sort()` method will convert the given elements into strings and then compare them, which can lead to incorrect sorting! You can give the sort method your own compare function though as a parameter. [More info on how to implement a sorting function here…](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

Once the array is sorted, a while loop can be used to create a new array which contains all of the digits between the two numbers, then the `concat()` method can be used the put both the list array and the original array together in one array.

At this point you have an array which contains all of the elements which need to be added together. There are a few options but a concise and easy to understand choice is to use the reduce() method.

This is my reduce call: `fullArr.reduce( (x, y) => x + y )`

The reduce methods parameters (x and y) can be seen as ‘current’ and ‘next’, with current starting on the first element of the array and next on the second.

So in our example of \[1, 4\], the array we have ended up with is \[1, 2, 3, 4\] (though perhaps not in that order, but the order is not important for the reduce method to work). So x begins as 1, and y as 2. Then the values move along, in accordance with the function given, and continue that process until they reach the last value.

So the function here is x + y, which gives us 3.

Now the values can move along, x holds the return value and y grabs the next value in the array – so x is 3, and y is 3 which gives us 6.

In the next step x is 6 and y is 4 – the final value in the array. So the function completes the last addition and returns the final value – which is 6 + 4 = 10.

There’s a great deep dive on the FreeCodeCamp blog into the reduce method by Josh Pitzalis ([is this him?](https://twitter.com/joshpitzalis)), you can read it [here](https://www.freecodecamp.org/news/reduce-f47a7da511a9/).

My Solution:
```javascript
function sumAll(arr) {
  arr.sort( (a, b) => a - b );
  let num = arr[1] - 1;
  let list = [];
  while (num > arr[0]) {
    list.push(num);
    num--;
  }
  let fullArr = arr.concat(list);
  return fullArr.reduce( (x, y) => x + y );
}
sumAll([1, 4]);
// 10
```