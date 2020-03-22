---
layout: layouts/post.njk
title: Wherefore Art Thou
metaTitle: Wherefore Art Thou - Free Code Camp Solution and Walkthrough
date: 2020-01-13T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - blog
---
From the FreeCodeCamp Intermediate Algorithms Challenges, [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou):

> Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
> 
> For example, if the first argument is `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`, and the second argument is `{ last: "Capulet" }`, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
> 
> FreeCodeCamp – [Wherefore Art Thou](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou)

…This was a challenging one to get through. After working out how to extract the ‘keys’ from the ‘source’ array, I decided to use a for loop to iterate through the ‘collection’ array and check if the item at location [i] in the collection array matched the first item in the ‘source’ array. This worked fine, but only if the source array only contained one item… (I’ve left this in, but commented out)

I re-read the tests and realised the source array could indeed include more than one object. To try and refactor my code I went on to try and include another for loop to iterate through the source array too. I tried this multiple times but wasn’t able to make it work, and also decided that there must be a more concise solution…

After a while of FCC forum searching and lurking I found a few instances of people using the filter method and so I gave it a go. I was still having similar issues to before – my code would pass the first few tests (those where the source array only contained one object) but not the ones where the source array contained more than one object. Back to the forums!

I found that I could also call the ‘every’ method on the keys array which I had created and this would iterate through the array applying the given function to each entry in the array… This had to work!

So to sum up the method – the filter part will return (and add to the ‘arr’ array) any object which returns true when tested via the function provided. And the function provided iterates through the keys array (using the ‘every’ method) and checks whether the name of the current keys entry is a property in the current element of the collection array being filtered and if that entry and value is shared by the source array’s property and value.

Confusing. But it works! So pleased that I got through it and it was great to learn more about how to use functions in this way to get the desired effect.

My solution:

```javascript
function whatIsInAName(collection, source) {
      // What's in a name?
      let arr = [];
      // Get property name from 'source'
      let keys = Object.keys(source);
      // console.log(keys);
      arr = collection.filter(function(element) {
        return keys.every(function(current) {
          if (element.hasOwnProperty(current) && element[current] == source[current]) {
            return true;
          }
          return false;
        });
      });
      // First Attempt using 'for' loop... //
      // Start loop to go through collection items
      // for (let i = 0; i < collection.length; i++) {
      //   // Check this item has source key
      //     if (collection[i].hasOwnProperty(keys[0])) {
      //       let prop = keys[0];
      //       if (source[prop] == collection[i][prop]) {
      //         arr.push(collection[i]);
      //         console.log(arr);
      //       }
      //     }
      //   }
    
      return arr;
    }
    
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

It’s interesting to note that the FreeCodeCamp solutions (below) include both using a for loop (which I couldn’t get to work 😭), and another method which is similar to mine (except more concise, and better in every way… 🤐😎).

FreeCodeCamp solutions:

```javascript
// 1

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

// 2

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
```