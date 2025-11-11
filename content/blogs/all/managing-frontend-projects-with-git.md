---
title: Managing Frontend Projects with Git
description: >-
  Establish a consistent, efficient, and scalable Git workflow for frontend developers, enabling streamlined collaboration, code quality, and release practices.
date: '2025-11-11'
tags:
  - Frontend
  - Github
author: ScaleReal User
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/18f5a88c-0ec1-470e-b448-40b9a4cad7f4/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SJVFDS5%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBXFPnV25dkrai2tx4XpMEd161atRmFYWK%2B4NQXc8XYdAiBjgvV4rYzzNr4OFVXTJr%2FD4ihNnKo1SyCxhEghGtFbbir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMOOKiU6sHXC0GkEUsKtwD5uWnVY6Qneqxs2wyvJRKW%2FnysikMC3ub2MIdIihu0A1%2B1YLYaK6WOKh%2FQVSzFqbb%2BRrTwWlyz4wjUgoN19POqFmPcy4Mo8pB52XNe7yFqc%2Fvk%2BIysnNjRDi35bosehiWwy0FK2YYGjSQeIQO7TEc244%2FhwDg9urA2MAukfZ7ttgGrGFPmzFemcw71BhswDb0xKMd5dbuYLY1domDOYO9QjOK2CKqJeTnrIlfHqw0cU8WAMI%2FIdnZojYJGw9OCd1h0iciV7p6lsH7sklVDIpVqKyt25GHUeF3%2FcyZoblZHaGghm%2FzzqC%2F38FxgBlMnPjnjxa9FxSFR9LAxYkcw4o%2BejKyjBtHAiaLP9xeVJjQTfs%2Bvpy%2BmzqyPPQh5MwZjaXNk9ZlY9DjRgCAwNkcJuLzkES7gJC9eNB%2F3tfWus5PC1D42DI0jT6yqlea6dkFX1RGVo8Cb70rsfE1Kf%2Biqh8fDvBjhyRScyPxknnGRHbObc3sANmT3kNLyC%2FhLbSp5WL9X4fZopbTY7d3sjLagb8P14VKB%2FZ9XKp0VhabzeOrsvwL3Pn7PMQYAmlEaa%2FbHenRdum3Tcz0RrQLpX3zP0RZcr%2Bz8ARYaJhbhyGElIRqb2hYJ48YzuGc%2Bk1qxNIw%2F7bMyAY6pgHalFFHm0I1K1oJ8yu1Smx2rwmjEJGWk%2F1eLqPcyev3uqKbfWalYC%2BUqhCt7FZRLPumhUkjhLNTP2hqITwtq4VS%2BkNgso4sNnTF30Sw5d2zdyvweGE27gRxwQcqfquMnW3EUpvhXJbqZCjIQ5zv0UURdkJh6zbWszJCkXFd9T6vfix7nsjgYd6I2Z%2Fra19dwN9MTRqFpbXcLtaNa2e7jpP%2F%2BLrl5Fof&X-Amz-Signature=45fe1f04592118b34e417c669139fdfe4a0b932d93b251dfa6f250a66eb682bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
url: web/11/11/25/managing-frontend-projects-with-git
draft: false
---

## 🔧 1. Repository & Organization Setup

### ✅ Organization GitHub Account

- All repositories must reside under the official organization GitHub account.
- Use organization-level secrets and actions for shared automation (e.g., CI, linting).
- Use proper repo naming conventions: `project-name-frontend`.

### ✅ Branching Strategy

- Default branch: `main`
- Use the following long-living branches (if required):
- `main`: production-ready code
- `dev`: integration branch (optional, depending on team size)

### ✅ Main Branch Protection Rules

- Enable protection rules on `main`:
- Require pull request reviews before merging (at least 1–2 reviewers)
- Require status checks to pass before merging (e.g., tests, linter)
- Require linear history (optional)
- Prevent force pushes
- Prevent deletion

---

