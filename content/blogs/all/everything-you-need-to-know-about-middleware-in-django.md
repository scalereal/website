---
title: Everything you need to know about Middleware in Django!
description: In this article, we discuss how to create middleware in Django.
date:   2021-07-15
categories:
  - backend
tags:
  - backend
  - Django
author: Akash Shrivastava
image: /images/blog/banner/everything-you-need-to-know-about-middleware-in-django.webp
thumbnail: https://via.placeholder.com/150
url: backend/2021/07/15/everything-you-need-to-know-about-middleware-in-django.html
---

Hey, there fellow Djangomers and Pythonistas,

At [ScaleReal](https://scalereal.com) we work extensively on Python/Django Applications and have built a lot of highly scalable applications for various clients of ours.

While working on such apps it’s very important to understand the ins and outs of Django’s middleware workings.

So, In this article, we’ll learn about Middleware in Django, why to use them, how it works & how to create custom middleware in Django. So, let’s dive in!

Here’s a list of everything which will be covered in this article:
------------------------------------------------------------------

1.  _What is Middleware in Django?_

2. _How does Middleware work?_

3. _What are the types of Middleware?_

4. _How to write a custom Middleware in Django?_

5. _Things to remember when using middleware_

1\. What is Middleware in Django?
---------------------------------

**In Layman terms 👨‍💼**, a Middleware is something which acts as a bridge between two parts of a program or the system that enables communication between them. **In technical terms 👨‍💻,** Middleware is a framework of hooks into Django’s request/response processing. It’s a light, low-level “**plugin**” system for globally altering Django’s input or output. Each middleware component is responsible for doing some specific function.

2\. How does Middleware work? 🤔
------------------------------------

When a user makes a request from your application, a WSGI handler is instantiated, which handles the following things:

*   Imports project’s `settings.py` file and Django exception classes.
*   Loads all the middleware classes which are written in `MIDDLEWARE` tuple located in `settings.py` file
*   Builds list of methods which handle processing of request, view, response & exception.
*   Loops through the request methods in order.
*   Resolves the requested URL
*   Loops through each of the view processing methods
*   Calls the view function
*   Processes exception methods (if any)
*   Loops through each of the response methods in the reverse order from request middleware.
*   Builds a return value and makes a call to the callback function.

![](https://miro.medium.com/max/1204/1\*CrgbKz0w7yio7i4LaykOJg.png)*Working of Middleware ⬇⬆*

3\. What are the types of Middleware?
-------------------------------------

There are two types of Middleware in Django:

*   Built-in Middleware
*   Custom Middleware

**Built-in Middleware** are provided by default in Django when you create your project. You can check the default Middleware in `settings.py` file of your project.
{{< gist Akash1362000 da8644e5c563cf619fd2bd66bf412df3 >}}

**Custom Middleware** — You can write your own middleware which can be used throughout your project. Let’s see how we can do that!

4\. How to write a custom Middleware in Django? ✍
-------------------------------------------------

*   Create a python package (a folder with `__init__.py` inside) named as `middleware`
*   Create a file named `custom_middleware.py` (or anything which you like) and a regular Python function / class in it.
*   You can write middleware as a function or as a class whose instances are callable.

Function based Middleware:
------------------------------

{{< gist Akash1362000 7b547e5e2283d88994b779f1c2585694 >}}


Class based Middleware:
---------------------------

{{< gist Akash1362000 ea1effe5f4bac4b531d5ab484814ee24 >}}

Now the final step will be to add your custom middleware in `MIDDLEWARE` List in `settings.py` file

{{< gist Akash1362000 11a77d4da92612b03eeea2bc9a4cf386 >}}

All set ✔ Now you can use your custom middleware easily 😁

Further, let’s understand the special methods of class-based middleware:
-------------------------------------------------------------------------

*   **process\_request**: The request object will be created while Django goes through process\_request method in each middleware. After that, it resolves which view to be called soon after the request object is created with the help of `ROOT_URLCONF` key in settings file.
*   **process\_view(request, view\_func, view\_args, view\_kwargs):** `request` is the HttpRequest object and `view_func` is the function that is being called. It will be called just before calling the view.
*   **process\_response**: The response will be the final output Django will process after executing the `process_response` method in each middleware which will be HttpResponse object.
*   **process\_template\_response(request, response)**: `request` is an HttpRequest object. `response` is the TemplateResponse object (or equivalent) returned by a Django view or by a middleware.
*   **process\_exception(request, exception)**: `request` is an HttpRequest object. `exception` is an Exception object raised by the view function. This method is called when the view raises an exception.

5\. Things to remember when using middleware:
-------------------------------------------------

*   Order of middleware is important.
*   A middleware only need to extend from class object.
*   A middleware is free to implement some of the methods and not implement other methods.
*   A middleware may implement `process_request` but may not implement `process_response` and `process_view`.

That’s it from my side devs! 👨‍💻

_Thanks for reading! If you enjoyed reading this article, please_ **_click the 👏 button and share to help others find it!_** _Feel free to leave a comment 💬 below. You can connect with me on_ [_GitHub_](https://github.com/Akash1362000)_,_ [_LinkedIn_](https://www.linkedin.com/in/akash136/), [_Twitter_](https://twitter.com/shrivastava136)_._

Have feedback? Let’s connect [_here_](https://www.linkedin.com/in/akash136/).

_~Akash Shrivastava_
