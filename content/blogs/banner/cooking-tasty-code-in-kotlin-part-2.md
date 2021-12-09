---
title: 👨‍🍳 Cooking Tasty code in Kotlin 🍴 — Part 2
description: In this article, we’ll see some more or advanced recipes to cook your code tasty 😋 in Kotlin.
date:   2020-12-24
categories:
  - android
tags:
  - Android
  - AndroidDev
  - Kotlin
  - JetPack
  - Datastore
author: Shreyas Patil
image: /images/blog/banner/cooking-tasty-code-in-kotlin-part-2.webp
thumbnail: https://via.placeholder.com/150
url: android/2020/09/03/cooking-tasty-code-in-kotlin-part-2.html
blog_place: banner
---

## 👨‍🍳 Cooking Tasty code in Kotlin 🍴 — Part 2
​
Hey developers 👋, welcome back to the second part of the series. In this article, I’ll walk you through some more or advanced recipes to cook your code tasty 😋 in Kotlin.
​
To be honest, you can find some concepts here which might be not easy to understand if you’re a beginner or new to the Kotlin. Still, I’ll try my best to explain it with some examples.
​
​
## ⭐️ String templates
​
-   Kotlin provides string templates for performing a variety of operations with string.
-   Using it, we can simplify our code and make it even more readable and easy to trace.
-   For example, see this 👇
​
{{< gist PatilShreyas e150760f2b97d08c4ff7364adc106c54>}}
​
Here you can see we didn’t need `+` to concatenate to strings. Instead, we can directly include types using `$` which replace the value of that variable. See this now 👇

{{< gist PatilShreyas 91243b84da641f4d37f66352b0c31089>}}

We had to include double-quotes in a string. For example, `"name": "John Doe"`. If you see removed code (🔴) here, we need to use `\"` to include double quotes in a string and then it becomes hard to read or trace to someone else.
​
Remember how we concatenated multiple or multiline strings in Java? That’s really not easy to trace the code then. Take a look on this snippet 👇
​
{{< gist PatilShreyas e07be4a2ff5ce3b384d1fe22a122f14f>}}

