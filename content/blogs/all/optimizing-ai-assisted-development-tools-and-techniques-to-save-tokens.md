---
title: Optimizing AI-Assisted Development — Tools and Techniques to Save Tokens
description: >-
  Learn how to reduce unnecessary token usage and improve your AI-assisted development workflow using better prompts, model selection, and tools like AGENTS.md, Ponytail, Graphify, and MCP.
date: '2026-11-02'
author: ScaleReal Team
image: '/images/blog/img_1793600195944_3373.png'
url: optimizing-ai-assisted-development-tools-and-techniques-to-save-tokens
draft: false
---

# Introduction

Over the last few years, the way developers work has changed a lot. Almost everyone in the industry now uses AI tools or coding agents to write code and get things done. Tools like Codex, Claude, Gemini, and Cursor can explore a codebase, understand existing code, write new features, run tests, and fix errors with very little manual effort.

But there’s a catch: **getting AI to write code is easy, but using it efficiently without wasting tokens is the real challenge.**

Even a simple task can lead to multiple file reads, repeated searches, unnecessary code changes, and several rounds of testing. All of this adds up, consuming both tokens and developer time.

I realized this while working on a client project at [ScaleReal](https://scalereal.com/). I used Claude Code extensively. However, at that time, I wasn’t paying much attention to how many tokens I was consuming or how I could reduce that usage without compromising the quality of my work. But when I checked my token usage, I understood how important it was to use these tools efficiently.

In this blog, I will share some basic but useful tools and techniques that can help us optimize AI-assisted development, reduce unnecessary token usage, and get more out of the AI tools we already use.

> *I assume you have some basic experience using AI coding agents in your development workflow.*

---

# Context and Prompt Optimization

One easy way to reduce unnecessary token usage is to give the AI agent clear instructions and the right context before it starts coding.

Without proper guidance, the agent has to explore the codebase, find relevant files, and figure out existing patterns on its own. This extra work can increase token usage.

### Write focused prompts

Let’s say we want to add **Archive and Restore** functionality to projects in a project management app.

A vague prompt might look like this:

![](https://cdn-images-1.medium.com/max/1000/1*4WRr7ZrhroNOpQQE4QDLug.png)

The agent understands the task, but it has to figure out where to make changes and how the existing code works. This can lead to unnecessary exploration and changes.

Instead, we can provide more context:

![](https://cdn-images-1.medium.com/max/1000/1*GuGffJVtkO8WMmsJwhePmQ.png)

This gives the agent a clear starting point and helps to focus on the actual task instead of spending time exploring unrelated code.

The idea is simple: ***the better context we provide, the less the agent needs to guess.***

### Use `AGENTS.md` for project-specific instructions

Instead of repeating the same instructions in every prompt, we can maintain an `AGENTS.md` file in our repository.

Think of it as a guide that tells the AI agent how to work with your project.

It can include:

- Project structure and where different code belongs.
- Coding conventions and existing patterns to follow.
- Utilities and dependencies to reuse.
- Things to avoid when making changes.

This helps the agent follow consistent instructions across tasks without needing us to explain everything repeatedly.

You can learn more about `AGENTS.md` here. 👇

[AGENTS.md](https://agents.md/)[AGENTS.md is a simple, open format for guiding coding agents, used by over 60k open-source projects. Think of it as a…](https://agents.md/)[agents.md](https://agents.md/)

---

# Choose the right Model and Reasoning level

Another common mistake is using the most powerful model with the highest reasoning effort for every task.

But not every task requires the same level of capability. A simple code change doesn’t need the same level of reasoning as a complex architectural decision.

Think of it this way:

- **Model:** The capability of the developer you have assigned to the task.
- **Reasoning effort:** How much effort that developer puts into solving the problem.

For example, if you are implementing a basic CRUD operation or adding pagination, a less expensive model with a moderate reasoning level may be enough.

But if you are making architectural decisions, designing a database, implementing security-related features, or integrating payments, a more capable model with a higher reasoning level may be a better choice.

Of course, these aren’t fixed rules. The right choice depends on the complexity of the task and how much uncertainty is involved.

You can easily change the model and reasoning level using the `/model` command. Simply type `/model` in the agent’s CLI and select the model and reasoning level you want to use.

![](https://cdn-images-1.medium.com/max/1000/1*mCZ6bNdlx3T3JTzlWhYPNQ.png)

A more powerful model may cost more per request, but using a cheaper model isn’t always the best option either. If it repeatedly makes mistakes or needs several rounds of corrections, you could end up spending more tokens overall.

So, before starting a task, think about how complex it is and choose a model and reasoning level accordingly.

---

# Prevent over-engineering with Ponytail

AI agents sometimes solve a simple problem by introducing a more complicated solution than necessary.

For example, adding an Archive button might result in extra components, unnecessary code, or changes to other parts of the application that have nothing to do with the task.

The feature might work perfectly fine, but all that extra code takes more tokens and makes the code harder to maintain.

This is where Ponytail can help. It guides AI agents to keep their implementations simple and avoid making unnecessary changes.

The principle is straightforward:

1. Identify the smallest correct solution.
1. Reuse existing components and patterns.
1. Avoid introducing abstractions without a clear need.
1. Keep changes limited to the requested functionality.
1. Stop when the task is complete and validated.

You don’t need to configure anything after installation. Just install Ponytail and start using your AI coding agent as usual. You can enable or disable it anytime by running the `/plugins` command inside your AI agent CLI.

![](https://cdn-images-1.medium.com/max/1000/1*QqchhbbZqoDJcA13aJPTlg.png)

You can find the installation and usage instructions for different AI agents in the [Ponytail documentation](https://github.com/DietrichGebert/ponytail/blob/main/INSTALL.md?utm_source=chatgpt.com).

---

# Reduce repository exploration with Graphify

When working in an unfamiliar codebase, an AI agent may need to follow imports, search for references, and read several files before understanding how a feature works.

Graphify helps by generating a knowledge graph of the codebase and its relationships.

Think of it as a map of your repository.

Without a code graph, an agent might repeatedly search for files and follow relationships manually. With Graphify, it can query the graph to identify relevant files and connections before reading the implementation details.

For example, the Projects feature might involve this flow:

```plain text
Projects.tsx
    ↓
useProjects.ts
    ↓
projectService.ts
    ↓
projects.ts
```

Understanding these relationships gives the agent a more focused starting point for the Archive/Restore task.

Graphify is particularly useful when:

- The repository is unfamiliar.
- A feature involves multiple files.
- Dependencies and relationships are difficult to trace.
- Repository exploration is becoming expensive.

For small changes in files that are already known to the agent, Graphify may not be necessary. It is more useful when the agent needs to understand how different files are connected.

The principle is simple: ***use repository mapping when it can reduce the work needed to understand the code.***

You can find the complete installation guide, available commands, and usage instructions in the [Graphify documentation](https://github.com/Graphify-Labs/graphify/blob/v8/README.md).

### Getting started with Graphify

After installation, you can generate or update the code graph using the following command: (***Run this in your regular terminal, not inside the AI agent CLI***)

```shell
graphify .
```

Once the graph is generated, you can open it in your browser:

```shell
xdg-open graphify-out/graph.html
```

Graphify also provides a few other useful commands:

```shell
# Update the graph after code changes
graphify update .
```

```shell
# Continuously watch for code changes and update the graph
graphify watch .
```

You can enable or disable Graphify skill anytime using the `/skill` command inside agent’s CLI.

![](https://cdn-images-1.medium.com/max/1000/1*iMCUQDEcFtkmz65PoSFoGQ.png)

### What does the generated graph look like?

Here’s an example of a code graph generated using Graphify:

![](https://cdn-images-1.medium.com/max/1000/1*f_a4XjkfPRvG-RdFca8cCA.png)

---

# Use MCP to make Graphify available to the agent

Graphify generates a knowledge graph of your codebase, but how does an AI coding agent actually access and use that graph?

There are two ways to approach this.

### **1. Using Graphify without MCP**

MCP is not required to use Graphify with an AI coding agent. After installing Graphify, it automatically updates the `AGENTS.md` file with instructions on how to use Graphify commands.

These instructions help the AI agent run the required Graphify commands, explore the generated code graph, and understand how different files and components are connected.

This way, the agent can use Graphify during development without needing an MCP connection.

### **2. Using Graphify with MCP**

This is where MCP comes in.

MCP (Model Context Protocol) is a standard protocol that allows AI applications to connect with external tools and data sources. It is not limited to Graphify.

Graphify provides its own MCP server, which allows coding agents like Claude Code, Codex, and Cursor to access and use its graph-related tools directly.

The flow looks something like this:

```plain text
AI Coding Agent
      ↓
  Graphify MCP
      ↓
  Codebase Graph
      ↓
Relevant Files and Relationships
```

With MCP, the agent can access Graphify's tools directly while working, instead of manually running commands or checking the generated graph files.

For example, when adding a new feature, the agent can use Graphify to find related files and understand how they are connected. This gives the agent a better understanding of which files are relevant to the feature.

### **How to check connected MCP servers?**

Most coding agent CLIs provide a command to view their connected MCP servers. For example, in Codex CLI, you can run`/mcp`.

This displays the MCP servers connected to your agent along with their status.

![](https://cdn-images-1.medium.com/max/1000/1*Niv8VbaxRZnbwiRjYD_-oA.png)

### **Do you always need MCP?**

MCP is optional. Graphify can work without it, but connecting it through MCP makes it easier for coding agents to access Graphify's tools directly while working.

Also, using MCP doesn't automatically save tokens. It simply gives the agent a way to connect with external tools. The amount of tokens saved depends on how useful those tools are for the task and how the agent uses them.

---

# Final Takeaway

AI coding agents have made development much easier, but we also need to understand how to use them properly.

A few simple things can make a big difference in how efficiently we work with these tools:

- Give clear prompts and enough context before asking the agent to code.
- Choose the right model and reasoning level for the task.
- Avoid unnecessary code changes and over-engineering.
- Use Graphify when you need help understanding a large or unfamiliar codebase.
- Use MCP to let coding agents access useful tools directly.

You don’t have to use all these techniques for every task. Start with what makes sense for your project and workflow.

**At the end of the day, it’s not just about getting AI to write code. It’s about getting the same or better results without wasting tokens and resources.**

---