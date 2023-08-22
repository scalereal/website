---
title: Design patterns with Kotlin Part 1
description: Design patterns are typical solutions to common problems in software design. Each pattern is a blueprint that you can customize to solve a particular design problem in your code.
date: 2022-05-22
categories:
  - mobile
tags:
  - Kotlin
  - Design Patterns
  - Software Development
  - Android
  - Java
author: Sandesh Bodake
image: /images/blog/banner/design-patterns-with-kotlin-part-1.webp
thumbnail: https://via.placeholder.com/150
url: android/2022/05/22/design-patterns-with-kotlin-part-1.html
---

Design patterns are typical solutions to common problems in software design. Each pattern is a blueprint that you can customize to solve a particular design problem in your code.

## What is a Design pattern?

In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design. A design pattern isn’t a finished design that can be transformed directly into code. It is a **description or template for how to solve a problem that can be used in many different situations.**

Patterns are often confused with algorithms because both concepts describe typical solutions to some known problems. While an algorithm always defines a clear set of actions that can achieve some goal, a pattern is a more high-level description of a solution. The code of the same pattern applied to two different programs may be different.

## Classification of patterns:

- **Creational patterns** provide object creation mechanisms that increase flexibility and reuse of existing code.
- **Structural patterns** explain how to assemble objects and classes into larger structures while keeping the structures flexible and efficient.
- **Behavioural patterns** take care of effective communication and the assignment of responsibilities between objects.

Let’s start exploring types of patterns…

## Creational design pattern

### 1\. Factory Method

**Factory Method** is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.

**Problem:**

Imagine that you’re creating a delivery management application. The first version of your app can only handle transportation by trucks, so the bulk of your code lives inside the ```Truck``` class.

After a while, your app becomes pretty popular worldwide. Each day you receive dozens of requests from Air transportation companies to incorporate worldwide deliveries.

**Challenge:**

But how about the code? At present, most of your code is coupled to the ```Truck``` class. Adding transport by ```Air``` into the app would require making changes to the entire codebase. Moreover, if later you decide to add another type of transportation to the app, you will probably need to make all of these changes again.

As a result, you will end up with pretty nasty code, riddled with conditionals that switch the app’s behaviour depending on the class of transportation objects.

**Solution:**

The below example illustrates how the **Factory Method** can be used for creating delivery transport without coupling the transportation type into the main class.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8UU5g72h0XB26PyJWs1Svw.jpeg)_Factory Method Pattern 1.0_

Let’s jump into the implementation,

{{< gist sandeshbodake 63f4cf702e5778aeee9d697b12164003 >}}

So using the Factory method pattern you can decouple your logic to specific classes, just based on the delivery type you can easily instantiate the respective class and invoke a particular method.

**Pros:**

- You avoid tight coupling between the creator and the concrete products.
- Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support.
- _Open/Closed Principle_. You can introduce new types of products into the program without breaking the existing client code.


**Cons:**

- The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best-case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.

### 2\. Abstract Factory

**Abstract Factory** is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

**Problem:**

Imagine you’re creating a furniture shop simulator. Your code consists of classes that contain that represent

Let’s consider products Chair, Sofa and Cofee table

And varients of these products let’s say Modern, Victorian, and ArtDeco

You need a way to create individual furniture objects so that they match other objects of the same family. Customers get quite mad when they receive non-matching furniture.

Also, you don’t want to change existing code when adding new products or families of products to the program. Furniture vendors update their catalogues very often, and you wouldn’t want to change the core code each time it happens.

**Solution:**

The first thing the Abstract Factory pattern suggests is to explicitly declare interfaces for each distinct product of the product family (e.g., chair, sofa or coffee table). Then you can make all variants of products follow those interfaces. For example, all chair variants can implement the ```Chair``` interface; all coffee table variants can implement the ```CoffeeTable``` interface, and so on.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*RCmmrc5q8BsLC4-qwwykJA.jpeg)_Abstract factory Method Pattern 1.0_


The next move is to declare the Abstract Factory — an interface with a list of creation methods for all products that are part of the product family (for example, ```createChair```, ```createSofa``` and ```createCoffeeTable```). These methods must return abstract product types represented by the interfaces we extracted previously: ```Chair```, ```Sofa```, ```CoffeeTable``` and so on.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kcluPzFG7dsC1oKFhIqIkQ.jpeg)_Abstract factory Method Pattern 1.1_

