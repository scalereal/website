---
title: Custom Model Managers In Django
date: 2020-09-14
categories:
  - backend
tags:
  - Django Modal
  - Custom Model Manager
  - Django
author: Sagar Chopade
image: /images/blog/banner/custom-model-managers-in-django.png
thumbnail: https://via.placeholder.com/150
url: android/2020/07/28/custom-model-managers-in-django.html
---

### Why we use Django Manager?🤔

A Manager is the interface through which database query operations are provided to Django models. At least one Manager exists for every model in a Django application.objects is the default manager of every model that retrieves all objects in the database.

    class Post(models.Model):
         title = models.CharField(max_length=200)
         content = models.TextField()     
         created = models.DateTimeField(auto_now_add=True)     
         updated = models.DateTimeField(auto_now=True)
         active = models.BooleanField(default=False)

    def __str__(self):
             return self.title

As we know objects is the default model manager for every model, therefore Post.objects.all() will return all post objects.

### What is the need to write Custom Model Manager?

* To add extra Manager methods.

* To modify the initial QuerySet the Manager returns.

Let’s create a model manager to retrieve all the published posts.

Using the objects manager published posts can be retrieved with the following query.

    Input: Post.objects.filter(active=True)
    Output: <QuerySet [<Post: My Post First Post>, <Post: Second post>]>

We will build a custom model manager called published to retrieve the published posts.

    class PublishedManager(models.Manager):
         def active_post(self):
             return super(PublishedManager, self).get_queryset().filter(active=True)
    class Post(models.Model):
        # Model managers 
        objects = models.Manager()  # The default manager.
        published = PublishedManager()  # Our custom manager.
        def __str__(self): 
            return self.title

Now we can retrieve posts with the custom model manager as follows.

    Input : Post.published.active_post()   
    Output: <QuerySet [<Post: My Post First Post>, <Post: Second post>]>  
    Input : Post.objects.filter(active= True)      
    Output: <QuerySet [<Post: My Post First Post>, <Post: Second post>]>

The custom model manager’s active_post() returns a QuerySet object, thus you can useall(), filter(), exclude() and all the other QuerySet methods on it.

---

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)
