---
layout: layouts/post.njk
title: APIs and Microservices
metaTitle: APIs and Microservices - My experience completing the Free Code Camp module.
metaDesc: >-
  A post about the Free Code Camp certification for APIs and Microservices -
  written by Zachary Parsons and published at zacharyparsons.co.uk
socialImage: /images/apis-microservices-post-zp.png
date: 2020-04-01T13:42:00.000Z
tags:
  - 100DaysOfCode
  - FreeCodeCamp
  - APIs and Microservices
  - blog
---
This is a post about my experience of completing the Free Code Camp Certification - [APIs and Microservices](https://www.freecodecamp.org/learn/apis-and-microservices/).

<sub><sup>There are also a group of posts on this blog about my experience completing the Free Code Camp [Intermediate Algorithm Scripting](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/) in Javascript certificate too. Those posts can be found [here](/tags/intermediate-algorithms/).</sup></sub>

My certificate 👨‍🎓🐱‍🏍👇

![Zachary Parsons - APIs and Microservices Certificate from Free Code Camp](/images/z-parsons-fcc-apis-certificate.png)

According to the Free Code Camp website this certification is about 300 hours of work. There are 4 sections which need to be completed to earn the Free Code Camp APIs and Microservices certification. These sections are:

* Managing Packages with Npm - [🔗](/posts/apis-and-microservices/#heading-managing-packages-with-npm)
* Basic Node and Express - [🔗](/posts/apis-and-microservices/#heading-basic-node-and-express)
* MongoDB and Mongoose - [🔗](/posts/apis-and-microservices/#heading-mongodb-and-mongoose)
* APIs and Microservices Projects - [🔗](/posts/apis-and-microservices/#heading-the-projects)

  * Timestamp Microservice
  * Request Header Parser Microservice
  * URL Shortener Microservice
  * Exercise Tracker
  * File Metadata Microservice

As you can see the fourth section is the part which takes up the majority of the 300 hours. This is self-directed learning. There is no hand holding. Well not much - but more about that later. Below is a quick run through of my experience of completing each of the sections.

Each section involves using a [🎏Glitch](https://glitch.com/@zgparsons) project, each have varying degrees of starter code within them, but which allow you to focus on the subject being taught at that moment.

- - -

## Managing Packages with Npm

Does anyone else always write 'nom' instead of 'npm', or is it only me!? 🥞

This section is an introduction to the 'package.json' file. This is a file which all node projects include.

If you don't know already NPM stands for Node Package Manager, and that's exactly what it is. It is a system which makes it easier to access Node packages (you can think of packages as groups of related code modules 'packaged' together, and then made easily accessible to other users for their projects).

This Stack Overflow [answer](https://stackoverflow.com/a/20008966) sums it up quite well:

```javascript
Shapes             <- Package name
  - Circle.js      <-
  - Rectangle.js   <- Modules that belong to the Shapes package
  - Square.js      <-
```

The package.json file provides project-level control over which packages are being used and how. This section of the certification is fairly straightforward - there is no problem-solving to be done - but it is a great introduction into how a node project works.

- - -

## Basic Node and Express

This section mainly focuses on Express. Express is a web application framework for Node - more on this in a minute.

**First, Node.** [Node](https://nodejs.org/en/) is a JavaScript run time environment. This means that by using Node it is possible to write server-side scripts (rather than just client-side, which you can do with regular [vanilla](http://vanilla-js.com/) flavoured JS).

Really what this means is you can run JavaScript outside of a web browser. Prior to Node a web application needed a programming language for server-side scripts (which may have been Python, PHP, or Ruby for example, but which couldn't be JavaScript), and then JavaScript could be used for client-side scripts to provide additional functionality after the web application had already been served to the user.

**Next, Express.** [Express](https://expressjs.com/) is a web application framework for Node. It's equivalent to Django in Python, or Laravel in PHP. These are essentially sets of pre-written code (in each respective language) which help to reduce complexity for developers while they are creating web apps. In other words web frameworks like express are a form of [abstraction](https://developer.mozilla.org/en-US/docs/Glossary/Abstraction) for every day developers.

I found it interesting to compare framework tag lines while writing this post:

> Django: The Web Framework for Perfectionists with Deadlines
[Django](https://www.djangoproject.com/)
>
> Laravel: The PHP Framework for Web Artisans
[Laravel](https://laravel.com/)
>
> Express: Fast, unopinionated, minimalist web framework for Node.js
[Express](https://expressjs.com/)

*'Unopinionated'*... What does it mean for a web framework to be unopinionated? Good question. What this means is that Express does not mind how you complete your task - or put differently there are multiple ways to complete the same task and Express will allow them.

In contrast an *opinionated* web framework will often expect a particular task to be done in a particular way - and might make it more difficult to be done in a different way. Often this is because, in a specific domain, it makes much more sense to be done in this way. So 'opionated' does not equal restrictive or worse usually, just a tool for a specific job.

There is some more information on the [MDN Node / Express tutorial page](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction), along with another great introduction to Node and Express.

The FreeCodeCamp tutorials focus on Express - which is great because a working knowledge of Express is enough to begin building web applications and (simple) APIs. The lessons covered include starting an express server, serving static files, creating routes, get parameter inputs from routes and queries, and parsing data sent via POST requests.

- - -

## MongoDb and Mongoose

In order to create an API, or a Microservice, which is truly useful you will need some form of storage, and a relatively straightforward way to access that storage. MongoDB is the former, and Mongoose the latter.

Even if the API is very simple, it could still be useful. For example a Cat image API would be useful to someone who wants [cat photos on demand 🐱](https://cataas.com/cat/says/hello%20world!)...

MongoDB is a ['NoSQL'](https://www.mongodb.com/nosql-explained) storage system, or database. And [Mongoose](https://mongoosejs.com/) is 'object modelling' for Mongo - it makes it easier to model the data you have into a human readable format, in this case into objects. Mongo and Mongoose are popular amongst JavaScript devs because of their use of JSON as a document storage structure - so as the fcc tutorial says:

> Accessing documents and their properties is like accessing objects in JavaScript. Mongoose.js is an npm module for Node.js that allows you to write objects for Mongo as you would in JavaScript. This can make it easier to construct documents for storage in Mongo.
> [From here](https://www.freecodecamp.org/learn/apis-and-microservices/mongodb-and-mongoose/)

```javascript
// Example of a possible 'document' in a MongoDB ->
{
"name": "image-example.jpg",
"type": "image/jpeg",
"size": 25467
}
```

This section provides a good overview of them both, and runs you through some challenges which include writing code that follows best practices of using Mongo with Mongoose for web app storage.

- - -

## The Projects

For each the starter code is provided on Glitch, but honestly this is only to ensure while completing the challenge you don't get overwhelmed or held back by the details of implementation such as correctly configuring express.js, other dependencies and packages, and the design and aesthetics (all of which are important - but they quickly pile up and become too much to focus on for a learner).

My submission for each of the projects is embedded below - I won't go into detail about each one because this is already a long post. Some of these are more challenging than others - the exercise tracker probably has the most functionality attached to it, as well as needing the most complex database. They are all doable - all you need is to put in some time, research the right sites (some helpful links below), [ask questions](https://www.freecodecamp.org/forum/t/apis-and-microservices-projects-exercise-tracker/364236/7), and don't give up!

If you read this and want to ask me specifics about any of the projects (or anything else) - [send me a tweet 👋](https://twitter.com/originalzedders), as that's where I'm most likely to be, and follow me there too!

##### Helpful Links - Projects Below ⬇

[MongoDB Docs](https://docs.mongodb.com/) [Mongoose Docs](https://mongoosejs.com/docs/guide.html) [Full Node & Express Tutorial - Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs) [FCC Forum - Topic about Exercise Tracker Project](https://www.freecodecamp.org/forum/t/exercise-tracker-project-start-up-error/359929) [FCC Forum - Curriculum Help & Certification Projects](https://www.freecodecamp.org/forum/c/curriculum-help/certification-projects/510) [Stack Overflow](https://stackoverflow.com/) [Google 😅](https://google.com)

### Timestamp Microservice

[z-timestamp.glitch.me](https://z-timestamp.glitch.me/) - Link to project (embedded project below)

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/z-timestamp?path=README.md&previewSize=0&sidebarCollapsed=true"
    title="z-timestamp on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

### Request Header Parser

[z-header-parse.glitch.me](https://z-header-parse.glitch.me/) - Link to project (embedded project below)

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/z-header-parse?path=README.md&previewSize=0&sidebarCollapsed=true"
    title="z-header-parse on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

### URL Shortener Microservice

[z-link.glitch.me](https://z-link.glitch.me/) - Link to project (embedded project below)

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/z-link?path=README.md&previewSize=0&sidebarCollapsed=true"
    title="z-link on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

### Exercise Tracker

[z-exercise.glitch.me](https://z-exercise.glitch.me/) - Link to project (embedded project below)

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/z-exercise?path=README.md&previewSize=0&sidebarCollapsed=true"
    title="z-exercise on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

### File Metadata Microservice

[z-file-metadata.glitch.me](https://z-file-metadata.glitch.me/) - Link to project (embedded project below)

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/z-file-metadata?path=README.md&previewSize=0&sidebarCollapsed=true"
    title="z-file-metadata on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

- - -

If you made it all the way down here - thanks for reading! [Tell me what you think...](https://twitter.com/originalzedders) and here's some cake: 🍰