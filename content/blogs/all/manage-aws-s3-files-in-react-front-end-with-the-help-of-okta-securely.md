---
title: Manage AWS S3 files in React front-end with the help of Okta Securely
description: In this article, we understand how to manage AWS S3 files in React front-end with the help of Okta Securely
date: 2022-10-20
categories:
  - web
tags:
  - Okta
  - AWS S3
  - React JS
  - OpenID Connect
  - File Upload
author: Pradip Bhusnar
image: /images/blog/banner/manage-aws-s3-files-in-react-front-end-with-the-help-of-okta-securely.webp
thumbnail: https://via.placeholder.com/150
url: web/2022/10/20/manage-aws-s3-files-in-react-front-end-with-the-help-of-okta-securely.html
---

How to upload or list files from the s3 bucket using okta credentials.

We’ll be integrating okta, SPA, and AWS. I have built an app that uses okta open id connect to authenticate and access s3 bucket resources.

## Background

For one of our client projects at ScaleReal, We used Okta for authentication and authorization. We came across a use case where we wanted to upload files to S3 buckets securely, Allowing only authenticated users to upload the files. After doing some research we learned that there are two ways we can handle it

1. Let the backend handle the authentication and upload by creating the REST API
2.  the frontend handle the upload without involving the backend.
We chose the latter one.

&nbsp;

## Prerequisites

To implement this we will need the following:

* An Open ID Connect app in okta (for now we’ll be using a developer account).

* An AWS S3 bucket, If you don’t have an account you can get started with the trial account.

&nbsp;

## Creating Web App in Okta

The first task is to create the web app in [Okta](https://developer.okta.com/) and get the **Client Id** (sometimes referred it as ‘audience’) and **Okta org URL** (Auth issuer).

Please follow the below steps to create the web app in okta:

1. Log in / sign up to okta org.
2. Select the Applications > Applications section on the right sidebar of the screen.
3. Click on Create App Integration

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*iDRDpD9tWXBR03ghXjZPgA.png)

4. Select the Sign-In method as OIDC — OpenID Connect and the application type as Single-Page Application.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*cQiTWg2FW46fgYXb5xAz3Q.png)

5. Click on the next button it will redirect to New Single-Page App Integration screen.

* Add App integration name
* Select Grant type as Authorization Code and Refresh Token
* Add Sign-in redirect URIs ( eg. http://localhost:8080/login/callback ) and Sign-out redirect URIs ( eg. http://localhost:8080/login )
* Add Trusted Origins ( eg. http://localhost:8080 )
* Add Controlled access as per your need.
* Click on the save button.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*wfqHqMfBWgPHQggmzoO6kw.png)

6. Make note of your Client ID and Okta org URL (Auth issuer)

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*mtREqd3Nsb3hCWu0tJjmGQ.png)

&nbsp;

## Integrating okta with React App

Please follow the below steps to integrate your Single Page Application

1. Create your react app

2. Add packages

```
yarn add @okta/okta-react@6.4 @okta/okta-auth-js@6.0
```

3. Add login component and wrap the component **withOktaAuth** to get access to **oktaAuth** and **authState** props. Using these props we can sign in to the application and can check the authentication status of our app. Also, we can restrict the login route.

I have added the login component snippet below you can refer to.

{{< gist Bhusnar5044 6bb29c2d45fba2a07f0e6c9865b3f8c9 >}}

4. Create a landing screen for your app (eg. Dashboard).

5. Add routes setup and configure the okta

To configure the okta with the app we require information from the app integration that we created earlier to configure communication with the API: Client ID and Issuer.
The Okta React SDK requires an instance of an OktaAuth object with configuration properties. You need to set the clientId and issuer .

