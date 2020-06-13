---
title:  What's this docker thing?
description: An overview of docker, how the technology has grown and its readiness to be run in production
date:   2020-01-30
categories:
  - Devops
tags:
  - Docker
  - Cloud
author: Deepak Kabbur
image: https://via.placeholder.com/800x400
thumbnail: https://via.placeholder.com/150

excerpt:
  Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another...
url: devops/2020/01/30/whats-this-docker-thing.html
---

## Building tools for mass innovation
  Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.


```python
class AlbumListView(LoginRequiredMixin, generic.ListView):
    model = Album

    def get_queryset(self):
        return Album.objects.filter(user_id=self.request.user.id)
```

```js

  render() {
    const { showPopup } = this.state
    return (
      <main className="category-page">
        <ul className="category-list">
          {
            categories.map((category, index) => <li key={category.label}>
              <Link
                to={`/videos?categoryId=${CommonMethods.labelToId(category.label)}`}
                className={`category zoom-effect category-${category.className} category-${index}`}
              >
                {category.image}
                <p className="label">{category.label}</p>
              </Link>
            </li>)
          }
        </ul>

        {showPopup && <Modal className="confirmation-popup">
          <h3 className="heading">Please click OK to close the app</h3>
        </Modal>}
      </main>
    )
  }
```

```yml
version: '3'

services:
    tango-db:
        container_name: test-db
        build: ./postgres
        restart: always
        environment:
            POSTGRES_USER: postgres
            POSTGRES_PASSWORD: postgres
        ports:
            - '7432:5432'
        networks:
            - test
        healthcheck:
            test: ['CMD-SHELL', 'pg_isready -U postgres']
            interval: 10s
            timeout: 5s
            retries: 5
```

![Image Test 150x150](https://via.placeholder.com/150)

![Image Test 800x400](https://via.placeholder.com/800x400)
