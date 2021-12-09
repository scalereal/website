---
title:  Django Setup for Enterprise Applications
description: In this article, I’m going to show you how to do Setup of Django for Enterprise Applications.
date: 2020-09-10
categories:
  - Python
  - Django
tags:
  - Python
  - Django
  - Project Setup
author: Deepak Kabbur
image: /images/blog/banner/django-setup-for-enterprise-applications.webp
thumbnail: https://via.placeholder.com/150
url: python/2020/09/10/python/django-setup-for-enterprise-applications.html
keywords: Python, Django, Scalereal, Project Setup, Deepak Kabbur, Clean Code 
---

## Table of Contents

1. **[Introduction](\#1-introduction)**
2. **[Audience](\#2-audience)**
3. **[Prerequisites](\#3-prerequisites)**
4. **[Let's Start Project](\#4-letss-start-project)**
5. **[Setup Directory Structure](\#5-setup-directory-structure)**
6. **[Setup Custom User app](\#6-setup-custom-user-app)**
7. **[Setting Environment Variables](\#7-setting-environment-variables)**
8. **[FAQ](\#7-faq)**

### 1. Introduction

Django is a very popular Python Web framework that encourages rapid development and clean, pragmatic design. Its free and Open Source. Some of the busiest sites on the Web leverage Django’s ability to quickly and flexibly scale.
>**Today will discuss about Django setup and directory structure which helps to scale and maintain the project in the long run.**


### 2. Audience

-   Who have basic knowledge of Django.
-   Who desire to learn advance Django.
-   Developer/Professional/Student who wants to scale Django project.
-   Company to start Enterprise Web application with Django.
-   Of Course! Who loves Django.

### 3. Prerequisites

1. **Mac/Linux/Windows with [Python](https://www.python.org/) Installed**(Preferred Latest Version with [Pyenv](https://github.com/pyenv/pyenv)).
2. **[Pipenv](https://pypi.org/project/pipenv/)/Pip package manager.**
3. **[Github](https://github.com/) Repository (Optional) or any other version control tool.**

#### Verify setup

```bash
$ python --version
Python 3.8.0

$ pipenv --version
pipenv, version 2018.11.26
```

### 4. Lets's Start Project

I believe system setup is done as prescribed in prerequisites section and verified. Create new directory in workspace.

```bash
$ cd workspace/python
$ mkdir demo
$ cd demo
```

#### **4.1 Lets create virtual environment using `pipenv`.**

```bash
$ pipenv --python 3.8.0
Creating a virtualenv for this project…
Pipfile: /Users/home/projects/python/nyasa-api/Pipfile
Using /Users/home/.pyenv/versions/3.8.0/bin/python3 (3.8.0) to create virtualenv…
.
.
.
 Successfully created virtual environment!
Virtualenv location: /Users/home/.local/share/virtualenvs/nyasa-api-yFS2yA7M
Creating a Pipfile for this project…
```

#### **4.2 Install Django package**

Below command install latest version of [Django](https://www.djangoproject.com/).

```bash
$ pipenv install django
Installing django…
Adding django to Pipfile's [packages]…
✔ Installation Succeeded
```

#### **4.3 Start django project**

```bash
$ django-admin startproject demo .
$ python manage.py startserver
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).

You have 17 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.

September 09, 2020 - 16:22:26
Django version 2.2.16, using settings 'nyasa.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

#### **Congratulations!**

You have successfully created project. Check default Django home page at `http://127.0.0.1:8000`

### 5. Setup Directory Structure

Now we comes to important step of project setup. Before going to change directory structure lets understand why we changing it.

#### **Is it mandatory to change directory structure?**

> No but its good to be organized. What you think ha?

#### **Why Directory structure is important?**

> Directory structure is very important for any project.
> **How we plan for Home before constructing like Living room, Kitchen, Bedroom etc... every space has its own importance and purpose.
> Same in project directory structure each directory has its own importance and purpose.**

#### **Directory Structure we going to create and its purposes.**

-   `apps` this directory contains all the future apps created using `startapp` command.
-   `config` contains all the configurations and settings related to project.
-   `common` all common code, modules or utils.
    These are the important directories. We can add more as per requirement or need.

###### Note : create `__init__.py` file inside each directory. We use it as Python package.

#### **5.1 Add `apps` package inside demo directory.**

```bash
$ cd  demo
$ mkdir apps
$ touch apps/__init__.py
```

Lets configure Django to consider `apps` directory as parent of all apps.

Open `demo/settings.py` and add following line.

```python
import sys

sys.path.insert(0, os.path.join(BASE_DIR, "apps"))
```

#### **5.2 Add `config` package. Goto parent directory.**

This directory contains the all the settings, urls and wsgi.py related to project.

```bash
$ cd ..
$ mkdir config
$ cd config
$ touch __init__.py
$ mkdir settings
$ touch settings/__init__.py
$ touch settings/django.py
```

-   Copy all the contents of `demo/settings` to `config/settings/django.py`
-   Move `wsgi.py` and `urls.py` files to `config`.
-   Update BASE_DIR, WSGI_APPLICATION, ROOT_URLCONF `config/settings/django.py`

```python
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
WSGI_APPLICATION = "demo.config.wsgi.application"
ROOT_URLCONF = "demo.config.urls"
```

-   Update settings module in `manage.py`

```python
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'demo.config.settings.django')
```

Run the local server and verify its working correctly.

#### **5.3 Add `common` package same as we added `apps` and `config`. Which contains the common code which is applicable to whole project.**

### 6. Setup Custom User app

Now its time to create custom user app.

The purpose of custom app

-   Full control on `User` model.
-   Full control on `Authentication` and `Authorization`.
-   Flexibility add new `fields` to `User` model.
-   Segregate `User` related features/code in one place.
-   Add more flexibility while developing `API` related to `User`.

#### **6.1 Create custom user app.**

```bash
$ cd demo/apps
$ mkdir users
$ cd ../..
$ django-admin startapp  users  ./demo/apps/users/
$ ls demo/apps/users/
__init__.py admin.py    apps.py     migrations  models.py   tests.py    views.py
```

#### **6.2 Create `User` model.**

Add following lines to `apps/users/model`

```python
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        _("email address"), unique=True, blank=False, max_length=254, validators=[]
    )

    active = models.BooleanField(_("active"), default=False, help_text=_("Active user"))

    first_name = models.CharField(_("First Name"), max_length=254, blank=True)
    last_name = models.CharField(_("Last Name"), max_length=254, blank=True)
    is_active = models.BooleanField(default=True)
    is_email_verified = models.BooleanField(default=False)
    is_staff = models.BooleanField(
        _("staff status"),
        default=False,
        help_text=_(
            "Designates whether the user can log into this admin site."
            "Unselect this instead of deleting accounts."
        ),
    )
    date_created = models.DateTimeField(_("date created"), default=timezone.now)

    USERNAME_FIELD = "email"

    def save(self, *args, **kwargs):
        self.email = self.email.lower()
        super(User, self).save(*args, **kwargs)

    def __str__(self):
        return self.email

    class Meta:
        verbose_name_plural = "users"
        ordering = ["-date_created", "email"]
        indexes = [
            models.Index(fields=["email"]),
            models.Index(fields=["first_name", "last_name"]),
        ]
```

#### **6.3 Configure user app.**

add following line to `config/settings/django.py`

```python
AUTH_USER_MODEL = "users.User"
# configure users app. Add it to INSTALLED_APPS at end.
INSTALLED_APPS = [
    '...',
    'users'
]
```

#### **6.4 Make Migrations**

```bash
$ python manage.py makemigrations
Migrations for 'users':
  nyasa/apps/users/migrations/0001_initial.py
    - Create model User
    - Create index users_user_email_6f2530_idx on field(s) email of model user
    - Create index users_user_first_n_6d862e_idx on field(s) first_name, last_name of model user
```

#### **6.5 Run Migrations**

```bash
$ python manage.py migrate
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, sessions, users
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0001_initial... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying auth.0012_alter_user_first_name_max_length... OK
  Applying users.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying sessions.0001_initial... OK
```

#### **6.6 Verify server is running.**

```bash
$ python manage.py runserver
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
September 09, 2020 - 19:41:22
Django version 3.1.1, using settings 'nyasa.config.settings.django'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

### 7. Setting Environment Variables.

Purpose of environment variables

- Hide the confidential data like `credentials`, `secrete keys`, `API tokens/credentials` etc.
- Never add credentials in code.
- Flexibility to set credenatials environment `dev/test/production`.
- Flexibility to developers to setup in local.
- Never push `credentials` or `confidential` data to versioning tool.

#### **7.1 Install [django-environ](https://pypi.org/project/django-environ/) package.**
```bash
$ pipenv install django-environ
Installing django-environ…
Adding django-environ to Pipfile's [packages]…
✔ Installation Succeeded
Pipfile.lock (91d23f) out of date, updating to (a6086c)…
Locking [dev-packages] dependencies…
Locking [packages] dependencies…
✔ Success!
```

#### **7.2 Create `.env` file in parent directory.**
```.env
DEBUG=on
SECRET_KEY=your-secret-key
```
**NOTE: Add `.env` to `.gitignore`. Never push this file to repository.**

#### **7.3 Configure `djnago-environ`. In `demo/settings/django.py` add following.**
```python
# Set parent directory for environ
base = environ.Path(__file__) - 4
# Rediang file and export env variables
environ.Env.read_env(env_file=base(".env"))
env = environ.Env()

# update following
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env("DEBUG")
```
#### **7.4 Auto export of `environment variables`.**
Wheneever we activate pipenv shell `environment variables` are set.
```bash
$ pipenv shell
Loading .env environment variables…
Launching subshell in virtual environment…
 . /Users/home/.local/share/virtualenvs/nyasa-api-yFS2yA7M/bin/activate
```
### Hurray!. Setup is done.

#### [Django Setup for Enterprise Applications Repository](https://github.com/deepakkabbur/django-setup)

#### Using this repository as template for your new project.
```bash
$ mkdir demo
$ cd demo
$ django-admin startproject demo . --template https://github.com/deepakkabbur/django-setup/archive/master.zip
```
**NOTE: Please read [Documentation](https://github.com/deepakkabbur/django-setup). If your are using it as template**
### 8. FAQ

#### **8.1 Error `ImportError: Couldn't import Django` ?**

> activate virtual environment
>
> ```bash
> $ pipenv shell
> ```

#### **8.2 Error `ModuleNotFoundError: No module named users`**

> Update `BASE_DIR` as mentioned above. Refer to `5.2` and `6.3`
