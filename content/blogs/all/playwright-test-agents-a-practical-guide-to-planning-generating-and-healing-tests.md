---
title: "Playwright Test Agents: A Practical Guide to Planning, Generating and Healing tests"
description: >-
  Test automation goes beyond browser interactions. It involves understanding features, identifying test coverage, writing maintainable checks, and investigating failures. Playwright Test Agents bring AI assistance to these steps.
This guide explores the Planner, Generator, and Healer through practical Playwright and TypeScript examples, covering workflows, prompts, review points, and limitations when integrating agents into an existing QA framework.
date: '2026-11-24'
author: ScaleReal Team
image: '/images/blog/img_1795500052183_2023.png'
url: playwright-test-agents-a-practical-guide-to-planning-generating-and-healing-tests
draft: false
---

## Introduction

AI-assisted development is changing how software is built. Developers can now generate code faster than ever, but faster development also brings a new challenge: ensuring that the growing codebase remains reliable, existing functionalities continue to work, and test coverage keeps pace with frequent changes. Writing and maintaining comprehensive test cases manually can quickly become time-consuming, especially in applications with multiple modules, user roles, and interconnected workflows.

To explore how AI can simplify test automation, we'll use [SkillWatch](https://skillwatch.app/), an employee performance and workforce management product built by [ScaleReal](https://scalereal.com/). SkillWatch brings together features such as Goal Management, Performance Reviews, 360-Degree Feedback, and Employee Management, making it a practical example of a modern application with interconnected workflows and functionalities.

This is where **Playwright Test Agents** come in. In this article, we'll explore how its three specialised agents — Planner, Generator, and Healer — can help streamline the test automation lifecycle, from exploring application workflows and creating test plans to generating test scripts and fixing failing tests.

The objective is to reduce repetitive testing effort while allowing QA engineers to focus on test quality, meaningful assertions, and overall application reliability.

---

## 1. What are Playwright Test Agents?

Playwright Test Agents are specialised AI agents that assist with different parts of end-to-end testing. The workflow separates the work into three roles:

- **Planner:** Explores the application and produces a structured Markdown test plan.
- **Generator:** Uses the test plan to create Playwright test files.
- **Healer:** Investigates failing tests and attempts to repair them.

Together, these agents help move from understanding a feature to implementing and validating automated tests.

They do not eliminate the need for test design or code review. Their output still depends on application context, instructions, and the quality standards established by the team.

---

## 2. Setting up agents in VS Code

Playwright Test Agents can be initialized directly from the terminal inside an existing Playwright project.

The initialization command is:

```bash
npx playwright init-agents --loop=vscode
```

Run this command from the project root. Review the generated agent configuration and supporting files, and make sure they fit the repository structure and installed Playwright version.

Keeping the setup close to the existing project allows the agents to understand the current tests, page objects, helpers, and coding conventions.

---

## 3. Creating a useful seed file

A seed file establishes a repeatable starting workflow for the agent to reference.

In the Skillwatch example, `tests/seed.spec.ts` imports the existing API login helper, logs in as an admin, and navigates to the Goals module.

**Example:**

```typescript
import { test } from '@playwright/test';
import { apiLogin } from '../utils/auth';

test('seed', async ({ page }) => {
  await apiLogin(page, 'admin');
  await page.getByTestId('nav-link-goals').click();
});
```

This communicates how the test reaches the relevant module, which login helper to use, and which user role is required.

It also demonstrates the team's preferred setup instead of leaving the agent to invent a new one.

**Important:** A seed file is a starting workflow and source of context. It does not automatically guarantee that every agent or generated test reuses the same live browser session or authenticated state. Review how generated tests establish their own state, and keep credentials in secure environment configuration.

---

## 4. Using the Planner to explore a module

The Planner is used before test code is generated. Give it a clearly defined area of the application to explore and identify the seed file that provides the starting point.

For example, when working with Skillwatch, the Planner can be instructed to create a test plan for the Goals module.

**Example prompt:**

```plain text
Create a test plan for the Goals module,
using tests/seed.spec.ts as the starting point.
```

The Planner produces a Markdown file that organises its findings into an application overview and test scenarios.

For example, the output can be saved as:

`specs/Goal-module-plan.md`

One of the scenarios might cover browsing the My Goals list, checking the visible table columns, available row actions, and pagination.

This makes the proposed test coverage visible before implementation begins. A QA engineer can review the scenarios, correct misunderstandings, and add missing cases while the work is still at the test-design stage.

---

## 5. Reviewing the generated test plan

Treat the generated test plan as a draft that requires QA review.

Before asking the Generator to implement it, check whether the scenarios reflect actual requirements and whether the expected results are specific enough to be asserted.

Consider the following:

