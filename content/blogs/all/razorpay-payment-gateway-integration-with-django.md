---
title: Razorpay Payment Gateway Integration with Django 💳 👨‍💻
description: In this article, we will look at how to integrate Razorpay payment gateway with Django framework.
date:   2021-12-20
categories:
  - backend
tags:
  - backend
  - razorpay
  - payments
author: Nishant Handge
image: /images/blog/banner/razorpay-payment-gateway-integration-with-django.webp
thumbnail: https://via.placeholder.com/150
url: backend/2021/12/20/razorpay-payment-gateway-integration-with-django.html
---


**Have you ever wondered “how do I receive online payments on a new cool app that I have built using my favorite framework, Django”?** ⚡

I did too and after a bit of digging about what are the available payment gateways that work in India I came up with the list of 5–6 payment gateways.

Out of those, Razorpay stood out to me with the range of financial products and solutions it provides. Also, their APIs are really well built. So, I chose to use Razorpay as my payment gateway.

So fellow Pythonistas, in this article I will give the basic outline of how to integrate a Razorpay payment gateway into your website.

Thinking about how the Razorpay payment gateway works🤔 Let's see
-----------------------------------------------------------------

![](https://miro.medium.com/max/1400/1*MAKGI6vuc29xgbCTJm54lA.png)source: razorpay.com

Steps to integrate Razorpay payment gateway 🚀
-----------------------------------------------

### STEP 1 - Setting up Razorpay account

To use Razorpay you will have to first configure it. Following are the steps:

*   Go to [razorpay.com](http://razorpay.com/) → Sign up → Go to the settings.

![](https://miro.medium.com/max/1400/1\*J9t7YOoree4avMGTIJ2Bqw.png)*source: razorpay.com*


*   Now click on the API Keys tab.

![](https://miro.medium.com/max/1400/1\*ewjfij2uOI\_mNbsGT23GHQ.png)*source: razorpay.com*

*   Now, Click on Generate API keys button.

![](https://miro.medium.com/max/1400/1\*ewjfij2uOI\_mNbsGT23GHQ.png)*source: razorpay.com*


*   This will generate a new key and show you the `Key Id`and `Key Secret`in a popup. Below these fields, you will see a link to Download Key Detail, click on that and let the download complete.

![](https://miro.medium.com/max/1400/1\*wjBX1L5jXrGjeMHTPC\_ZFA.png)*source: razorpay.com*


### STEP 2 - Store the downloaded API keys in your settings.py file

{{< gist Nishant127 841704036b7b7ac79ef6a89295fe930a >}}

> Note: Do not store these secrets in the setting file of your production projects rather read it through Env variables or some secret-vault like AWS Secret Manager or Hashicorp Vault.

### STEP 3 - Install Razorpay library

```
pip install razorpay
```

### STEP 4 - Create the Order Schema

{{< gist Nishant127 b1bfe7ab581ff9149e5d76a09f123db4 >}}

*   We are importing `PaymentStatus` from constants.py file.

{{< gist Nishant127 13898538d35a024b4d93a592b1b4a6ea >}}

### STEP 5 - Creating Razorpay order

*   First, let's create the template to take input from the user.

{{< gist Nishant127 72617e9a318f6b5adde5555a3aa994ee >}}

*   Now we will create an **order\_payment** view to create order at the backend.
*   And after that will create a **Razorpay order** using the **API keys**.

> **💡 For every payment, a Razorpay order needs to be created. It is compulsory to create orders to capture payments automatically.**

*   We are creating Razorpay order using the **Orders API**. It is a server-to-server call that is secured by basic auth using your **API keys**.

{{< gist Nishant127 1dd71f0d90835338640911c2d2a7d82f >}}

> 💡 **Amount in Razorpay works in subunits of currency i.e Rs 700 would become 70000 paise. That’s why we multiplied the amount by 100.**

*   🧐Let’s see the **response object** of **Orders API** that we are storing in **razorpay\_order**

```
{
  "id": "order_IX37nLMvHfLsSO",
  "entity": "order",
  "amount": 789600,
  "amount_paid": 0,
  "amount_due": 789600,
  "currency": "INR",
  "receipt": null,
  "offer_id": null,
  "status": "created",
  "attempts": 0,
  "notes": [],
  "created_at": 1639418188
}
```

> **Wondering why we passed callback\_url🤔**

After payment, users will be **redirected** to this **URL** on successful payment and failed payment.

*   Let’s create a template to load **Razorpay’s javascript code** that will render the payment window.

{{< gist Nishant127 33fe2c71f9661c47f98bca7062412a76 >}}

> 💡 **Significance of redirect parameter**

*   The redirect parameter will determine whether to **POST** response to the event handler post-payment completion or **redirect** to the **callback URL**.  
    _a. When a_ **_redirect_** _is_ **_true_** _user is redirected to the specified callback URL in case of payment failure._  
    _b. When a_ **_redirect_** _is_ **_false_** _user is shown the Checkout popup to retry the payment._
*   **Setup urls.py file**

{{< gist Nishant127 ed0e02cfb0ae0da3fb82f17b21252ca4 >}}

### STEP 6 - Making Payment

*   As the Razorpay javascript loads, the user can make payments with **test** **credentials**.
*   Handling the successful and failed payment is done with the help of the **callback URL**.

![](https://miro.medium.com/max/1400/1\*qFwAeb0xDHPun2TvxFmtMw.png)

### STEP 7 - Handling Successful and Failed payment.

*   Let’s create a callback view to handle successful and failed payments.

{{< gist Nishant127 c9c41e61f682b650ca16f7f5478b07fb >}}

> 💡 **As POST request will be made by Razorpay and it won’t have the csrf token, so we need to** `csrf_exempt` **this url.**

*   **Successful Payment** 😁  
    1\] In the case of successful payment, Razorpay will make a POST call to the callback URL that we have provided, with the `razorpay_payment_id`, `razorpay_order_id`, and `razorpay_signature` in the response object.

```
{
  "razorpay_payment_id": [
    "pay_IXFfPM0ZmuZCZO"
  ],
  "razorpay_order_id": [
    "order_IXFfAUmWgMbCIS"
  ],
  "razorpay_signature": [
    "2b5ea94bed0391ab682df3799667d784a8b99a05cb76f6024669d32775207c99"
  ]
}
```

*   2\] For successful payment, the **Payment signature verification** step is mandatory, it allows to confirm the authenticity of the details returned to the checkout for successful payments. If the Payment signature verification is successful, the method will return None.
*   **Failed Payment** 😥  
    1\] In the case of failed payment, the **Checkout Form** is displayed again to retry the payment when a **callback URL** is not provided at the backend.  
    2\] But when a callback URL is provided, Razorpay will make a **POST call** to the **callback URL** that we have provided, with the `error[code], error[description], error[source], error[metadata], error[reason], error[step] in the response object.`

```
{  
  "error[code]": [  
    "BAD_REQUEST_ERROR"  
  ],  
  "error[description]": [  
    "Payment failed"  
  ],  
  "error[source]": [  
    "gateway"  
  ],  
  "error[step]": [  
    "payment_authorization"  
  ],  
  "error[reason]": [  
    "payment_failed"  
  ],  
  "error[metadata]": [  
   {\"payment_id\":\"pay_IXFh8UJEl2qWhf\",\"order_id\":\"order_IXFgz9yst1G3uw\"}"
  ]  
}
```

> ✅ **We can check all these payments on Razorpay dashboard**

![](https://miro.medium.com/max/1400/1\*fdA2-yzwIOd3V98Egl6GnQ.png)


**_That’s all folks 🎉. We have successfully implemented the Razorpay payment gateway on our website. These were the minimal configurations to get work Razorpay payment gateway in our Django project._**

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank You :) 🙏

If you need any help, you can contact me on [LinkedIn](https://www.linkedin.com/in/nishant-handge/), [Github](https://github.com/Nishant127), [Twitter](https://twitter.com/nishant_127000).

Resources:
----------

[GitHub - scalereal/razorpay-integration-django: Basic implementation of Razorpay payment gateway 💳](https://github.com/scalereal/razorpay-integration-django)
