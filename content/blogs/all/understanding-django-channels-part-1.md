---
title: Understanding Django Channels | Part 1
description: In this article, we understand Django Channels
date: 2023-01-13
categories:
  - backend
tags:
  - Google Maps
  - Geofence
  - React JS
  - Maps JavaScript API
author: Meet Patel
image: /images/blog/banner/understanding-django-channels-part-1.webp
thumbnail: https://via.placeholder.com/150
url: backend/2023/01/13/understanding-django-channels-part-1.html
---

Hello, Django Mavericks and PyNinjas I hope you are all doing well.

At [ScaleReal](https://scalereal.com/) we work extensively on Python/Django Applications and have built a lot of highly scalable applications for various clients of ours.

Have you ever wondered how to extend Django’s abilities beyond HTTP, such as WebSockets, chat protocols, IoT protocols, and more? No. Let’s explore!

![](https://media.tenor.com/UqWCMOzYp-0AAAAC/mr-cummings-psych-therapy.gif)

In this article, we’ll learn about some terminologies of Django Channels. In the second part of the blog, we will implement a channel.

> _The attached code snippets are for reference; don’t worry if you don’t understand them; we will explore them in the next part of the blog._

**Here’s a list of everything which will be covered in this article:**

1. What is Django Channel?
2. ASGI Server
3. Channel Layers
4. Groups
5. Consumer
6. Scope & Event
7. Routing


## What is Django Channel? 🤔

Django Channels is an open-source project that extends the capabilities of Django, the popular Python web framework, by adding support for real-time features such as WebSockets, MQTT (Message Queuing Telemetry Transport), chat protocols, IoT protocols, background tasks, and more. Channels are built as an ASGI server. It also allows you to choose how you write your code — synchronously in a style like Django views, fully asynchronously, or a mixture of both. It is easy to integrate Django’s authentication system, session system, and more

![](https://media.tenor.com/OR8n6C_TIlcAAAAd/oh-amazing-amazing-fred-pye.gif)

> _It is important to note that Django Channels is not a replacement for Django’s existing request/response model, but rather an additional layer that extends the capabilities of the framework._

![](https://miro.medium.com/v2/resize:fit:786/format:webp/1*nuYC-MgZAIcIwclWcrmnUA.png)

> _This diagram show how Request-response cycle for Django Channel works_

## ASGI server

Nowadays, the Django framework uses a Web Server Gateway Interface (WSGI) as an interface for Python applications to handle requests.However, to work with asynchronous applications, we need to use another interface, the Asynchronous Server Gateway Interface (ASGI), which can handle websocket requests as well.

We will have to use a server that employs this approach, and fortunately, Andrew Goodwin, the creator of Channels, has created a server called [Daphne](https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/daphne/#:~:text=Daphne%20is%20a%20pure%2DPython,the%20reference%20server%20for%20ASGI.) to handle this protocol.

> _Daphne already comes with Channels, so you won’t need to install it_

**Configuring ASGI Server**

_**Step 1 : Configure Settings.py**_

1. In settings.py, you will find the WSGI_APPLICATION. Comment it and add the below code.

{{< gist mr-meetpatel 85751d00ad8f2a5f6628847364235713 >}}

> Note : Make sure you replace project_name to your project name. For Eg : ASGI_APPLICATION = ‘djchannel.asgi.application’

2. Now , add “channels” to INSTALLED_APP

{{< gist mr-meetpatel 71823eef5d5ef71250d9ca777d387e99 >}}

_**Step 2: Configure asgi.py**_

In asgi.py, just add below mention code.

{{< gist mr-meetpatel 874b47a8952c7733febb80ff887d9700 >}}

**ProtocolTypeRouter**

> _ProtocolTypeRouter allows you to dispatch to one of several other ASGI applications based on the type value present in the scope. Protocols will define a fixed type value in their scope, so you can use this to differentiate between incoming connection types.~ By Django channels Documention._

![](https://media.tenor.com/SqD2xKy43LMAAAAC/what-why.gif)

ProtocolTypeRouter is a special type of router used by Django’s Channels that allows developers to redirect incoming requests to the appropriate view based on the type of request. This is useful for applications that need to support multiple protocol types, such as HTTP and WebSockets. The ProtocolTypeRouter allows developers to map each protocol type to its own viewset, thus allowing for a clean separation of concerns between the different protocols and helping developers to create a secure communication channel between the client and the server.

## Channel Layer

![](https://media.tenor.com/3rBKRUD8UNEAAAAC/layers-jackets.gif)

A channel layer is a mechanism that enables multiple instances of an application to communicate and exchange messages. Channel layers are typically used when constructing distributed applications, as they do not necessitate that all messages go through a database.A channel layer is a mechanism that enables multiple instances of an application to communicate and exchange messages. Channel layers are typically used when constructing distributed applications, as they do not necessitate that all messages go through a database.

## Groups

![](https://media.tenor.com/4TNisYn56hAAAAAC/aitana-ot.gif)

Django Channel has a built-in broadcast mechanism known as groups, which is very useful when you want to send the same message to multiple consumers, such as in a WhatsApp group, where messages are sent to all users of that group.


For example, if you’re building a chat application with Django Channels.

{{< gist mr-meetpatel 1e893e435962b8801b562cfb9fddf23b >}}

## Consumer

A consumer is a basic unit of the channel code. It is similar to a Django view; it consumes a series of events from the connection (e.g. WebSocket connections) and will process all events passed through this connection. It can be coded in both synchronous and asynchronous ways.

Consumer can do following things:

* Structure their code as a series of functions to be called whenever an event happens
* Write code in either a synchronous or asynchronous manner (known as SyncConsumer and AsyncConsumer, respectively).

> _Consumer written in a synchronous manner are known as SyncConsumer, and Consumer written in an asynchronous manner are known as AsyncConsumer. Note : Consumer is subclass of either SyncConsumer and AsyncConsumer_


{{< gist mr-meetpatel 33ac6f4a7d7d5f366f32fc821367908e >}}

{{< gist mr-meetpatel 764cb3855383f2d82f2b5b1c19a5d308 >}}

## Scope & Events

> _The first thing that comes to your mind by listening word “Scope” 🤣_

![](https://media.tenor.com/U2MFO7lfuB0AAAAd/8x-headshot.gif)

In Django Channels, scope is a set of key/value pairs which contain information about the current connection and its environment. Scope is an immutable mapping that contains metadata about the connection, such as the user who is accessing it, the channels that have been subscribed to, the type of protocol being used, and more

Scopes are part of the ASGI specification, and here are some common things you might want to use:

1. scope[“path”] : the path which is requested (HTTP and WebSocket);
2. scope[“headers”] : raw name/value header pairs from the request (HTTP and WebSocket).
3. scope[“method”] : the method name used for the request (HTTP).

If you enable things like Authentication, you’ll also be able to access the user object as scope[“user”], and the URLRouter, for example, will put captured groups from the URL into scope[“url_route”].

Events are actions for consumers.

example:-

http.request, http.response, chat.send_message, chat.received_message

## Routing

Channel provides routing class that allow you to combine and stack your consumers to dispatch based on what connection is .Routing is like Django URLs which pass requests to corresponding consumers.

{{< gist mr-meetpatel 09a67cebaa5b2ef43b9bce0111c6d9fa >}}


&nbsp;

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)