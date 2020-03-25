---
layout: layouts/post.njk
title: DNA Pairing
metaTitle: DNA Pairing - Free Code Camp Solution and Walkthrough
date: 2020-01-17T00:00:00.000Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp intermediate algorithms [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing):

> The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
> 
> Base [pairs](http://en.wikipedia.org/wiki/Base_pair) are a pair of AT and CG. Match the missing element to the provided character.
> 
> Return the provided character as the first element in each array. For example, for the input GCG, return [[“G”, “C”], [“C”,”G”],[“G”, “C”]].  
> The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
> 
> FreeCodeCamp – [DNA Pairing](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing)

Although I was able to get this one done fairly quickly I don’t think I’ll be relied upon by DNA scientists for my algorithm writing any time soon 😂…

I’ve no doubt there will be a better way to do this but I decided to break the given string into an array of characters, and then check each item individually (with a for loop) and replace that item (using the splice method) with an array of the correct pairing.

Sting.split(”) places each character into an array. So then for ‘CGC’, we would have [‘C’, ‘G’, ‘C’].

And then the for loop goes through each element and checks via a set of ‘if, else’ statements the letter and then acts according to it. Like this:

`if (arr[i] == 'G') {  
arr.splice(i, 1, ['G', 'C']);  
} else if (arr[i] == 'C') {  
arr.splice(i, 1, ['C', 'G']);  
}` etc.

So for the first entry of the array: [‘C’, ‘G’, ‘C’] which is ‘C’, a .splice() method is used to remove that entry and in its place insert a nested array of [‘C’, ‘G’]. The method needs to take the following parameters to have the desired effect:

`arr.splice(i, 1, ['C', 'G'])`

The parameters do the work and make sure it’s done in the correct place. They are separated by commas, so this call has three arguments. What they mean here is:

1.  from the i’th element (according to the for loop),
2.  a count of one element needs to be removed and
3.  replaced by [‘C’, ‘G’].

At this point the array is now [[‘C’, ‘G’], ‘G’, ‘C’]. And the for loop will begin again with i’s value increased by one. And so on the next round it will check ‘G’ and replace this using a similar splice method, and so on until the for loop is finished because i has reached the value of the original array’s length.

Thinking about it now a more concise way to write this code would have been to use a switch statement instead of a series of if / else if statements. And an even more concise way would be to use the map method. Here are all three solutions:

My original solution:

```javascript
function pairElement(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'G') {
      arr.splice(i, 1, ['G', 'C']);
    } else if (arr[i] == 'C') {
      arr.splice(i, 1, ['C', 'G']);
    } else if (arr[i] == 'A') {
      arr.splice(i, 1, ['A', 'T']);
    } else if (arr[i] == 'T') {
      arr.splice(i, 1, ['T', 'A']);
    }
  }
  return arr;
}

pairElement("GCG");
```

FreeCodeCamp solutions, one with a switch statement, and the other with the map method:

```javascript
// 1 - with switch statement

function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");

// 2 - with object & map method

function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

//test here
pairElement("GCG");
```

More information about the FreeCodeCamp solutions can be found [here](https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-dna-pairing/16009).