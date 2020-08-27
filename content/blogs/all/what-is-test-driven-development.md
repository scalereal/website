---
title:  What is Test Driven Development (TDD)?
# description: Why Test? How does it help me?
date:   2020-01-30
categories:
  - backend
tags:
  - ruby
  - TDD
author: Sandesh Bodake
image: https://miro.medium.com/max/2000/0*ijzQQ91fDcwy-CTo
thumbnail: https://via.placeholder.com/150

excerpt:
  Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another...
url: devops/2020/01/30/What-is-test-driven-development-(TDD)?
---

## Why Test?

Writing tests is all about making sure that the code you write is working as expected and you did not break anything while adding new features or refactoring your code.

Automation is an integral part of software development then why should we continue doing manual tests again and again with chances of missing out on some test scenarios that are important. Instead, let the robots do the boring tasks for you.

If you have written a test suit, and the test suit passes, you can be confident that you are entire application behaves as expected.

## Test Driven Development (TDD)

Tests are likely the best way to achieve confidence in the growing codebase. To amplify that confidence and achieve bigger wins in time-saving and code cleanliness we recommended writing code using a process **TDD.**

TDD is a process that uses tests to *drive* the design and *development* of your application. It begins with a development cycle called **Red, Green, Refactor.**

**Red, Green, Refactor**

