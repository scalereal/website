---
title: Hello DataStore🤟, Bye SharedPreferences👋 — Android📱
description: In this article series, we’ll learn how to use the latest Android Jetpack 🚀 library i.e. DataStore in Android apps.
date:   2020-09-03
categories:
  - android
tags:
  - Android
  - AndroidDev
  - Kotlin
  - JetPack
  - Datastore
author: Shreyas Patil
image: /images/blog/banner/hello-datastore-bye-sharedpreferences-android.png
thumbnail: https://via.placeholder.com/150
url: android/2020/09/03/hello-datastore-bye-sharedpreferences-android.html
blog_place: banner
---

Welcome Android developers 👋. This article is the first part of a series article based on the new Jetpack library🚀 i.e. ***DataStore***🗄️. Currently, it’s alpha version is released. Let’s see ***what’s*** DataStore and ***why*** DataStore.

### What is DataStore 🤷‍♀️?

* Jetpack DataStore is a data storage solution.

* It allows us to store key-value pairs (like *SharedPreferences*) or typed objects with [protocol buffers](https://developers.google.com/protocol-buffers) *(We’ll see it in next article)*.

* DataStore uses Kotlin, Coroutines and Flow to store data synchronously with consistency and transaction support 😍.

* In short, it’s the new data storage solution which is the replacement of ***[SharedPreferences](https://developer.android.com/reference/kotlin/android/content/SharedPreferences).***

### Why DataStore **🤷‍♂**️

* First and my favourite reason 😃 — Built with❤️ Kotlin, Coroutines and Flow.

* If you have used SharedPreferences you might abuse or blamed it for something 😆 then DataStore is here to rescue!

* SharedPreference has some drawbacks like it provided synchronous APIs -but it’s not MAIN-thread-safe! whereas DataStore is safe to use in UI thread because it uses Dispatchers.IO under the hood👀.

* It’s safe from runtime exceptions!❌⚠️. What would be more satisfying that? 😅

* It also provides a way to migrate from SharedPreferences 😍.

* It provides *Type safety!* (Using Protocol buffers).

These are some reasons which encourage us to use DataStore and finally say goodbye to beloved SharedPreferences 👋.

### # That’s not only the reason —

DataStore provides two different types of implementations to store data.

* **Preference DataStore** - This uses key-value pairs to store data. But it doesn’t provide type-safety :

* **Proto DataStore** - It stores data as a custom type with specified schema using [Protocol Buffers](https://developers.google.com/protocol-buffers) *(We’ll see about it in the next article).*

I think that’s enough introduction to DataStore. It’s time to write some code👨‍💻😎.

## Let’s begin code 👨‍💻

You can simply [clone or refer this repository](https://github.com/PatilShreyas/DataStoreExample) to get example code demonstrating DataStore📁.

We’ll develop a sample Android application which stores a UI mode preference from user i.e. 🌞 *Light Mode* or 🌑 *Dark Mode*.

First of all, let’s add a Gradle dependency in build.gradle of your app module. Currently 1.0.0-alpha01 is the latest release. You can keep an eye [here](https://developer.android.com/topic/libraries/architecture/datastore) to get info about the latest version.

{{< gist PatilShreyas d55682b4a0daabc3b8114928956d7827>}}

### Start implementing DataStore 📁

* For UI mode preference i.e. Dark mode or Light mode, we’ll create an enum class as below

    enum class ***UiMode*** {
        *LIGHT*, *DARK*
    }

* We’ll create a class — SettingsManager where we’ll be managing setting preferences set by users in our app.

{{< gist PatilShreyas 130caebca15989f1469677fc23c2bb77  >}}

This will initialize the instancedataStore field by creating DataStore using the file name as *“settings_pref”. createDataStore()* is extension function created on Context.

* Now we’ll be storing UI mode preference using a key (as we managed in *SharedPreference*). Key in DataStore is created as below 👇

{{< gist PatilShreyas 24707dfd19c3adb45077015e61d7dee5  >}}

Here 👆 we’ve created a 🔑 KEY IS_DARK_MODE which will store a boolean value (*false for Light mode / true for Dark mode*). Because Preferences DataStore does not use a predefined schema, you must use Preferences.preferencesKey() to define a key for each value that you need to store in the DataStore<Preferences>.

* Now we’ll create a method which will set UI mode from our UI/Activity i.e. setUiMode() 🔧
> **Note:** Preferences DataStore provides a method edit() which transactional updates value in DataStore.

{{< gist PatilShreyas 07b91dd5061d887abf9651460958b514  >}}

* Now it’s time to get preference 🔥. DataStore provides data property which exposes the preference values using Flow. Means it’s time to leverage Flow 🌊 😍. See the code below 👇

{{< gist PatilShreyas 01cb982ebf00b2a847e0fe746c636ff7  >}}

👆 You can see we’ve exposed a Flow uiModeFlow which will emit values whenever preferences are edited/updated. If you remember, we have been storing boolean in our DataStore. Using map{}, we’re mapping boolean values to theUiMode i.e UiMode.LIGHT or UiMode.DARK.
> **Note:** DataStore throws IOException when it failed to read a value. So we have handled it by emitting emptyPreferences().

So that’s all about setting up DataStore 😃. Now let’s design UI.

### Setup Activity

In this activity, We have just an ImageButton which will have image resources i.e. 🌞 and 🌘 based on UI mode.

{{< gist PatilShreyas 79b624ef144515283e2fa3fc059cfa01  >}}

* In initViews() we’ll update preferences (UI Mode) on click of ImageButton.

{{< gist PatilShreyas db3aceb953c6cb759e63d3c240200f3f  >}}

* In observeUiPreferences(), we’ll observe DataStore UI Mode preference using a field which we exposed in SettingsManager which is a Flow 🌊 which will emit values whenever preferences are updated.

{{< gist PatilShreyas d206f4635213b9ea45e6a9643eb98630  >}}

👆 Here we’ve used **asLiveData()** flow extension function which gives emitted values from Flow in LiveData. *(Otherwise, we can also use lifecycleScope.launch{} here if you don’t like to use LiveData).*

* We’re just updating *image resource* and *background color of root layout* when UI mode is changed. *(Actual mode can be changed using AppCompatDelegate*.*setDefaultNightMode())*

{{< gist PatilShreyas d206f4635213b9ea45e6a9643eb98630  >}}

Yeah! That’s it 😃. It’s time to run this app 🚀. When you run this app, you’ll see it like 👇

![Example app demonstrating use of Jetpack **DataStore**](https://cdn-images-1.medium.com/max/2000/1*kP3g5Z8KThYf4SMZtkMtBw.gif)*Example app demonstrating use of Jetpack **DataStore***

Looking Awesome! 😍, isn’t it?

This is how we implemented Preferences DataStore instead of SharedPreferences.

So, DataStore is cool 🆒, isn’t it? Give it a try 😃. Since it’s currently in alpha, maybe many more is on the way to come 🛣️.

DataStore uses file management mechanism for storing data. But it’s different than managed in SharedPreferences. Now if you want to see how’s your data getting stored then using Android Studio’s *‘Device File Explorer’* you can go to */data/app/YOUR_APP_PACKAGE_NAME/files/datastore* and you can see the file there like below 👇.

![Device File Explorer Snapshot](https://cdn-images-1.medium.com/max/2000/1*W8HF6TyO4cpLrz998ymsUA.png)*Device File Explorer Snapshot*

But it’s content is not readable as you can see in below image 👇

![Data Store file](https://cdn-images-1.medium.com/max/2000/1*DNZE9KyQzaYlI75UBKvi8g.png)*Data Store file*

Let me know your valuable feedback about this article. 🙏

In the next article, we’ll see how to use ***Proto DataStore.***

Thank you! 😃

## Resources
[**PatilShreyas/DataStoreExample**
*Jetpack DataStore is a data storage solution. It allows us to store key-value pairs* (like SharedPreferences) or typed…github.com](https://github.com/PatilShreyas/DataStoreExample)
[**DataStore | Android Developers**
*Jetpack DataStore is a data storage solution that allows you to store key-value pairs or typed objects with protocol…developer.android.com]*(https://developer.android.com/topic/libraries/architecture/datastore)
