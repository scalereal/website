---
title: Introducing RBS, Ruby’s new type signature language.
description: In this blog, I'm introducing RBS, Ruby's new type signature language.
date: 2020-12-25
categories:
  - backend
tags:
  - Ruby
  - Ruby3
  - Rails
  - Release
  - Programming
author: Sandesh Bodake
image: /images/blog/banner/introducing-rbs-rubys-new-type-signature-language.png
thumbnail: https://via.placeholder.com/150
url: backend/2020/08/04/introducing-rbs-rubys-new-type-signature-language.html
blog_place: popular
---


## Introducing RBS, Ruby’s new type signature language.

This week, [Ruby](https://www.ruby-lang.org/en/)’s development team released the major version 3.0

Among the countless cool changes and additions including some fantastic general performance boosts and a powerful new concurrency/parallel processing efficiency model a new built-in language has emerged for static type definitions: [Ruby (Type) Signature language, or RBS](https://github.com/ruby/rbs).

## Why Static Typing?

Ruby is a dynamically typed language, which means the interpreter tries to infer the data type of variables and object properties at runtime. This generally leads to programs being more dynamic and easier (faster) to code, and the interpreter/compiler loading code faster. However, the need for type inference and its associated costs, as well as the difficulty in detecting errors at compile time with dynamically typed code, have caused a modern programming trend to move towards statically typed languages.

Static typing makes the development experience much smoother. Bugs are far easier to detect, especially with modern IDEs and their linting as you write. For most statically typed languages, their more explicit nature leads to faster-compiled code (more efficient resulting machine code.)

## **Background**

*Static typing versus dynamic typing* is an age-old issue for programming languages. Statically typed languages are suitable for larger projects but are often less flexible. Dynamically typed languages allow for rapid development, but scaling teams and codebases with them can be difficult.

Matz declared that Ruby 3 will support static type checking four years ago. After seeing multiple communities developed type checkers, the Ruby committer team decided to build a foundation for the community to build type checkers on. Ruby 3 will ship with the ability to write type signatures for Ruby programs as well as built-in type signatures for the Ruby standard libraries. The standard type signature language will make type definitions in Ruby code portable between type checkers and encourage the community to write types for their gems and apps.

## What does RBS look like?

[RBS](https://github.com/ruby/rbs), a type annotation language and tool for Ruby, is about to be bundled with Ruby 3.0. Gradual typing with RBS allows Rubyists to enjoy the benefits of static analysis.

The signatures are written in .rbs files which are different from Ruby code. You can consider the .rbs files are similar to .d.ts files in TypeScript or .h files in C/C++/ObjC. The benefit of having different files is it doesn't require changing Ruby code to start type checking. You can opt-in type checking safely without changing any part of your workflow.

The type signatures for Ruby classes in RBS will look like this.

![](https://cdn-images-1.medium.com/max/2524/1*Lwkb7_Z9lwm54KFInt85wA.png)

The appointment.rbs the file defines a class called Appointment, and it helps the reader to understand the overview of the class.

The class has three attributes token, statusand agents. The type of token and status are String. RBS also supports generic classes like Array as we can see with the type of agents attribute. It is an Array of Agent's

RBS also describes methods defined in the class and their types. The class defines the initialize and each_agents methods. The initialize method requires token and status as keyword arguments. The each_agents method accepts a block, or it returns an Enumerator instance.

The biggest benefit is that the type definition can be validated against both the implementation and its execution!

## Ruby Programming with types.

The following is a list of major benefits of having types. We can write types in RBS files, and the tools will help you writing ruby code by:

**1] Finding more bugs:** We can detect an undefined method call, an undefined constant reference, and more things a dynamic language might have missed.

**2] Nil safety:** Type checkers based on RBS have a concept of *optional types*, a type which allows the value to be nil. Type checkers can check the possibility of an expression to be nil and uncovers undefined method(save!)' for `nil: NilClass`.

**3] Better IDE integration:** Parsing RBS files gives IDEs better understanding of the Ruby code. Method name completions run faster. On-the-fly error reporting detects more problems. Refactoring can be more reliable!

**4] Guided duck typing:** Interface types can be used for duck typing. It helps the API users understand what they can do more precisely. This is a safer version of duck typing.

## Conclusion

With the industry-wide trend towards adopting static typing in large scalable applications, the addition of RBS in Ruby 3.0 is an exciting step forward. Taking the development experience efficiency improvements that typing brings and combining them with the big runtime performance boosts under the hood in Ruby 3.0, I think the future is looking really bright for Ruby in the software industry.

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)
