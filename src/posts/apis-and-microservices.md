---
layout: layouts/post.njk
title: APIs and Microservices
metaTitle: APIs and Microservices - My experience completing the Free Code Camp module.
date: 2020-05-01T13:42:00.000Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - APIs and Microservices
  - blog
---
This is a post about my experience of completing the Free Code Camp Certification - [APIs and Microservices](https://www.freecodecamp.org/learn/apis-and-microservices/).

There are also a group of posts on this blog about my experience completing the [Intermediate Algorithm Scripting](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/) in Javascript too. Those posts can be found [here](/tags/intermediate-algorithms/).

According to the Free Code Camp website this certification is about 300 hours of work. There are 4 sections which need to be completed to earn the Free Code Camp APIs and Microservices certification. These sections are:

* Managing Packages with Npm
* Basic Node and Express
* MongoDB and Mongoose
* APIs and Microservices Projects

  * Timestamp Microservice
  * Request Header Parser Microservice
  * URL Shortener Microservice
  * Exercise Tracker
  * File Metadata Microservice

As you can see the fourth section is the part which takes up the majority of the 300 hours. This is self-directed learning. There is no hand holding. Well not much - but more about that later. Below is a quick run through of my experience of completing each of the sections.

Each section involves using a [🎏Glitch](https://glitch.com/@zgparsons/free-code-camp) project, each have varying degrees of starter code within them, but which allow you to focus on the subject being taught at that moment.
<sub><sup>The Glitch link above is a link to my own completed APIs and Microservices collection of apps/projects.</sup></sub>

---

## Managing Packages with Npm

Does anyone else always write 'nom' instead of 'npm', or is it only me!? 🥞

This section is an introduction to the 'package.json' file. This is a file which all node projects include.

If you don't know already NPM stands for Node Package Manager, and that's exactly what it is. It is a system which makes it easier to access Node packages (you can think of packages as groups of related code modules 'packaged' together, and then made easily accessible to other users for their projects).

This Stack Overflow [answer](https://stackoverflow.com/a/20008966) sums it up quite well:

```
Shapes             <- Package name
  - Circle.js      <-
  - Rectangle.js   <- Modules that belong to the Shapes package
  - Square.js      <-
```

The package.json file provides project-level control over which packages are being used and how. This section of the certification is fairly straightforward - there is no problem-solving to be done - but it is a great introduction into how a node project works.

---

## Basic Node and Express

This section mainly focuses on Express. Express is a web framework for Node - more on this in a minute.

__First, Node.__
[Node](https://nodejs.org/en/) is a JavaScript run time environment. This means that by using Node it is possible to write server-side scripts (rather than just client-side, which you can do with regular [vanilla](http://vanilla-js.com/) flavoured JS).

Really what this means is you can run JavaScript outside of a web browser. Prior to Node a web application needed a programming language for server-side scripts (which may have been Python, PHP, or Ruby for example, but which couldn't be JavaScript), and then JavaScript could be used for client-side scripts to provide additional functionality after the web application had already been served to the user.

__Next, Express.__

---

## MongoDb and Mongoose

In order to create an API, or a Microservice, which is truly useful (it could be useful to someone who wants [cat photos on demand 🐱](https://cataas.com/cat/says/hello%20world!)...) you will need some form of storage, and a relatively straightforward way to access that storage. MongoDB is the former, and Mongoose the latter.

MongoDB is a ['NoSQL'](https://www.mongodb.com/nosql-explained) storage system, or database. And [Mongoose](https://mongoosejs.com/) is 'object modelling' for Mongo - it makes it easier to model the data you have into a human readable format, in this case into objects. Mongo and Mongoose are popular amongst JavaScript devs because of their use of JSON as a document storage structure - so as the fcc tutorial says:

> Accessing documents and their properties is like accessing objects in JavaScript.
> Mongoose.js is an npm module for Node.js that allows you to write objects for Mongo as you would in JavaScript. This can make it easier to construct documents for storage in Mongo.
>[From here](https://www.freecodecamp.org/learn/apis-and-microservices/mongodb-and-mongoose/)

```javascript
// Example of a possible 'document' in a MongoDB ->
{
"name": "image-example.jpg",
"type": "image/jpeg",
"size": 25467
}
```

This section provides a good overview of them both, and runs you through some challenges which include writing code that follows best practices of using Mongo with Mongoose for web app storage.

---

## The Projects

For each the starter code is provided on Glitch, but honestly this is only to ensure while completing the challenge you don't get overwhelmed or held back by the details of implementation such as correctly configuring express.js, other dependencies and packages, and the design and aesthetics (all of which are important - but they quickly pile up and become too much to focus on for a learner).

### Timestamp

### Request Header Parser

### URL Shortener

### Exercise Tracker

### File Metadata