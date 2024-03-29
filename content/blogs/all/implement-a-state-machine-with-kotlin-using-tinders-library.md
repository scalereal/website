---
title: Implement a state machine with kotlin using tinders library
description: In this blog, we will show you how to integrate a finite state machine in kotlin using Tinder’s library.
date: 2020-08-04
categories:
  - backend
tags:
  - Kotlin
  - Gradle
  - Statemachine
  - Coding
  - Programming
author: Sandesh Bodake
image: /images/blog/banner/state-machine.webp
thumbnail: https://via.placeholder.com/150
url: backend/2020/08/04/implement-a-state-machine-with-kotlin-using-tinders-library.html
---

## What is a state machine?

A state machine is a behaviour model. It consists of a finite number of states and is therefore also called finite-state machine (FSM). Based on the current state and a given input the machine performs state transitions and produces outputs.

A **finite-state machine** (**FSM**) or simply a **state machine**, is a mathematical [model of computation](https://en.wikipedia.org/wiki/Model_of_computation). It is an [abstract machine](https://en.wikipedia.org/wiki/Abstract_machine) that can be in exactly one of a finite number of [states](https://en.wikipedia.org/wiki/State_(computer_science)) at any given time. The FSM can change from one state to another in response to some [inputs](https://en.wikipedia.org/wiki/Input_(computer_science)); the change from one state to another is called a *transition*. An FSM is defined by a list of its states, its initial state, and the inputs that trigger each transition.

## Why State machine?
> So much complexity in software comes from trying to make one thing do two things.
**- Ryan Singer**

If we are able to breakdown large complex task into some smaller independent units, a state machine can help us to imagine & manage those units in a more abstract way where we just need to configure when a state can move to another state & we concentrate on defining what happens when the transition occurs.

After configuration, we don’t need to care about how the transition happens. We just focus on when & what not on how. Also, state machine helps us to imagine the whole workflow of states in a very predictable way, once transitions are configured we don’t need to really care about mismanagement or wrong transitions of states, the wrong transition can only occur if we configure the state machine in a wrong way.

## Implementing State Machine

We’ll be using Kotlin and Intellij IDE to create our project. We’ll select Gradle as our build tool.

We’ll add the dependency by adding this to out ***build.gradle*** file.

{{< gist sandeshbodake fa98c37c6e0010819235a230a6437daa >}}

In this example, we create a StateMachine from the following state diagram.

![**Finite state machine real-life example**](https://cdn-images-1.medium.com/max/5738/1*4W0y7tLWXTrhTkevlLdbDw.jpeg)***Finite state machine real-life example***

This is a basic real-life example of a finite state machine using this example we will easily understand StateMachine flow. A rectangle represents State and the blue dotted arrow represents a particular event on that state.

Let’s start with the implementation part

![Alt text](https://media.giphy.com/media/QJvwBSGaoc4eI/giphy.gif)

## Define states, event, and side effects.

***States*** and ***Event*** that can cause transitions are what we use to encode the rules/logic of our domain. ***SideEffect*** part represents what we want to do with our code once a transition succeeds.

{{< gist sandeshbodake 78cfe483dbaa2c4c5a3d406fefc68fdd >}}

## Define StateMachine

{{< gist sandeshbodake 765a5859dfc4220dcd3ffefd4590a4ac >}}

Here you can see we simply used ***StateMachine*** class and invoked ***create*** method using states, event, and side effects class.

Next, we add the States and how different Actions will make them transition to other states.

{{< gist sandeshbodake 7b6bdccf0ef9ae711fd247bbd1231d67 >}}

Here we added all possible transitions with their side-effects.

Now, Let’s add ***SideEffects*** actions

{{< gist sandeshbodake 45d020f8529cddfaf431f3cc04341c7c >}}

After Every valid transaction particular ***SideEffect*** will be invoked. In this example for the demo purpose, we are just maintaining ***logs*** of a particular effect.

And we’re done. We added all the necessary things for StateMachine, Now it’s time to test it.

## Perform state transitions

To **Perform state transitions** we are going to use simple test cases.

{{< gist sandeshbodake 930f46bcc04beff81a7e7cee57003317 >}}

>***Note: For demo purpose, I performed the state transition using test cases.***

Refer [***this***](https://github.com/sandeshbodake/tinder-statemachine-example) Github Repository for complete implementation of StateMachine.

---

## Benefits of the state machine

* You get rid of hard coding conditions in your code. State machine abstracts all logic regarding states & transitions on behalf of you

* In reality, state machines usually have a finite number of states & definite transitions are defined in the states, so it’s easy to track which transition/data/ event caused the current condition of a request.

* Developers can just concentrate on defining actions & preconditions after a state machine is configured. With proper validation & precondition, state machine prevents out of order operations.

* State machines can be highly maintainable. Logically action performed during each transition is independent of each other. So the corresponding piece of code can be isolated.

---

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)
