---
title: Hello DataStore, Bye SharedPreferences👋 — Android📱 — Part 2
description: In this article series, we’ll learn how to use the Proto DataStore for storing type based objects. DataStore is the latest Android Jetpack 🚀 library which will replace SharedPreferences.
date:   2020-09-13
categories:
  - android
tags:
  - Android
  - AndroidDev
  - Kotlin
  - JetPack
  - Datastore
author: Shreyas Patil
image: /images/blog/banner/hello-datastore-bye-sharedpreferences-android-part-2-proto-datastore.png
thumbnail: https://via.placeholder.com/150
url: android/2020/09/03/hello-datastore-bye-sharedpreferences-android-part-2-proto-datastore.html
---

&nbsp;

Welcome Android Developers 👋. In [the previous article](https://medium.com/scalereal/hello-datastore-bye-sharedpreferences-android-f46c610b81d5), we saw how to use Preference DataStore to store key-value pairs. But it is not type-safe, Right? We’ll be covering that part in this article 😃. If you missed the previous article then you can read it 👇

&nbsp;
**Hello DataStore, Bye SharedPreferences👋 — Android📱 — Part 1: Preference DataStore**

In this article series, we’ll learn how to use the latest Android Jetpack 🚀 library i.e. DataStore in Android apps.medium.com(https://medium.com/scalereal/hello-datastore-bye-sharedpreferences-android-f46c610b81d5)

### What is Proto DataStore? 🤷‍♂

* It stores instances as custom data.

* Defines schema using [Protocol buffers](https://developers.google.com/protocol-buffers).

* They are faster, smaller, simpler, and less ambiguous than XML and other similar data formats.

That’s enough introduction for Proto DataStore to get started… It’s time to write some code👨‍💻😎.

## Let’s begin code 👨‍💻

You can simply [clone or refer this repository](https://github.com/PatilShreyas/DataStoreExample) to get example code demonstrating DataStore.

What we’ll be implementing? So we’ll be developing a *Food* app 😋 where a list of food items will be displayed and we’ll provide a filter to the user for food preference options. Like Food type as 🟢 ***VEG*** or 🔴 ***NON-VEG*** and Food taste as ***SWEET*** or ***SPICY*** 😋. So that user can filter his favourite food according to his choice. You can see a demo here. This is how it’ll be look alike👇.

![An example application using Proto DataStore](https://cdn-images-1.medium.com/max/2000/1*xJ45-Ix088ID-GNSCciCOg.gif)*An example application using Proto DataStore*

Ok great! You might have got the idea of this app. First of all, we’ll need to add some dependencies for proto DataStore 👇

### Add plugin and dependencies

Open build.gradle of your app module and add plugin at the top of the file and proto Datastore, Google Protobuf dependencies and then configure *protobuf*.

<iframe src="https://medium.com/media/17aaee4e8b184740acf0edc88fdfe163" frameborder=0></iframe>

As you have seen above, we’ll have a list of food items. So let’s create a model for Food

<iframe src="https://medium.com/media/5c5d11d207c10079cede47d52400e14e" frameborder=0></iframe>

Here we’ll also create another class i.e. UserFoodPreference which will be stored in DataStore. This model will be provided *(or exposed)* whenever preference is changed.

<iframe src="https://medium.com/media/773b85e2966723e87e8a607664e3c806" frameborder=0></iframe>
> As you can see 👆 We’ve kept field nullable which means if they’re null then we can assume that user hasn’t set any filter or preference for food.

### Define Protobuf

* Now we can’t directly store this model as it is using Proto DataStore. We’ll need to define a schema in a *proto* file.

* Create a new file called food_preference.proto in the path app/src/main/proto as following 👇 (*See [this](https://developers.google.com/protocol-buffers/docs/overview) for syntax guide*).

<iframe src="https://medium.com/media/674b1e8a9ae97cdefd313660a1f06515" frameborder=0></iframe>

As you can see 👆, we have created a schema in proto.
> Whenever a value is not specified then XXX_UNSPECIFIED will be the default value here.

Once you’re done with the above step, ***Rebuild*** your Gradle project. You’ll see that FoodPreference.java will be automatically generated from the above proto schema.

### Make Serializer for Proto class

You’ll need to create a serializer for your proto generated class. Because Proto DataStore requires serializer field which serializes/deserializes proto objects. You can create it as follows 👇

<iframe src="https://medium.com/media/91ba77d1c7afb5d7b5fb75541d04ead5" frameborder=0></iframe>

### Create Food Preference Manager

Great! Now we’ll set up our Food Preference Manager which will store user food preferences (where we’ll actually implement Proto DataStore). Create a new class — FoodPreferenceManager. Here you’ll need to provide a filename for DataStore as well as *serializer object for proto* which we created recently.

<iframe src="https://medium.com/media/541f4c91644cfa6f7999e66f6630b93d" frameborder=0></iframe>

Now we’ll create two functions for setting or changing preferences.

* **For Food type preference**

<iframe src="https://medium.com/media/34e57bc2c7bf57fcf0e3c016ed308ed5" frameborder=0></iframe>

* **For Food taste preference**

<iframe src="https://medium.com/media/b1e3aeac28428b738fc233a2af41fc08" frameborder=0></iframe>

As you can see in the above methods. We have mapped our FoodType or FoodTaste to the proto generated enums. That’s all about setting or changing preferences.

Now we’ll need to expose a Flow for observing user food preferences. We’ll map DataStore preferences to the data class which we earlier created i.e. UserFoodPreference.

<iframe src="https://medium.com/media/a036f2e9e3b602ec5acdc3a04076f304" frameborder=0></iframe>

That’s all about FoodPreferenceManager 😃. Now let’s implement it in our UI.

### Set up Activity

Here I’ll assume that you’re implementing this app with RecyclerView in Activity and you’ve implemented ViewModel for getting data i.e. list of food items from *Repository*. (For demo purposes, here I’ve created a sample DataSource which gives a dummy list of food items). *So I’ll directly show you implementation related to *DataStore*. You can refer to ***[this](https://github.com/PatilShreyas/DataStoreExample/blob/master/app/src/main/java/dev/shreyaspatil/datastore/example/proto/ProtoDatastoreActivity.kt)*** class for more information.*

So let’s make *Activity*

<iframe src="https://medium.com/media/f395020ce7c39b7448da8078a152f978" frameborder=0></iframe>
> **Note:** Here *foodListAdapter* is a *RecyclerView.Adapter*’s implementation

Now, whenever Chips are clicked by the user then preferences should be stored or updated in DataStore. So let’s do that 👇

<iframe src="https://medium.com/media/204baa1fb992ee8bb5801d6a2190bea2" frameborder=0></iframe>

Now we should be able to observe the changes in food preference so that we can filter the list accordingly. We already had exposed a Flow which gives us UserFoodPreference whenever it’s updated. So it’s time to use that 👀.

<iframe src="https://medium.com/media/1fe46765182b3d729d08f3111b666ad0" frameborder=0></iframe>
> **Note:** Here we have used asLiveData() extension function of Flow. Otherwise, we can also use lifecycleScope. This is generally useful when we’re actually implementing with ViewModel.

Now the implementation of *filterFoodList()* should look like follows 👇

<iframe src="https://medium.com/media/1c4a3db31aed032987e9144ae40e3701" frameborder=0></iframe>

Yeah! That’s it 😍. We have implemented Proto DataStore now. If you run the app, you’ll see the output as you have seen at the starting of this article 🚀.

So that was about Proto DataStore. I hope you enjoyed this article or liked it! 😃.

Thank you! 😃

## Resources
[**PatilShreyas/DataStoreExample**
*Jetpack DataStore is a data storage solution. It allows us to store key-value pairs (like SharedPreferences) or typed…*github.com](https://github.com/PatilShreyas/DataStoreExample)
[**Hello DataStore, Bye SharedPreferences👋 — Android📱 — Part 1: Preference DataStore**
*In this article series, we’ll learn how to use the latest Android Jetpack 🚀 library i.e. DataStore in Android apps.*medium.com](https://medium.com/scalereal/hello-datastore-bye-sharedpreferences-android-f46c610b81d5)
[**DataStore | Android Developers**
*Jetpack DataStore is a data storage solution that allows you to store key-value pairs or typed objects with protocol…*developer.android.com](https://developer.android.com/topic/libraries/architecture/datastore)
