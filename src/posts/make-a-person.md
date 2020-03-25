---
layout: layouts/post.njk
title: Make A Person
metaTitle: Make A Person - Free Code Camp Solution and Walkthrough
date: 2020-02-05T13:42:41.619Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---
From the FreeCodeCamp intermediate algorithms [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-persons):

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

FreeCodeCamp - Make a Person

As with all code there are probably multiple ways to complete this challenge. My feeling is that this solution is quite straightforward, but that perhaps could be just from my own perspective. Somebody else might find another method is more simple and easier to understand for them.

I will quickly run through the methods (mentioned in the challenge) and how I implemented each of them.

`getFirstName()`

I chose to store the full user input in a variable which I called 'fullName'. So for example, if the user input was "Bob Smith", then this string becomes the 'fullName' variable.

To return just the first name of this I used `fullName.split(' ')[0]` to create an array, which puts each word into an array entry, and then used square bracket notation to access the first entry.

In our "Bob Smith" example.

The string `'Bob Smith'`, becomes an array: `['Bob', 'Smith']`, and then `'Bob'` as the zero-th element is returned.

`getLastName()`

This is almost exactly the same as above, except I needed to access and return the second element of the array. Like so: `fullName.split(' ')[1]`

`setFirstName(first)` & `setLastName(last)`

For these two I needed to re-assign part of the 'fullName' variable which I had created earlier.

To do this I used a similar method to above, but instead of returning part of the variable I concatenated part of the variable with the new input from the function, and assigned this to the variable name. Like so (for `setFirstName()`):

`fullName = input + ' ' + fullName.split(' ')[1];`

`setFullName()`

And finally I'm not afraid to admit that this baffled me for a few seconds... but to set the full name all I needed to do was reassign the variable to the new input from the function. Really it is the same as above, but just without having to split up the string, as this function expects the full name as an input. Like so:

`fullName = input;`

And that's it. Full code below. How did you do this? What do you think of my solutions?

My solution:

```javascript
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly

  let fullName = firstAndLast

  this.getFullName = function() {
    return fullName;
  };
  this.getFirstName = function() {
    return fullName.split(' ')[0];
  };
  this.getLastName = function() {
    return fullName.split(' ')[1];
  };
  this.setFirstName = function(input) {
    fullName = input + ' ' + fullName.split(' ')[1];
  }
  this.setLastName = function(input) {
    fullName = fullName.split(' ')[0] + ' ' + input;
  }
  this.setFullName = function(input) {
    fullName = input;
  }
};

var bob = new Person('Bob Ross');
bob.getFullName();
```