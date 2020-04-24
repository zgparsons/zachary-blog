---
layout: layouts/post.njk
title: Binary Agents
metaTitle: Binary Agents - Free Code Camp Solution and Walkthrough
metaDesc: A post about the Free Code Camp problem Binary Agents -
  written by Zachary Parsons and published at zacharyparsons.co.uk
date: 2020-01-27T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp intermediate algorithms [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents):

> Return an English translated sentence of the passed binary string.
> 
> The binary string will be space separated.
> 
> FreeCodeCamp - Binary Agents

For this challenge I began by splitting the binary string into an array of the given 8 bit blocks. This would make it a lot easier to work with.

Then, I declared the arrays which I thought that I'd need to translate binary into English! So I declared a 'decimalArr', which I planned to add each block into once I'd translated it from binary to decimal, and then also a 'letterArr', which I would then fill with the letters which I had translated from decimal into letters. To do this last part I used the ASCII codes for each.

I found that in order to translate binary to decimal I needed to take each bit from the byte block and multiply it by a descending power of two - beginning from 7 and going down to 0. And then to add the decimal digits we have at the end together. Or to spell it out a bit more clearly, if we have the byte: '01000001', we would:

*   Take the first 0 and multiply it by 2 to the power of 7 - 0 * 2^7 = 0
*   Take the second digit, which is 1 and multiply it by 2 to the power of 6 - 1 * 2^6 = 64
*   And continue this way - 0 * 2^5 = 0
*   0 * 2^4 = 0
*   0 * 2^3 = 0
*   0 * 2^2 = 0
*   0 * 2^1 = 0
*   1 * 2^0 = 1
*   And finally to add 64 and 1 together = 65.

Then once we have this number, it can be translated into ASCII with a conversion chart. Or thanks to JavaScript just with a String method. I did this by reducing the array down to the final value, and then by adding each decimal item into the decimal array.

From there I mapped the decimal array to a new array by making each element a String (and using the .fromCharCode() method to do so), and then returned the array joined into the final string.

My solution:

```javascript
function binaryAgent(str) {
      let binaryArr = str.split(' ');
      let decimalArr = [];
      let letterArr = [];
      for (let i = 0; i < binaryArr.length; i++) {
        let str = binaryArr[i];
        let power = 7;
        let tempArr = [];
        for (let j = 0; j < str.length; j++) {
          let dec = str[j] * (Math.pow(2, power));
          tempArr.push(dec);
          power--;
        }
        decimalArr.push(tempArr.reduce((a, b) => a+b));
      }
      letterArr = decimalArr.map(x => String.fromCharCode(x));
      return letterArr.join('');
    }
    
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```