## 🚀 2. PR Lifecycle & Best Practices

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBASGJK6%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIB8F7NEz8Wj0oz%2F1vr%2BUIv4ItnuTSTyeWRcO6YPEzQwzAiAWZIiDiBa9JiQNBPtNPu8SVFa4NL5T9gnrkpm7s01zOSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM1pL%2BtKrQ%2BTjJ9vi8KtwDiTP9kJt5jFSyHg95lZiFoK6Tmnro%2F94F86OIKHIEO7Ui%2BdgMm1JHZgBnNJI5M4f3UHL3aMQ%2BfrhcwiRhcA%2Bm4HboiaSMkJowTRmpl3JuTiiy96pYgbXKY7dNpMmZI4mOXUPlHbPWnag%2BuWSBXdT44Jo7cTvyRpswdFZ4J2qvNvO%2BYLMNexbqIBY5k8cNuouQ4cK5t3J20ar3SFP4MSLpZWBQDC3g0Nx6zmmzKWnFEGCQlTKYwkHbT5kUm1Rb7NeCngqvD%2F6UsFWqrRP1OIYo9FeC9zzDtgrKZSFYQGANzJx0vXfEqpkGumw01Dc2QKeY4sYFMEb4bcutoo1sdVjC84TDz5Yb1yqMqE9103VwEzJIWM%2Fr5g6gBGOTNL2KZ381WqX11b7q7nPPR8OcWtyhYhG8wCHF8tu9WGjTN%2FGAYFAvdTaDVS7WFBWXuvKvH56V9Yt25lcvjdKnUGdrMYP%2Bu%2Fk4ng3ZV6PN6G%2Bzm5K3I4Fem%2BSF9ZrRTMGh357jAKt6cFlq2wYcBcQCEyoaeipQ2uLVq%2BYvO0BZwGUpX7Z%2FvSr%2FVjnhXst4xtHuZkETQ9644CUX61hShuDY8rScMmG7y7o0z3IoJouKnlwryfswjYsEhp5qvVrFWOpALP4wv7bMyAY6pgEBZns9RoefL%2B6yrP11uUO6fKkTXymIgTUedNIkMmt5OWbzX%2BMfG2QdCxhOAlvJORacrDHJ%2FVZ1HGctYa0iI1sD2f%2FKRRQrJ94stqYwb8vF13q9bSsMtEj3Mhrp7iUgjrIw0oS10HRV2e%2FkheH2cj2XZBy766ySwqrp7ipsbPKTHZP8RqCke5jj8GfIEYHfkK0MkFOJv8eTzJn4QQY8%2Bh4CfLveQT3K&X-Amz-Signature=a40830b50c03e86a39fc47d357bc5d9a9edb7019c0518e6128447fc416223aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### ✅ PR Creation

- Always create a **feature branch** from `main` or `dev` (if applicable).
- Use clear, semantic branch names:
- `feat/login-ui`
- `fix/navbar-overlap`
- `chore/update-deps`
- `docs/readme-update`

### ✅ PR Naming Convention

- Use conventional commit style in PR titles:
- `feat: add user profile page`
- `fix: resolve navbar alignment issue`
- `chore: upgrade TailwindCSS to v3.3`
- `refactor: simplify form validation logic`

### ✅ PR Description Template

```markdown
## 📝 Summary
Brief description of the change.

## 🔍 Related Issues
- Closes #123

## ✅ Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally
- [ ] Any dependent changes have been merged and published


```

### ✅ Review Practices

- Reviewers should check:
- Code readability and structure
- Linting and formatting
- Test coverage and test cases
- Potential bugs or logic errors
- Accessibility and responsiveness (if applicable)
- Security concerns (e.g., API keys)

### ✅ PR Tags / Labels

Use labels to classify PRs:

- `feature`, `bug`, `refactor`, `chore`, `docs`
- `needs review`, `blocked`, `ready for merge`
- `frontend`, `backend`, `UI`, `infra`

---

