---
title: Code Blocks Testing
description: test code blocks with different languages
date: 2025-09-30T11:18:00.000+05:30
author: Prathamesh Gunde
image: /images/blog/banner/class-components-vs-functional-components-in-reactjs.webp
url: test
---
```javascript
function greet(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
  }
}

const people = ["Alice", "Bob", "Charlie"];
greet(people);

function sum(a, b) {
  return a + b;
}

console.log("Sum of 2 and 3:", sum(2, 3));
```

```jsx
import React from 'react';

function App() {
  const names = ["Alice", "Bob", "Charlie"];
  return (
    <div>
      <h1>Greetings:</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>Hello, {name}!</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

```

```python
def greet(names):
    for name in names:
        print(f"Hello, {name}!")

people = ["Alice", "Bob", "Charlie"]
greet(people)

def add(a, b):
    return a + b

result = add(5, 7)
print("Sum of 5 and 7:", result)

```

```java
public class HelloWorld {
    public static void main(String[] args) {
        String[] names = {"Alice", "Bob", "Charlie"};
        for (String name : names) {
            System.out.println("Hello, " + name + "!");
        }

        int sum = add(5, 7);
        System.out.println("Sum of 5 and 7: " + sum);
    }

    public static int add(int a, int b) {
        return a + b;
    }
}

```

```jsonld
{
  "users": [
    {"name": "Alice", "age": 25, "active": true},
    {"name": "Bob", "age": 30, "active": false},
    {"name": "Charlie", "age": 22, "active": true}
  ],
  "settings": {
    "theme": "dark",
    "notifications": true,
    "version": "1.0.0"
  }
}

```

```xml
<users>
  <user>
    <name>Alice</name>
    <age>25</age>
    <active>true</active>
  </user>
  <user>
    <name>Bob</name>
    <age>30</age>
    <active>false</active>
  </user>
  <user>
    <name>Charlie</name>
    <age>22</age>
    <active>true</active>
  </user>
</users>
<settings>
  <theme>dark</theme>
  <notifications>true</notifications>
  <version>1.0.0</version>
</settings>

```
