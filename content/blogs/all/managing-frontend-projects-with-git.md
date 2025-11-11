---
title: Managing Frontend Projects with Git
description: >-
  Establish a consistent, efficient, and scalable Git workflow for frontend
  developers, enabling streamlined collaboration, code quality, and release
  practices.
categories:
  - web
date: '2025-11-11'
tags:
  - Frontend
  - Github
  - Deployment
  - Best Practices
author: Prathamesh Gunde
image: 'https://miro.medium.com/1*peDWXGlasJUdwTXtTtXSGA.jpeg'
url: web/2025/10/31/managing-frontend-projects-with-git
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


![PR-lifecycle.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/919ce7fa-5297-4567-a260-4e8ca0407346/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WUSDAM4%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T073441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDK6V195sxckbdmAZULY2KZz%2BmI6hibqwBK40ew5eUZjgIhAJFyTnPh42yyh%2Fv7nyOkvAkaVd7IXqr94MP18kmXcAJ%2FKv8DCBgQABoMNjM3NDIzMTgzODA1IgxWKBrzY39zQx0i28gq3AO9LbSs9x9OJyNoFtBZ7FIz5OWxg5NmYCUfufcMeeAR61w1WxTjfZn0gUEsaLni0UpplAqvydAy6YIKuv7Ki5iWNfXPwgM2KNYkuI3hisHgGKIfALW1qW7Ol7OedBPeYbhAQJIqGgeFNMjSivZI4AKCk117ZnlebiJYJ3Iz9jcfhyEg5aln2ip4vmt03RMG3%2FNI9JJfZYi6wFbkvoEknkBvpVuI0ZOEmgp3DzobLWBFmEUmKsV2Y8n3Eo8lF4Gt9XXkoMSJQvidImOaCghRMzD%2BRudgJzLlXzSyQ%2BjRxr%2Fz%2BKhj5o46kek1Zj2H6XiZzNxFlzr1HkaP6yyq1YieysxxqrIVgNUbDep8xaJztMSKm96P8zQqbjBQB%2B4m%2BmmY2%2BM1FImjfOLB65nSUSYMs8y76FiQKfn%2BIsO3llwRrVLr5ze18SWp3h4Z5Uazmalbva5Rq1u9wb0wGxMAgfyzGPHGIsoFUuj0MP9py%2FyxTFkox8mdOeoNBllIYBAdeCBCIOqw44aysLEEhKmhjNXn0VnRTSLBGJnvDwjKkDBSKXxPIREiwX%2Bt1MQANS%2B03TAB0AKYW%2BhZ7i2JzrOybq%2BuiWkQQzSA1%2Bs%2F594BuFbxaNg4lGN7pnwF1AHZ1u9%2F7zD8ucvIBjqkAUPo3mSYOAElJHGzpLWp8qcSj5HpTPqboD8iwRERWz%2FH4YAtwphm0w8Zozx2guAo0fN6BRR3vVlKMr4zehnIAcTcSpbCKG7XcBMJXWnwcJemhsCNaKthAJ2BW2BED0V52bH74npJL%2FpW%2FVyvCuw60x8868jt1B0VtKaZ5ZU2K5OVt%2BmQQAO3rVjZvp2irUqahlh4HoUnErE%2Bbu3pF%2F5HLs5NGhmF&X-Amz-Signature=6171a805eeab5144f33e0e5bd294e0c5caa6ca48886d58efc857de09896ee614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![github-actions.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/919ce7fa-5297-4567-a260-4e8ca0407346/051aebda-0ec1-4697-bc1b-386e95817ea2/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WUSDAM4%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T073441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDK6V195sxckbdmAZULY2KZz%2BmI6hibqwBK40ew5eUZjgIhAJFyTnPh42yyh%2Fv7nyOkvAkaVd7IXqr94MP18kmXcAJ%2FKv8DCBgQABoMNjM3NDIzMTgzODA1IgxWKBrzY39zQx0i28gq3AO9LbSs9x9OJyNoFtBZ7FIz5OWxg5NmYCUfufcMeeAR61w1WxTjfZn0gUEsaLni0UpplAqvydAy6YIKuv7Ki5iWNfXPwgM2KNYkuI3hisHgGKIfALW1qW7Ol7OedBPeYbhAQJIqGgeFNMjSivZI4AKCk117ZnlebiJYJ3Iz9jcfhyEg5aln2ip4vmt03RMG3%2FNI9JJfZYi6wFbkvoEknkBvpVuI0ZOEmgp3DzobLWBFmEUmKsV2Y8n3Eo8lF4Gt9XXkoMSJQvidImOaCghRMzD%2BRudgJzLlXzSyQ%2BjRxr%2Fz%2BKhj5o46kek1Zj2H6XiZzNxFlzr1HkaP6yyq1YieysxxqrIVgNUbDep8xaJztMSKm96P8zQqbjBQB%2B4m%2BmmY2%2BM1FImjfOLB65nSUSYMs8y76FiQKfn%2BIsO3llwRrVLr5ze18SWp3h4Z5Uazmalbva5Rq1u9wb0wGxMAgfyzGPHGIsoFUuj0MP9py%2FyxTFkox8mdOeoNBllIYBAdeCBCIOqw44aysLEEhKmhjNXn0VnRTSLBGJnvDwjKkDBSKXxPIREiwX%2Bt1MQANS%2B03TAB0AKYW%2BhZ7i2JzrOybq%2BuiWkQQzSA1%2Bs%2F594BuFbxaNg4lGN7pnwF1AHZ1u9%2F7zD8ucvIBjqkAUPo3mSYOAElJHGzpLWp8qcSj5HpTPqboD8iwRERWz%2FH4YAtwphm0w8Zozx2guAo0fN6BRR3vVlKMr4zehnIAcTcSpbCKG7XcBMJXWnwcJemhsCNaKthAJ2BW2BED0V52bH74npJL%2FpW%2FVyvCuw60x8868jt1B0VtKaZ5ZU2K5OVt%2BmQQAO3rVjZvp2irUqahlh4HoUnErE%2Bbu3pF%2F5HLs5NGhmF&X-Amz-Signature=98ccfe795125052b879788140a54ab462b88ef28b21aa5a0b09cffae2ba8cdff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1c30ab4b-87dd-482c-a02d-d20858fe3ad8.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1676047500046/1c30ab4b-87dd-482c-a02d-d20858fe3ad8.png)


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
