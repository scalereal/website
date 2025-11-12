---
title: Dependency management in Python -2023
date: '2025-11-12'
tags:
  - Python
  - Backend
  - Django2023
draft: false
---

---

### Dependency management in Python -2023

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/38eced0c-845e-4b33-8950-09c16771e449/Blue__Black_Futuristic_Technology_Facebook_Cover_%282%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2F37CU5%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDoev4WmaOEakAmCW5Tcd%2FnpBVCvTkgO2QlFpfs2fWbyAIhAP4fwZDQ3XYYQolrg%2FWbw%2BYMhN51BBStC61hQbF5nvX1Kv8DCDEQABoMNjM3NDIzMTgzODA1IgwUwmCWDc301LbI6bUq3AN9UVb2dChBjWDW0DUN7FkXDiMM3l3nyW1zIo9tL5cg3ZfG3cpg2%2BkxVZCuN0RC2jwG%2FfkW9d3PxHBpVZYVKhm0c3Vzl6dD3tyOrikDQn%2FCnOvVLsHC7umGNOpTgftNO3rdI6eFqDLmIHdu6OT6U6%2B%2Blc3gmBwk6YhPa51sxX6klLJcD%2Fjcn9CKC6JsyheGDa%2BcwYS1V2PF%2BoSxBCRu4XOgFstzYBxs3t%2BcaExxdpoZf3v5T0Fd%2F9J0CAu8r9hEscG03h0b7mcxScgBqQaqSxKzAfOw4zA1CMOwVArN%2BelRXd7HNUYBbD1QTJWo26Xh%2F8R9c6CsOxwEWCXS2meWiK%2Fh7fOJVxbgC8co8A8BzJNf%2FmA2MWe2d8lODnoz6j5Qg1EFGuomB8tO7tdT7cfVg7QDtS1Q0LhzwhNnyrZ5ivHOBc0aVGtVakgOdpOa%2B10aRgdmr6NAwqs4TnmHY09Exee4t1E3wi%2BRlzsuB59rYEtECcxQ5%2BPVN9nQaX%2BA5Ij%2FkFEpDXPsXbx84QA1jl3OYEwzeYSUWHyMzHa3UTFf%2Fz3fbi8p39Gc91WS38eI7B%2BKZyUbhfU1DKsZDoFmTfhB4KkV5oyZBcpsGpbKSD2BeJ%2Boxw5s1KsNy4Lvn1EfXjDR8tDIBjqkAQmErCDi22HRx0tIJgYWE0MrWH6pyxQhrjBQp4SnfGugOn8%2B9MuAVDwVQ9BbWY0WTswj5rBouSE1zoL6J%2BKJVRPEJD%2FJYpY7RlShUlIcfMb3TYqWbionEhuw%2BlvKhAAlLxskSp%2Ftczz8%2FL6ThDzg68x8u4hEtYUuR18MXz05QfGNZTczHtYOs9Mb8YjFNNd%2FV%2FUra5EH%2B575afL4lHGaWBR34LhT&X-Amz-Signature=820152038eb572c4f1b97bb5995d2a54949f7405252862b6236cfbf200de3e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Modern Django Setup 2024

Hey there! Welcome to the world of software development! If you dive into Python development, you’re in for an exciting journey. Today, we’re going to talk about an important aspect of Python development: dependency management and version management. You might be thinking, “What are these fancy terms?” Well, don’t worry, we’ll break it down for you in a way that’s easy to understand and enjoyable to read. So grab your favorite beverage, sit back, and let’s dive in!

At [ScaleReal](https://scalereal.com/) we work extensively on Python/Django Applications and have built a lot of highly scalable applications for various clients of ours.

### Here’s a list of everything that will be covered in this article:

1. What is Dependency Managment?
1. Types of Dependency Mnagament?
1. Dependency hell
1. *Simplifying Python Dependency Management*
1. *Conclusion*

### What is Dependency Managment?

In programming, dependency refers to the degree to which one piece of code relies on another for correct functionality. A software dependency is a relationship between software components where one component relies on the other to work properly. 

Lets take a scenario, suppose we are developing an ecommerce application in python. We would require certain things for that like  a framework in python to handle our backend services , a library or package to handle the database operations and a package to manage the payment gateway. All of these components which are very fundamental to  a simple ecommerce platform requires many developers and development hours to be built. The silver lining is they are already created and available for us and we can use them in our application so that we won’t have to develop them on our own like we donlt need to make a screwdriver to unscrew a screw. This makes our development very simple and effecient as we can focus on the main apllication as all the dependencies are already taken care of.

## Types of Dependency Management:

### Direct Dependency

A software dependency explicitly defined and used by a software component. Example: a Python function may require the pandas library, meaning the file has a direct dependency on that package. The package can be imported using import, like this:

import pandas

### Trasitive Dependency

In the direct dependency example, the function uses the datetime library. But suppose the pandas package itself uses the numpy package. This means that the function has a transitive dependency on the numpy package. It might not be explicitly declared in the Python file, but it is indirectly used by the Pandas package.

## Dependency Hell

Dependency hell is a situation in which the packages and libraries used in our software development becomes hard to manage resulting in errors and conflicts . This may occur because deifferent components of a software requires same dependency but different versions of it . That is why it is important for having proper depedency mangers and startegies in place for smooth and effiecient development.

### Simplifying Python Dependency Management

Below are some of the Dependency Management tools for python

1. **Pip**: Pip is the default package manager for Python. It is used to install, upgrade, and manage Python packages. Basic installation command: Pip is usually pre-installed with Python. Virtual environment creation command: `python -m venv <env_name>`.
1. **Pyenv**: Pyenv is a popular tool for managing multiple Python installations on a single machine. It allows you to easily switch between different Python versions and set specific Python versions for different projects. Basic installation command: `curl https://pyenv.run | bash` (for Unix-based systems). Virtual environment creation command: `pyenv virtualenv <python_version> <env_name>`.
1. **Pipenv**: Pipenv is a tool that combines package management (using Pip) and virtual environment management in Python. It simplifies the process of managing dependencies and isolating Python environments for different projects. Basic installation command: `pip install pipenv`. Virtual environment creation command: `pipenv install` (inside project directory).
1. **Asdf**: Asdf is a language-agnostic version manager that can be used for managing multiple programming languages, including Python. It provides a consistent way to manage different versions of Python and other languages. Basic installation command: `git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.8.0` (for Unix-based systems). Virtual environment creation command: `asdf virtualenv <language> <env_name> <version>` (e.g. `asdf virtualenv python myenv 3.9.7`).
1. **Poetry**: Poetry is a modern Python dependency and project management tool. It simplifies the process of managing dependencies, building virtual environments, and handling other aspects of Python project management. Basic installation command: `curl -sSL https://install.python-poetry.org | python3 -`. Virtual environment creation command: `poetry install` (inside project directory).

### Conclusion

> Dependencies are a very crucial part of any softwre development as they abstracts a lot of functionality which we don’t have to work on as they are already built. But they come with their own sets of difficulties like dependecy hell. To manage all that we need effiecient dependecy managers. For python development Pip , Pyenv , Pipenv , Asdf and Poetry are some of the best dependecy and version managers out there.

---

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

*Thanks for reading! If you enjoyed reading this article, please ****click the 👏 button and share it with everyone. ****Feel free to leave a comment 💬 below.*

Sharing is Caring!

Thank You :) 🙏

If you need any help, you can contact me on* *[LinkedIn](https://www.linkedin.com/in/satvik-goyal/) or [Github](https://github.com/satvik6005).

*~Satvik Goyal*