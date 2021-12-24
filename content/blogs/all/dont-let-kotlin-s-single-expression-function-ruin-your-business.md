---
title: Don’t let Kotlin’s single-expression function ruin your business😲
description: Take care, Keep building!
date:   2021-05-24
categories:
  - android
tags:
  - Android
  - AndroidDev
  - Kotlin
  - JetPack
author: Shreyas Patil
image: /images/blog/banner/dont-let-kotlin-s-single-expression-function-ruin-your-business.webp
thumbnail: https://via.placeholder.com/150
url: android/2021/05/24/dont-let-kotlin-s-single-expression-function-ruin-your-business.html
---


Hello developers 👋, This is a mini-blog where we’ll see how a small mistake can lead to a confusing and serious issue.

Kotlin provides us with a way where we can define single-expression functions for one-shot operations. For e.g. we do something like this 👇

The return type of the above function will be the return type of the result of `findItemById()`, right? In the single-expression function, we don’t have a need to specify return type since it’s automatically inferred by Kotlin’s compiler.

The real problem 😬
-------------------

One day I was playing with Kotlin and while doing it I came across an issue that was actually produced by my own mistake. This issue looks small but it took me some time to came to know about it.

Now let’s understand how can our mistake lead to the issues. So refer to the below code.

What😕? Just _Good Morning_? Why _Good Afternoon_ isn’t printed?

> [You can execute this code by clicking here](https://pl.kotl.in/rSEBxWiru)

How? 🤔
-------

Did you notice `= {}` in `greetGoodAfternoon()` function? So this where the problem comes from. Let’s understand the issue.

So any developer won’t be intentionally writing such code. It may be just like we introduce typo mistakes! As we know, in a single-expression function, the returning type of a function is automatically inferred by the compiler (if not specified explicitly). When we write `= {}`, its return type is inferred internally as this 👇

Yes, it’s inferred as a lambda block 😅. So when we called `greetGoodAfternoon()` it returned a lambda! If we call `greetGoodAfternoon().invoke()` or `greetGoodAfternoon()()` then it’ll be get executed (_Because you now know what happened_ 😄).

> **Note:** IntelliJ IDEA or Android Studio warns you if you do such mistakes. But even after that if you ignored it, no one can help you.

Solution 💡
-----------

We are humans!😯 We always will do mistakes but that’s fine. The mistake which we did above (`= {}`) can’t be solved using any manual way. But there are some learnings by which we can avoid other related issues.

In my opinion, good practice to avoid mistakes will be a **_habit of mentioning return types explicitly!_** Yes, if we mention it explicitly _(even if using a simple-expression function)_ then it’ll avoid mistakes then we’ll be sure about such things at compile time itself.

By this, we can be sure that this function is returning `Item`. If not, then the compiler will be there to help you out. It makes code more readable and also we can be sure about it just by reading it (_like what exactly function is returning_). It can help the reviewer while reviewing code on GitHub as well 😎.

For a simple, one-liner call that _doesn’t return anything_, then this is fine 👇

There’s no doubt that Kotlin has made developer’s life simple and easy. But anyone can do such mistakes.

So the final conclusion is 👇

> Mention return type of a **function** explicitly and make it a habit!

If you liked this article then share it with everyone! Maybe it’ll help someone who needs it.

Thank you 😃