{{< gist sandeshbodake 7e1d15da5d943815291ea92c701befc5 >}}

The client code has to work with both factories and products via their respective abstract interfaces. This lets you change the type of a factory that you pass to the client code, as well as the product variant that the client code receives, without breaking the actual client code.

**Pros:**

- You avoid tight coupling between concrete products and client code.
- You can be sure that the products you’re getting from a factory are compatible with each other.

**Cons:**

- The code may become more complicated than it should be since a lot of new interfaces and classes are introduced along with the pattern.

### 3\. Builder Pattern

**Builder** is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

**Problem:**

Imagine an object need step by step initialization of many fields and nested objects. Such initialization of code usually makes our constructor with lots of parameters.

Let’s take an example,

To build a simple house, you need to construct four walls and a floor, install a door, fit a pair of windows, and build a roof. But what if you want a bigger, brighter house, with a backyard and other goodies (like a heating system, plumbing, and electrical wiring)

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*85oCA4Mus72g-pXeOlgJVQ.jpeg)_Builder Pattern 1.0_

In the above example, there is Class ```House``` with n number of parameters, most of the parameters will be unused(Not necessary to have a swimming pool in every house) and making our constructor not readable.

**Solution:**

The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called _builders_.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*p3RwOu1-WwXF_VWuOpf05w.jpeg)_Builder Pattern 1.1_

Let’s jump into the implementation part,

{{< gist sandeshbodake 36b955813eecdc781f96ce802712cae6 >}}

> What does “.()” mean in Kotlin? “.()” means that the function can be invoked using object of DrawerBuilderKt class. = {} means that setup parameter is optional. So the function takes no parameters and return nothing

**Pros:**

- You can construct objects step-by-step, defer construction steps or run steps recursively.
- _Single Responsibility Principle_. You can isolate complex construction code from the business logic of the product

**Cons:**
- The overall complexity of the code increases since the pattern requires creating multiple new classes.


### 4\.  Prototype Pattern

**Prototype design pattern** lets you copy existing objects without making your code dependent on their classes.

**Problem:**

Let’s say you have an object and you want to copy that. How would you do it? First, you have to create a new object of the same class. Then you have to go through all the fields of the original object and copy their values over to the new object.

**Solution:

The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object. Usually, such an interface contains just a single ```clone``` method.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*0WCpeFZzix8CF84K8UsWMw.jpeg)_Prototype Pattern 1.0_

{{< gist sandeshbodake 5605f11d3bed427f2a20b13eb23810a2 >}}

The above code explains the proper usage of the Cloneable interface to make the ```Object.clone()``` method legal. Classes that implement this interface should override the ```Object.clone()``` method (which is protected) so that it can be invoked.

Note: another way you can simply use ```original.copy(xCorrdinate=10)``` to clone objects.

**Pros:**

- You can clone objects without coupling them to their concrete classes.
- You can produce complex objects more conveniently.
- You get an alternative to inheritance when dealing with configuration presets for complex objects.

**Cons:**

- Cloning complex objects that have circular references might be very tricky.

### 5\. Singleton Pattern

**Singleton** is a creational design pattern that lets you ensure that a class has only one instance while providing a global access point to this instance.

**Problem:**

Why would anyone want to control how many instances a class has? The most common reason for this is to control access to some shared resource — for example, a database or a file.

Here’s how it works: imagine that you created an object, but after a while decided to create a new one. Instead of receiving a fresh object, you’ll get the one you already created.


Note that this behaviour is impossible to implement with a regular constructor since a constructor call **must** always return a new object by design.


**Solution:**

All implementations of the Singleton have these two steps in common:

- Make the default constructor private, to prevent other objects from using the ```new``` operator with the Singleton class.
- Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*VsPfP4mQpg5CR_uG4F-mIQ.jpeg)_Singleton 1.0_


{{< gist sandeshbodake 4b22dd164ad0f08bf8f575a21a4204f9 >}}

**Pros:**

- You can be sure that a class has only a single instance.
- The singleton object is initialized only when it’s requested for the first time.

**Cons:**

- It may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don’t write the tests. Or don’t use the Singleton pattern.

&nbsp;

In this blog, we covered all creational design patterns with their example in kotlin. For more examples check out our Github Repository [here](https://github.com/scalereal/design-patterns). In the upcoming blogs, we’ll be exploring Structural and Behavioural Patterns.

&nbsp;

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)

