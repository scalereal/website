---
title: Former2:- GUI to Generate and Import Infrastructure Resources to IAC Tools.
description: In this article, we discuss about Former2:- GUI to Generate and Import Infrastructure Resources to IAC Tools.
date:   2023-04-11
categories:
  - devops
tags:
  - Devops
  - Terraform
  - Infrastructure as code
author: Rahil Khan
image: /images/blog/banner/former2.webp
thumbnail: https://via.placeholder.com/150
url: devops/2023/04/11/former2-gui-to-generate-and-import-infrastructure-resources-to-iac-tools.html
---

As I have covered one of the infrastructure importing tool in the last article of mine that I have published its called Terraformer. It is used to import the Infrastructure which already exists on cloud and not managed by IAC tools.

Terraformer imports the resource with the help of CLI on Windows and Terminal on MAC or Linux. But before importing that we need to configure aws credentials. Now enough talk of last article. Lets talk about Former2.

Former2 is also an Infrastructure importing tool. But in your mind you are having a question what is the difference between Terraformer and Former2🤔. Well lets break down all the points below.

💡 1. Former2 has a Graphical User Interface (GUI) where you do not have to type anything except the setup of credentials. Whereas in Terraformer, you have to type everything in the CLI, no GUI😑. I got you covered you lazy people.

💡 2. Former2 only supports AWS Cloud Provider. Whereas Terraformer is major cloud supporter such as AWS, Azure, GCP, Kubernetes, Alibaba. Well I am not going to list out everything here. Go do some research.

I know you are lazy person still but I am going to do a favor for your research. Check out the link below for Terraformer cloud providers.

https://github.com/GoogleCloudPlatform/terraformer?source=post_page-----83336f96fd9b--------------------------------

Moving along its time for us to get our hands dirty in Former2 Setup….!!!!!

How to Setup a Former2 so that you can import the resource and below are the setup steps to get along with Former2 GUI.

**1. Go to Former2’s website**

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*VJSU0n7BY4_NMlySWgSiXw.png)

**2. Click on Setup**

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*dvls6GABeevYEZ8kkQ13gg.png)

**3. Click On Introduction tab. If you want to add a G-Extension for it you can add it as per your browser taste’s or you can skip this step and move forward with Credentials setup.**

**4. Click on Credentials and provide your AWS Access Key and Secret Access key and rest other details are optional but if you want to provide those, go ahead I will not stop you.**

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*ejxQaXNPOKLTsyhIho_RAQ.jpeg)

You guys are sneaky that is the reason I hid my Access Key. Better Luck Next Time huh…!!!

NOTE: Once you are done with your activity or task. Make sure to remove the Access Key and Secret Access Key.

**5. Now Click on Parameters. If you have any parameter to add you can or you can skip this step too. Too easy right!!!**

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*QhhU6eC70XSe5q155BuHxQ.png)

**6. Now to Final step is to Click on Settings**

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*W1C5AxnjlwdQs5lLSPiJDw.png)

**7. Click on Scan Account button so that Former2 will automatically pickups the settings of the configuration from your AWS environment.**

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*MXapu9aottxVHrFu5WJomg.jpeg)

## Now the Generating and Importing task begins:

**1. Click on your Choice of Service. But for solely purpose of a demo, I am going with COMPUTE. I know everybody these days choose EC2 to show in demo. Because Life’s easy. Try other service on your own You Lazy Person!!!**

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*DO5ei_oJ-JdfIAh9e4P1lw.png)

So once you are in the Compute section, make sure you also select the Region at the Top Right corner where your resources resides.

Once the region is selected click on Scan Account button, so the Former2 will scan and find the resources and put a list of the resource on the dashboard. Check the below image:

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*Q8BPyT_4g5wix_PeJy9Ukw.jpeg)

To keep myself secure, I have hid the resources name and their region. You can have fun with the Instance IDs and Instance Type.

**1. Now let’s select the resources that you want to generate a script for Terraform or other IAC tool scripts.**

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*ngE_OR8xGoOQbANdvX9jqg.png)

**2. Click on Generate button to generate the scripts.**

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*l4BwKZIeng95URIYtEr6vg.jpeg)

You can copy these script and put it into your respective files with respective environments for which you can initialize the terraform, import these resources into terraform, run the terraform plan and check if the plan is showing “No Changes in the Infrastructure”.

Wallah, now you generated the script and done rest of the things to make your plan looks clear with No changes.

Now there are other outputs that Former2 generates and I will show that below one by one:

**3. CloudFormation Template Script:**

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*mnqLO88HXMQRm_4Bmg05GQ.jpeg)

Former2 gives you the option to Copy and Import the code under CloudFormation output.

**4. Architecture RAW Diagram Output:**

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*qeJthTY-Mz6S7-3YSYpVRg.jpeg)

You can download the Architecture Output diagram into PNG Format.

**Well, now you know how to generate the scripts into different IAC tools. Few IAC tools are supported by Former2 but atleast its a go head to get your hands on.**

**WALLAH!!!! You are now officially a Former2 Importer. Keep Generating and Keep Importing you Lazy Person. Good Luck ahead..**

