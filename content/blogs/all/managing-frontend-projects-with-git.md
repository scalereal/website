---
title: Managing Frontend Projects with Git
description: >-
  Establish a consistent, efficient, and scalable Git workflow for frontend developers, enabling streamlined collaboration, code quality, and release practices.
categories:
  - web
keywords:
  - Git workflow
  - Frontend Git workflow
  - Git best practices for frontend
date: '2025-11-19'
tags:
  - Frontend
  - Github
author: ScaleReal User
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/105c63a9-f2ab-415b-84f7-3fed3a9ab813/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5HKJZL%2F20251119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T071341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEZlNu0fZG3%2FctGqGMis8ttKcEANBDgTCWsBsGTKjVxjAiEA1SjqKM7oGgU79w%2BlclpKduDz6eQqRyZa3k2%2FoFZFfz4qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLgPmOsmB46YIBL0CrcA8xIsqUiwJ32DoTUs4UvDfMkRSXdfZw9PzXXgPRDShh9JHobUp4QoQPdlupvzyRVlI7r3Op0ppq8S%2Bo%2Bism9C5dgKQymGEmoHaQfr7suMHn1ldPuWzoVPKiXlFhCQ%2BE74Ja99gSX0fLFyymdXm8hDueyhmsI0Cbqnd3pKgsGu2%2FaK4BQBXb0De7K5YmJmbuZ6Wx6Wwp5OBOFFiNb5SoetYtwPOm9mC6KqfiDdC1dvFafNcKA25q%2FAuNzBQnzMnA%2FlQ0SNwOlidkrBvJGtfeNeY3CVaYpMSK1q1X04gUkbNFFPmHFIDaY00wSAs%2FPsTxH4NpWEKJZcqBG7117O0R%2BX2n4NDEXO8J7OatmWcH6b9An%2FO%2FwdRgkeIihak%2FYy2KBX7sZher%2Bogbr2ImJM1X1pzEIn%2BsFFOyLlkQ2FMYAp3EjgmxgKStkQc2UekTekMw9e1bSAs4cPZt28bwnczs5bMnfYZvT%2BXDsTvksR7ej2re%2FQTiaCfPBSYellqLALxHjzP23pd1WqEUoUaTg5ZklmuJ%2BSY0t0GcVrO1uW%2FhktyXTUmZWbXpV%2FHmUQWCULTvD7g0SLEghQ1dpXOB8JZHhzY36uZudGV%2B5QUU8DdlXf%2BXZLOLiWMEkO3%2BjDL2WMP7S9cgGOqUBStSdzepgTSQaz1NwyLdKjouC8iw%2FQ7Xy5Fl0pVEuFOeAZsGknmvDSHaOXH5p2ke30vH2pyvhFMXcNgGdTBjjZ92UuWFaMK%2FDDmNlUfig6oXW7XFf5n4yP9HrGL3Gi6%2FM%2FQhox8%2Ft6r8OVsJPZIwSdP%2B18EClPbpORyG0CzKdStLe1kjdwGuacsj0kTCC3BDYkPK3fMUGr5pKS6M0VK%2Fl969QT5hz&X-Amz-Signature=d59ff66537fa63d1e3c8864474444e559ec0021690d46291c9e0bbfb485b9e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
url: managing-frontend-projects-with-git
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FO4QSGD%2F20251119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T071342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIA81tATpAil9W%2FUPbKxCc%2F%2FJRY5mImrbZwrSgE6s2wIAAiEAnFVlk3Wm4%2Fu%2FAqpNtMFv1qjDc4jOmS%2BEnOv0LHgLNKIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7ySGyjfQf82L8uACrcA%2FHvpQsBzraUVBXtqp0rB%2FVH5n0mu%2F%2F1o2h%2BbW0ffC7TKuF1Ps4qW7y1GXMzNX7%2FMWL2Hba%2BJWQXYWgSm0bjjOeeRX0wAHOsNDOqvrXoOb7De3bv%2Fzd5viU2sT7oKh6szKxrX%2FZXlOrvc8lJqEbueNT2TBcbXUc6f0NM%2FloUiyuQKUbLM1IN0ieGEpU%2Bm5%2BvKAiTURTiZXtYAJC1ArT7WDYf9AHxHoVyRkNsDMZy1E4jihHzbvzecQuqEzvy909I%2FkVp8kLFs8EPuwFrOsJIAOhbYvqCGEuZjRTZkh1fKEBaFWG%2BSJypXpJJUtVR6lTZde%2BmK4zRgEEEac95rn0iGEiR72gXQV52Ejfkwd5%2FVj6gi%2FORvXtKaayfWYHV6SAZLu3SyRYdVuISkeZSFt9UpDPfUhKQgZgM7m2JKLO%2FgSiM4dda3Zgn%2B%2BV9r9sc0VK1ZckftFN3ZZnwC38Kl98LhgQia9IOCnSO5%2FNqvmzkMal69%2F8G2VYkx7u8DjPNvK9o3RBsF3JO9mnA5afJVLl3Jjr%2BNthljetTj3pib39q4ZHx34FlJuVh7%2BjNYXfekK3U2bMSHi%2FwlfY2vjaUejhpFY3%2FbImKMOf4%2Fiad879IP2oPue2pBEI9jV7ut0nGMJXS9cgGOqUBIoeI5idJ28IwLVnVhWuYOmMU6SyPMG7s26pzuWavZ2a9cEE8rAcu%2B7i8JfuKJ9vXmOQEKvxTkN4lxJrly2Tj23%2FSB6hZAIC13ExX9d1n4n1lNw3fZNHMRfNS6UTuGEk6a8mgS5MvN73dL1r1fD7FwnCyob0sOugaYSmiRQ1o5UcpO0wwt11fxXEIGOu99ANuViK%2F7wG6zjcQ9XDB1yGrd5uKJ1OL&X-Amz-Signature=d54bfe89684771b70cd87e546f75164c5ed287ee79bbe477b3abf63e3673080c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FO4QSGD%2F20251119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T071342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIA81tATpAil9W%2FUPbKxCc%2F%2FJRY5mImrbZwrSgE6s2wIAAiEAnFVlk3Wm4%2Fu%2FAqpNtMFv1qjDc4jOmS%2BEnOv0LHgLNKIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7ySGyjfQf82L8uACrcA%2FHvpQsBzraUVBXtqp0rB%2FVH5n0mu%2F%2F1o2h%2BbW0ffC7TKuF1Ps4qW7y1GXMzNX7%2FMWL2Hba%2BJWQXYWgSm0bjjOeeRX0wAHOsNDOqvrXoOb7De3bv%2Fzd5viU2sT7oKh6szKxrX%2FZXlOrvc8lJqEbueNT2TBcbXUc6f0NM%2FloUiyuQKUbLM1IN0ieGEpU%2Bm5%2BvKAiTURTiZXtYAJC1ArT7WDYf9AHxHoVyRkNsDMZy1E4jihHzbvzecQuqEzvy909I%2FkVp8kLFs8EPuwFrOsJIAOhbYvqCGEuZjRTZkh1fKEBaFWG%2BSJypXpJJUtVR6lTZde%2BmK4zRgEEEac95rn0iGEiR72gXQV52Ejfkwd5%2FVj6gi%2FORvXtKaayfWYHV6SAZLu3SyRYdVuISkeZSFt9UpDPfUhKQgZgM7m2JKLO%2FgSiM4dda3Zgn%2B%2BV9r9sc0VK1ZckftFN3ZZnwC38Kl98LhgQia9IOCnSO5%2FNqvmzkMal69%2F8G2VYkx7u8DjPNvK9o3RBsF3JO9mnA5afJVLl3Jjr%2BNthljetTj3pib39q4ZHx34FlJuVh7%2BjNYXfekK3U2bMSHi%2FwlfY2vjaUejhpFY3%2FbImKMOf4%2Fiad879IP2oPue2pBEI9jV7ut0nGMJXS9cgGOqUBIoeI5idJ28IwLVnVhWuYOmMU6SyPMG7s26pzuWavZ2a9cEE8rAcu%2B7i8JfuKJ9vXmOQEKvxTkN4lxJrly2Tj23%2FSB6hZAIC13ExX9d1n4n1lNw3fZNHMRfNS6UTuGEk6a8mgS5MvN73dL1r1fD7FwnCyob0sOugaYSmiRQ1o5UcpO0wwt11fxXEIGOu99ANuViK%2F7wG6zjcQ9XDB1yGrd5uKJ1OL&X-Amz-Signature=1a556d7035bbf73d01d4cd68e9e63b7bd71455d34a1b16dc7591c581ea4b8eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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