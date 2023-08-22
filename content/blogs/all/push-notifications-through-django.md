---
title: Push Notifications through Django
description: In this article, we’ll learn about Push Notifications, why to use them, how it works and how to send Push Notifications to Android and iOS devices.
date: 2022-09-28
categories:
  - mobile
tags:
  - Django
  - Firebase
  - Android
  - Backend 
  - Pushnotificationsfirebase
author: Akash Shrivastava
image: /images/blog/banner/push-notifications-through-django.webp
thumbnail: https://via.placeholder.com/150
url: android/2022/09/28/push-notifications-through-django.html
---

Hey, there fellow Djangomers and Pythonistas,

At [ScaleReal](https://scalereal.com/) we work extensively on Python/Django Applications and have built a lot of highly scalable applications for various clients of ours.

While working on such apps it’s very important to understand the ins and outs of sending Push Notifications through Django 🔔

So, In this article, we’ll learn about Push Notifications, why to use them, how it works and how to send Push Notifications to Android and iOS devices. So, let’s dive in!

## Here’s a list of everything which will be covered in this article:

1. _What are Push Notifications?_
2. _Types of Push Notifications_
3. _Why use them?_
4. _How does it work?_
5. _How to use it in your own project?_

## What are Push Notifications?

![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWt1cHo0N21nNDhzNGJpcWhwZHY2b3lkN2w5Ymw2aHNwZThyN3FheCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DpNOlWx7F77IG9stWa/giphy.gif)_That’s how Firebase pushes a notification to our devices 😂_

_Push notifications_ at their core are simply a way of alerting users to the information they have opted-in to from apps and services. It’s basically a message that appears on a smartphone. It can only be received by people who have the app installed on their phones. Also, they must have push notifications enabled in order to receive the notifications.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*P65Rt7ubDu9JTwOAWF6LVQ.png)_Example of a Push Notification_

## Why use Push Notifications? 🤔

- Push notifications allow you to engage users outside your app
- If used correctly, push notifications can create a far more loyal and active customer base
- The key is not to over-message and only deliver relevant content

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*m01xvrOhMdvZM7o6gd3DrQ.png)

## Top Push Notification Service Providers:

