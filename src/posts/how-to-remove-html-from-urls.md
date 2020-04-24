---
title: How to Remove .html from URLs
description: A short description of how to remove the '.html' file extension from URLs
metaTitle: How to Remove .html from URLs - zacharyparsons.co.uk
metaDesc: A post about how to remove .html from URLs while using a Static Site Generator -
  written by Zachary Parsons and published at zacharyparsons.co.uk
date: 2020-04-15
tags:
  - How To
  - Static Sites
layout: layouts/post.njk
---

There are two main options for how to remove the file extension from your static site's URL.

* Include a `.htaccess` file at the root of your project which contains a `RewriteRule`.

There are [reasons](https://www.danielmorell.com/guides/htaccess-seo/basics/dont-use-htaccess-unless-you-must) to not use a `.htaccess` file if you can help it though.

Or, the preferred method, you can:

* Place the file into a folder with the desired name, and rename the file to `index.html`.

If you are using a static site generator to render your content, it will probably be taking care of this already. This site uses [11ty](https://11ty.dev). At build time 11ty places each of the posts / content files into a folder of the same name in the correct sub-folder and renames the file to `index.html`.

For example this post, pre-build, is written in a markdown file called `how-to-remove-html-from-urls.md`, and is in a folder `/posts`. At build time 11ty does it's magic and within the `/_site` folder (that is the folder which is actually served to the user) we have a neat structure that looks like this: `/posts/how-to-remove-html-from-urls/index.html`.

This use of folder and `index.html` mean that the end user only sees the correct slug and not the file extension: `https://example.com/posts/how-to-remove-html-from-urls`.

But you knew that already because you are reading this post.