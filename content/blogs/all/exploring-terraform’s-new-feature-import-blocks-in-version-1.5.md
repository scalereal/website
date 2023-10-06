---
title: Exploring Terraform’s New Feature:- Import Blocks in Version 1.5
description: In this article, we discuss about Exploring Terraform’s New Feature:- Import Blocks in Version 1.5
date:   2023-07-19
categories:
  - devops
tags:
  - Terraform
  - Terraform Modules
  - Terraform Cloud
  - Terraform Provider
author: Rahil Khan
image: /images/blog/banner/exploring-terraform’s-new-feature-import-blocks-in-version-1.5.webp
thumbnail: https://via.placeholder.com/150
url: devops/2023/07/19/exploring-terraform’s-new-feature-import-blocks-in-version-1.5.html
---

Terraform, the popular infrastructure-as-code (IaC) tool developed by HashiCorp, has continued to evolve to meet the growing demands of infrastructure provisioning and management. With each new release, Terraform introduces exciting features that enhance its capabilities and provide better control over infrastructure resources. One such notable feature is the introduction of Import Blocks, which made its debut with Terraform version 1.5. In this blog post, we’ll explore this new feature and understand how it simplifies the management of existing resources.

## Understanding Import Block:

Prior to Terraform 1.5, importing existing infrastructure into Terraform required declaring each imported resource using the terraform import command, followed by specifying its resource type and ID. This manual and repetitive process was often time-consuming, error-prone, and required developers to have a deep understanding of the Terraform configuration.

As of Terraform 1.5, you can use configuration to import existing resources into your state file with the plan-and-apply workflow. You can still use the terraform import command, but configuration-driven import is safer, works with CICD pipelines, and allows you to preview the import operation before modifying state. You can also optionally use Terraform to generate an initial configuration for the resources you will import.

Using configuration to import resources involves the following steps:

1. Identify the existing infrastructure you will import.
2. Define an import block for the resources.
3. Run terraform plan to review the import plan and optionally generate configuration for the resources.
4. Prune generated configuration to only the required arguments.
5. Apply the configuration to bring the resource into your Terraform state file.

In this tutorial, I will create an EC2 instance and S3 Bucket on AWS. Then, you will declare an import block for the existing EC2 Instance and S3 Bucket, use Terraform to generate configuration for the instance, modify the generated configuration, and use the plan-and-apply workflow to bring the instance and S3 bucket under Terraform management.

## Existing Resources on AWS:

I have created the EC2 Instance and S3 Bucket on AWS to import and below are the images for your reference:

EC2:

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*I5jG2di2mbHFDLLCpFgUGw.png)

S3 Bucket:

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*oFRpYbOOGpw9vAFiNeCXmQ.png)

## Preparation of the Import Process:

Before we import the resource, what exactly do we required in order to import the resources. Import Block, right? And its attribute which will signifies the identity of the resource which is going to get imported under the Terraform Hood.

## Define import block

Configuration-driven import relies on the import block, which has two required arguments:

* [id]is the provider-specific identifier for the infrastructure you want to import
* [to]is the identifier Terraform will give the resource in state, consisting of the resource type and name

Example code for reference:

```
import {
  to = aws_instance.import_ec2
  id = "i-1a13c54196d5abdcf"
}
```

## Let’s Write the Import Block for EC2 Instance and S3 Bucket:

**EC2 Import Block:**

```
import {
  id = "i-0a13c59196da6bdcf"
  to = aws_s3_bucket.imported_bucket
}
```

**S3 Bucket Import Block:**

```
import {
  id = "resume-portfolio-rahil"
  to = aws_s3_bucket.imported_bucket
}
```

**Merge both resources code into main.tf file and main.tf file should look like this:**

```
import {
  id = "resume-portfolio-rahil"
  to = aws_s3_bucket.imported_bucket
}

import {
  id = "i-0a13c59196da6bdcf"
  to = aws_instance.imported_bucket
}
```

**version.tf file code:**

```
provider "aws" {
  region = "eu-west-1"
}

terraform {
  required_version = ">= 1.5"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.3.0"
    }
  }
}
```

Modify the region and the necessary configuration of the version.tf as per your requirement.

## Now let’s move to the Tutorial:

## Step 1: Bake all the code and be prepare for the import and initiate Terraform Import:

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*3FWqzh6bJXupBgOYAarS-Q.png)

## Step 2: Run the Terraform plan command to generate the plan:

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*coSHfyttQR66r-LKr9w_SA.png)

As you can see, it gave me an error for a import block target does not exist. It does exist in AWS but your terraform does not know, but for Terraform to know this resource just simply the run the following command which generates the plan of the resources to be imported with the help of the provider.

```
terraform plan -generate-config-out=generated.tf
```

Once this command is ran you will be able to see the output in the terminal

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*gt_9ncqWpTlFYdObrh4mXQ.png)

After running that command you can able to see that I have ran into an EC2 instance issue which can be resolved by removing either ipv6_address_count or ipv6_address. There is no issue you will get for S3 Bucket, but keep in mind without resolving the issues resources cannot be imported.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*DZXji9ikleGnF0Gyoy20nw.png)

Also, notice that the generated.tf file has been generated by the terraform which contains the resource code in the file.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*FlxXBnknkwnC8jYHsX7Vnw.png)

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*tYO5_M4fgoP94Yk8oZv1ag.png)


## Step 3: Run the Terraform Plan command now:

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*iKwHmfSLdy0iY9SqfRKmhA.png)

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*RUVUj-24Ujp1ouO5S3PE6A.png)

As you can see above it generates the plan for both of the resources and now its time to import these resource under Terraform.

## Step 4: Run the Terraform Apply to import these resources:

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*5nWz2begmQ1uiwW613cMAA.png)

As you can see it imported the resources into the terraform. Now let’s check the state file to see if it really imported as it is claims to be:

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*md-RbJJtr0Lt_HesacmlfQ.png)


So both of the resources are in the state file under Terraform. Now one can manage these resources in the terraform as code.

**NOTE: Optimize the codebase generated by the terraform in the generated.tf file as per your requirement.**

Be sure to use this Import Block feature of Terraform provides to take an advantage and streamline your resource imports.

Happy Terraforming!