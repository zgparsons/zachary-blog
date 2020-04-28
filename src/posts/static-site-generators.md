---
title: Static Site Generators
description: An introduction to Static Site Generators (SSGs)
layout: layouts/post.njk
metaTitle: Static Site Generators - An Introduction
metaDesc: A post about Static Site Generators - written by Zachary Parsons and
  published at zacharyparsons.co.uk
date: 2020-05-01T00:00:00.000Z
tags:
  - Jamstack
  - Static Sites
---
## The concept of a Static Site Generator

You can create a static website. All you need is some HTML files. And you might also include a CSS file to give your pages style - to make them look interesting. You probably know this already... stick with it.

As you start adding more pages, you will begin to realise that many of the pages will share lots of the same HTML content.  Every page that has a nav or menu for example. That should be every page, if you would like users to get around easily. And every page with a footer which includes your logo and social media links. Not to mention including meta tags for SEO benefits and a site icon etc. These will all share HTML elements.

So for a normal site you might have:

* site

  * index.html
  * about.html
  * projects.html
  * contact.html
* styles

  * style.css

For each of those pages around 50% (could be more) will be common HTML. The same HTML as each other, with some different content in the middle.

Each page might look like this:

```html
<html>
  <head>
    <meta ...>
    <link ...>
    ...
  </head>
  <header>
    Title goes here...
  </header>
  <body>
    <main>
      Content goes here...
    </main>
  </body>
  <footer>
    Footer 'widgets' go here...
  </footer>
</html>
```

In that example everything except for the main content, and the title, can stay the same on every single page.

### Introducing Layout Files

Rather than creating each HTML page for your site, you could instead use a single layout file. This would take care of the unchanging HTML. There are plenty of options, this site uses Nunjucks which is for JavaScript, but there is also jinja2 for Python, as well as language agnostic templating files too. Though it may be done differently, they each do the same thing really: preprocess HTML.

```
Preprocessing is a little bit off topic for this post (not much...).
You can trust that it means taking more than one file
and/or data source and outputting a pure HTML file.
(There will be another post about that here soon).
```

Then for each page's content you could use a different content file. And those content files can be quite simple - markdown will do perfectly. That way they can be easy to create, a small size, and easy to edit using any text editor.

For the same site as above that would look more like this:

* layouts

  * layout.njk
* pages

  * home.md
  * about.md
  * projects.md
  * contact.md
* styles

  * styles.css

To begin with it seems more complicated right? There is one more file, and another folder. However, each markdown file only contains the necessary content. Most likely just some front-matter (to include a title and meta description) and then the content itself.

The nunjucks layout file is the only file which contains all of that HTML. Plus many sites will have more content than 4 simple pages.

### Multiple Layouts

If you wanted to have another set of pages (or posts) with a slightly different layout, say for a blog, you can easily do this now by adding an additional layout. Let's change the base layout's name to be more semantic, and add that new layout too:

* layouts

  * base.njk
  * post.njk
* pages

  * home.md
  * about.md
  * projects.md
  * contact.md
* posts

  * my-first-post.md
  * how-to-grapple-with-sparrows.md
  * 2035-the-year-in-review.md
* styles 

  * styles.css 

A Static Site Generator allows you to do exactly this. You give the HTML preprocessor mentioned above information about the layout (eg. base.njk), and information about the content (eg. about.md) and it gives you HTML for the browser (eg. about.html).

The Static Site Generator abstracts this process away somewhat, allows you to add additional configuration, and is set up to watch any files for changes. Each time you save the layout, content or data files (and run the build command) the site's files are regenerated and available to view instantly.

The static site generator, as long as it's a good one, handles lots of files and quite complex layouts with ease.

## Who Wants a Static Site Anyway? Wordpress Exists...

Well. Yes. But how good is Wordpress actually? Actually Wordpress (WP), and other dynamic Content Management Systems (CMS), are a bit similar to static site generators. No, that's misleading - they are more like 'Dynamic Site Generators'.

They generate the content from a set of templates and content files. Though the content is usually in a database. But they differ from static site generators by doing this 'on-the-fly', or dynamically at the request time, rather than before a user requests it (at build time, which might have been only a few minutes before the user arrived or since the last manual `git push`).

Each time you visit a website, you make a request to see that page. When it's a dynamic site, like WP, that request takes longer because the correct files are not sitting waiting to be served. They are instead created there and then. WP will grab the template from the files, grab the content from the database and then using that information will generate the page and display it.

When the same request is made to a static site, the file is already there, and is served immediately. In the case of a static site generator, the layout and the content had already been *generated* into HTML files when the site was built and deployed. In fact it is most likely served from a Content Delivery Network (CDN) too.

This means a few things:

The site is faster. It doesn't only feel faster, but it will be demonstrably snappier. It's almost certainly served from a CDN, which means the files being served are literally closer to the user. There's no build time after the request is made, only prior to it. Because of that there's no logic to run, or authorisation to happen or anything similar.

The site is more secure. Serving a site statically does not need the server to perform much logic. This means that there is a much reduced chance of malicious code being injected. Not needing to contact a database similarly reduces this risk too.

## Lighthouse Scores

To demonstrate this difference in speed we can look at the [lighthouse](https://web.dev) scores for comparable sites - one being 'dynamic' and the other 'static'.

For this example we can look at [AlwaysBooks.co.uk](https://alwaysbooks.co.uk), which is a WordPress book blog. The site is basic - it uses the WordPress default theme for speed and ease.

While exploring the JAMstack - this book blogger used the content from Always Books to test out the [Eleventy base blog](https://github.com/11ty/eleventy-base-blog). The result of which can be viewed at [abac-jamstack.netlify.app](https://abac-jamstack.netlify.app/).

Putting each site through the lighthouse audit gives the following results.

### AlwaysBooks - WordPress site

![Lighthouse Score for WordPress site](/images/alwaysbooks-lh.png "Lighthouse Score for WordPress site")

### Always Books - Static site

![Lighthouse score for Static site](/images/ab-jamstack-lh.png "Lighthouse score for Static site")