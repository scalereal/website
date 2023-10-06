---
title: Send Emails with SendGrid API using Micronaut with Kotlin Coroutines
description: In this article, we understand how to send emails with SendGrid API using Micronaut with Kotlin Coroutines techniques.
date: 2022-08-29
categories:
  - android
tags:
  - Kotlin
  - Kotlin Coroutines 
  - Micronaut Framework
  - Sendgrid
author: Ubed Ali
image: /images/blog/banner/send-emails-with-sendgrid-api-using-micronaut-with-kotlin-coroutines.webp
thumbnail: https://via.placeholder.com/150
url: android/2022/08/29/send-emails-with-sendgrid-api-using-micronaut-with-kotlin-coroutines.html
---

## What is Coroutine?

From [Kotlin docs](https://kotlinlang.org/docs/coroutines-basics.html):

One can think of a coroutine as a light-weight thread. Like threads, coroutines can run in parallel, wait for each other and communicate. The biggest difference is that coroutines are very cheap, almost free: we can create thousands of them, and pay very little in terms of performance. True threads, on the other hand, are expensive to start and keep around. A thousand threads can be a serious challenge for a modern machine.

SEO stands for Search Engine Optimisation, which is the practice of optimising your website and increasing the quantity and quality of traffic to your website through organic search engine results.


## So why Kotlin Coroutines?

A coroutine is an instance of suspendable computation. It is conceptually similar to a thread, in the sense that it takes a block of code to run that works concurrently with the rest of the code. However, a coroutine is not bound to any particular thread. It may suspend its execution in one thread and resume in another one.

* Coroutines **help to manage long-running tasks that might otherwise block the main thread and cause your app to become unresponsive.**

* They are **light-weight**

You’re expected to be familiar with basic Kotlin syntax, but prior knowledge of coroutines is not required.

## Coroutines basics

This section covers basic coroutine concepts.

## Your first Coroutine

Coroutines can be thought of as light-weight threads, but there is a number of important differences that make their real-life usage very different from threads.

Run the following code to get to your first working coroutine:

{{< gist ubed-ali 236e67ab9209335b3ea62fc2dcf4b630 >}}

You will see the following result:

```
Hello
World
```

[You can get the full code here](https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/jvm/test/guide/example-basic-01.kt)


&nbsp;


**Let’s dissect what this code does.**

[launch](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/launch.html) is a coroutine builder. It launches a new coroutine concurrently with the rest of the code, which continues to work independently. That’s why Hello has been printed first.

[delay](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/delay.html) is a special suspending function. It suspends the coroutine for a specific time.

**Suspending** a coroutine does not block the underlying thread, but allows other coroutines to run and use the underlying thread for their code.

[runBlocking](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/run-blocking.html) is also a coroutine builder that bridges the non-coroutine world of a regular fun main() and the code with coroutines inside of runBlocking { … }. This is highlighted in an IDE by this: CoroutineScope hint right after the runBlocking opening curly brace.

If you remove or forget runBlocking in this code, you’ll get an error on the launch call, since [launch](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/launch.html) is declared only in the [CoroutineScope](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope/):

```
Unresolved reference: launch
```

The name of runBlocking means that the thread that runs it (in this case — the main thread) gets blocked for the duration of the call, until all the coroutines inside runBlocking { … } complete their execution. You will often see runBlocking used like that at the very top-level of the application and quite rarely inside the real code, as threads are expensive resources and blocking them is inefficient and is often not desired.

## Scope builder

In addition to the coroutine scope provided by different builders, it is possible to declare your own scope using the coroutineScope builder. It creates a coroutine scope and does not complete until all launched children complete.

runBlocking and coroutineScope builders may look similar because they both wait for their body and all its children to complete. The main difference is that the runBlocking method blocks the current thread for waiting, while coroutineScope just suspends, releasing the underlying thread for other usages. Because of that difference, runBlocking is a regular function and coroutineScope is a suspending function.

You can use coroutineScope from any suspending function. For example, you can move the concurrent printing of **Hello** and **World** into a suspend fun **doWorld()** function:

{{< gist ubed-ali b785712ee4c16425be9ce4706c871c99 >}}

This code also prints:

```
Hello
World!
```

## An Explicit Job

A launch coroutine builder returns a [Job](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/) object that is a handle to the launched coroutine and can be used to explicitly wait for its completion. For example, you can wait for completion of the child coroutine and then print “Done” string:

{{< gist ubed-ali 5de1706acf830bd9ce8251d745b01d3f >}}

This code produces:

```
Hello
World!
Done
```

## Suspend

We have already come across suspend keywords many times. Let’s go deep into what suspending functions are!

suspend is a keyword in kotlin which indicates function can be paused and resumed later point in time. You can use suspending functions to call long-running computations without blocking the main thread.

Rules for calling suspending functions:

* from other suspending functions.

* from coroutine (suspending functions inherits coroutine context from coroutine from where it is invoked).

![](https://miro.medium.com/v2/resize:fit:828/0*Sj7oa85jJ6HAPx5_)_Suspend-Kotlin Coroutines_

SUSPENDING: Function A, while has started, could be suspended, and let Function B execute, then only resume later. The thread is not locked by Function A.


&nbsp;


To learn more about Coroutines do watch :

The best source to understand this is the talk “[Deep Dive into Coroutines](https://www.youtube.com/watch?v=YrrUCSi72E8)” by Roman Elizarov.

“[Asynchronous Programming with Kotlin](https://kotlinconf.com/workshops/)” workshop by Roman Elizarov at KotlinConf.


&nbsp;

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*yxlVTfziO2LvKFzNsRX09w.png)

## How to Send Emails with SendGrid?

[SendGrid](https://sendgrid.com/) is a transactional email service. SendGrid is responsible for sending billions of emails for some of the best and brightest companies in the world.

## SendGrid API key

To use the Micronaut Sendgrid integration, we need an [API Key](https://app.sendgrid.com/settings/api_keys).

* Sign up for SendGrid.

Once we have created our account, the first thing we will see is web console:

![](https://miro.medium.com/v2/resize:fit:828/0*CibOZaGsa27rr3Ad)

Before we start, we need to create an API KEY , in order to use the services.

* Head to the Settings > API key > Create API key.

Here we can create the key with its name and the permissions that we want to give it, all the permissions are by default, but if we click on the Restricted Access option we can modify the necessary permissions.


* Store generated API key somewhere, as we’ll need it later in our app.

We must also add at least one email address from which the emails will be sent, for this we go to Settings > Sender Authentication , if it is the first time we access a blue button will appear in the upper right corner to create a new sender, if not, a white button will appear on the left with the text Verify Single Sender , that will take us to where the blue button is located to create a new sender, we click on it and a form will open, we fill it out, We verify the email, with the mail they send us, and we already have our first Sender added.

Once this is done, we go to the code, first of all we will add dependency


## Dependency

build.gradle.kts

{{< gist ubed-ali f2b8f507bfdeb1031b9905125e2e2ca4 >}}

## Controller

Create a MailController class. This class uses a collaborator, emailSender, to send an email.

You can send emails asynchronously using the [AysnEmailSender](https://micronaut-projects.github.io/micronaut-email/latest/api/index.html) API or synchronously using the EmailSender API.

source/main/kotlin/sendgridEmail/Application.kt

{{< gist ubed-ali 5fefa8f52be6ca792bff5066760dcdcc >}}

* When we enter into the main function it’ll first print the thread name, which is ‘main’ .
* Then we are using sleep for 10 secs and pretend it’s doing some operations.
* After 10 secs it will print ‘Exiting from ‘main’ thread’.

Let’s move to the Controller, create a new controller class named MailController,

source/main/kotlin/sendgridEmail/MailController.kt

{{< gist ubed-ali 589e5c341b7dce792ebb9fa798e9539e >}}

* The class is defined as a controller with the [@Controller](https://docs.micronaut.io/latest/api/io/micronaut/http/annotation/Controller.html) annotation mapped to the path ‘/mail/send/1’ and ‘/mail/send/2’ marked with suspend modifier.

Functions marked with the suspend keyword are transformed at compile time to be made asynchronous under the hood (in bytecode), even though they appear synchronous in the source code.

* Use constructor injection to inject a bean of type AsyncEmailSender.
* There are 2 [@Post](https://docs.micronaut.io/latest/api/io/micronaut/http/annotation/Post.html) annotations that map the send method to HTTP POST requests on ‘/mail/send/1’ and ‘/send/mail/2’.
* Return 202 ACCEPTED as the result if the email delivery succeeds
* In ‘/send/1’ we are using sleep for 7 seconds, pretending it’s doing some operations in that time.
* And in ‘/send/2’ we are using sleep for 1 sec, pretending it’s doing some operations too.

We are having 2 POST methods in our Controller class. Both the classes has been marked with the suspend modifier.

## Configuration

If you want to send every email with the same address, you can set it via configuration:

source/main/kotlin/resources/application.yml

{{< gist ubed-ali d076a50fd778e3f1e2221e0cff01a2f5 >}}

## Running the Application

* **API Key**

Set the SendGrid API Key as an environment variable before you run the application:

```
$ export SENDGRID_API_KEY='yourApiKey'
```

* **Run** 

To run the application, use the ‘./gradlew run’ command, which starts the application on port 8080 by default.

If it shows port *.8080 is in use

Head to ‘source/main/kotlin/resources/application.yml’ & change the port.

{{< gist ubed-ali 9cea760966e2859bf9c8d1f08ddadad5 >}}

Here our application is up and running:

```
user@user:~/Desktop/email-app$ ./gradlew run
> Task :run
Entering into 'main' thread
 __  __ _                                  _   
|  \/  (_) ___ _ __ ___  _ __   __ _ _   _| |_ 
| |\/| | |/ __| '__/ _ \| '_ \ / _` | | | | __|
| |  | | | (__| | | (_) | | | | (_| | |_| | |_ 
|_|  |_|_|\___|_|  \___/|_| |_|\__,_|\__,_|\__|
  Micronaut (v3.6.1)
02:27:57.053 [main] INFO  io.micronaut.runtime.Micronaut - Startup completed in 1644ms. Server Running: http://localhost:8081
Sending e-mail...
POST /send/2 is working on 'default-nioEventLoopGroup-3-5' thread
Exiting from 'main' thread
Sending e-mail...
POST /send/1 is working on 'default-nioEventLoopGroup-3-3' thread
```

In the terminal we can see

* First it returns “Entering into ‘main’ thread”, then it will keep doing its operation in the background.

Asynchronously our ‘MailController’ class starts and returns ‘Sending e-mail…’.

* Our “POST /send/2 is working on ‘default-nioEventLoopGroup-3–5’ thread”
* Then ‘main’ fun finished its operations and printed ‘Exiting from main thread’.

As we want to run all the functions asynchronously using Kotlin Coroutines, we’ll send both /mail/send/1 and /mail/send/2 requests at the same time. But due to their difference in operations or we can say in their sleep time /send/mail/2 sends email before /send/mail/1 does.

* Our “POST /send/1’ is working on ‘default-nioEventLoopGroup-3–3’ thread”.

Here we can see both of our POST methods are working on different threads and not using or blocking the main thread.


&nbsp;


In this blog, we covered about kotlin coroutines and how to send email using SendGrid with Micronaut and kotlin coroutines . For complete source code check out our Github Repository [here](https://github.com/scalereal/sendgrid-kotlin-email-app/tree/main).

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)

