---
title: Providing AssistedInject supported ViewModel for Composable using Hilt
description: Let’s inject 💉 ViewModels
date:   2021-06-29
categories:
  - android
tags:
  - Android
  - AndroidDev
  - Kotlin
  - JetPack
author: Shreyas Patil
image: /images/blog/banner/providing-assistedinject-supported-viewmodel-for-composable-using-hilt.webp
thumbnail: https://via.placeholder.com/150
url: android/2021/06/29/providing-assistedinject-supported-viewmodel-for-composable-using-hilt.html
---

Hey Androiders 👋, The hilt has reached stability and getting plenty of attention from the developers due to its simplicity and the feature it provides out of the box. After all, it’s a wrapper over Dagger which provides an easy interface for developers to focus more on the app development instead of DI bindings development 😄.

In this article, we’ll be seeing how you can obtain the instance of [**_ViewModel_**](https://developer.android.com/reference/android/arch/lifecycle/ViewModel) for usage in [**_Composable_**](https://developer.android.com/reference/kotlin/androidx/compose/runtime/Composable) screen which is supported by [**_AssistedInject_**](https://dagger.dev/dev-guide/assisted-injection.html). Let’s keep this article sweet and simple and let’s jump on to the main topic.

👀 Understand
-------------

This is how our ViewModel looks like.

{{< gist PatilShreyas b97d0a2a64549a7951eb9e340d69e4ba >}}

**_For those who might be new to hear about AssistedInject:_** The AssistedInject is a DI pattern that is used to construct an instance where some parameters can be provided at the runtime (_or the time of creation_).

For example, as you can see in the above snippet, the field `noteId` of a _constructor_ can be only provided at runtime (a.k.a _Assisted_). We have created `Factory` having fun `create()` which will take `noteId` as a parameter and will be responsible for returning `NoteDetailViewModel`. Then we have created a factory provider method `provideFactory()` which is providing `ViewModelProvider.Factory` and we implemented it to create an instance of our ViewModel. Also, we have installed it for `ActivityRetainedComponent` i.e. component that has the lifetime of a configuration surviving Activity.

If it’s implemented for Fragment/Activity, it’s so simple as the following:

{{< gist PatilShreyas fc1626bdc7dbeaa7947c1d0251a4f727 >}}


But in Jetpack Compose it’s different. We use nested `@Composable` functions and use the Navigation component for handling screens and Hilt’s `hiltNavGraphViewModel()` to obtain simple injected ViewModel instances.

{{< gist PatilShreyas baeafb0dc0a5ab83bad1ac70a40c6609 >}}

Let’s see how can we support Composable.

💡 Solution
------------

In the main Activity of our project, we’ll need to declare _EntryPoint_ interface(to be installed for `ActivityComponent`) which will provide `Factory` for creating `NoteDetailViewModel`.

{{< gist PatilShreyas 31f2747a8c0e31cdf4ecdcc4805eaef4 >}}

What is EntryPoint?
-------------------

An entry point is a boundary from which you can get Dagger-provided instances from code that cannot use Dagger to inject its dependencies. It is the point where code first enters into the graph of objects managed by Dagger.

You will need an entry point when interfacing with non-Dagger libraries or Android components that are not yet supported in Hilt and need to get access to Dagger instances. For e.g. _AssistedInject_ with _ViewModels_ is not yet supported by Hilt. Know more about EntryPoint [here](https://dagger.dev/hilt/entry-points.html).

Now question is how to get EntryPoint and factory from it? Let’s see.

{{< gist PatilShreyas f73ca835f0d0f0c0c5e88ad25461be26 >}}

[EntryPointAccessors](https://dagger.dev/api/latest/dagger/hilt/android/EntryPointAccessors.html) provided static utility methods for handling entry-points for standard Android components. As you can see above, we have used method `fromActivity()` which returns EntryPoint interface from Activity. Similar methods available like `fromFragment()`, `fromApplication()`, `fromView()`. Once we get Factory, we are instantiating our ViewModel with that Factory and assisted `noteId`.

Awesome! 😍 Now it’s simple to use it, right😄? Now just go to your navigation components and use this method to provide ViewModel to your `@Composable` screen as following:

{{< gist PatilShreyas 91a37cee2d5d94a08401596a4db67fd4 >}}

You can find the source code for the same implementation from the below references section.

That’s it! I hope you liked the article and found it helpful.

Thank you! 😃

📚 References:
---------------

[PatilShreyas/NotyKT](https://github.com/PatilShreyas/NotyKT/tree/master/noty-android)

[Hilt](https://dagger.dev/hilt/)

_Many thanks to_ [_Himanshu Singh_](https://himanshoe.com/) _for reviewing this article and making it better for you._
