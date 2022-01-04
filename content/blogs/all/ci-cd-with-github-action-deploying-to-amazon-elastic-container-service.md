---
title: CI/CD with GitHub Actions — Deploying to Amazon Elastic Container Service
description: In this article, we will look at how to build and deploy your application using the GitHub actions platform.
date:   2021-10-12
categories:
  - devops
tags:
  - devops
  - aws
  - ecs
author: Sachin Chougule
image: /images/blog/banner/ci-cd-with-github-action-deploying-to-amazon-elastic-container-service.webp
thumbnail: https://via.placeholder.com/150
url: devops/2021/10/12/ci-cd-with-github-action-deploying-to-amazon-elastic-container-service.html
---

We all know the importance of CI/CD in the software development process. So, considering this we can use GitHub for both purposes for continuous integration and continuous delivery. In this documentation, we will look at how to build and deploy your application using the GitHub actions platform.

Let’s get started 😻


What is GitHub Action?
----------------------

GitHub Actions help you automate tasks with your software development lifecycle. The GitHub action configuration file uses the YML format. GitHub Actions are event-driven, which means you can run a series of commands after a specified [event](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows) has occurred. For example, every time someone creates a release from GitHub on a specified branch then automatic commands get executed.

Deploying to Amazon Elastic Container Service
----------------------------------------------

In this example, we will see how to use GitHub Actions to build a containerized application, push it to [Amazon Elastic Container Registry (ECR)](https://aws.amazon.com/ecr/), and deploy it to [Amazon Elastic Container Service (ECS)](https://aws.amazon.com/ecs/). On every new release in your GitHub repository, the GitHub Actions workflow builds and pushes a new container image to Amazon ECR, and then deploys a new task definition to Amazon ECS.

Prerequisites
---------------

Before creating your GitHub Actions workflow configuration file, you will first need to complete the following steps:-

1.  AWS CLI setup with appropriate credentials.
2.  Create an Amazon ECR repository to store your images.
3.  Create an Amazon ECS task definition, cluster, and service.
4.  Store your Amazon ECS task definition as a JSON file in your GitHub repository.

You can generate the tasks definition template using the following command shell command:

```
aws ecs register-task-definition --generate-cli-skeleton
```

GitHub Secretes Configuration
------------------------------

You need to store the AWS\_ACCESS\_KEY\_ID and AWS\_SECRET\_ACCESS\_KEY into the secrets of your repository on GitHub. You can follow this [link](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) as a reference.

Creating the GitHub Action workflow
------------------------------------

Once you’ve completed the prerequisites and GitHub configuration you can proceed with creating the workflow.

The below example workflow shows how to build a container image and push it to Amazon ECR. It then updates the task definition with the new image ID and deploys the task definition to Amazon ECS.

The following steps are performed in the workflow file.

1.  checks-out your repository under GitHub Workspace, so your workflow can access it.
2.  Configure the AWS credentials.
3.  Login to AWS ECR.
4.  Build, Tag, and push the image to AWS ECR.
5.  Update the AWS ECS service with a new task definition.

> Note: Ensure that you provide your own values for all the variables in the env key of the workflow.

{{< gist chougule007 38df1e4c5363d0b6a339cf58f96c4759 >}}

This is the workflow file for deploying the application on AWS ECS Container. This workflow will trigger when you create the release tag against the main branch in GitHub. Learn more about how to create a release with GitHub [here](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release).

> Note: Change the path of the docker file under the step “Build, tag, and push image to Amazon ECR.” While building the docker image.

Environment Variables
----------------------

1.  AWS\_REGION — Operating region of AWS services.
2.  ECR\_REPOSITORY — Name of the ECR repository that you have created.
3.  ECS\_SERVICE — Service name of the ECS Cluster.
4.  ECS\_CLUSTER — Name of the ECS Cluster.
5.  ECS\_TASK\_DEFINITION — Path of the ECS task definition in JSON format which is stored in GitHub repository.
6.  CONTAINER\_NAME — Docker container name under the ECS task definition.

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)
