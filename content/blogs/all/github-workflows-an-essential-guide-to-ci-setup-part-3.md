---
title: "GitHub Workflows: An Essential Guide to CI Setup | Part 3"
description: >-
  An Essential Guide to CI Setup
categories:
  - deployment
keywords:
  - Git workflow
  - CI
date: '2025-12-25'
tags:
  - Django2023
  - Python
  - Backend
author: ScaleReal User
image: '/images/blog/img_1766656196920_4912.png'
url: github-workflows-an-essential-guide-to-ci-setup-part-3
draft: false
---

Hello, Django Mavericks and PyNinjas I hope you are all doing well.

At [ScaleReal](https://scalereal.com/) we work extensively on Python/Django Applications and have built a lot of highly scalable applications for various clients of ours.

Welcome to the dawn of a new era of **Django Setup 2023**! Get ready to embark on a journey of exploration and discovery as we uncover the secrets of the **Modern Django Setup**. Keep your eyes peeled for more exciting blog posts in this series, coming soon!

> If you want to navigate from one blog to another blog of this series you can this button : <Prev | Next>

*If you havn’t read previous blog of this series and if you are interested to learn about how to setup basic manual github action then Please 🙏 check it by clicking prev button.*

# TODO: Add topic and link of next blog

In this article, we’ll learn how to create GitHub actions that trigger automatically that execute test cases and many other exciting things. Excited?

# **Here’s a list of everything which will be covered in this article:**

1. *Steps to setup advance Github action *✨

## **Prerequisite:**

Must have a basic understanding of the mentioned topic

1. [Flake8](https://medium.com/@chetanvarade31/code-formatting-tool-flake8-4f0638a066aa).
1. [Pytest](https://medium.com/@meet_patel/930265fd000e).
1. [How to create a Django model test case using pytest](https://medium.com/@meet_patel/dd07869d3ef0)
1. [How to get a test coverage report](https://medium.com/@meet_patel/406e0a341216). [I am going to use the code mentioned in this blog]

> Make sure you have read or taken a look at the blog before continuing to reading further and you have django project ready including testcases.

# **Steps to setup Github action**

Now we will set up GitHub actions that perform the following thing

1. Setup Python.
1. Install dependencies.
1. Lint with Flake8.
1. Executing Testcase.
1. Get Test coverage report.

**Step 1**: Create a directory in the Django project

```plain text
$ mkdir -p .github/workflows/
```

> Note : Make sure you are using same directory name.

**Step 2**: Create a .yml file inside the workflows directory

```plain text
$ cd .github/workflows/
$ touch tests.yml
```

> You can give any name to your yml file

**Step 3:** Copy the below-mentioned code to your yml file.

**Created By Author **😎** Of The Blog**

# **Explanation**

This is a GitHub Actions workflow that sets up a continuous integration (CI) pipeline for a Django web application. The pipeline is triggered when code is pushed or when a pull request is opened on the main branch. The pipeline runs on an Ubuntu 20.04 runner and uses a PostgreSQL database container for testing.

The pipeline consists of a single job named “build”. The job has a set of steps that are executed in sequence.

- The first step checks out the source code from the repository using the `actions/checkout@v3` action.
- The second step sets up the Python 3.10 environment using the `actions/setup-python@v4` action.
- The third step installs the project dependencies using `pip install`.
- The fourth step runs the Flake8 linter to check the code for any style violations.
- The fifth step executes the test cases using `coverage run -m pytest -vv`. It sets some environment variables, including the `SECRET_KEY` and `DEBUG` settings, and the database URL which is used by the tests.
- Finally, the sixth step generates a test coverage report using `coverage report`. The coverage report provides information about how much of the codebase was covered by the tests.

This workflow helps ensure that changes made to the codebase do not break existing functionality and that the codebase is maintainable and conforms to style guidelines.

**Step 4**: Store the Environment variable on the GitHub vault. [Ignore this step if you are not using an environment variable]

1. Click on the setting tab from your repo.

![](https://miro.medium.com/v2/resize:fit:700/1*LfiL7tMbYiX2Ej9992D_UA.png)

2. Select Environments from the left sidebar.

![](https://miro.medium.com/v2/resize:fit:700/1*wfwzSY1ItqZOahd6Us6ZwA.png)

3. Create a new Environment by clicking the new environment button.

4. Click on your created environment.

5. Scroll down you will find Environment Secrets. Create two environment variables (DEBUG and SECRET_KEY) by clicking Add secret button.

![](https://miro.medium.com/v2/resize:fit:700/1*Eo0FvkGEOMoUUp8KG0iwsA.png)

**Step 5: **Push code to your main branch or raise PR against the main branch of the GitHub repo.

```plain text
$ git add .
$ git commit -m "Create github action"
$ git push origin main
```

![](https://miro.medium.com/v2/resize:fit:700/1*XCCpRsQbDUnoNo08_je1Xg.png)

**Created By Author **😎** Of The Blog**

# **Resource :**

[GitHub - scalereal/django-code-vault at MP/django-github-action](https://github.com/scalereal/django-code-vault/tree/MP/django-github-action)[
github.com](https://github.com/scalereal/django-code-vault/tree/MP/django-github-action)

That’s it from my side folks 🧑‍💻. I hope this blog has been helpful in giving you a better understanding of the topic. Until next time, stay safe and keep learning!

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.