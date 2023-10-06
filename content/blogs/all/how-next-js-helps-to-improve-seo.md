---
title: How Next.js helps to improve SEO
description: In this article, we understand how NextJS is reshaping the web with its powerful SEO techniques.
date: 2022-04-12
categories:
  - web
tags:
  - Web
  - JavaScript
  - Web Development
  - NextJS
author: Prathamesh Gunde
image: /images/blog/banner/how-nextjs-helps-to-improve-seo.webp
thumbnail: https://via.placeholder.com/150
url: web/2022/04/12/how-nextjs-helps-to-improve-seo.html
---

While working on one of our projects at [ScaleReal](https://scalereal.com/), I came across some accessibility issues. Our web application was not easily accessible through the organic search engine results. When I checked the **accessibility** and **SEO** ratings of Lighthouse, it wasn’t really good. So, I decided to deep dive into the SEO section and found interesting features that Next.js provides. In this article, we will see why SEO is important and how Next.js helps to improve it.

## What is SEO? 🤔️

SEO stands for Search Engine Optimisation, which is the practice of optimising your website and increasing the quantity and quality of traffic to your website through organic search engine results.

## Why it is so important? 🧐️

Search engines can easily read and understand what your website is about with the help of SEO, but it is very critical if you want to bring as much traffic as you can to your website.

When people search for something on the internet, that something can be your business or the content that you want to promote. More traffic to your website means more success for your business.

Although, search engines can figure out what your website is about, but it is limited by what information you provide and how you provide it. If your website is SPA (Single Page Application), it is hard to crawl and doesn’t give much information on the first and the only page that google can see. It may result in a loss for your business. That’s why having a good SEO is one of the key factors in your business success.

## How Next.js helps to improve SEO? ⚡️

Following are the features of Next.js that help in improving SEO 👇️

1.  Static Site Generation
2.  Server Side Rendering
3.  Head Component

### 1\. Static Site Generation

**Static Site Generation** is a form of pre-rendering, which is the process of rendering a website at build time. The HTML is statically generated at build time and the build page is then cached and reused for each request.

![](https://miro.medium.com/max/1400/1*pWpXlWwU2LT8PsQAN4E72w.png)_Static Site Generator_

Ideally, when a user requests something, the browser receives a basic HTML page without a lot of content from the server as a response. This HTML page then loads the scripts to pull the requested data from the server. This process is known as hydration. Due to this, search engine robots don’t find much data about your website while crawling.

Next.js overcomes this drawback with the help of **Static Site Generation**. This process gives you the ability to serve the entire content of your website on the first load itself. Due to this, search engine robots find the whole content, and your website might get a high rating.

For static site generation, you need to run the command **next build** to build the app, and then **next export,** which makes your app available as static files in the **out** directory. The output includes a bunch of static files including HTML file and different assets like JavaScript and CSS.

[Here](https://nextjs.org/docs/advanced-features/static-html-export) you can find out more information about **Static Site Generation**.

### 2\. Server Side Rendering

**Server Side Rendering** is an another form of pre-rendering, where the HTML is generated at request time, which means for every incoming request. SSR is required when you need to fetch data per request.

Now let’s see how crawling works with SSR (Server Side Rendering) and CSR (Client Side Rendering). Before that you must be aware about [**client side rendering v/s server side rendering**](https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/)**.**

> Crawling is the discovery process in which search engines send out a team of robots (known as crawlers or spiders) to find new and updated content on the websites. Based on the crawling result, search engines index the websites.

**Website Crawling with Next.js (SSR)**

Search engine robots crawl and index your website immediately after the client receives an HTML document from the server. Since Next.js supports SSR, it can have all the information pre-loaded. While crawling your website, search engine robots can see all the information and give a rating to your website based on the data you provided.

![](https://miro.medium.com/max/1400/1*bJe1oskuEhIp5vESrFUGGA.png)_Crawling with Next.js_

**Website Crawling with React.js (CSR)**

As mentioned earlier, your website gets crawled and indexed as soon as the client receives an HTML document from the server. Since React.js supports CSR, initially, it can have a basic HTML document. When search engine robots crawl your website, they find limited data. Only a short moment later, the client generates all of the information and load it for the user, but at this point, search engine robots have already completed their crawl. Due to this, your full HTML document is completely ignored and your website might get a low rating.

![](https://miro.medium.com/max/1400/1*3QYToriPvCW0YlplyyXL2Q.png)_Crawling with React.js_

This is how **Server Side Rendering** plays an important role in SEO.

### 3\. Head Component

Next.js provides a built-in component called **‘Head’**, which helps to append different elements such as title tag, meta tag etc. to the <head> part of the document. You can import it from next/head.

{{< gist Prathamesh9997 e5ac3284f52198a4b1b55b4199f985f5 >}}

As you can see in the above code snippet, we have implemented the **Head component** in the index.js file. The elements that are added (title and meta) inside **Head** will not be shown in other routes.

You must have to implement it on every page that you want and add the respective title, meta tags inside the **Head Component**.

If you want to share some meta tags among all the pages inside your application (or to avoid repetition), you need to implement this **Head Component** inside the \_app.js file.

{{< gist Prathamesh9997 7862234caa69c9fa63e1b085660bad5c >}}

**Head Component** makes sure all of your pages include important details like title, description etc. that need to get rendered into your page. Next.js recognises this metadata and lift it to the right location in your HTML document when the page is being rendered. It helps in improving SEO.

## Conclusion

In this article, we have learned how Next.js helps to improve SEO by providing different built-in features. These are the basic things you need to consider while working with SEO. Apart from these, there are many practices like sitemaps, internal linking, back-linking, image optimisation, page speed optimisation etc. which helps to improve your website’s ranking.

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)
