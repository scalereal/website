---
title: Managing Encrypted Secrets(Credentials) 🔐 with Rails6
description: In this article, I’m going to demonstrate to you how you can manage encrypted secrets with Rails 6.
date:   2021-04-10
categories:
  - backend
  - Rails
tags:
  - Rails
author: Sandesh Bodake
image: /images/blog/banner/managing-encrypted-secrets-credentials-with-rails6.webp
thumbnail: https://via.placeholder.com/150
url: backend/2021/04/10/managing-encrypted-secrets-credentials-with-rails6.html
---

Background
----------

Generally in the application, there are various secret keys and credentials that we need to make use of API keys, Secret keys for eg. AWS CLI login credentials etc.

Let’s talk about rails credentials now,

The way for managing secret keys in the Rails ecosystem itself.  
How different this approach is? Well, it will store secrets itself in the application but those are encrypted and to decrypt them we need a master key.

Interacting with credentials:
-----------------------------

A set of files were used to manage credentials

*   `config/credentials.yml.enc`
*   `config/master.key`

So basically `config/credentials.yml.enc` is an encrypted file that store credentials, we can safely commit this file to version control systems.

`config/master.key` contain a _key_ that is used to decrypt `config/credentilas.yml.enc` This file should be in `.gitignore`

How To add/update credentials:
------------------------------


By running the following command we can edit/update credentials.

```
$ EDITOR=vim rails credentials:edit
```

This command will open the credentials file in decrypted version.

> Note: you can change EDITOR anything you want like nano or if you’re in windows use notepad etc.

![code-snippet](https://miro.medium.com/max/1400/1\*8FPAQNuIn6cTz7vCiOxsBg.png)

When we save it, it encrypts again using the same master key.

How To read credentials?
------------------------


We can access secrets following way,

![code-snippet](https://miro.medium.com/max/1400/1\*kFcyFMma3kMTrBrDVwoQaA.png)*database.yml*

`Rails.application.secrets` will retrieve the credentials accordingly to the current rails environment.

> Note: We need to share same `master.key` to others specifically, so that they can decrypt the secrets.

Managing multi-environment credentials
--------------------------------------


To create credentials file for other environments like staging, production etc we need to use the following command.

```
rails credentials:edit --environment production
```

In Rails6 we can create environment wise secrets and their keys.

This command will create the following files inside the folder of `/config`

*   `config/production.yml.enc`
*   `config/production.key`

For accessing keys we can use the following command

```
Rails.application.secrets[:aws][:access_key_id]
```

Conclusion
----------

*   By encrypting secrets helps provide data **security** for sensitive information.
*   Managing secrets for different environments makes it easier.
*   Removes extra overhead for managing secrets.

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)
