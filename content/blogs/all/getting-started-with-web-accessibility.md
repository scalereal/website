---
title: Getting started with web accessibility
description: In this article, we’ll understand the basics of web accessibility.
date: 2022-02-16
categories:
  - web
tags:
  - web
  - Accessibility
  - Web Developement
author: Abhishek Ghadge
image: /images/blog/banner/getting-started-with-web-accessibility.webp
thumbnail: https://via.placeholder.com/150
url: web/2022/02/16/getting-started-with-web-accessibility.html
---

## What is web accessibility?

Web accessibility means that the web should be easily accessible to everyone irrespective of their special needs. The web was created to bridge the gap of communication and remove the barriers for easy interaction with everyone. Web accessibility provides the fundamental right of internet access to people with special needs. It not only includes easy access to physically disabled ones, but also to the elderly people, people in rural areas where the internet connectivity might fluctuate, people with old devices, etc.

## Why should you make your web page accessible?

With the new age, more and more people are using the internet for their daily activities. These include the people with special needs. So, it is our moral duty to make it easier for them to access and interact with our web page without hassle. The internet is becoming our fourth basic requirement besides food, clothes and shelter. Now-a-days, many countries have laws that require websites to be easily accessible. So, we must ensure that our web page is easily accessible to all. Apart from people with special needs, it can also benefit the old people, small-screen device users, people with broken or malfunctioning devices, and people with limited bandwidth.

## How do special people access websites?

![Person sitting on a wheelchair accessing a phone symbolizing accessibility friendliness](https://miro.medium.com/max/1000/0*9wjKhwIvYSwsqu6l.jpg)

There are various types of special needs that can make it difficult for people to access the web. These barriers include auditory, visual, cognitive, physical, speech related, etc. The way with which web is accessed by everyone differs as the needs can differ from person to person. For example, people with low vision or similar visual barriers use techniques like zooming up the web page, adjusting the contrast to the browser, using a screen reader, etc.

To overcome these barriers, people generally use a screen reader for accessing the web page. The screen reader is an assistive utility which reads contents of the web page aloud and can navigate through the web page easily. There are various screen readers available, like Narrator for Windows devices, Vision for Apple devices, etc.

Besides the screen reader, various other assistive technologies like transcripts, audio descriptors, and captions are also widely used.

## How can you make your web page accessible?

![](https://miro.medium.com/max/900/1*XkKPIA-qctv32U5IhKZKCA.jpeg)

Now that you know about various need barriers, you might be worried about how can you provide accessibility to all these different types. Luckily, it is not as hard as it seems. If you follow some guidelines and standards, you can make your web page easily accessible to all.

W3C or World Wide Web Consortium has provided with [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), as an internationally recognized standard for developers. These guidelines might sound intimidating at first, but you will get used to them if you keep on following them. The key here is to use these guidelines while designing and developing the web page, rather than adding them after you’ve developed the page.

Here are some quick tips for you to get started:

- **Use appropriately contrasting colors for text**

Make sure that the background and foreground colors of the text have proper contrast. Text with a low contrast ratio is hard to read, and it’s also very problematic for the people with low vision. You can check for the contrast in Dev tools section, if you enable select element tool.

![](https://miro.medium.com/max/824/1*vX0Fcza6CCV7GltWWuUS4Q.png)

Alternatively, you can use [Colorable](https://colorable.jxnblk.com/) to check the contrast.

- **Always use alternative text for images**

Alternative text is used by the screen reader to properly describe the image. It is also displayed whenever any image is unable to load. You can add alternative text to image by using `alt` attribute of image tag. If the image is for design purpose only, then you can keep alternative text as empty string.

- **Use semantic HTML elements to properly structure web page**

Semantic refers to the meaning of the code/elements of code. In HTML, semantic elements are used to impart a particular role to an element or section of element. For example, using `nav` element for navigation bar will add the meaning of ‘Navigation section’ to the code. This meaning is used by the screen reader to quickly navigate the page.

Some of the common semantic HTML elements are `header`, `main`, `section`, `article` and `footer`.

For more details about semantics, you can refer the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Glossary/Semantics).

- **Use** `prefers-reduced-motion` **CSS media query to allow reducing animations/motion effects**

Some people are prone to distraction or vertigo like disorders when exposed to visual motion effects. Due to this, they can disable such motion effects in the system. To support this, prefers-reduced-motion query is used. This query detects whether the user has enabled such setting in the system and can reduce or remove the animations. You should use this query for animating the web pages. Here’s an example:

{{< gist Abg4real 80bea3033b94e7577ec64def48989571 >}}

- **Every input field must have a label tag associated with it**

Every input must have a label element linked to it. This will help the screen readers to read the what the input field is used for. Make sure to use label element only. You can achieve the labeling effect by any other text tag, but that is an anti-pattern, and screen reader will fail to interpret it as a label.

{{< gist Abg4real 8b3102f17437b162981a87c68342a500 >}}

These are some of many ways you can improve the accessibility of your web page. For more such ways, you can refer to a11y project’s [Check list for WCAG compliance](https://www.a11yproject.com/checklist/).

> Pro tip**💡**: You can use Google Chrome’s Lighthouse to audit your web page for accessibility. It will rate your web page out of 100, and will also tell you about various opportunities where you can improve your web page’s accessibility.

I hope, you have understood the importance of web accessibility and have a basic idea of how you can make your web page more accessible.

Thanks for reading!

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)
