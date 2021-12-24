---
title: Integrating Stripe Webhooks with Rails
description: In this blog, we will explore how to integrate stripe webhooks with rails.
date:   2021-11-13
categories:
  - backend
  - Rails
tags:
  - Rails
author: Kunal Kumbhar
image: /images/blog/banner/integrating-stripe-webhooks-with-rails.webp
thumbnail: https://via.placeholder.com/150
url: backend/2021/11/13/integrating-stripe-webhooks-with-rails.html
---

What is Stripe?
----------------

Many of you probably already know what Stripe is and that is the reason you have stumbled upon this article, but for the people who do not know what Stripe is here is a quick introduction to Stripe: Stripe is a well-known Payment Processing Software that can be used to transfer money, using different methods, from one bank account to other.

In this article, we will be discussing Stripe Webhooks and how to use them.

What is a webhook?
----------------

A webhook is just an HTTP callback that is triggered when a certain event occurs. You can consider them like APIs that you build in your web applications, but the only difference is that you don’t need to have an HTTP request to trigger a webhook. Webhooks get automatically triggered when an event occurs. Here’s a diagram to explain how a webhook works:

![](https://miro.medium.com/max/1400/1\*\_PoOFECaM8knZIch7uXDpw.png)

Stripe Webhooks
----------------

According to [Stripe Documentation](https://stripe.com/docs/webhooks),

_“Stripe uses webhooks to notify your application when an event happens in your account. Webhooks are particularly useful for asynchronous events like when a customer’s bank confirms a payment, a customer disputes a charge, a recurring payment succeeds, or when collecting subscription payments.”_

So, to further simplify the above statement, whenever a type of event(Eg. Transaction is made, Subscription is created, etc.) occurs we use Stripe Webhooks to get information(Eg. Status of payment, Transaction ID, etc.) related to that event. The information, related to a transaction, which you are able to see in your Stripe Dashboard can be accessed into your application by using these Webhooks.

How to Use Stripe Webhooks
--------------------------

Let’s consider a situation where we need to send an email to the person who has successfully paid an invoice.

The flow will be as follows:

![](https://miro.medium.com/max/1400/1\*FrJOAaeZ4InUTv-r6VxCRA.png)

For this, we need to have a mailer to help in sending mails and StripeEvent gem which will help us in triggering the mail whenever an invoice payment is successful. You can read more about mailers and how to create them [here](https://guides.rubyonrails.org/action_mailer_basics.html). After making some required changes this is how the mailer will look like:

{{< gist mrfamouskk7 64adc971f8e9a3725959d6602175ee9f >}}

We will also create a simple view for our order\_successful\_email method.

{{< gist mrfamouskk7 4edbe6babec7edc6d4b90bf7c881c121 >}}


Now, as we are done with the mailer part, let’s implement the part which will trigger the emails using webhooks.

To implement this part you will have to create an endpoint for your webhook through [Stripe Dashboard](https://dashboard.stripe.com/test/webhooks). You will need an endpoint URL and the event that the webhook will listen to. Now if you are using localhost, you will have to create a public URL to use as your endpoint URL in the stripe dashboard. You can use Ngrok to create a public URL. Here is how you can create a Public URL using Ngrok:

1.  Create an Account on [Ngrok](https://ngrok.com/).
2.  Download and unzip your Ngrok files.
3.  Connect your auth token to Ngrok.
4.  Finally run the command: ./ngrok http 3000

You will get a public URL similar to this:

![](https://miro.medium.com/max/1400/1\*mnZ6BCSxH3fI2J8HIAERIQ.png)

[_https://some-random-numbers-here.ngrok.io/_](https://some-random-numbers-here.ngrok.io/)

We can use this URL to create an endpoint for our webhook. Let’s keep our endpoint URL as

[_https://some-random-numbers-here.ngrok.io/webhooks_](https://some-random-numbers-here.ngrok.io/webhooks)

and we need to listen to “_invoice.paid”_ event. This should look like this 👇

![](https://miro.medium.com/max/1400/1\*vy6cPsD4z3bI2HM76usYCw.png)

We also need to add this route to our routes file. To add this endpoint to our routes add the below-given line to your _routes.rb_ file.

{{< gist mrfamouskk7 5f452eee1d94f5b1f9ea08a3afd43c2f >}}

Now we need to trigger the mailer whenever an event occurs. This can be done by using the following code:

{{< gist mrfamouskk7 4ad909e99a57ae47108cca7b626a05ef >}}

We use signing secrets to verify that the webhook request is genuine and it’s not coming from a server acting like Stripe.

Summary
-------

*   Webhooks are easy to set up and do not take up a lot of resources.
*   They are fast and provide real-time information/updates.
*   You do not have to check whether an event has occurred or not, Webhooks automatically send the data as soon as an event occurs.

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)

Here I have used Rails credentials to store all credentials related to Stripe. To know more about how to use Rails credentials you can check out this article down below.

[

Managing Encrypted Secrets(Credentials) 🔐 with Rails6
------------------------------------------------------

### Background:

medium.com

](https://medium.com/scalereal/managing-encrypted-secrets-credentials-with-rails6-7bb31ca65e02)

To know more about Stripe Webhooks and signatures here are the official docs:

[

Use incoming webhooks to get real-time updates
----------------------------------------------

### Stripe uses webhooks to notify your application when an event happens in your account. Webhooks are particularly useful…

stripe.com

](https://stripe.com/docs/webhooks#signatures)[

Check the webhook signatures
----------------------------

### Stripe can optionally sign the webhook events it sends to your endpoints by including a signature in each event's…

stripe.com

](https://stripe.com/docs/webhooks/signatures)
