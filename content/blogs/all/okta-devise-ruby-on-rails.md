---
title:  Okta <> Devise Ruby on Rails
description: In this article, I’m going to show you how to do Simple Authentication with Okta using Devise gem.
date: 2020-05-28
categories:
  - backend
tags:
  - ruby
  - okta
  - authentication
author: Sandesh Bodake
image: /images/blog/banner/okta-devise-integration.webp
thumbnail: https://via.placeholder.com/150
url: backend/2020/05/28/okta-devise-ruby-on-rails.html
---

## History

We are implementing Single Sign-on(SSO) for one of our clients’ projects at [*scalereal*](https://scalereal.com). So, we compared various Single Sign-on(SSO) providers such as AWS-Cognito, Auth0 and Okta eventually we decided to use Okta as it was most suitable for our needs.

## What is Okta ??

It’s a SaaS product that provides cloud software that helps companies manage and secure user authentication into modern applications, and for developers to build identity controls into applications, website web services and devices.

Before going ahead create a developer account on [***Okta***](http://okta.com)

![Basic flow okta with devise app](https://cdn-images-1.medium.com/max/2000/1*WzvNLuZKtRDQ-xmX7m98RA.png)*Basic flow okta with devise app*

This is the basic flow of our rails app. we are moving step by step to integrate ***okata*** to a ***rails*** application

## **1. Create a Rails App with *PostgreSQL* or *MySQL***

    rails new your_app_name -T -d postgresql

## **2. Add following gem to Gemfile**

we are going to use [***omniauth-oktaoauth***](https://github.com/dandrews/omniauth-okta) **for** ***Strategy to authenticate with Okta via OAuth2 in OmniAuth, [***activerecord-session_store***](https://github.com/rails/activerecord-session_store) for handling sessions and [***devise***](https://github.com/heartcombo/devise)*** for handling login scenarios.

{{< gist sandeshbodake 6768055a796f22d954dfb8ddd8ffd752 >}}

Then Run command ***bundle install***

---

## **3. Install Devise**

    $ rails generate devise:install

At this point, a number of instructions will appear in the console. Among these instructions, you’ll need to set up the default URL options for the Devise mailer in each environment. Here is a possible configuration for config/environments/development.rb

    config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

Now, create a model rails generate devise User 
Add few columns to users table,

    rails g migration AddOminiauthToUsers provider:index uid:index

Before migrating database, create a table active_record session migration

    rails g active_record:session_migration

Great, we added all the necessary things, 
Now fire rake db:migrate

## **4. Build Authentication**

Next, create a config/application.yaml file to populate all necessary environment variables.

    bundle exec figaro install

Once your Okta account has been created, you’ll need to copy some Okta values into environment variables for Rails to use. Edit the newly generated config/application.yml and add the following values from your Okta tenant.

{{< gist sandeshbodake 4f7ca190d80d5855475484277b0c1d7a >}}

Once you are done with adding Okta environment variables, let’s add it to our ***Devise***. Edit devise.rb and configure omniauth authentication

{{< gist sandeshbodake a8f81193464001a2bbc493fbb52cc805 >}}

Now we should able to connect ***Devise*** to ***Okta***.

## **5. Make Application Working**

So up-to this we configure devise with Okta, Now Let’s make our application working.

Create users/ominiauth_callbacks_controller.rb

{{< gist sandeshbodake 5e119dc32ace45f2b48dc798496b6507 >}}

In this, we are handling sessions and handling env["omniauth.auth"] which is having Okta credentials.

And then add method from_omniauth in user.rb model

{{< gist sandeshbodake 48e65d3c2a7ee2e13b1392e3995b6c05 >}}

Make sure you are adding ***Devise*** with omniauthable with provider oktaoauth

Edit routes.rb like below

{{< gist sandeshbodake 4db5544a032ce2f5c52abeef203d2677 >}}

Basically I create home_controller.rb for root index,

{{< gist sandeshbodake acaab54ef0cc95f61ee33e2e431f0243 >}}

well user_is_logged_in? the method is missing ?? 
write that method in application_controller.rb

{{< gist sandeshbodake 5ec10869cea0b453f2fd219a6436ae7f >}}

Now if you start server ***localhost:3000*** you should redirect to Okta login screen like below.

![](https://cdn-images-1.medium.com/max/3684/1*gXA07_6ZoNx72_wBm9rBHw.png)

After login, it’ll redirect to OKTA_REDIRECT_URI and the session will be created.

We have successfully implemented Okta with Devise Gem. If you lost somewhere please refer my GitHub repo [**here**](https://github.com/sandeshbodake/okta-with-devise)

---

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)
