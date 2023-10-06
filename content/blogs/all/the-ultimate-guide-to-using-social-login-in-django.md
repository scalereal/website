---
title: The Ultimate Guide to Using Social Login in Django
description: In this article, we understand about The Ultimate Guide to Using Social Login in Django
date: 2022-12-22
categories:
  - backend
tags:
  - Celery
  - Django
  - Message Queue
  - Python
author: Akash Shrivastava
image: /images/blog/banner/the-ultimate-guide-to-using-social-login-in-django.webp
thumbnail: https://via.placeholder.com/150
url: backend/2022/12/22/the-ultimate-guide-to-using-social-login-in-django.html
---

Hey, there fellow Djangomers and Pythonistas,

At [ScaleReal](https://scalereal.com/), we work extensively on Python/Django Applications and have built many highly scalable applications for various clients of ours.

While working on such apps it’s very important to understand the ins and outs of social logins.

So, In this article, we’ll learn about Social Logins, why we need them, how it works & how to implement them in Django. So, let’s dive in!

**Here’s a list of everything which will be covered in this article:**

1. What is Social Login?
2. Why do we need it?
3. How does Social Login work?
4. Package for implementing social login
5. How to implement Google Social Login in your project?
6. How to implement Facebook Social Login in your project?


## What is Social Login? 🤔

A social login is a form of single sign-on using existing information from a social networking service such as Facebook, Twitter, or Google, to sign in to a third-party website instead of creating a new login account specifically for that website.

## Why do we need it?

![](https://miro.medium.com/v2/resize:fit:440/1*f19vQvrS0AEaengdhPmqGg.gif)

Social Login contributes to a more efficient form of user management. The concept of social login authentication involves creating a single sign-on for applications. This means that users can sign up for various applications or websites without repeatedly inputting their credentials.

The login credentials usually come from a social media platform like Twitter, Facebook, and more, which users can use to automatically input the required credentials. Thus, the process of user authentication will be cut short significantly for users.

## How does Social Login Work?

Social login is a simple process that can be done in just a few steps:

1. The user enters an app or site and selects their chosen social network. This usually takes the form of a social login button or “Sign in with [social platform]” links.
2. The social network provider receives a login request and authenticates the user. At this stage, users need to accept the access permissions of the app or site.
3. The user will get access to the site or app once the social provider has confirmed their identity.

![](https://miro.medium.com/v2/resize:fit:514/format:webp/1*m063j442Zm9IEObbeIObEw.png)_Sign in with social platform_

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*yIyJYS8-Y0gQezIz82zlSA.png)_Social Login Sequence Diagram_

If you’re new to OAuth or are hearing this term for the first time, then I recommend reading a bit about OAuth and then proceeding with this article so that you get a better understanding!

In a nutshell, OAuth is an open standard for access delegation, commonly used as a way for internet users to grant websites or applications access to their information on other websites but without giving them the passwords. You can read more about it in [this](https://auth0.com/intro-to-iam/what-is-oauth-2) article by auth0.

## Package for Implementing Social Login

For the scope of this article, we’ll be proceeding with [django-rest-framework-social-oauth2](https://github.com/RealmTeam/django-rest-framework-social-oauth2) package.

The aim of this package is to help set up social authentication for your REST API. It also helps set up your OAuth2 provider. Note that this package relies on [python-social-auth](https://python-social-auth.readthedocs.io/en/latest/) and [django-oauth-toolkit](https://python-social-auth.readthedocs.io/en/latest/).


## How to implement Google Social Login in your project?

1. Create Django App
2. Install the above-mentioned package using the following command pip install django-rest-framework-social-oauth2
3. Add the following to your INSTALLED_APPS in settings.py

{{< gist Akash1362000 cab7d180539094cc04d537ad4ebda2cb >}}

4. Include social auth URLs in urls.py

{{< gist Akash1362000 96a3c0f25e80def10482115b9a89715a >}}


5. Add these context processors to your TEMPLATES

{{< gist Akash1362000 2327634c0e29d8cb51616fb799f93a29 >}}

6. You can then enable the authentication classes for Django REST Framework by default or per view (add or update the REST_FRAMEWORK and AUTHENTICATION_BACKENDS entries in your settings.py)

{{< gist Akash1362000 d7cb6f6ce2fa50a87ecc358d0094f17c >}}

7. Setup a new application:

* Go to Django admin and add a new Application with the following configuration:
* client_id and client_secret should be left unchanged
* user should be your superuser
* redirect_uris should be left blank
* client_type should be set to public
* authorization_grant_type should be set to 'Resource owner password-based'
* name can be set to whatever you'd like


The basic installation is done, and you can now test the newly configured application.

### Testing the setup:

![](https://miro.medium.com/v2/resize:fit:640/1*9rLLv4uVrE2Vor-TsJd2xg.gif)

{{< gist Akash1362000 7a642a5db827eeaf80d69220e9ea6ff9 >}}

Now, to use Google OAuth2 as the authorization backend of your REST API, your settings.py file should look like this:

{{< gist Akash1362000 02c7026bf6099c499bbc79e7e7b0827c >}}

You can test these settings by running the following command:

```
curl -X POST -d “grant_type=convert_token&client_id=<django-oauth-generated-client_id>&client_secret=<django-oauth-generated-client_secret>&backend=google-oauth2&token=<google_token>” http://localhost:8000/auth/convert-token
```

This request returns an “ access_token” that you should use with every HTTP requests to your REST API. What is happening here is that we are converting a third-party access token (<user_access_token>) to an access token to use with your API and its clients (“access_token”). You should use this token on each and further communication between your system/application and your API to authenticate each request and avoid authenticating with Google every time.


![](https://miro.medium.com/v2/resize:fit:828/0*9pdpG2-f4wDHfNHI)

You can get the ID (SOCIAL_AUTH_GOOGLE_OAUTH2_KEY) and secret (SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET) of your app at Google Developer’s Console and more information on how to create one here. For testing purposes, you can use the access token <user_access_token> from OAuth Playground.

## How to implement Facebook Social Login in your project?

![](https://miro.medium.com/v2/resize:fit:828/0*fQ5Dn-imm6IZKxAl)

To use Facebook as the authorization backend of your REST API, your settings.pyfile should look like this:

{{< gist Akash1362000 f27de0c0a76d8e2bab41424b21a2896a >}}

You can test these settings by running the following command:

```
curl -X POST -d "grant_type=convert_token&client_id=<client_id>&client_secret=<client_secret>&backend=facebook&token=<facebook_token>" http://localhost:8000/auth/convert-token
```

You can get the ID (SOCIAL_AUTH_FACEBOOK_KEY) and secret (SOCIAL_AUTH_FACEBOOK_SECRET) of your app on Facebook Developer’s page. For testing purposes, you can use the access token <user_access_token> from [here](https://developers.facebook.com/tools/accesstoken/).

For more information on how to configure python-social-auth with Facebook visit the docs [here](https://python-social-auth.readthedocs.io/en/latest/backends/facebook.html).

## Other Social Login Providers

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*YbTVW_2-Jd7IVqOUcV65Vw.jpeg)

There are a bunch of Social Login providers which are supported by this package. It includes the most popular ones such as Twitter, Github, LinkedIn, Instagram, etc. You can find a complete list of social backends supported by this package and how to configure them in the [official documentation](https://python-social-auth.readthedocs.io/en/latest/backends/#social-backends).

&nbsp;

_**Bonus**: You can find the boilerplate code for this article in this repo. It contains basic configurations to get started with Google and Facebook Social Login._

That’s it from my side devs! 👨‍💻

&nbsp;

Thanks for reading! If you enjoyed reading this article, please click the 👏 button and share to help others find it! Feel free to leave a comment 💬 below. You can connect with me here!

Have feedback? Let’s connect here.

~Akash Shrivastava