- **Check scope:** Does the plan cover the correct module, user role, and workflow?
- **Check expected results:** Are they observable and unambiguous?
- **Look for negative cases:** Does the plan include invalid input, missing data, or insufficient permissions?
- **Consider edge cases:** Are empty lists, boundary values, pagination limits, and unusual states covered?
- **Check target files:** Does the proposed structure match existing repository conventions?

A detailed plan is valuable only when it represents the intended product behaviour.

If the Planner makes an incorrect assumption, correct the plan before generating multiple tests from it.

---

## 6. Using the Generator to create tests

After reviewing the test plan, use the Generator to implement a selected section.

Asking it to work on one section at a time keeps the scope manageable and makes the generated code easier to inspect.

**Example prompt:**

```plain text
Generate tests from section 1.2 of Goal-module-plan.md.
```

In the Skillwatch example, the Generator created:

`tests/goals/create-individual-goal.spec.ts`

This test covered the individual goal creation workflow, including:

- Initial form state
- Description length
- Deadline selection
- Form submission
- Verification of the resulting goal row

Generation is a starting point, not a substitute for review.

Check that the test follows the framework's locator conventions, uses appropriate assertions, handles test data responsibly, and verifies the actual business outcome rather than merely confirming that a button can be clicked.

---

## 7. Reviewing generated test code

A generated test can look complete while still missing meaningful assertions about the business outcome.

Review it with the same care you would apply to code written manually.

Pay attention to the following:

- **Assertions:** Does the test verify the expected outcome, rather than just confirming that an action completed?
- **Locators:** Are they stable, readable, and consistent with the project?
- **Test data:** Is the data unique where necessary, and is cleanup handled?
- **Isolation:** Can the test run independently without relying on another test?
- **Maintainability:** Does the code follow existing page-object and helper conventions?

For example, a goal-creation test should not stop after clicking Submit. It should verify that the goal is saved and appears with the expected details.

The exact assertions should come from the application's requirements and contract.

---

## 8. Using the Healer to fix and refactor tests

The Healer helps investigate test failures and attempt repairs. It can also be instructed to follow existing project conventions.

This is particularly useful when generated code needs to fit a framework that already uses the Page Object Model (POM).

In the Skillwatch example, the generated test needed correction because it did not fully follow the existing POM conventions.

The Healer was instructed to fix the error, run the test, and follow the conventions already established in the project.

**Example prompt:**

```plain text
Fix the error, run the test, and follow the
existing POM and locator conventions.
```

After the changes:

- The test used a Goals page object.
- The `apiLogin` helper was imported using the correct relative path.
- Locators were accessed through the page object instead of keeping all definitions inside the test.
- The test was executed again and successfully passed.

The key is to make prompts specific. Explain what needs fixing, which conventions must be followed, and whether the agent should rerun the test.

Always inspect the code changes yourself. A test can be made to pass by weakening or removing an assertion, so a passing status alone is not enough.

---

## 9. Limitations you should understand

Test agents can accelerate parts of the workflow, but they cannot guarantee correctness. Keep these limitations in mind.

### **Incorrect assumptions**

An agent may misunderstand a requirement, overlook a business rule, or infer an expected result that is not part of the product behaviour. Test plans and assertions need human review.

### **Fragile or incomplete tests**

Generated tests may use unstable locators, brittle waits, incomplete assertions, or unreliable test data. A script that runs successfully is not necessarily a good test.

### **Dependence on context**

Output quality depends on the seed workflow, test plan, application access, and examples in the repository. Missing or outdated context can lead to code that does not fit the project.

### **False confidence**

A passing test can still validate the wrong thing. A skipped test also needs investigation; it should not automatically be treated as proof that the application is broken or that the scenario can be ignored.

### **Incomplete repairs**

A repair may address the visible symptom without resolving the underlying cause. Inspect what changed and verify that the original assertions and coverage remain intact.

---

## Wrapping up

Playwright Test Agents provide a practical way to connect application exploration, test planning, code generation, and test repair.

The Planner helps organise what to test, the Generator turns selected scenarios into executable code, and the Healer helps investigate failures and improve the implementation.

The best results come from clear prompts, a reliable seed workflow, a reviewed test plan, and project conventions that are easy for the agents to follow.

Most importantly, AI-generated tests still need human judgement. QA engineers remain responsible for deciding what matters, validating assertions, and confirming that tests provide meaningful confidence in the product.

**The objective is not simply to generate more tests. It is to create better-maintained tests with less repetitive effort.**

---

## Summary

- **Planner:** Explore the application and prepare a test plan.
- **Generator:** Convert reviewed scenarios into Playwright test scripts.
- **Healer:** Investigate failing tests and attempt repairs that respect project conventions.
- **QA Engineers:** Review the plan, code, assertions, and final results.

---