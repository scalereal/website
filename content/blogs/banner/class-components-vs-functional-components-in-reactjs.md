---
title: Class Components vs. Functional Components in ReactJS
description: In this article, we understand the difference between class based components and functional components in ReactJS.
date: 2022-03-03
categories:
  - web
tags:
  - Web
  - JavaScript
  - Web Development
  - ReactJS
author: Piyush Rajput
image: /images/blog/banner/class-components-vs-functional-components-in-reactjs.webp
thumbnail: https://via.placeholder.com/150
url: android/2022/03/03/class-components-vs-functional-components-in-reactjs.html
blog_place: banner
---

⚡Introduction
--------------

In React, there are two ways of writing a React component. Functional components and Class components. Currently, Functional components are most commonly used.

This article will help you understand the real difference between Class Components and Functional Components in React Js.

What are components in React?
-----------------------------

A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. A component is something that either returns a JSX element or a Null.

Class Components
----------------

The class component in react is a regular ES6 class that extends the component class of the React library. It is also called as stateful component because it controls how the state changes and the implementation of the component logic. Aside from that, they have access to all the different phases of a React lifecycle method. Before the introduction of React Hooks, the class component was the only option to create a dynamic and reusable component because it gave us access to lifecycle methods and all React functionalities.

Let us take a look at an example of a class component in which we have created a counter as follows.

{{< gist imPiyushrRajput 72887482147c2d82c71b002b89eea033 >}}

In the above example, We created the class with a constructor and a render method. We set the initial state with this.state statement in the constructor. We use `this.setState()` to update the states inside the component. We have set the initial state with the constructor to 0. We have added two functions handleIncrement() and handleDecrement() to increase and decrease the counter when the user clicks the increment or decrement button.

#### **Lifecycle Methods**

Lifecycle methods play an important role in the timing of rendering of a component. Let us take a look at some lifecycle methods.

#### **On Mounting (componentDidMount)**

This lifecycle method is called right after the first render of the component. This is mainly used for async API calls. In the functional component, componentDidMount is replaced with a useEffect hook with an empty dependency array.

#### **On Update (componentDidUpdate)**

This lifecycle method is not called right after rendering a component. This is called right after any state inside a component is updated. In functional componentDidUpdate is replaced with a useEffect hook with a non-empty dependency array.

#### **On Unmounting (componentWillUnmount)**

This lifecycle method is called right after the component is unmounted. This is especially useful when we have to clean up the subscriptions such as a `clearInterval` function, otherwise, it can cause a severe memory leak on a bigger project. In functional componentWillUnmount is replaced with a useEffect hook with a cleanup function.

Now, let’s convert the class component to a functional component to differentiate between them.

Functional components
---------------------

A Functional Component in react is just like a simple javascript function that returns JSX. Before the release of hooks in React 16.8, they were mostly referred to as stateless components because then they only accepted and returned data to be rendered to the DOM(without handling any state). Check out the following example for creating a simple functional component.
{{< gist imPiyushrRajput 44febece47f20e7ac45db2ac526dd53a >}}

We can use arrow functions as well introduced in ES6 as follows.
{{< gist imPiyushrRajput c434a84178b7c4a23e65d5afc4f085e7 >}}

Before, React 16.8 the class component was the only option to access more React features such as state and React lifecycle methods. However, with hooks, we can implement state and other React features, and, most importantly, we can write our entire UI with functional components.

#### **What are hooks?**

Hooks are functions that let us use React state and lifecycle features inside function components. Hooks don’t work inside classes they let you use React without classes.

#### **React has two most commonly used hooks.**

1.  useState hook
2.  useEffect hook.

We will take a look at an example of understanding both hooks. If you are new to React, you can learn more about React Hooks [here](https://reactjs.org/docs/hooks-intro.html).

#### **What is useState Hook?**

useState hook let us add state to a functional component. It accepts an argument which is the initial value of the state property and returns the current value of state property and a method that is capable of updating that state property.

We can use the useState hook as follows.
{{< gist imPiyushrRajput 2b4531a01f8af206fe531e83c5787c0f >}}

The useState hook will return a pair of values: the current count, and a function setCount that updates the state count.

Let us take a look at an example of a functional component in which we have created a counter using the useState hook as follows.
{{< gist imPiyushrRajput 24b1494fe52a8eff1ab91c9257a3bcc8 >}}

#### **What is useEffect Hook?**

useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.

useEffect hook takes 2 arguments.
{{< gist imPiyushrRajput 1be87d9b24edc77259a6e268d562932e >}}

1.  The callback is the function containing the side-effect logic. The callback is executed right after changes were being pushed to DOM.
2.  Dependency is an optional array of dependencies. useEffect executes callback only if the dependencies have changed between renderings.

Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That's the sole purpose of useEffect.

The dependency argument lets us control when the side-effect runs. We can specify a dependency in three ways, explained as follows.

1.  Dependencies not provided

2.  An empty dependency array

3.  Has dependencies


#### **Dependencies not provided**
{{< gist imPiyushrRajput edcbaf92c9bbb5704d9a3470d59f0724 >}}
In this case, the side-effect runs after every rendering.

#### **An empty dependency array**
{{< gist imPiyushrRajput 163a46b3ac94abc79013d43b164dfe09 >}}
In this case, the side-effect runs once after the initial rendering.

#### **Has dependencies**
{{< gist imPiyushrRajput d123ce16e9ef32d8f16444d068bc2c13 >}}
In this case, the side-effect runs only when any dependency value changes.

#### **Side-effect cleanup**

If the callback of useEffect returns a function, then useEffect considers this as an effect cleanup_._ The common asynchronous side-effects are: performing fetch requests to load data from a remote server, handling timers like `setTimeout()`, debounce or throttle functions, etc.

#### **What is a cleanup function?**

The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors. Note that you don’t update the state inside the return function.

#### **Cleanup works the following way:**

1.  After initial rendering, useEffect invokes the callback having the side-effect. The cleanup function is not invoked.
2.  On later renderings, before invoking the next side-effect callback, useEffect invokes the cleanup function from the previous side-effect execution (to clean up everything after the previous side-effect), then runs the current side-effect.
3.  Finally, after unmounting the component, useEffect invokes the cleanup function from the latest side-effect.

Let us take a look at an example of a functional component in which we have created a timer using the useEffect hook as follows.
{{< gist imPiyushrRajput ed3d8fd75005c4098979cd2cb1b1d711 >}}

Conclusion
----------

I would like to conclude that there are pros and cons in both styles. I do not necessarily think one is better than the other. A functional programmer may find it easier to use functional components, while that applies the same to an object-oriented programmer may find it easier to use class components.

I personally like using functional components they are written shorter and simpler, which makes it easier to read, write and test because they are just plain JS functions. Class components can be confusing with the usage of `this.`Using functional components we can easily avoid this kind of a mess and keep everything clean.
&nbsp;
&nbsp;

-------

### &nbsp;&nbsp;
At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)