Did you notice simplicity😃? In Kotlin, we easily handled a multi-line string using `"""`. We don’t even need to append `\n`.
​
String literals _(let's say special characters like `\n`)_ aren’t processed in templates because you actually won’t need this thing. It’s completely considered as a **_Raw string_**.
​
There’s more a lot we can do with strings in Kotlin.
​
## ⭐️ Destructing Declarations
​
-   Kotlin allows us to destructure an object into a number of variables. For example, see this 👇
​
{{< gist PatilShreyas 251c8fe85a61e23875e0d408d8206c75>}}
​
It’s useful when we just want to access members of an instance directly.
​
But wait, it’ll be dangerous ⚠️ if you change the order of members. Let’s say if you write code as 👇
​
```kotlin
val (userName, userId) = getUsers()
```
​
Then you can see, a user ID will be assigned to `userName` and name will be assigned to `userId`. _So handle it with care or just use it when you’re sure that the class_ **_structure won’t change again_**_._ For example, Kotlin provides a class called [`Pair<A,B>`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/) which is a part of the standard library function. `Pair` has only _two members_ i.e. `first` and `second`. So here we are sure that its structure won’t change then we can surely use destructing declarations there 👇.
​
{{< gist PatilShreyas e9c5c47ab21477bd46157a5cd4ee0cff>}}
​
If you don't need any variable, you can achieve it like this 👇
​
```kotlin
val (_, interests) = getUserInterest()
```
​
## ⭐️ Sealed Class
​
-   As its name suggests, sealed classes represent restricted class hierarchies.
-   In simple words, sealed classes are extended enums.
-   A sealed class can have subclasses, but all of them must be declared in the same file as the sealed class itself.
-   For example, see this 👇
​
{{< gist PatilShreyas 14471ba306c20f2a9a40bb950d27da9c>}}

Okay, In the first snippet we have two classes for Result i.e. _Success_ and _Failure._ We are sure that `getResult()` will only return an instance of these two classes. Still, if you see `when{}` expression, we need to add `else{}` block unnecessarily because code is not sure about instance type of `val result`.
​
Now look at the second snippet, we declared these classes under `sealed class Result {}` and it simplified a lot. That’s very clear that Result can have only two types of instances i.e. _Success_ or _Failure._
​
We can also read members of instances, see this 👇
​
​{{< gist PatilShreyas 5b0977b3d49821ce49d64f1dabbf7890>}}

As you can see above, we can actually access `someData` of _Success_ and `message` of _Failure_. So this is how it works 😃. It’s a really perfect thing to replace with enums.
​
## ⭐️ Inner Class
​
-   How to access the value of outer class in nested classes? Let's say you want to access ***`this`*** scope of a class from nested class. Don’t worry, **_inner class_** in Kotlin is here to help you ��
-   See this first 👇
​
​​{{< gist PatilShreyas de474d4a9a29cb3eaac600eed9f9ca12>}}

There’s an **Outer** class and it has two nested classes under it i.e. **_Inner1_** and **_Inner2_**. As you can see, `Inner1` can’t access ❌ the `value` of an outer class and `Inner2` which is declared using keyword `inner` can access it ✅.
​
> **Observe carefully:** In main(),  
> If you see **#1,** we can directly create instance of `Inner1` and access its member.  
> Now see **#2,** we can only create instance of `Inner2` using instance of `Outer` as it carries the reference to an object of an `Outer` class.
​
## ⭐️ Functional (SAM) Interface
​
-   The functional interface should only have one abstract method i.e. _SAM (Single Abstract Method)._
-   A functional interface can have ***more than one non-abstract members*** but they must have ***exactly one abstract method***.
-   Using functional interfaces, we can leverage SAM conversions that help make our code more concise and readable by using _lambda expressions_. See the example below, it’s self-explanatory 👇
​
​​{{< gist PatilShreyas f9ca8adabc3b702427d0898749b3180e>}}

​
As you can see, If we don’t use a SAM conversion, we need to write code using `object` expressions. By just adding `fun` keyword for the interface, we literally made code even more readable 😃. Isn’t it _sweet_? 🍫
​
## ⭐️ Lambda Expressions
​
-   This is the spiciest feature of a Kotlin 🌶️.
-   These are like anonymous functions and we can treat them as values.
-   You can use lambda expressions if you want to create a function which doesn’t need to be an Interface (_as we saw SAM conversions_). For example, see this ��. Here you don’t actually need to declare a `fun interface`.
​
​​{{< gist PatilShreyas a21e072fa843a33e5cb21d07cf17da37>}}

So here you can see, by using lambda we indirectly created functionality for addition. Now let’s take a look at HOFs in Kotlin which is another ♨️ hot topic.
​
## ⭐️ Higher-Order Functions
​
-   A lambda is an anonymous function. It becomes a Higher-order function when that takes functions as parameters or returns a function.
-   For instance, see this example 👇
​
​​{{< gist PatilShreyas 6ff3bfcc19e2a7aac50b9752c17a5fde>}}
​
Here, `onClick()` takes a function as a parameter which is executed when the button is clicked.
​
Do you remember scope functions from the previous part? Yep! `let{}`, `apply{}`, etc scope functions are HOFs of the standard library of Kotlin.
​
Now see this example 👇
​
​​{{< gist PatilShreyas cf39d3be9918a2bce125500850f7e2bf>}}
​
Here we have created a HOF `TextBuilder` which has a parameter _builder_ which gives the reference of a `StringBuilder` in the lambda. That’s why we can call the properties of _StringBuilder_ by using **this** scope.
​
The more you explore Lambas and HOFs, the more you’ll fall in Love ❤️ with the Kotlin.
​
## ⭐️ Delegates
​
-   This beautiful language provides a way to use Delegated pattern in code 😍.
-   Kotlin provides it natively requiring zero boilerplate.
-   Take a look at this example.
​
​​{{< gist PatilShreyas bb2002cb21b8fef20e995b2fd032973e>}}

​
Here the ***by*** clause in the supertype list for `SportsBike` and `SportsCar` indicates that `bike` and `car` will be stored internally in objects of these classes and the compiler will generate all the methods of `Vehicle` that forward to v.
​
You can explore more about it [here](https://kotlinlang.org/docs/reference/delegation.html). Let’s see property delegations.
​
## ⭐️ Property Delegation
​
-   We can apply delegations for properties or members.
-   We don’t need to implement the same thing, again and again, using this.
-   For example, Kotlin standard library has some property delegates like `lazy`, `observables`, etc. See this 👇
​​
​​{{< gist PatilShreyas db2c4eff234024d52826e974b4c54fbd>}}

Here we have used lazy delegate where the value gets computed only upon first access. As you can see, when we accessed `value` in _println()_ for the first time the message is displayed and next time it’s not.
​
Let’s see how to create our own delegations. See this example first 👇
​​
​​{{< gist PatilShreyas d08470155d44aabd8180d28024128585>}}

In the first snippet, as you can see, we wrote a repetitive code for formatting fields but it simplified a lot after adding delegates. We override `setValue()` and `getValue()` operator functions of `ReadWriteProperty`. To learn more about delegates in Kotlin, refer [this](https://kotlinlang.org/docs/reference/delegated-properties.html).
​
## ⭐️ Ranges
​
-   In Kotlin, we can easily compute range related tasks with much more readability.
-   The operator `..` is used in the form of range. See examples below 👇
​
​​​{{< gist PatilShreyas eea6e6fb8b7bd456636087ea8aec55ad>}}

As you can see, code is self-explanatory and it doesn’t need an explicit explanation. _We can also add support for ranges for custom class types by overriding `rangeTo()`  function._
​
## ⭐️ Collection Extensions
​
-   The Kotlin standard library has a 💎treasure of extension function for Collections 😍.
-   With the help of these functions, can solve complex problems with simple solutions. It also makes code easy to trace, concise and readable. For example, see this code 👇
​
​​​{{< gist PatilShreyas 7c99a4b6e0e2ad8c7415de6b8a25e30e>}}
​
As you can see above, the code is self-explanatory using these cool extension functions. Can you just imagine how much code you’ll need to write for the same use case in any other programming language let say _Java_?
​
There’s many more we can do with these extensions. The more you explore it, you’ll find it interesting 👓.
​
## ⭐️ Coroutines
​
-   The most and most **HOT** 🔥 topic in Kotlin is Coroutine 😍.
-   It allows us to write asynchronous and non-blocking logic in a clean manner. It provides structured concurrency 🔀.
​​
​​​{{< gist PatilShreyas 02d2de862afa3b2587a0060ea9753200>}}

See this 👆, we launched three different jobs using `launch` with different delay and you can see its output.
​
We can also avoid traditional callbacks using Coroutines. Kotlin provides `suspend fun` for writing blocking calls.
​
​​​{{< gist PatilShreyas e3b2d314cb31a6901b0e3a9e68734083>}}

In the above example, you can see how code is simplified with the use of Coroutines.
​
Want to see again beauty of Coroutines? Let’s say you have to do two things concurrently, how to do that? Here `async` comes to help. See this 👇
​
​​​{{< gist PatilShreyas 1fe82c179f3f5e46dccdb0f97d80fa4f>}}

​
Here you can see that two coroutines execute concurrently. `async` returns a Deferred i.e. a light-weight non-blocking future that represents a promise to provide a result later.
​
&nbsp;

Coroutine library contains other APIs like `Flow` for implementing a reactive approach, `Channel` for communication and many others. Coroutines are one of the HUGE 🔶 topics in Kotlin. The more you explore it, the more you’ll find it interesting 😍. See [this reference](https://kotlinlang.org/docs/reference/coroutines/basics.html) for more information.
​​
&nbsp;

Yeah! 😍. By including all these ingredients together, that’s how we cooked tasty code with Kotlin 😋. I hope you liked this article.
​
&nbsp;

If you liked this article, share it with everyone! 😄
​
Sharing is caring!
​
Thank you! 😃
​
​&nbsp;

_Many thanks to [Shalom Halbert](https://twitter.com/shalomhalbert) and [Rishit Dagli](https://www.rishit.tech/) for helping me to make this better :)_