- [Google Firebase](https://firebase.google.com/products/in-app-messaging/)
- [OneSignal](https://onesignal.com/)
- [LeanPlum](https://www.leanplum.com/)
- [Pushbots](https://pushbots.com/)
- [PushCrew](https://vwo.com/engage/?ref=pc)
- [Airship](https://www.airship.com/)
- [CataPush](https://www.catapush.com/)
- [PushAlert](https://pushalert.co/)

For the scope of this article, we’ll be proceeding with Google Firebase

## Why use Firebase Push Notifications? 🔥

- Free to use
- Easy to setup
- Send messages to any device
- Advanced message targeting
- A/B test notifications
- Backed by Google

## How do Firebase Push Notifications work? 🤨

**Alternatively Firebase Cloud Messaging (FCM)**

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXhhYnpjdDhlenJxdmQzZnc5dmJyZmRxZnp3dTJpa3o0amhnYWJwbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kQOxxwjjuTB7O/giphy.gif)

An FCM implementation includes two main components for sending and receiving:

1. A trusted environment such as Cloud Functions for Firebase or an app server on which to build, target, and send messages.

2. An Apple, Android, or web (JavaScript) client app that receives messages via the corresponding platform-specific transport service.

You can send messages via the [Firebase Admin SDK](https://firebase.google.com/docs/cloud-messaging/server#firebase-admin-sdk-for-fcm) or the [FCM server protocols](https://firebase.google.com/docs/cloud-messaging/server#choose). You can use the [Notifications composer](https://console.firebase.google.com/project/_/notification?pli=1) for testing and to send marketing or engagement messages using powerful built-in targeting and analytics or custom [imported segments](https://firebase.google.com/docs/projects/import-segments).

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*Ok5LULLSPaZMEAd10V-KWg.png)

## How to set up an FCM project? 👨‍💻

Set up Firebase and FCM on your app according to the setup instructions for your platform.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*I0vzoO4YJLMZ_dzrpulSyA.png)

### Develop your client app:

Add message handling, topic subscription logic, or other optional features to your client app. During the development, you can easily send test messages from the [Notifications composer](https://console.firebase.google.com/project/_/notification).

**You can connect your Android app to Firebase using one of the following options:**

- [Option1](https://firebase.google.com/docs/android/setup#console): Use the Firebase console-setup workflow.
- [Option2](https://firebase.google.com/docs/android/setup#assistant): Use the Android Studio Firebase Assistant (may require additional configuration).

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*CLVwTQmtYm5xDcTy9JBEVQ.png)

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*8_o-7GZtreJhZgysS-Jtsw.png)

By sending a test push notification to our newly created Android App, we can ensure that the Firebase console-setup workflow is done correctly.

### Develop your app server:

Decide whether you want to use the Firebase Admin SDK or one of the server protocols to create your sending logic — logic to authenticate, build send requests, handle responses, and so on. Then build out the logic in your trusted environment. Note that if you want to use upstream messaging from your client applications, you must use XMPP, and that Cloud Function does not support the persistent connection required by XMPP.

## Next steps

- Run the [Android](https://github.com/firebase/quickstart-android/tree/master/messaging) or [iOS](https://github.com/firebase/quickstart-ios/tree/master/messaging/) Quickstart sample. These samples let you run and review code to send a test message to a single device using the Firebase console.
- Try the tutorials for [Android](https://firebase.google.com/docs/cloud-messaging/android/first-message) or [iOS](https://firebase.google.com/docs/cloud-messaging/ios/first-message).
- Add Firebase Cloud Messaging to your [Android](https://firebase.google.com/docs/cloud-messaging/android/client), [Apple](https://firebase.google.com/docs/cloud-messaging/ios/client), or [Web](https://firebase.google.com/docs/cloud-messaging/js/client) app.
- Set up your trusted environment where you’ll build and send message requests. You can write sending logic using the [Admin SDK](https://firebase.google.com/docs/cloud-messaging/server#firebase-admin-sdk-for-fcm), and readily deploy that code on Cloud Functions for Firebase or other cloud environments managed by Google. Alternatively, you can perform server development using the [FCM server protocols](https://firebase.google.com/docs/cloud-messaging/server#choose).
- Learn more about sending data payloads, setting message priority, and other [messaging options](https://firebase.google.com/docs/cloud-messaging/concept-options) that are available with FCM.
- Migrate your existing [Android](https://developers.google.com/cloud-messaging) or [Apple](https://developers.google.com/cloud-messaging) GCM implementation to use Firebase Cloud Messaging.


## How to Develop your App Server

![](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDcyaGtyNGk2aDg1aWE0Y3RxbGYzcTRza25oeXRrYTkyenZzMjU0dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ule4vhcY1xEKQ/giphy.gif)_Meow inspiring us to code our server 😹_

- Create Django App
- Install the following package [django-push-notifications](https://github.com/jazzband/django-push-notifications)
- Add secrets to your **settings.py** file
- Run **manage.py migrate** command to apply migrations provided by the package.

## Configurations to be added in settings.py

{{< gist Akash1362000 b1c16ad236444706e38cd75c6da7f23d >}}

- ```FCM_API_KEY```: Your API key for Firebase Cloud Messaging (You can find it in Project Settings -> Cloud Messaging).
- ```APNS_CERTIFICATE```: Absolute path to your APNS certificate file. Certificates with passphrases are not supported. If the iOS application was built with the "Release" flag, you need to use a production certificate, otherwise, debug. Read more about the [Generation of an APNS PEM file](https://github.com/jazzband/django-push-notifications/blob/master/docs/APNS.rst).

## Server logic for sending data to FCM via package:

{{< gist Akash1362000 a9d5b2ed784bdd01e910eda90ebb8415 >}}

Once the server logic is in place, you can trigger push notifications at any desired event you wish to. And with this, you have successfully set up and configured your backend 💥

![](https://giphy.com/static/img/gif-404.gif)

## Sending Push Notifications via Postman 🚀

- POST request to https://fcm.googleapis.com/fcm/send
- Add ```“Authorization : key=SERVER_KEY_OBTAINED_FROM_FIREBASE” & “Content-Type : application/json”``` in request headers

{{< gist Akash1362000 6d2d70ecc9f94955c9cf74328b18af43 >}}

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*A5Irslzk8JgDR615-ILO-w.png)

## Limitattions

- FCM limits push notification payload size to 4096 bytes, so needs to stay within the size limits.
- **Notification Throttling** — Can send up to 240 messages/minute and 5,000 messages/hour to a single device. Read more about it [here](https://firebase.google.com/docs/cloud-messaging/concept-options#throttling-and-scaling)

&nbsp;

That’s it from my side devs! 👨‍💻

&nbsp;

_Thanks for reading! If you enjoyed reading this article, please **click the 👏 button and share to help others find it!** Feel free to leave a comment 💬 below. You can connect with me [here](https://linktr.ee/Akash_Shrivastava)!_

Have feedback? Let’s connect [here](https://www.linkedin.com/in/akash136/?original_referer=https%3A%2F%2Fmedium.com%2Fscalereal%2Fpush-notifications-through-django-db528c303b91).

_~Akash Shrivastava_