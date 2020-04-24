---
layout: layouts/post.njk
title: Convert HTML Entities
metaTitle: Convert HTML Entities - Free Code Camp Solution and Walkthrough
metaDesc: A post about the Free Code Camp problem Convert HTML Entities -
  written by Zachary Parsons and published at zacharyparsons.co.uk
date: 2020-01-20T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp intermediate algorithms [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities):

> Convert the characters `&`, `<`, `>`, `"` (double quote), and `'` (apostrophe), in a string to their corresponding HTML entities.
> 
> FreeCodeCamp - [Convert HTML Elements](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities)

For this task there will certainly be other ways to complete it. However although the code may look slightly long, it did not take a long time to write out. The logic is quite simple.

I began by splitting the given string into an array, and then looped through the characters. I also declared a new return array which I would be adding specific items into depending on the following checks.

Then, for each item in the array, I checked if they were one of the characters we are looking for. If they were I would add the corresponding HTML entity onto the return array. And if they were not one of the characters I would add the character, as it was, on to the return array.

The given string is 'Dolce & Gabbana'.

The for loop would check 'D' first and decide it's not one of the characters we are looking for and so would add 'D' onto the return array. It would then check 'o' and do the same, and so on. Until it reached '&', where it would be flagged by one of the if statements and instead of adding '&' to the return array it would add '&amp;' to it. Then once it had reached the end, the function can return the array but with a `.join('')` method attached which will transform it into a string instead of an array.

My solution:

```javascript
function convertHTML(str) {
  // :)
  let array = str.split('');
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '&') {
      returnArray.push('&');
    } else if (array[i] === '<') {
      returnArray.push('<');
    } else if (array[i] === '>') {
      returnArray.push('>');
    } else if (array[i] === '"') {
      returnArray.push('"');
    } else if (array[i] === '\'') {
      returnArray.push('\'');
    } else {
      returnArray.push(array[i]);
    }
  }
  return returnArray.join('');
}

convertHTML("Dolce & Gabbana");
```

I would be interested to see other methods to do this - I think you could also use a switch statement which might be more concise (but not by too much). I also think it would be possible to use the `.map()` method with a function that maps the specific characters to their new HTML counterparts - I imagine this will be even more concise, but arguably would be less readable (perhaps especially so to those newer to coding / js).