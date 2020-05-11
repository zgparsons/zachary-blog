---
layout: layouts/post.njk
title: Using the Goodreads API and 11ty to create an online bookshelf
metaTitle: An Online Bookshelf Created with Eleventy and the Goodreads API
metaDesc: How I used the Goodreads API to create an online bookshelf on my Eleventy powered site - written by Zachary Parsons and published at zacharyparsons.co.uk
socialImage: /images/bookshelf-zp-3.png
date: 2020-05-11
tags:
  - 100DaysOfCode
  - Jamstack
  - blog
---

<div class="bg-highlight color-primary-shade pad-left-500 pad-top-500 pad-bottom-500 text-300">
<p>📝 This post was originally pubished on <a href="https://dev.to/zgparsons/using-the-goodreads-api-and-11ty-to-create-an-online-bookshelf-han" class="color-primary-glare">dev.to ↗</a>. It is only very slightly different here for readability.</p>
<br>
<p>🚀 If you already read it on dev.to don't read it again here! Tell me what you thought of it on <a href="https://twitter.com/originalzedders" class="color-primary-glare">Twitter ↗</a> or have a look at some of my other <a href="/projects" class="color-primary-glare">projects</a> instead!</p>
</div>

## Intro
Recently, after totally falling for [Dave Rupert's YouTube thumbnail (on Twitter) experiment ↗](https://twitter.com/davatron5000/status/1257782281957183489?s=20), I discovered his [bookshelf ↗](https://daverupert.com/bookshelf) which I really love!

As a reader (my day job is at a public library) I use Goodreads to keep track of which books I've finished and to give quick ratings to them. So, I thought that if Goodreads has a public API I could use this to practice getting and displaying data on my static, [eleventy ↗](https://11ty.dev) powered, site 👍.

## Getting Started
As I was planning for this to be a public page on my website (which is already a git project), I didn't need to create a new project directory or initialise/initialize it with git.

Instead, I [created a new branch on git ↗](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) - by typing:
```bash
git checkout -b bookshelf
```
This command is shorthand and will both create and checkout the new branch (`bookshelf` is the name which I assigned to this branch). It is the same as the following two commands:
```bash
git branch bookshelf
git checkout bookshelf
```

This way I was ready to work on the new branch, and could commit and push changes without directly affecting my live site.

My site begins life as a JavaScript [Node.js ↗](https://nodejs.org/en/) project, which uses [npm ↗](https://www.npmjs.com/) as its package manager.

## The API
First, I found that Goodreads does have an API, so I checked [the docs ↗](https://www.goodreads.com/api) and found that I would probably need the [reviews.list ↗](https://www.goodreads.com/api/index#reviews.list) method. This method will "Get the books on a members shelf."

To do this I needed to get an API key from Goodreads too. As a member already all I needed to do was log in to the site and request a key.

### Keeping the API Key Secret
I was also aware that it is best practice to keep API keys a secret in production code. This is so that they cannot be found and potentially abused - the Goodreads key is unlikely to be abused because the API is a free service, but it is still best to adhere to best practices and be in the correct habits.

One way to keep API keys a secret is to use a `.env` file which is configured to be ignored by Git. To do this I installed the [dotenv package ↗](https://www.npmjs.com/package/dotenv) and placed my API key into the `.env` file in a key/value format:
```bash
// My .env file format:
GRKEY='API-Key-goes-here'
```
To make sure the file is then ignored by Git, I included a reference to it in my `.gitignore` file as so:
```bash
// My .gitignore file format:
node_modules
dist
.env
...
```
The intro to the dotenv package says:
>Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`.

This means that I could now access the `GRKEY` within my project by referring to `process.env.GRKEY`.

You do also have to `require` the module and call the `.config()` method in the file where you'll be accessing it, I think, as so:
```javascript
const dotenv = require('dotenv');
dotenv.config();
```

### Making a Request to the API
At this point I wanted to make a HTTP request to the API and confirm that it was returning the information I needed for the bookshelf. I have used the [node-fetch package ↗](https://www.npmjs.com/package/node-fetch) once before to make an HTTP request so I used it again in this instance. Essentially the package brings the functionality of the [fetch Web API ↗](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to Nodejs.

The static site generator I use, eleventy, has a great set up for working with data fetched from API calls just like this one. There is more information in the [eleventy docs about handling data in an eleventy project ↗](https://www.11ty.dev/docs/data-global/).

From reading these docs I knew that I needed to create the file which will make the API call within the `_data` folder, and that I needed to use `module.exports` to make the data available to use in the rest of the site's files. I created my file: `_data/bookshelf.js` and made the API call, with a `console.log` to see the response. Like so:

```javascript
module.exports = async function() {
    
    await fetch(`https://www.goodreads.com/review/list?v=2&id=${id}&shelf=read&key=${key}`)
        .then(res => res.json())
        .then(result => { console.log(result) };

}
```
For the URL you can see that I've used a template literal and included three queries. The `id` query and a `key` query are dynamic values (they are declared above this `module.exports` function).

The `id` is my Goodreads id number, like a unique identifier for my Goodreads account - I got this from logging in to my Goodreads account, clicking on 'My Books' in the menu, and then checking the URL. For example my URL at this point looks like this:
```bash
https://www.goodreads.com/review/list/41056081
```
So that last part is my Goodreads id.

The `key` is referring to my API key.

And the third query is `shelf` which I have set to `read`, because I only want to return books which I have already read and not those which are on my 'DNF' (Did Not Finish - the shame) or 'TBR' (To Be Read...) shelves.

Now, when I ran the eleventy build command in order to run the code and see the result, the result was not what I expected. There was a error in the log! I don't recall the exact error now, but I could see that it was the `.json()` call which I had made to parse the result as a json object which had caused the problem.

After consulting google, I found that the Goodreads API does not respond with json but instead with XML. At this point I also found [Tara's post about using the Goodreads API to choose which book to read next ↗](https://dev.to/tara/how-i-used-the-goodreads-api-to-pick-my-next-read-2le9), which I'm so glad I found because it really helped me! Tara's HTTP request was a little different from mine because she'd used the [request-promise package ↗](https://www.npmjs.com/package/request-promise).

After reading Tara's post I knew that the Goodreads API would be returning XML, and I also learned that I could use the [xml2js package ↗](https://www.npmjs.com/package/xml2js) to convert the XML response to json! 🎉

After installing and including xml2js, I edited my `bookshelf.js` file:

```javascript

module.exports = async function() {
    
    await fetch(`https://www.goodreads.com/review/list?v=2&id=${id}&shelf=read&key=${key}`)
        .then(res => res.text())
        .then(body => {
            xml2js.parseString(body, function (err, res) {
                if (err) console.log(err);
                console.log(body);
         };

}

```

When I ran the code again by running the eleventy build command I didn't see an error but a quite a complicated looking object instead! Perfect.

## Accessing and Returning the Data
From there I could access the data, iterate over it with a `for` loop, assign those parts that I needed for the bookshelf to another object and then push that object onto an array which I would return.

By returning the array of objects I would make this data available to be used in my other project files.

After working out the structure of the data from a few more API calls and `console.log`s, my `module.exports` inside `bookshelf.js` ended up looking like this:

```javascript

module.exports = async function() {

    let books = [];
    
    await fetch(`https://www.goodreads.com/review/list?v=2&id=${id}&shelf=read&key=${key}`)
        .then(res => res.text())
        .then(body => {
            xml2js.parseString(body, function (err, res) {
                if (err) console.log(err);
                console.log('Getting Book List from GoodReads API');
                
                let bookList = res.GoodreadsResponse.reviews[0].review;
                for (let i=0; i < bookList.length; i++) {

                    books.push({
                        title: bookList[i].book[0].title[0],
                        author: bookList[i].book[0].authors[0].author[0].name[0],
                        isbn: bookList[i].book[0].isbn[0],
                        image_url: bookList[i].book[0].image_url[0],
                        small_image_url: bookList[i].book[0].image_url[0],
                        large_image_url: bookList[i].book[0].large_image_url[0],
                        link: bookList[i].book[0].link[0],
                        date_started: bookList[i].date_added[0],
                        date_finished: bookList[i].read_at[0],
                        rating: bookList[i].rating[0]
                    })
                }
            })
        }).catch(err => console.log(err));

    return books;
}

```
> Looking at it again now I think I am error checking twice, which is probably not necessary 🤦‍♂️.

The result of that code is that I now have access to a global data array: `books`, which contains each book I have on my Goodreads 'Read' shelf as an object with title, author and other useful info. An example of the data I now had is below:

```javascript
[
    {
      title: 'Modern Web Development on the JAMstack',
      author: 'Mathias Biilmann',
      isbn: ,
      image_url: ,
      small_image_url: ,
      large_image_url: ,
      link: 'https://www.goodreads.com/book/show/50010660-modern-web-development-on-the-jamstack',
      date_started: 'April 28 2020',
      date_finished: 'May 02 2020',
      rating: '5'
    },
    {
      // Another book
    },
    {
      // Another book
    },
    ...
]
```

## Tidying the Data
You may notice from that example that the entry 'Modern Web Development on the JAMstack' does not have an isbn or any images. Data is rarely perfect, no matter where you get it from, it is likely to have some missing items or anomalies.

In this example - that book is an online published book and so does not have an ISBN number. This also means that, although Goodreads use an image of the cover on their website, for some reason they are unable to provide that image via their API.

This was the case with about 3 or 4 of the ~20 books in my data. Some had ISBN's but no images.

I looked in to other APIs for book covers which are available and found a few:

- [Open Library ↗](https://openlibrary.org/dev/docs/api/covers)
- [Library Thing ↗](https://blog.librarything.com/main/2008/08/a-million-free-covers-from-librarything/)
- [Google Books ↗](https://developers.google.com/books)
- [Amazon Lookup by ISBN ↗](https://docs.aws.amazon.com/AWSECommerceService/latest/DG/EX_LookupbyISBN.html)

I have a sneaking suspicion Amazon may be the best bet for image quality. However, to keep the project simple, and because it resonated with me more, I attempted to use the Library Thing API but it didn't seem to work 😭.

At this point I wanted to get the bookshelf up and running, so instead of configure a new API, I decided to instead host any book cover images that weren't returned automatically by the Goodreads API on my own website. This would work for me because the site will only update when I've finished a book and added it to that shelf (so I can always double check an image has come through and then add one if not).

In order to add those images that hadn't come through I needed to decide on a naming convention that could be referred to easily. I decided that I would name my images in 'spinal-case'. To be able to refer to them I would need to add one final item - the title in spinal-case - to the object that I was creating with each API call.

For example, to be able to refer to the image saved for 'Modern Web Development on the JAMstack', I would need the object to include a field called 'spinal_title' which contained the value: 'modern-web-development-on-the-jamstack'. To do this I added the following function to `bookshelf.js`:

```javascript
function spinalCase(str) {
    str = str.replace(/:/g,'');
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }
```
This function also removes any colons (':').

Then in the object within the API call itself I could also add the following field:
```javascript
  spinal_title: spinalCase(bookList[i].book[0].title[0]),
```
This references the book title but calls the `spinalCase()` function so that the title is returned in spinal case.

For this personal project this approach works, but I think another solution would need to be found depending on the project. For example in the above case my `spinalCase()` function actually returns `...on-the-j-a-mstack`, so I actually had to rename the file to match it properly.

## Displaying the Data on the Site
I won't go in to too much detail about how the templating system works. There's a great [css-tricks post about nunjucks ↗](https://css-tricks.com/killer-features-of-nunjucks/), which is the templating language I am using here. Eleventy (can't fault it!) is also a great static site generator because you can use [any templating language ↗](https://www.11ty.dev/docs/templates/) with it, as mentioned, I use [nunjucks ↗](https://mozilla.github.io/nunjucks/).

The following code references the data returned from `bookshelf.js` as the array `bookshelf`, and iterates through it displaying each item as specified in the template. To do that I use the nunjucks `for i in item` loop, in my case `for book in bookshelf` - that way I can refer to each object as `book`.

```bash
// Todo: Add code block here
// Eleventy won't render the template correctly because it is using Nunjucks...
// Need to work this out
```
As you can see it is a lot like HTML, but with the power to use logic and reference data. That logic and data is processed at build time and the resulting HTML page is used to build the site.

One interesting part is how I rendered the star rating. Nunjucks is super powerful, you can use lots of different techniques with it. In this case I use the [range function ↗](https://mozilla.github.io/nunjucks/templating.html#range-start-stop-step).


## Merging Branch and Pushing to Live Site
In order to complete this project I needed to merge the branch `bookshelf` with the `master` branch in git. I did this via the GitHub website.

After running my final commit and push in the terminal, I went to [the project on GitHub ↗](https://github.com/zgparsons/zachary-blog) where I created a Pull Request to be able to merge the two branches.

### One Last Thing to Do
Before doing this there was one other thing I had to do though. My site is built and hosted by [Netlify ↗](https://www.netlify.com/). If you recall that I was keeping the API key secret, and so git was ignoring it, you might also see that when the site files merge and Netlify tries to build the site, it would not have access to the API key.

Luckily [Netlify provides a way to add environment variables ↗](https://docs.netlify.com/configure-builds/environment-variables/) right in their dashboard. So I was able to add the API key here, where it will stay a secret but will be accessible during the build of the site.

## The Finished Product and Next Steps
You can view the result on [the bookshelf page on my personal website](https://zacharyparsons.co.uk/bookshelf/). I would love to hear what you think?

As with all projects I think that this can be improved upon and I will likely look for ways to update it soon, or if I receive any feedback from people who see it.

One idea that comes to mind is to configure the site to rebuild each time I add a book to my 'Read' shelf on Goodreads without my own input. To do this I'd likely need to add a [build hook ↗](https://docs.netlify.com/configure-builds/build-hooks/) in Netlify.

## Outro
This has ended up being a longer post than I envisioned, but I guess quite a lot of work goes into getting data from an API and using it or displaying it elsewhere. Thank you if you have read the whole thing! Let me know what you think?

I decided to do this project to learn more about API calls and displaying data, and I think I've achieved that goal. As usual with webdev there is always more to learn!