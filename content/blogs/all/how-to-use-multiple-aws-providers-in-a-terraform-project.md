---
title: How to use multiple AWS providers in a Terraform project
description: At ScaleReal, we have a multi-account AWS setup and recently we came across a situation where we wanted to apply our terraform scripts across two AWS accounts where some of the resources would get created in one AWS account and some of the resources would get created in another AWS account.
date:   2020-12-24
categories:
  - DevOps
tags:
  - Terraform
  - AWS
  - DevOps
  - Software Development
author: Ashish Mohite
image: /images/blog/banner/how-to-use-multiple-aws-providers-in-a-terraform-project.webp
thumbnail: https://via.placeholder.com/150
url: devops/2020/05/15/how-to-use-multiple-aws-providers-in-a-terraform-project.html
---

## How to use multiple AWS providers in a Terraform project


At [ScaleReal](https://scalereal.com), we have a multi-account AWS setup and recently we came across a situation where we wanted to apply our terraform scripts across two AWS accounts where some of the resources would get created in one AWS account and some of the resources would get created in another AWS account.

On digging further we figured out a simple way Terraform provides us to have multiple AWS providers by creating **aliases**.

There are multiple use cases where provider alias can be used:

* Creating resources in multiple AWS accounts in the same terraform module.

* Creating resources in resources in different regions of the same AWS account.

* Creating resources in resources in different regions of the different AWS accounts.

In this article, we’ll see how to use multiple providers for creating resources in single and multiple AWS accounts

### What is a provider?

Providers are Terraform plugins that are used to interact with remote systems such as Docker, AWS, Azure…

Terraform has a huge list of providers. A complete list of providers can be found [here](https://www.terraform.io/docs/providers/index.html#lists-of-terraform-providers).

### Configuring Single AWS Provider

Every root module will have at least one default provider which then will be used by all the child modules.

By default, resources use a default provider configuration (one without an alias argument).

Let’s see how can we configure a single AWS provider in terraform so that we can apply our changes to that particular AWS account.

![Provider for a single AWS account](https://cdn-images-1.medium.com/max/2000/1*e2MxidoXVMMDCGyLcY8K0Q.png)*Provider for a single AWS account*

here the terraform will apply all your changes on the dev accountdev-profile).

### Configuring Multiple AWS providers

Now, let’s talk about how can we set up multiple AWS providers and use them for creating resources in both AWS accounts.

We can’t write two or more providers with the same name i.e. two AWS providers. If there’s any such need the terraform has provided a way to do that which is to use alias argument.

*Note: A provider block without an alias argument is the default configuration for that provider.*

![Providers for multiple AWS accounts](https://cdn-images-1.medium.com/max/2240/1*_Os8Tg-2fuezmd05Ggrk_w.png)*Providers for multiple AWS accounts*

Great! So, now that we are able to define two providers for two different AWS account we are good to go? But, how will terraform know which resource to create in which AWS account?

Let’s see how to refer to these different providers while defining our resources in terraform templates.

![Usage of multiple AWS providers for different AWS resources.](https://cdn-images-1.medium.com/max/2240/1*8yggmOAA5vnct8xbawQhnA.png)*Usage of multiple AWS providers for different AWS resources.*

Here in this example, we are trying to create two identical AWS S3 buckets in dev and prod accounts one each. If you look at the first bucket resource declaration it looks normal. But, if you look at the second bucket resource declaration you will see a new attribute named provider and the value of this attribute is aws.prod what this means is we should use an AWS provider with aliasnamed prod.

The rule to follow while referring a provider is ${provider_name}.${alias} in our case provider is awsand alias is prod.

### How to pass alias to child modules?

If your root Terraform module has child modules initialized in it then you can pass providers attribute with value as an object of different providers.

![Passing providers to the child module(s).](https://cdn-images-1.medium.com/max/2704/1*by_CvvhpoacXJHIxoliGIA.png)*Passing providers to the child module(s).*

Now to use the passed provider inside the child module you will have to create providers with the aliases as follows and then refer them like mentioned earlier in this article:

![Referring to the passed alias from the parent module](https://cdn-images-1.medium.com/max/2704/1*i_vzfOqTX6j3xbWPQCJ9xQ.png)*Referring to the passed alias from the parent module*

That how you can use multiple AWS providers in different combinations.

The same principles will apply for different types of providers in the same Terraform module e.g. AWS and GCP.

I hope this article was helpful.

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)
