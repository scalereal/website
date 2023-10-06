---
title: Understanding Celery Part 1:- Why use Celery? and What is Celery?
description: In this article, we understand about Celery Part 1:- Why use Celery? and What is Celery?
date: 2022-12-14
categories:
  - backend
tags:
  - Celery
  - Django
  - Message Queue
  - Python
author: Nishant Handge
image: /images/blog/banner/understanding-celery-part-1-why-use-celery-and-what-is-celery.webp
thumbnail: https://via.placeholder.com/150
url: backend/2022/12/14/understanding-celery-part-1-why-use-celery-and-what-is-celery.html
---

**When someone says, “Use Celery to offload the time-consuming tasks”, have you ever thought that what exactly Celery does here to offload the tasks or how Celery works internally 🧐?**

I too wondered while working on one of our projects in Django at Scalereal, when we had to run some background tasks (Scheduling and Publishing blogs periodically using Medium, Hashnode, etc APIs) and we executed them using celery.

![](https://media.tenor.com/l-PbZelgds0AAAAC/favorite-facts.gif)

Out of that curiosity I read about what is Asynchronous Processing and how Celery works and got some basic level of understanding.

In this article, we will see Why do we need Celery? and What is Celery?

## Why do we need Celery 🤔?

### 1. Offloading Tasks

In order to serve the incoming requests our application server needs to be available. Consider, if our application server is also processing the time-consuming tasks Synchronously(wait until ready), it becomes unavailable to serve more incoming requests. To overcome this we can offload these tasks by moving them outside the main request-response cycle. Offloading the time-consuming tasks and executing them asynchronously, shorter the response time which eventually makes the user experience better.

> _The task which is not required to be completed before serving the response of the request is eligible or a candidate to be offloaded._

⭐ **Some examples of commonly offloaded tasks are,**
1. Sending emails
2. Processing images and videos
3. Data Analysis
4. Report Generation
5. Making Third-party requests

### 2. Running tasks at Schedule

Consider we have to run some code/task every day or every hour which is not included in the request-response cycle. Here Celery can make our life easy by making these tasks work at regular intervals. These tasks are executed by celery workers asynchronously(in the background) at the scheduled time.

⭐ **Some examples of scheduling tasks at particular intervals are,**
1. Send out trail period ending emails.
2. Regularly scrape a website and store results in the database.
3. Process a batch of data every night.
4. Report generation (creating PDF files).

_**Asynchronous what? have you noticed in both cases asynchronous was common? Let's deep dive into the concept of Asynchronous Processing.**_

## Asynchronous Processing 🔀

* Asynchronous processing is the opposite of Synchronous processing, as the client does not have to wait for a response after a request is made, and can continue other forms of processing.

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*Ahj1JKIKUPaUf_Gi81X_HQ.png)

* In synchronous processing, our client-server seamlessly executes the APIs in a synchronous HTTP request-response cycle. This request-response cycle is suitable for faster tasks that can be finished within milliseconds.

![](https://miro.medium.com/v2/resize:fit:750/format:webp/1*fGKVhjS6EnA3Wz5RgNTTmw.png)

* However, some time-consuming tasks take more than one or two seconds to execute and are ultimately too slow for synchronous execution.
* Also as I mentioned above(Running tasks at Schedule) there are other tasks that need to be executed in the future which can’t be included in synchronous processing.
* So, the best course of action is to move these tasks outside the execution request-response cycle.
* Simply we need to make sure that our web server notifies another program that certain tasks need to be processed at a later time.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*9_E32ryaJDUxUqyrs4TK7w.png)

* Now, instead of the time-consuming tasks running as a part of the actual web response, the processing runs separately so that the web application can respond quickly to the request.
* To achieve asynchronous processing, a middleman needs to be inserted between the client and the processing server to allow multiple separate processes to pass information to one another.
* The middle man can be called a message queue, which ingests the request messages and distributes them to the server based on the load the processing server can handle at any given moment.


## Message Queue 📂

* Message Queues manage the tasks that must be executed outside the usual HTTP request-response cycle.
* The message is the data to be sent from producer to consumer. Message queues don’t process message and simply stores them.
* We can consider the producer as a client application that produces messages on the basis of user interactions and the consumers are the services that can process the arriving messages.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*nOi7iVRUJzdeVxs3OFpN-g.png)

* So with the message queues, producers don’t have to wait for the consumers to become available and can add messages to the queue.

Also, consumers can process messages whenever they are available.
Eventually, there will be no overhead in waiting.


_Till now we got enough knowledge about Asynchronous Processing and all the related stuff. Now let's deep dive into the concept of Celery._

## What is Celery?

![](https://miro.medium.com/v2/resize:fit:600/format:webp/1*KGc-JPw3KVwqQ77fCMCT6Q.png)

> **As per the definition, Celery is a powerful, production-ready asynchronous job queue, which allows you to run time-consuming Python functions in the background. A Celery powered application can respond to user requests quickly, while long-running tasks are passed onto the queue.**

_Let's see its internal working and workflow._

**Internal Working**

* The internal working of Celery can be stated as the Producer/Consumer model as we discussed above.

* **Producer**

Producers are basically web services that handle web requests.
During the request processing, the time-taking tasks or the periodic tasks are pushed into the message queue.

* **Queue**

Celery communicates via messages, usually using a broker to mediate between clients and workers. To initiate a task the client adds a message to the queue(the broker) and then delivers that message to a worker. Here the queue can be referred to as Redis, RabbitMQ, or many other services supported by Celery.

* **Consumers**

Consumers are the worker nodes. The main difference between the web and worker is that web nodes receive requests from the internet and place tasks to be processed asynchronously in the queue and worker nodes are the machines that pick these tasks and execute them.


## Celery-Django Workflow 💡

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*LzfWmFtyGimZY8XXiGCXfg.png)

Here we can see the workflow of Celery and Django when the user sign’s up on the particular website and receives an onboarding email.

1. After receiving the client’s request the Django server enqueues a new task(python function to send email) in the Redis(an in-memory data store) which works as a message queue.
2. These tasks will not run on our main Django webserver. Instead, Celery will manage separate servers that can run the tasks simultaneously in the background.
3. The Celery worker picks up the task from the queue and executes it asynchronously which enables the web application to respond quickly to the request.
4. Whenever a new task arrives, one worker picks it up and processes it.
5. Hence celery decreased the performance load from web application by running the functionality of the Django server asynchronously.

_So far we have learned the need for Celery, Asynchronous processing, Message Queues, and what is Celery. In the next part, we will learn how to integrate Celery and Redis with Django and run tasks asynchronously._

&nbsp;

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)