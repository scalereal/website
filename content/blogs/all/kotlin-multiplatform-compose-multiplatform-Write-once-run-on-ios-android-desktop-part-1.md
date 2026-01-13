---
title: "Kotlin Multiplatform + Compose Multiplatform: Write Once, Run on iOS, Android & Desktop - Part 1"
description: >-
  A modern approach to shipping consistent apps across platforms. KMP allows you to write shared business logic once in Kotlin and use it across iOS, Android, and even backend systems.
categories:
  - mobile
keywords:
  - Kotlin Multiplatform for iOS Developers
  - Kotlin Multiplatform Mobile (KMP)
  - Compose Multiplatform
date: '2026-01-13'
tags:
  - Mobile
  - App
author: ScaleReal Team
image: '/images/blog/img_1768300126307_5576.png'
url: kotlin-multiplatform-compose-multiplatform-Write-once-run-on-ios-android-desktop-part-1
draft: false
---

If you’ve been building mobile apps for years, you’ve likely felt the pain:

duplicated codebases, duplicated bugs, repeated UI and repeated business logic.

Now imagine writing all of this **ONCE** and running it on:

- iOS
- Android
- Desktop (Windows/macOS/Linux)

and still getting native performance.

Welcome to **Kotlin Multiplatform (KMP)** + **Compose Multiplatform (CMP) **A modern approach to shipping consistent apps across platforms. KMP allows you to write **shared business logic once** in Kotlin and use it across iOS, Android, and even backend systems. The best part? You don’t need to rewrite your entire app, your app remains fully native.

In this post, I’ll walk you through why iOS developers should care about KMP, how to integrate it into your projects, and practical tips from my experience working with shared modules. By the end, you’ll understand how to reduce duplicated code, maintain consistency across platforms, and accelerate development.

![](https://miro.medium.com/v2/resize:fit:1400/1*-TQn0udxXpdCSBCBcxTPEQ.png)

[reference image from kotlin documentation](https://kotlinlang.org/docs/multiplatform/kmp-overview.html)

# **Why iOS Developers Should Care**

As iOS developers, we love Swift and SwiftUI and with good reason. But in a team with Android developers, we often find ourselves rewriting the same logic in Kotlin just to keep Android in sync. That’s where KMP shines: it lets **iOS developers leverage Kotlin without switching ecosystems**.

With KMP, you can:

- **Share network layer logic** (API calls, parsing, error handling)
- **Share business rules** (calculations, validations, algorithms)
- **Write tests once** for shared code and run them across platforms

> Pro Tip: Don’t worry about learning Kotlin fully. Basic Kotlin syntax and tooling knowledge are enough. You only share the parts that make sense mainly core logic.

# **How to Create a KMP + CMP App**

There are 2 ways:

### **1. JetBrains KMP Project Wizard**

[https://kmp.jetbrains.com/](https://kmp.jetbrains.com/)

Select (any of below / all of the below based on your requirement):

- Android
- iOS
- Desktop
- Web
- Server

Click **Download**, open in Android Studio, and run on any platform. You instantly get:

- A full working multiplatform project
- Shared UI in `commonMain`
- Platform folders for iOS/Android/Web/Desktop
- Build configs ready
- Sample screens

### **2. Create Manually from Android Studio**

```plain text
File → New → Kotlin Multiplatform → Select platform from list → finish
```

This generates:

> commonMain/ ← Shared UI + Logic

androidMain/

iosMain/

jvmMain/

jsMain/

You write shared UI + logic in `commonMain`, and each platform uses it natively.

# **Shared UI Examples**

Before going into complex networking, let’s start with simple shared UI components that work everywhere.

These examples live in **commonMain **→** kotlin **→** app.kt **and run on:

iOS, Android and Desktop

Example 1:

```plain text
@Composable
fun NameInput() {
    var name by remember { mutableStateOf("") }
    Column(modifier = Modifier.padding(20.dp)) {
        Text("Enter your name:")
        TextField(value = name, onValueChange = { name = it })
        Spacer(Modifier.height(12.dp))
        Text("Hello, $name")
    }
}
```

Example 2:

```plain text
@Composable
fun CounterExample() {
    var count by remember { mutableStateOf(0) }

    Column(
        modifier = Modifier.fillMaxSize().padding(20.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text("Count: $count")
        Spacer(Modifier.height(16.dp))
        Button(onClick = { count++ }) {
            Text("Increase")
        }
    }
}
```

# **Practical Use Case: Sharing the Network Layer**

One of the most common use cases for KMP is networking. Instead of rewriting API calls, you can write it once using **Ktor**:

```plain text
class ApiService {
    private val client = HttpClient()

    suspend fun fetchProducts(): List<Product> {
        val response: List<Product> = client.get("https://api.example.com/products")
        return response
    }
}
```

This example shows **the minimal KMP shared API call** and **how iOS uses it in Swift **and does not implement networking.** **It simply calls the **shared Kotlin API** using Swift async/await.

```plain text
Task {
    do {
        let products = try await ApiService().fetchProducts()
        print(products)
    } catch {
        print("Failed to fetch products: \(error)")
    }
}
```

For android,

```plain text
LaunchedEffect(Unit) {
    try {
        val products = ApiService().fetchProducts()
        println(products)
    } catch (e: Exception) {
        println("Failed: $e")
    }
}
```

For Desktop,

```plain text
fun main() = runBlocking {
    try {
        val products = ApiService().fetchProducts()
        println(products)
    } catch (e: Exception) {
        println("Failed to fetch products: $e")
    }
}
```

All platforms call the same KMP function:

```plain text
ApiService().fetchProducts()
```

You get:

- One API implementation
- Shared models
- Consistent error handling
- Faster development

> Pro Tip: Start with small modules like networking or business logic. Avoid moving complex UI or platform-specific features to KMP.

# **Tips & Lessons from Real Experience**

- Start small share only core logic first.
- Keep platform-specific code clean (UI, gestures, storage).
- Write unit tests in the shared module.
- Coroutines and Swift async/await work together nicely, but you still need to make sure they run on the right thread.
- Don’t over-engineer share what truly makes sense.

# **When to Use KMP (and When Not To)**

**Use KMP for:**

- Business logic
- Networking
- Validation
- Shared ViewModels
- Reducing duplication

**Avoid KMP for:**

- Complex UI
- Camera/AR/HealthKit/CoreML
- Highly platform-specific features
- Performance-critical native modules

# **Conclusion**

Kotlin Multiplatform is a game-changer for iOS developers who want **shared code without compromising native quality**. Even integrating **just a few core modules** can save hours of duplicated work, simplify testing, and make your team more productive.

Start small, write unit tests, and focus on sharing logic not UI. The ecosystem is growing fast, tooling is improving, and the payoff for teams building both iOS and Android apps can be huge.

# **What’s Next?**

**Part 2: Real-World Example — API integration with KMP + Firebase + SwiftUI/Android/Desktop**

In Part 2, we’ll build a **real working app** that:

- Fetches products using KMP
- Stores data in Firebase
- Uses shared ViewModels
- Runs on iOS, Android & Desktop
- Shows how each platform consumes the shared code

**Part 1 was the foundation. Part 2 is where everything becomes practical.**