---
layout: layouts/post.njk
title: Map The Debris
metaTitle: Map the Debris - Free Code Camp Solution
metaDesc: A post about the Free Code Camp problem Map the Debris -
  written by Zachary Parsons and published at zacharyparsons.co.uk
date: 2020-02-10
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - Intermediate Algorithms
  - blog
---


My solution:

```javascript
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (let i = 0; i < arr.length; i++) {
    let alt = arr[i].avgAlt;
  
    let t = Math.round((2 * Math.PI) * Math.sqrt((Math.pow((earthRadius + alt), 3) / GM)));
    
    arr[i].orbitalPeriod = t;
    delete arr[i].avgAlt;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```