## 🛠️ 3. GitHub Actions (CI/CD)

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBASGJK6%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIB8F7NEz8Wj0oz%2F1vr%2BUIv4ItnuTSTyeWRcO6YPEzQwzAiAWZIiDiBa9JiQNBPtNPu8SVFa4NL5T9gnrkpm7s01zOSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM1pL%2BtKrQ%2BTjJ9vi8KtwDiTP9kJt5jFSyHg95lZiFoK6Tmnro%2F94F86OIKHIEO7Ui%2BdgMm1JHZgBnNJI5M4f3UHL3aMQ%2BfrhcwiRhcA%2Bm4HboiaSMkJowTRmpl3JuTiiy96pYgbXKY7dNpMmZI4mOXUPlHbPWnag%2BuWSBXdT44Jo7cTvyRpswdFZ4J2qvNvO%2BYLMNexbqIBY5k8cNuouQ4cK5t3J20ar3SFP4MSLpZWBQDC3g0Nx6zmmzKWnFEGCQlTKYwkHbT5kUm1Rb7NeCngqvD%2F6UsFWqrRP1OIYo9FeC9zzDtgrKZSFYQGANzJx0vXfEqpkGumw01Dc2QKeY4sYFMEb4bcutoo1sdVjC84TDz5Yb1yqMqE9103VwEzJIWM%2Fr5g6gBGOTNL2KZ381WqX11b7q7nPPR8OcWtyhYhG8wCHF8tu9WGjTN%2FGAYFAvdTaDVS7WFBWXuvKvH56V9Yt25lcvjdKnUGdrMYP%2Bu%2Fk4ng3ZV6PN6G%2Bzm5K3I4Fem%2BSF9ZrRTMGh357jAKt6cFlq2wYcBcQCEyoaeipQ2uLVq%2BYvO0BZwGUpX7Z%2FvSr%2FVjnhXst4xtHuZkETQ9644CUX61hShuDY8rScMmG7y7o0z3IoJouKnlwryfswjYsEhp5qvVrFWOpALP4wv7bMyAY6pgEBZns9RoefL%2B6yrP11uUO6fKkTXymIgTUedNIkMmt5OWbzX%2BMfG2QdCxhOAlvJORacrDHJ%2FVZ1HGctYa0iI1sD2f%2FKRRQrJ94stqYwb8vF13q9bSsMtEj3Mhrp7iUgjrIw0oS10HRV2e%2FkheH2cj2XZBy766ySwqrp7ipsbPKTHZP8RqCke5jj8GfIEYHfkK0MkFOJv8eTzJn4QQY8%2Bh4CfLveQT3K&X-Amz-Signature=d83c551e3687fe89339e4a8bcd511ff09daa7c5eba86b838711b4f94ab001b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Suggested Workflows

- **Lint + Format Check**: Runs `eslint`, `prettier --check`
- **Build Validation**: Runs `npm run build` or `vite build`
- **Test Suite**: Runs `vitest`, `jest`, or relevant test runner
- **Deployment**: Auto-deploy on merge to `main` (e.g., Vercel, Netlify, Porter)

### Tips:

- Store reusable GitHub Actions in `.github/workflows`
- Use matrix builds for multiple environments or Node versions
- Fail fast with `set -e` and `-fail-on-warnings`

---

## 🏷️ 4. Semantic Versioning & Releases

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1676047500046/1c30ab4b-87dd-482c-a02d-d20858fe3ad8.png)

Follow [Semantic Versioning](https://semver.org/):

- `MAJOR`: breaking changes (`v2.0.0`)
- `MINOR`: backward-compatible features (`v1.1.0`)
- `PATCH`: bug fixes only (`v1.0.1`)

### Recommended Tooling

- Use [`standard-version`](https://github.com/conventional-changelog/standard-version) or [`changesets`](https://github.com/changesets/changesets) to automate changelogs and version bumps.

---

## 📁 5. Commit Message Guidelines

Follow **Conventional Commits**:

```plain text

<type>(optional scope): <short summary>

e.g.
feat(button): add hover effect for primary buttons
fix(auth): resolve login failure on Safari


```

Allowed types:

- `feat`: new feature
- `fix`: bug fix
- `chore`: tooling or maintenance
- `docs`: documentation only
- `refactor`: refactoring (no feature/bug)
- `test`: adding or updating tests
- `style`: code formatting (no logic change)

---

## 🧼 6. Code Quality & Hygiene

### Linting & Formatting

- Use ESLint, Prettier — configured via shared `.eslintrc`, `.prettierrc`
- Enforce via pre-commit hooks (e.g., `lint-staged`, `husky`)
- Style with Tailwind or chosen CSS methodology consistently

### Type Safety

- All code must use TypeScript — no `any` unless justified
- Use interfaces, types, and generics properly
- Avoid inline types or inferred types unless trivial

---

## 🔍 7. Documentation & Onboarding

- Keep a `CONTRIBUTING.md` in every repo
- Maintain up-to-date `README.md` with:
- Project purpose
- Tech stack
- Setup instructions
- Branching strategy
- Deployment process

---

## 📊 8. Bonus: Metrics & Insights

- Use tools like [SonarCloud](https://sonarcloud.io/) for code quality metrics
- Enable [GitHub Insights](https://docs.github.com/en/repositories/insights) for PR velocity, contributor activity