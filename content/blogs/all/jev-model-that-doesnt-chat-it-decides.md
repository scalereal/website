---
title: Jev - Model that doesn’t chat, it decides!
description: >-
  Jev is a decision-focused AI model designed to help software make fast, reliable, and cost-effective decisions. Instead of generating long text responses, it selects from predefined options and provides confidence scores, making it useful for tasks like ticket routing, data classification, and AI agent tool selection.
date: '2026-10-27'
author: ScaleReal Team
image: '/images/blog/img_1792818051707_6034.png'
url: jev-model-that-doesnt-chat-it-decides
draft: false
---

A look at the new AI model built for software. Ask any AI Chat application (like ChatGPT) a simple question, and you’ll often get a paragraph back. That’s fine when you’re the one reading it.

But what if your code is the one asking?

The code doesn’t want a paragraph. It wants one answer. “Billing.” “Urgent.” “Yes.”

That’s the idea behind **Jev**, a new AI model from TypeSafe AI that launched in September 2026.

# What is Jev?

Jev is a decision model. You give it three things:

1. Some input, like an email or a support ticket
1. A question
1. The list of answers you’ll accept

It gives back one of those answers, with a probability for each option. That’s it. No sentences. No explanation. Just numbers that code can use right away.

Think of it as ready-made classifier. Normally you’d need to train a classifier on your own data first. With Jev you just describe your categories in plain English.

**Example**: A support ticket comes in. You have four teams: billing, technical, account, general.

Ask Jev: *Which team should handle this?*

Jev replies: 

> billing:   0.88
technical: 0.05
account:   0.04
general:   0.03

The code picks billing and moves on.

---

# Who’s behind it?

**Diogo Almeida** founded Typ**eSafe AI** and co-invented RLHF and InstructGPT, the techniques that made ChatGPT work. He previously worked at Google Brain and OpenAI.

He spent two years building Jev quietly and launched it on 15 September 2026.

His big question: *If AI already chats better than most people, why hasn’t it automated more real work?*

Fast brain, slow brain

Daniel Kahneman’s book *Thinking, Fast and Slow* describes two modes of thinking.

**System 1** is fast and automatic. 
Example: A car cuts you off, and you swerve without thinking.

**System 2** is slow and deliberate. 
Example: Planning your career.

Today’s LLMs are System 2. They reason step by step and write long answers.

**Jev is System 1 model.**

And here’s the thing: most decisions software makes are System 1 decisions. Route this ticket. Flag this comment. Pick this tool. Is this prompt a jailbreak?

Using a big LLM for these is like hiring a professor to sort your mail. And that’s where Jev can be used to make these decisions quicker.

> LLMs are built to talk to people. Jev is built to talk to software.

---

# Why it’s not an LLM

LLMs write one word at a time. Ask for the capital of India and it goes “The”... “capital”... “is”... “New”... “Delhi.” Each word waits for the one before. 

Jev doesn’t write anything. It scores all the options at once, in a single step.

This has two nice side effects:

- **It can’t make things up.** It only picks from the list.
- **Output is basically free.** There’s no text to generate.

The best part: Confidence

Every answer comes with a confidence score. That lets you write rules like this:

```javascript
if confidence > 0.9:
	auto_route()
elif confidence > 0.6:
	double_check()
else:
	send_to_human()
```

Now uncertainty handles itself. Take *“I upgraded my plan and now I can’t log in.”* Even people can’t agree whether that’s technical, account, or billing. Jev splits its scores the same way (0.48 / 0.31 / 0.19), so the ticket goes to a human without you writing a single rule for “unclear.”

All of this depends on the scores being honest. Chat models tend to sound confident even when they’re wrong. Jev is trained with a method TypeSafe calls **RLCD** (Reinforcement Learning for Calibrated Decisions), which rewards being right and punishes being confidently wrong. The aim is simple: when Jev says 80%, it should be right about 80% of the time.

---

# Fast, cheap, and many questions at once

The real reason to use Jev over a regular LLM is scale. Picture a support inbox that gets 10,000 emails a day.

According to TypeSafe, Jev answers in **70–500 ms**, while frontier LLMs can take anywhere from 3 seconds to more than 5 minutes. It also costs **$0.042 per million input tokens**, and output is free. For that inbox, the bill comes to roughly **₹40 a day**, compared with about **₹3,260 a day** using GPT-5.

The savings grow further because a single call can carry several questions. For each email you can ask which team should handle it, whether it’s urgent, whether the customer wants a refund, and how frustrated they are. You get all four answers back together, and each extra question adds almost no time.

Each question can take one of three forms:

- **Choice**: pick one option from a list, such as which team
- **Score**: rate something on a scale, such as frustration from 1 to 5
- **Noul**: give the probability that a statement is true, such as “the customer wants a refund”

> Note: These speed and cost figures come from TypeSafe, and there isn’t much independent testing yet in 2026.

---

# Where it fits

Jev doesn’t replace LLMs. It works alongside them.

Good use cases:

- Agents choosing which tool to call
- RAG systems deciding whether to search
- Guardrails catching jailbreaks
- Tagging large amounts of data
- Business triage
- Real-time apps like games and live filters

Picture one big brain thinking, with lots of quick reflexes handling the small stuff.

> Repository that list awesome Jev use cases:
[https://github.com/walidboulanouar/awesome-jev-use-cases](https://github.com/walidboulanouar/awesome-jev-use-cases)

---

# How does it work inside?

Nobody outside TypeSafe really knows. There’s no paper and no open weights.

One of the guesses comes from **Archer Hume**, who sent around 10,000 test requests and worked backwards. His theory:

- The input is read once, and all questions share that reading
- Each question is handled separately
- Probabilities are read directly from the model, without generating text

This is still an educated guess, not a fact.

> Link to Jev’s architecture given by Archer Humes - [https://archerhume.com/posts/jevs-architecture-unmasked/](https://archerhume.com/posts/jevs-architecture-unmasked/)

---

# The downsides

- **Claims mostly come from TypeSafe.** More independent testing is needed.
- **Text only.** No images or audio.
- **No explanations.** You get a number, not a reason. That’s a problem when you need to justify decisions.
- **It can still be wrong.** It won’t invent answers, but it can confidently pick the wrong one.
- **Option order matters.** In Archer Hume’s tests, reversing the options shifted a score enough to cross a 0.9 threshold. Keep your options in a fixed order.
- **It’s closed.** One company, no open weights, and your data goes to their servers.

---

# Alternatives

Open-source lookalikes showed up within days, few alternatives:

- **Laya** runs on your own hardware and is very fast, but struggles with many options. Its best benchmark score came from a version tuned on that same benchmark.
- **Kev** is built on Qwen and copies Jev’s API format, so you can switch by just changing the URL.

---

## Links:

- [https://typesafe.ai/blog/introducing-system-one-models-and-jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- [https://docs.typesafe.ai/concepts/use-case-map#llm-guardrails](https://docs.typesafe.ai/concepts/use-case-map#llm-guardrails)
- [https://www.shipwithjev.com/type/github](https://www.shipwithjev.com/type/github)