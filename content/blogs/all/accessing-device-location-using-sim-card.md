---
title: 🕵️Accessing device location using SIM Card 🗺️
description: In this article, we’ll see how to access device location using the SIM card in Android without using GPS or location service
date: 2020-07-28
categories:
  - android
tags:
  - Android
  - Netwoking
  - Location
  - Kotlin
  - Android Developement
author: Shreyas Patil
image: /images/blog/banner/accessing-device-location-using-sim-card.webp
thumbnail: https://via.placeholder.com/150
url: android/2020/07/28/accessing-device-location-using-sim-card.html
---
These days, almost many apps use the device location📍. There might be some use case in your app which is strongly dependent on the user’s location. *For example*, if you have developed a *social* app 💬 which shows posts of users and imagine you’ve feature which shows trending posts in *user’s **nearby area**. For such use case, you’ll get user’s device location and after some *processing*, you’ll be able to manage this feature for your *cool* app.

But wait… 🤔

### What if your app user’s enabled Mock location? 😮

If your *cool* app users have enabled mock locations then your feature will not work as expected. If the user is currently at *Mumbai, India* and he enabled mock location and showing his location at *Beijing, China* 😩 then that Indian user will see useless Chinese content in the app. Your *cool* app’s cool feature won’t work as expected 😢

![Alt Text](https://media.giphy.com/media/4NcWXIu0VOgtNeynJ1/giphy.gif)

### Then is there any solution? 🤷‍♀️

Yes😃, for such use case you won’t need user’s perfect location. Just area/city level location is enough for such use case. You can get user’s *cell tower* location by extracting the SIM card📡 details from the user’s device.

The famous app *TikTok app* extracts SIM Card📶 details and fetches the user’s location for the perfect updates and avoiding spoofing of location.

### How did we come up with this Idea? 💡

We at [ScaleReal](http://scalereal.com) were developing a product which was heavily dependent on the user’s location and we thought *“What if GPS location isn’t available due to conditions like device failure or bad weather or if user provides fake location”* 🤔. We thoroughly studied these scenarios with all aspects 🧐 and came with the solution of using SIM card details to extract at least the *cell tower location* of the user. This solution helped us to pinpoint the user's location using *cell tower triangulation* and the results were even better when we wrote a custom algorithm on top of these two. In turn a ***better*** product! 😄

*In this article, we’ll learn to access the device’s cell tower location by extracting SIM Card details from the device. So let’s start implementation.*
> **Note:** GPS is not involved in this process. So doesn’t matter if it’s enabled or disabled!

<iframe src="https://medium.com/media/ceb4fd2380af661521a6e88c61bea3a3" frameborder=0></iframe>

## Let’s Start 🚀

First of all, we’ll need to get API for accessing Geolocation information. I’ve seen two APIs for such use case🤔.

* [Google’s Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview) — This API is good to go with but requires a billing account to be enabled for your project🤑.

* [Unwiredlabs OpenCellID](https://opencellid.org/) — This API is amazing and easy to use and the world’s largest open database of cell towers😍. *(We’re using this API for geolocation)*

Just go to above link and *Sign Up your account* and you’ll get *API key*. See API documentation [here](https://unwiredlabs.com/api#documentation) for more details about accessing API.

### How API Works?🤔

From your app, you just have to send this data payload to API:

![[API Spec for Geolocation(Unwiredlabs)](https://unwiredlabs.com/api#documentation)](https://cdn-images-1.medium.com/max/2000/1*7Ba9hGALY4EXDPznFiDJ5A.png)*[API Spec for Geolocation(Unwiredlabs)](https://unwiredlabs.com/api#documentation)*

Let’s understand these parameters:

* radio — Network type. For e.g. GSM, LTE, etc

* mcc — *Mobile Country Code* used to identify the country which a mobile subscriber belongs to.

* mnc — Used to uniquely identify a mobile subscribers **network** the **MCC** is combined with a Mobile **Network** Code.

* lac — Location Area Code

* cid — Cell ID

When you request API with above details, you’ll get a response from API as below👇.

![[API Spec for Geolocation(Unwiredlabs)](https://unwiredlabs.com/api#documentation)](https://cdn-images-1.medium.com/max/2168/1*HYgnjLaL1ZgJCYW7jYOGxA.png)*[API Spec for Geolocation(Unwiredlabs)](https://unwiredlabs.com/api#documentation)*

That’s the main thing!

I hope now you have API key with you so let’s proceed to implementation🚀.

## Getting Started 💻

* Open Android Studio

* Create a new project or you can simply clone or import [this](https://github.com/PatilShreyas/CellLocationFind-Android) project.

### Make Request model

Request model will be used to request API with data payload. This will include ***network details of the device***. Here’s you can see how our request model will look like 👇

{{< gist PatilShreyas 574b24f32b4cca63359fff3497247108 >}}

### Make Response model

We’ll get a response from API and for that, we’ll have to make response model as below.

{{< gist PatilShreyas 48105dc35dde136a9e818548bc769770 >}}

So now we have to make a service which will communicate with API which will look like as below 👇

{{< gist PatilShreyas 3d93de20e53370751ddd8566e394f634 >}}

> We have used Retrofit in this app. I’ll not show the whole implementation of it here. For that, you can refer app source code for implementation details. You can that here we’ve implemented **ViewModel** and **Activity** which is now able to communicate with API.

### Remember one thing! 🤨

For accessing the device’s network information you’ll need to include below permission in your app’s Manifest.

    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

### Getting network Details 📶

Here the main thing is how to get *Network details* from the device. Here we have created a method getCurrentCellInfo() as below 👇 which will help us to extract proper network details.

{{< gist PatilShreyas e503d4cb5109db030e59f6e6fa54fc9e >}}

As you can see in the above code, for extracting network details, we need to check whether network type is *GSM, CDMA or LTE.*

We’ll need to create a method getCellInfo() for every network type. For example, the below method is created for GSM type 👇

{{< gist PatilShreyas 1295b3f4a61fd3368646f9e07dd7594e >}}

The same method can be repeated for other network types.

Okay! By this, we’ve completed the **main** part of the application✨. As you can see, we ***haven’t used GPS or location service*** in this app.

Now just send this information along as data payload to the API and you’ll get a *response* which will include *location* details 🔥.

Okay😃. Now let’s run this app🚀. You’ll see like this… 👇

![App Preview (Cell Location Finder)](https://cdn-images-1.medium.com/max/2000/1*tS02gfmxsNXNumJBhuofNQ.gif)*App Preview (Cell Location Finder)*

Yeah!😍 Our app is working as expected 🚣. That’s all.

I hope you liked this article 😃.

<iframe src="https://medium.com/media/362aa11e604ab52b28bd7c1c829ff6be" frameborder=0></iframe>
> # Thank you! 😃
> # *Sharing is caring!*

## Resources

* GitHub Repository
[**PatilShreyas/CellLocationFind-Android**
Contribute to PatilShreyas/CellLocationFind-Android development by creating an account on GitHub.github.com](https://github.com/PatilShreyas/CellLocationFind-Android)

* [Unwiredlabs OpenCelliD](https://opencellid.org/)

* [Unwiredlabs API Documentation](https://unwiredlabs.com/api#documentation)

This article was originally published [here](https://blog.shreyaspatil.dev/accessing-device-location-using-sim-card-without-gps) at [*https://blog.shreyaspatil.dev/*](https://blog.shreyaspatil.dev/)
