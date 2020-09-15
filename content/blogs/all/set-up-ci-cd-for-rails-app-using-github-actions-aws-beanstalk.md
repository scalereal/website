---
title: Set up CI/CD for Rails app using GitHub actions <> AWS Beanstalk ☁️
description: In this article, I’m going to demonstrate to you how easily you can set up CI/CD for Rails app with AWS elastic beanstalk.
date:   2020-09-14
categories:
  - devops
tags:
  - Rails
  - AWS
  - GitHub Actions
author: Sandesh Bodake
image: /images/blog/banner/set-up-ci-cd-for-rails-app-using-github-actions-aws-beanstalk.png
thumbnail: https://via.placeholder.com/150
url: backend/2020/07/05/set-up-ci-cd-for-rails-app-using-github-actions-aws-beanstalk.html
---

## What is CI/CD?

In software engineering, CI/CD or CICD generally refers to the combined practices of continuous integration and either continuous delivery or continuous deployment. CI/CD bridges the gaps between development and operation activities and teams by enforcing automation in building, testing and deployment of applications.

Let’s start the execution step by step.

## CI (Continues Integration)

**Step 1**

Let’s start creating a new workflow in GitHub actions that will perform those tasks. in your root rails project.

    mkdir -p .github/workflows
    touch .github/workflows/main.yml

**Step 2**

The ***mail.yml*** where we defined our workflow CI and CD. We name our workflow CI/CD, Then list the name of our events which will trigger our workflow.

    # main.yml

    name: CI/CD
    on: [push, pull_request]

**Step 3**

Use the ubuntu latest image to install all necessary libraries and PostgreSQL as database

<iframe src="https://medium.com/media/55040cc4bbaaa45aa9254ee5143bc67c" frameborder=0></iframe>

**services** can be used to create additional containers for a job or steps. In our case, we are using it to spin-off **postgres** and **redis** service.

**Step 4**

We can define a sequential task that we want to perform in the machine with **steps** statement.

Next thing we will do is check out our rails app. Github provides official, ready to use actions an one of those is **action/checkout** 
we can directly use this action directly using statement **use.**

Similarly other actions **actions/setup-ruby **and** bolares/actions-yarn** is used to check out the ruby version and yarn package manager that we want to use for our rails app.

<iframe src="https://medium.com/media/88f810d4a7e2704115958425d42eaabf" frameborder=0></iframe>

In the above snippet 👆, we just added steps for setting up ruby environment and yarn.
> More about **bolares/actions-yarn** is [here](https://github.com/Borales/actions-yarn)

**Step5**

Once the code has been checked out and correct ruby version is set up, we install the gems using **bundler** and then run the **specs**

Let’s add one more step for setting up our rails application.

<iframe src="https://medium.com/media/8860088aa3f55f552c46d07b697ea028" frameborder=0></iframe>

In the above 👆 snippet, we are adding some necessary environment variables and executing the necessary commands.

First, we installed **bundler**gem, then create and migrate the database and finally running **Rspec** test cases.
> Note: I’m using **Rspec** testing library you can put other as well

That’s it, we successfully integrate CI workflow for our Rails app successfully, now if push the changes you can see GitHub actions start executing.

![CI Workflow](https://cdn-images-1.medium.com/max/2010/1*l89KcXckCrLhKFElT_WRuw.png)*CI Workflow*

You can see your actions are executing successfully 🙂.

If you missed something below 👇 is the full snippet for CI workflow.

<iframe src="https://medium.com/media/ff9c75154c1c38ebd7884378a223d483" frameborder=0></iframe>

## **CD(**Continuous delivery)****

Now Let’s move to the **CD(continues delivery)** part, before moving further you must have an account on **AWS**

**Step1**

Install CLI elastic beanstalk on your local machine.

    brew install aws-elasticbeanstalk

Go to your project directory and initialize elastic beanstalk using the command

    eb init

During init, elastic beanstalk shows some CLI questions & it will create config.yml like below 👇

<iframe src="https://medium.com/media/76609621e246af8103281649c82668db" frameborder=0></iframe>

**Step2**

Create a project with Postgres.

    eb create staging -db.engine postgres

Above 👆command will start creating our project ready for deployment.

<iframe src="https://medium.com/media/b3099200c10c371328ded7c04451f0d8" frameborder=0></iframe>

Here is the sample log once we start creating it.

You might get an error here because we haven't set up database.yml correctly.

**Step3**

Add production configure like below 👇 in your **database.yml** file

<iframe src="https://medium.com/media/159b7426abfb317d6b44742b99e094e4" frameborder=0></iframe>

Now, the setup environment variable

    eb setenv SECRET_KEY_BASE= xxxxxx

For **SECRET_KEY_BASE** just fire on terminal

    RAILS_ENV=production bundle exec rake secret

That’s it we are done with all configuration lets deploy our application.

    eb deploy staging

![](https://cdn-images-1.medium.com/max/5128/1*RUR5Ob_-_rcObIFf7RGaig.png)

If you check on AWS Elastic Beanstalk dashboard you can see our application created successfully.

**Step4**

Beanstalk Deploy is a GitHub action (and command-line script) to deploy apps to AWS Elastic Beanstalk. It takes the application name, environment name, version name, region and filename as parameters, uploads the file to S3, creates a new version in Elastic Beanstalk, and then deploys that version to the environment. It will wait until the deployment is finished, logging any messages from the environment during the update and exiting with a non-zero exit code if the deployment fails. It does not handle rolling back the environment.

Now let’s add this to our Github Action workflow

<iframe src="https://medium.com/media/cd00bf195af612a1cfa7601d1b4eee34" frameborder=0></iframe>

Here you can see we need **AWS_ACCESS_KEY** and **AWS_SECRET_ACCESS_KEY** using GitHub secrets you can add your credentials and those environmental variables accessible in your GitHub workflow.

![](https://cdn-images-1.medium.com/max/2000/1*VHcbUiUrRNGQwu3uoRSy2A.png)

Now let’s push our workflow changes & let's see the result…

![](https://cdn-images-1.medium.com/max/3820/1*D4ezyZZeYJzxccRFwDVSCw.png)

Hureeeee 🎉, our code builds successfully and deployed to AWS Beanstalk.

Here is a full code snippet 👇

<iframe src="https://medium.com/media/3f1a2daf59dc8a60153d7023d7fbc55c" frameborder=0></iframe>

## **Conclusion**

There are many tools that can help enable a smoother transition to a CI/CD process. Testing is a large part of that process because even if you are able to make your integrations and delivery faster, it would mean nothing if was done so without quality in mind. Also, the more steps of the CI/CD pipeline that can be automated, the faster quality releases can be accomplished.

---

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)