![**Red, Green, Refactor flow**](https://cdn-images-1.medium.com/max/2000/1*iMXiMJEumWYW4do0JSi6Vw.png)***Red, Green, Refactor flow***

Let’s take an example to understand the red, green and refactor flow

For e.g. Imagine you want to create a function **sort_array()** that can sort an array in ascending order

## Red

*Think about what you want to develop.*

You don’t have to know what your code will look like at this point, you have to know what it will do. Write a test that covers your functionality you would like to implement, you should see it fail.

**INPUT:** [34, 3, 12, 2]

**OUTPUT:** [2, 3, 12, 34]

{{< gist sandeshbodake 2054e08819f52c40bcd937da11677016 >}}

When you run the test you will see an error like this.

![](https://cdn-images-1.medium.com/max/3124/1*lPZA7fPvhR753vkXj-TeuQ.png)

## Green

*Think about how to make your tests pass*

Now time to resolve the failing tests step by step, read the error message from the failing test and write code that will fix the current error.

{{< gist sandeshbodake bd68dfcbdffc70d83f1c41c7faf4f726 >}}

After implementing the **sort_array()** function, we should see a passing tests message that looks like following.

![](https://cdn-images-1.medium.com/max/2800/1*jVu_i0gtf0CK8UsZ1aqJ_Q.png)

## Refactor

*Think about how to improve your existing implementation*

{{< gist sandeshbodake 8601b8a400f3c7865c0a68406ac7012d >}}

<iframe src="https://medium.com/media/78bbd4af501f2e8c9ca0213e44ce471c" frameborder=0></iframe>

If we write another test case to sort an array, we should see failing second test message that looks like following.

![](https://cdn-images-1.medium.com/max/3740/1*MvOn1naPRHxgtfL6K_YyNg.png)

Again ***Red,***

The expected result does not match the actual result we are getting …

    expected: [3, 8, 21, 99]
         got: [2, 3, 12, 34]

This is because we are returning first sorted array not caring for other examples(not implemented any sorting algorithm). Take a moment to think about how to approach refactoring **sort_array()** function. write code for sort an array in ascending order.

{{< gist sandeshbodake 0ba2e820130dbc8521f2e82e88760ecf >}}

Now if you run ***rspec*** again you will see our both test cases are passing

As we refactor **sort_array()**, When we complete our refactoring process and run our suite again, we should able to receive the following output

![](https://cdn-images-1.medium.com/max/2800/1*jVu_i0gtf0CK8UsZ1aqJ_Q.png)

Basically in this stage clean up your code, reducing any duplication you may have introduced. make your code modular and efficient. you should feel confident enough in the test you have written that you can make your changes without breaking anything(**Refactoring**).

## Example

Let’s go through the example to understand how to use TDD strategy.

Take an example of employee check-in, once employee checkin to the office received message ***check-in completed*** on his HR Application. (This is a very basic example for testing purpose)

**Prerequisites:**

* Ruby

* Rspec gem

* OOPS concept (basic understanding of class, instance etc)

**Step 1] Install Rspec**

Rspec is a **DSL(Domain Specific Language)** a testing framework written in Ruby.

    gem install rspec

This command will install rspec gem in your ruby gem folder

**Step 2] Initialize Rspec**

    rspec --init

![](https://cdn-images-1.medium.com/max/2000/1*QrBWtiFiCr_dkXPj63KKtw.png)

This will create two things

***spec_helper.rb*** file always loaded when you ruining rspec test cases and ***.rspec*** make sure of that.

## All set we are now ready to go

![Photo by [Braden Collum](https://unsplash.com/@bradencollum?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/6962/0*m9INpihab6NJ49OB)*Photo by [Braden Collum](https://unsplash.com/@bradencollum?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

## Let’s start writing test cases

Our First test file will be called ***employee_spec.rb*** and we are going to test 4 things

1] Creates an ***employee*** object?

2] ***employee*** having a ***check_in()*** method?

3] ***employee*** invoke the method ***check_in()***?

4] And the method ***check_in()*** returns message?

## Add Test

We start adding simple test firstly and watch its failing.

{{< gist sandeshbodake 25e2df49fa9dfae0b873d957e786bd22 >}}

Next, run ***rspec*** command in my project folder you can see the test we wrote is falling.

![Test1](https://cdn-images-1.medium.com/max/3124/1*PWioDj8HVqp1B1LsLJwSNA.png)*Test1*

The error ***uninitialized constant Employee*** is tell us that Employee class not defined anywhere that’s why rspec gave us this error.

## Pass Test

Now, start writing some code and try to pass that test.

{{< gist sandeshbodake b6471bcdf6b128b9eb546eb9fb5ff204 >}}

![](https://cdn-images-1.medium.com/max/2800/1*jVu_i0gtf0CK8UsZ1aqJ_Q.png)

## Refactor

Now It’s time to refactor our code, I created **lib/employee.rb** that keep our classes in segregated. 
In order to run your test case, you will need to include file in ***spec_helper.rb***

{{< gist sandeshbodake 25e2df49fa9dfae0b873d957e786bd22 >}}

{{< gist sandeshbodake cf244b3a01820bea987b00894241d8a3 >}}

Running ***rspec*** now should give us the same result

![Test1](https://cdn-images-1.medium.com/max/2800/1*jVu_i0gtf0CK8UsZ1aqJ_Q.png)*Test1*

## Repeat the process for the next unit test

Next Step to ensure that ***Employee*** responds to method ***check_in().*** Here we test first whether **check_in()** method present or not then we will check whether that method responding expected response.

{{< gist sandeshbodake 5edc593c7105dca1a1e025e68c11a3be >}}

Next, run ***rspec*** command in my project folder you can see the test we wrote is falling.

![Test2](https://cdn-images-1.medium.com/max/2352/1*JuU2ltWpNC58Eghh6zUyKg.png)*Test2*

Create method ***check_in()*** in the ***Employee*** class to pass the test

{{< gist sandeshbodake bb70e4b7b5cb78448bbe40acbdb15e8d >}}

Running rspec now (you have to be in your project folder in terminal) we can see our test cases passed successfully

![Test2](https://cdn-images-1.medium.com/max/2352/1*gsCwYSYM8iR-GuHvzemjRg.png)*Test2*

## Now, Build a working method and Test It

{{< gist sandeshbodake ffa71685dab4805348d6cad35aeb8674 >}}

We run the test now and see the following method:

![](https://cdn-images-1.medium.com/max/3124/1*hvXjnSAIoogAPANjm9Y-hg.png)

The expected result does not match the actual result we are getting …

    expected: "Check-in completed"
         got: nil

Now we refactor ***check_in()*** method,

{{< gist sandeshbodake c1d3e207b3b5d84964b066322503612e >}}

<iframe src="https://medium.com/media/cb7478620b0c936ba16bc2a4e767bd44" frameborder=0></iframe>

Run rspec again we will see our all test cases working fine.

![Test3](https://cdn-images-1.medium.com/max/2620/1*UP8MOoH8EwFN8EYXYcP8ig.png)*Test3*

**Note**: This is a basic example taken for testing purpose which always returns ***Check-in completed***  message once invoke ***check_in*** method. we can add ***is_check_in_complted*** variable of ***boolean*** type to the employee class to keep a track of employee checked-in or not.

## Summary:

* Understand the employee specifications

* Identify objects and their behaviours

* Write the test first, and see it fail

* Write some code to pass the test

* Run the test

* Refactor

## Benefits of TDD

**Confidence**

TDD is all about confidence. writing your tests first and only writing a response to failing tests cases, you can trust that all of our production code is covered and the confidence gives you the power to quickly and easily change or refactor your code without fear of it breaking.


**Time Savings**

TDD can also lead to time savings over traditional testing. Writing your test upfront gives you useful error messages to follow to a finished feature. You save time thinking of what to do next because your test tells you!


**Flow**

Once you write your test, the test failures continuously tell you what to do next and your code becomes more modular and scalable.


**Improved Design**

TDD helps you recognize coupling upfront. Object-oriented design principles, like dependency injection, help you write your code in ways that reduce this coupling, making your code easier to test.


**Documentation**

Tests are always a good point to start for new joiners in the team to understand what the application is supposed to do.

---

**CONCLUSION**

In this article, you saw how TDD can improve confidence that your code is working as expected. if you use red, green, refactor approach in large software projects you will find yourself saving a lot of time, while implementing a more robust solution than you otherwise would have.

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)

