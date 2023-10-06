---
title: Million Tweets and Counting:- How Snscrape Can Help You Scrape Big Data on Twitter!
description: In this article, we understand How Snscrape Can Help You Scrape Big Data on Twitter
date: 2023-04-04
categories:
  - backend
tags:
  - Python
  - Twitter
  - Scraping
  - Snscrape
author: Akash Shrivastava
image: /images/blog/banner/million-tweets-and-counting-how-snscrape-can-help-you-scrape-big-data-on-twitter.webp
thumbnail: https://via.placeholder.com/150
url: backend/2023/04/04/million-tweets-and-counting-how-snscrape-can-help-you-scrape-big-data-on-twitter.html
---

Hey, there fellow Django and Python enthusiasts! At ScaleReal we work extensively on Python/Django Applications and have built a lot of highly scalable applications for various clients of ours.

While working on such apps, we explored scraping tweets using Snscrape. In this article, we’ll be learning more about it. So, let’s get started!

**Here’s a list of everything which will be covered in this article:**

1. What is Snscrape?
2. Why Snscrape?
3. Other available options
4. Installing snscrape
5. Using snscrape from CLI
6. Using snscrape from Python Wrapper

## What is snscrape?

[snscrape](https://github.com/JustAnotherArchivist/snscrape) is a scraper for social networking services (SNS). It scrapes things like user profiles, hashtags, or searches and returns the discovered items, e.g. the relevant posts.

Interestingly, snscrape is not just for scraping tweets but is also used across various social networking sites like Facebook, Instagram, Mastodon, Telegram, Reddit, VKontakte, and Weibo (Sina Weibo).

> _**Now you might be wondering, is it even legal to scrape data from Twitter?**_

Yes, it is very much legal to scrape data available on Twitter. You can extract publicly available information, but you should be aware that the data extracted might contain personal data.

Twitter “ tolerates” polite crawlers. However, if the scraped data is publicly posted unconventionally, Twitter can shut down any API access you might have, and potentially take action against your account.

## Why snscrape?

![](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmE4emh3dzYxdTJwam5yMHJ6bXNkYmQxeW45NnJrb2VwNHY3NnNjMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3cXmze4Y8igXdnkc3U/giphy.gif)

If you want to acquire an endless number of tweets, you should use Snscrape. But if you want to use extra features that Snscrape cannot provide (like geolocation, for example), then you should definitely use Tweepy. It is directly integrated with the Twitter API and provides complete functionality.

## Other available options

**1. Tweepy**

[Tweepy](https://github.com/tweepy/tweepy) is one of the most popular Python libraries to set up access to Twitter. You create a Twitter Developer Account, get credentials and start scraping. It is a great tool for simple automation, creating Twitter bots, or a small school project. However, Tweepy has a scraping limit of 3200 tweets and the farthest time you can go in a week. There is no access to historical data.

**2. GetOldTweets3**

Twitter has removed the endpoint the [GetOldTweets3](https://github.com/Mottl/GetOldTweets3) uses and that makes GOT no longer useful. You will find a LOT of projects on GitHub that used GetOldTweets3 but as of May 4, 2020, there have been no updates to the package to adhere to the revised Twitter guidelines.

**3. TWINT**

[Twint](https://github.com/twintproject/twint) is an advanced tool written in Python but Twitter apparently has a more strict device + IP-ban after a certain amount of queries. It’s a hit or miss. A lot of people have issues installing it. The library's author recommends temporarily using a Dockerfile while the solution becomes clearer. You can know more about TWINT from here.

**4. Octoparse**

[Octoparse](https://www.octoparse.com/) is a paid software that allows you to get data from the web without coding by automatically extracting content from the webpage. Basically, you select a frame on the webpage and scroll down to a point where you see an end to your scraping.

## Installing snscrape

```
pip3 install snscrape
```

However, this will not be the developer version. Instead, we’ll be using the below command to download the snscrape dev version:

```
pip3 install git+https://github.com/JustAnotherArchivist/snscrape.git
```

_💡 Note: To run git CLI commands, you have to have git installed before running your pip command. If you do not perform the said step, the above command will clone the repository from GitHub but will not execute if git is not installed._

## Using snscrape


There are two ways of using snscrape

1. Using the command prompt, terminal
2. Using Python Wrapper

### 1. Using snscrape from the command prompt, terminal (Converting JSON files for Python)

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*mdSG5Uk_vIrpmYLLrGiu-Q.jpeg)

Whether you run your commands directly in the terminal or through Python, it is a two-step process where you scrape the data into a JSON file and then convert the data to be useable in Python. This section will cover scraping with the CLI commands, then using Pandas to read the JSON file.

In the example below, we’re scraping 100 tweets from Twitter user @jack. The code is entered in a command prompt/terminal. The code uses several optional arguments explained below.

* -jsonl Outputs the data in a JSON format allowing you to access tweet information. Otherwise, you’ll only receive direct links to the tweets.
* -progress Allows us to get updates from the CLI letting us know the progress of the scraping. It updates every 100 tweets. Does not appear to work when using Python with CLI.
* -max-results # Puts a cap on the number of tweets scraped.

```
snscrape --jsonl --progress --max-results 100 twitter-search "from:jack" > user-tweets.json
```

**Scraping historical tweets from a text search query:**

In the example below, we’re scraping 500 tweets between June 1, 2022, and July 31, 2022, with the text query “its the elephant” The below code has two new arguments.

* -since Sets lower bound date limit on query
* “until:” Sets upper bound date limit on query

```
snscrape --jsonl --progress --max-results 500 --since 2022-06-01 twitter-search "its the elephant until:2022-07-31" > text-query-tweets.json
```

It’s important to note here that — since is an optional argument you can use, but until: is an operator used inside the twitter-search query. This may seem odd, but it has given me more consistent results than putting both arguments inside the query like below.

```
snscrape --jsonl --progress --max-results 500 twitter-search "its the elephant since:2020-06-01 until:2020-07-31" > text-query-tweets.json
```

You can try both methods and see what gives you better results. However, the first method using — since has been more consistent in giving results so far.

## Using CLI with Python

If you don’t like working directly in the terminal, Python’s OS library allows us to execute CLI commands in Python. It essentially just runs the exact same commands from above but in Python.

**Scraping a specific Twitter user’s tweets:**

```
import os

# Using OS library to call CLI commands in Python
os.system("snscrape --jsonl --max-results 100 twitter-search 'from:jack'> user-tweets.json")
```

**Scraping historical tweets from a text search query:**

```
import os

# Using OS library to call CLI commands in Python
os.system("snscrape --jsonl --max-results 500 --since 2022-12-01 twitter-search 'its the elephant until:2023-01-17' > text-query-tweets.json")
```

If you find the above code does not work because of an error with the “and”, this might be due to how your OS handles the double/single quotations. The above code works on Windows OS. If you find the above code providing errors hopefully the solution proposed below will help you.

```
import os

# Using OS library to call CLI commands in Python
os.system("snscrape --jsonl --max-results 500 --since 2022-12-01 twitter-search \"its the elephant until:2023-01-17\" > text-query-tweets.json")
```

## Converting JSON files to be usable in Python

Perfect, our data is available in a JSON file but how can we interact with it? The code below shows how we can use the Pandas library to convert the JSON files into a data frame so we can interact with it in Python.

```
import pandas as pd

# Reads the json generated from the CLI commands above and creates a pandas dataframe
tweets_df = pd.read_json('text-query-tweets.json', lines=True)

```

It’s really that simple. You can interact with the JSON data in whatever way you want now that it’s stored as a Pandas data frame. You can export it as a CSV file or Excel file, or modify the data in the Pandas data frame. It’s up to you!

## 2. Using snscrape via Python Wrapper

![](https://miro.medium.com/v2/resize:fit:828/0*Ao8IEMTLozRSSc--)

Wrappers around functions in Python allow modifying the behavior of a function or class. Basically, the wrapper wraps a second function to extend the behavior of the wrapped function, without permanently altering it.

![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*zo44QT5Z6vMMjwTnp6LWgg.png)

> _💡NOTE: The execution time remains the same, regardless of the number of attributes you declare._

**Scraping a specific Twitter user’s tweets**

Using the below code, we can scrape 1000 tweets from Twitter user @jack. We can then pull the DateTime, tweet id, text, and username attributes from the tweet object.

```
# importing libraries and packages
import snscrape.modules.twitter as sntwitter
import pandas

# Creating list to append tweet data 
tweets_list1 = []

# Using TwitterSearchScraper to scrape data and append tweets to list
for i,tweet in enumerate(sntwitter.TwitterSearchScraper('from:jack').get_items()): #declare a username 
    if i>1000: #number of tweets you want to scrape
        break
    tweets_list1.append([tweet.date, tweet.id, tweet.content, tweet.user.username]) #declare the attributes to be returned
    
# Creating a dataframe from the tweets list above 
tweets_df1 = pd.DataFrame(tweets_list1, columns=['Datetime', 'Tweet Id', 'Text', 'Username'])
```

**Scraping tweets from a text search query**

Using the code below, we are scraping 5000 tweets between January 1, 2022, and May 31, 2022, with the keywords ‘COVID Vaccine’. We can then pull attributes DateTime, tweet id, text, and username from the tweet object.

```
import snscrape.modules.twitter as sntwitter
import pandas

# Creating list to append tweet data to
tweets_list2 = []

# Using TwitterSearchScraper to scrape data and append tweets to list
for i,tweet in enumerate(sntwitter.TwitterSearchScraper('COVID Vaccine since:2022-01-01 until:2022-05-31').get_items()):
    if i>5000:
        break
    tweets_list2.append([tweet.date, tweet.id, tweet.content, tweet.user.username])
    
# Creating a dataframe from the tweets list above
tweets_df2 = pd.DataFrame(tweets_list2, columns=['Datetime', 'Tweet Id', 'Text', 'Username'])
```

That’s it from my side devs! 👨‍💻 Thanks for reading!


&nbsp;

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.

So, If you found this helpful please give some claps 👏 and share it with everyone.

Sharing is Caring!

Thank you ;)