> _Note: create .env file with APP_CLIENT_ID, and AUTH_ISSUER (should be your Okta org URL eg. ‘https://example.okta.com’)_

I have added the configuration in the routes file, you can refer to below code snippet.

{{< gist Bhusnar5044 434d3b2c2ac98911507aa90d1e7dd5dc >}}

6. Add logout and get profile info

The okta react sdk provides the useOktaAuth hook which provides oktaAuth and authState variables. These are used to sign out the user and also to get the claim details which include profile info and other details.

{{< gist Bhusnar5044 97baa28db3d2801e1e80fcb4d36c915f >}}


&nbsp;

## Integrating okta with AWS

### Create an Amazon S3 bucket and configure CORS

1. Go to the [Amazon S3 console](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fs3%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fs3&forceMobileApp=0&code_challenge=wC5lxa3Eq4c8TBFjkc-cAWSKg9pAIxcKxqL3Yf7aouE&code_challenge_method=SHA-256)
2. Select the existing bucket or create a new bucket. Note the bucket name and region for later use.
3. Go into the bucket and open the Permission section, and click Edit CORS Configuration

Copy the below JSON and paste it into the edit box and save the changes
You can expose the file metadata info that you passed with the file in the ExposeHeaders section.

{{< gist Bhusnar5044 65c85eba3375b54ee5e9a98e72d7bafb >}}

### Create an IAM OpenID Connect Provider

1. Go to the IAM console and click the Add Provider button, select OpenID Connect, enter your Okta org URL as the Provider URL ( e.g. https://example.okta.com ), and click on Get thumbprint. Enter your Okta app Client ID as the Audience, and click Add Provider button. This will create a new identity provider and this will help to manage your user identities outside of AWS.

### Create an IAM Role and Assign Users Logged in through Okta

1. Go to the Policies section of the IAM console and click Create Policy button to create a new policy.
2. Switch to the JSON tab and add the below JSON. Please make sure you replace the YOUR_BUCKET_NAME and YOUR_OIDC_PROVIDER_URL from the JSON.
3. Click on Next and add the name for your policy (e.g. okta-policy) and finally, click on Create policy button.
4. Now go to the Roles section of the IAM console and click Create Role to create a new role.
5. Select the trusted entity type as Web identity, and select your okta org from the Identity provider drop-down list. Then select the audience from the drop-down. And click on the Next button.
6. On the Add Permission (Attach Policy) step, select the policy you just created (e.g. okta-policy), and click Next Step.
7. Add role name, edit select trusted entities, and add the below JSON then click on Create Role button.
8. Use the JSON below for policy.

> _Make sure that you replace YOUR_BUCKET_NAME and YOUR_OIDC_PROVIDER_URL in the policy._

{{< gist Bhusnar5044 a507df5eade766f53856b721e59cca01 >}}

> _Important: make sure you not down the ARN from role summary. Then bucket region, bucket name Those will be used as AWS_ROLE_ARN , AWS_REGION and AWS_S3_BUCKET_NAME ._


&nbsp;

## Let's get started with the operations.

### Libraries Used

```
@aws-sdk/client-s3
```

```
@aws-sdk/credential-providers
```

### Create Credential and S3 Client

To create or assume credentials for S3Client object we use fromWebToken method from @aws-sdk/credential-providers which accepts objects containing roleArn and webIdentityToken.

Credentials and roles are assumed for users using the application so that file upload can be directly done without telling AWS user’s details

{{< gist Bhusnar5044 65ad974ece5c8f19ccf59cbe0a39a80f >}}

To create an S3 client object We use S3Client method from @aws-sdk/client-s3 which accepts objects containing region and credentials.

{{< gist Bhusnar5044 00a1f75b97d537f5ccf52109f574205a >}}

S3Client object can be used for uploading, deleting and listing, and many other operations in an S3 bucket.

### File Upload

We can utilize the S3Client object created above for file upload, using the S3Client.send command which accepts a fileObject

A file object is created using the PutObjectCommand which takes an object as the argument. The object must contain

* Bucket - bucket name
* Key - file name and can be folders if it includes /
* ContentType - file type
* ACL - access control list
* Body - file to be uploaded, can be a string, buffer
* Metadata - object to add custom metadata for the file

### File Listing

For file listing we use ListObjectsV2Command, there is also another command ListObjectsCommand for listing. ListObjectsV2Command is the newer version command. which provides up to 1000 objects with each request. To perform this operation we require read access permission to the bucket.

You can refer to [ListObjectV2Command](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/classes/listobjectsv2command.html) for details of the input and output object

For our use case, we used the S3 bucket name to fetch records from it, you can see the code below

{{< gist Bhusnar5044 af099701ef71960416f4c90f4423412a >}}

### Accessing the Metadata of Each File

To read the metadata of each object we use HeadObjectCommand, this command is helpful only when we are interested in object metadata. This action requires read access permissions to the object.

To perform this action we also need to add CORS configurations to the bucket. In the CORS configuration, you will need to add object metadata keys that are required from the objects you can refer to the CORS JSON mentioned in this section.

You can refer to [HeadObjectCommand](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/classes/headobjectcommand.html) for more details about input parameters and response.

You can generally pass Bucket(the bucket name ) and Key(Object/resource Key) that you want to access.

{{< gist Bhusnar5044 10d220cffd1def6060bfbc82a3a612a5 >}}

We are only interested in the Metadata of the object and that’s why we are extracting it from the response

```
const { Metadata } = await s3Client.send(command);
```

For accessing details apart from Metadata you may need to check your S3 bucket roles and permissions

For the Head response, you will not get any response body. If you are checking the network section for debugging, you will not find any response body but the data is present in response headers.

### Error Messages

* If the object does not exist then it will return 404 (“no such key”)
* If the user accessing the S3 object does not have permission then it will return 403 (“access denied”)

&nbsp;

## Conclusion
So far we have learned how to create an Open Id connect app in okta, integrate okta in Single Page Application using Client Id and okta organization URL(Auth issuer), integrate okta with AWS by creating new policies and roles, Integrate AWS with react application to upload/ list files from s3 bucket using okta credentials.

We have built an app that includes end-to-end integration. You can take a reference from this application.

The source code for this tutorial is available here: https://github.com/scalereal/okta-aws-react-app

&nbsp;

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)