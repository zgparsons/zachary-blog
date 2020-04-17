---
title: Static Site Generators
description: An introduction to Static Site Generators (SSGs)
date: 2020-05-01
tags:
  - Jamstack
  - Static Sites
layout: layouts/post.njk
---

# Static Site Generators

## The concept of a Static Site Generator

You can create a static website. You need some HTML files. And you might also include a CSS file to give your pages style - to make them look interesting.

As you start adding more pages, you will begin to realise that many of the pages will share lots of HTML content.  Every page that has a menu for example, and that should be every page, if you would like users to get around easily. And every page with a fancy footer which includes your logo and social media links. These will all share HTML elements.

So for a normal site you might have:

- index.html
- about.html
- projects.html
- contact.html

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
    Fancy footer widgets go here...
  </footer>
</html>
```

In that example everything except for the main tag, and the title, can stay the same on every single page.

Rather than creating each HTML page for your site, you could instead use a single layout file. Then for each page's content you could use a different content file.

For the same site as above that would look more like this:

- layout.njk
- home.md
- about.md
- projects.md
- contact.md

To begin with it seems more complicated right? There are 5 files instead of 4. However, each markdown file only contains the necessary content. The nunjucks layout file is the only file which contains all that messy HTML.

A static site generator allows you to do exactly this. It takes the specified layout file and the content file and then generates the output HTML file. This file is then served to the user.

Or rather the group of created files can be seen by the user because the whole site gets created. The static site generator, as long as it's a good one, handles lots of files and quite complex layouts with ease.

### Who Wants a Static Site Anyway? Wordpress Exists...

Well. Yes. But how good is Wordpress actually?
Actually Wordpress, and other dynamic CMS, are a bit like static site generators. No - they are 'Dynamic Site Generators'. They generate the content from a set of templates and content files. Though the content is usually in a database. But they differ from static site generators by doing this 'on-the-fly', or dynamically, rather than before a user requests it.

Each time you visit a Wordpress site, or any site, you make a request to see that site. When it's a dynamic site, like WP, that request takes longer because the correct files are not sitting waiting to be served. They are instead created there and then. WP will grab the template from the files, grab the content from the database and then using that information will generate the page and display it.

When the same request is made to a static site, the file is already there, and is served immediately. In the case of a static site generator, the layout and the content had already been _generated_ into HTML files when the site was built and deployed. This means a few things. The site is faster. It doesn't only feel faster, but it will be demonstrably snappier. The site is more secure. Serving a site statically does not need the server to perform much logic. This means that there is a much reduced chance of malicious code being injected. Not needing to contact a database similarly reduces this risk too. 