---
title: Design patterns with Kotlin Part 2
description: Design patterns are typical solutions to common problems in software design. Each pattern is a blueprint that you can customize to solve a particular design problem in your code.
date: 2022-08-17
categories:
  - mobile
tags:
  - Kotlin
  - Design Patterns
  - Software Engineering
  - Object Oriented
  - Java
author: Sandesh Bodake
image: /images/blog/banner/design-patterns-with-kotlin-part-2.webp
thumbnail: https://via.placeholder.com/150
url: android/2022/08/17/design-patterns-with-kotlin-part-2.html
---

## What is Structural Design Pattern?

Structural design patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

> In the last blog, we explore creational design patterns in Kotlin, if you haven't read it check the below link 👇

[Design patterns with Kotlin Part 1](https://medium.com/scalereal/design-patterns-with-kotlin-part-1-dcd230d14c6e)

Let’s start exploring structural patterns,


### 1\. Adapter Pattern

**Adapter** design pattern allows objects with incompatible interfaces to collaborate.

**Problem:**

Imagine that you’re creating a stock market monitoring app. The app downloads the stock data from multiple sources in XML format and then displays nice-looking charts and diagrams for the user.

At some point, you decide to improve the app by integrating a smart 3rd-party analytics library. But there’s a catch: the analytics library only works with data in JSON format


**Solution:**

You can create an _adapter_. This is a special object that converts the interface of one object so that another object can understand it.

An adapter wraps one of the objects to hide the complexity of conversion happening behind the scenes. The wrapped object isn’t even aware of the adapter. For example, you can wrap an object that operates in meters and kilometres with an adapter that converts all of the data to imperial units such as feet and miles.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*-3hI0nvEOhP0gTibP7JJYA.jpeg)_Adapter Pattern 1.0_

This implementation uses the object composition principle: the adapter implements the interface of one object and wraps the other.

Let’s jump on code implementation,

{{< gist sandeshbodake 8b3d39287d30b9d6f5d3d78c4c2e438f >}}


**Pros:**

- _Single Responsibility Principle_. You can separate the interface or data conversion code from the primary business logic of the program.
- _Open/Closed Principle_. You can introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface


**Cons:**

- The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. Sometimes it’s simpler just to change the service class so that it matches the rest of your code.

### 2\. Decorator Pattern

**Decorator** design pattern that lets you attach new behaviours to objects by placing these objects inside special wrapper objects that contain the behaviours.

The **Decorator pattern allows us to add behaviour either statically or dynamically by providing an enhanced interface to the original object**. The static approach can be achieved using inheritance, overriding all the methods of the main class and adding the extra functionality that we want.

As an alternative to inheritance and to reduce the overhead of subclassing, we can use composition and delegation to add additional behaviour dynamically. In this article, we’ll follow these techniques for the implementation of this pattern.

**Problem:**

Suppose you’re working on a simple API where you have to read/write data for this you’ll create simple functions but what if tomorrow you want to do extra operations li*ke encryption? you need to so many changes in functions and this will also break the **Single-responsibility principle**

**Solution:**

The solution to the above problem is overriding all the methods of the main class and adding extra functionality i.e encryption/decryption to that respective action

Let’s jump into the code to understand it,

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*UwgfC_jDaJeK5NkNeYGJAw.jpeg)_Decorator Pattern 1.0_

{{< gist sandeshbodake cbec7924f13fde1d74ed60260a92d51c >}}

See the above example we simply added ```EncryptionDecorator``` and all the necessary logic related to Encryption is in this class itself.

**Pros:**

- You can extend an object’s behaviour without making a new subclass.
- You can add or remove responsibilities from an object at runtime.
- _Single Responsibility Principle_. You can divide a monolithic class that implements many possible variants of behaviour into several smaller classes.

**Cons:**

- It’s hard to implement a decorator in such a way that its behaviour doesn’t depend on the order in the decorators stack.


### 3\. Facade

**Facade** pattern provides a simplified interface to a library, a framework, or any other complex set of classes.

**Problem:**

Imagine that you must make your code work with a broad set of objects that belong to a sophisticated library or framework. Ordinarily, you’d need to initialize all of those objects, keep track of dependencies, execute methods in the correct order, and so on.

As a result, the business logic of your classes would become tightly coupled to the implementation details of 3rd-party classes, making it hard to comprehend and maintain.


**Solution:**

A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts. A facade might provide limited functionality in comparison to working with the subsystem directly. However, it includes only those features that clients really care about.

Having a facade is handy when you need to integrate your app with a sophisticated library that has dozens of features, but you just need a tiny bit of its functionality.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*ToLTj9rWXLe5sbvuwPcy2Q.jpeg)_Facade 1.0_

Instead of making your code work with dozens of the framework classes directly, you create a facade class which encapsulates that functionality and hides it from the rest of the code. This structure also helps you to minimize the effort of upgrading to future versions of the framework or replacing it with another one. The only thing you’d need to change in your app would be the implementation of the facade’s methods.

{{< gist sandeshbodake 0b67122838d484ba583452927e583361 >}}


**Pros:**

- You can isolate your code from the complexity of a subsystem.

**Cons:**
- Tightly coupled classes


### 4\.  Proxy Pattern

**Proxy** design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

**Problem:**

Suppose you have a massive object that consumes a vast amount of system resources. You need it from time to time, but not always. In an ideal world, we’d want to put this code directly into our object’s class, but that isn’t always possible. For instance, the class may be part of a closed 3rd-party library.

**Solution:

The Proxy pattern suggests that you create a new proxy class with the same interface as an original service object. Then you update your app so that it passes the proxy object to all of the original object’s clients. Upon receiving a request from a client, the proxy creates a real service object and delegates all the work to it.

In the Proxy Pattern, a **client does not directly talk to the original object, it delegates its calls to the proxy object which calls the methods of the original object.**


{{< gist sandeshbodake 8b9a52f40f7a5dd9d78f4e9784ca181c >}}


**Pros:**

- You can control the service object without clients knowing about it.
- _Open/Closed Principle_. You can introduce new proxies without changing the service or clients.


**Cons:**

- The code may become more complicated since you need to introduce a lot of new classes.


### 5\. Bridge Pattern

The bridge pattern allows the Abstraction and the Implementation to be developed independently and the client code can access only the Abstraction part without being concerned about the Implementation part.

**Problem:**

When there are inheritance hierarchies creating concrete implementation, you lose flexibility because of interdependence.


**Solution:**

Decouple implementation from the interface and hiding implementation details from the client is the essence of the bridge design pattern

Check the below code snippet 👇

{{< gist sandeshbodake 1088732ce67421226db165b076297f15 >}}

**Pros:**

- Bridge pattern allows independent variation between two abstract and implementor systems.
- It avoids the client code binding to a certain implementation.
- Abstraction and implementation can be clearly separated allowing the easy future extension.


**Cons:**

- You might make the code more complicated by applying the pattern to a highly cohesive class.

&nbsp;

In this blog, we covered structural design patterns with their example in Kotlin. For more examples check out our Github Repository [here](https://github.com/scalereal/design-patterns). In the upcoming blogs, we’ll be exploring Behavioural Patterns.

&nbsp;

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)

