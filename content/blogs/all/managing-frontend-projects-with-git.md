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


![PR-lifecycle.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/919ce7fa-5297-4567-a260-4e8ca0407346/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKV5BHX%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T052255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDbT0ynPw2NxsQFbTeKOyVRV6rziEsTcbM6W%2BPx1uJ63gIhAKcQiuh4SQny1Hkev2J7mDHmybfc%2BtWQAkhnyoXt1aDoKv8DCBYQABoMNjM3NDIzMTgzODA1IgxVuWf%2FNZDUHFv2ITkq3AO3qhJamSLiBHXjX7k2SidrV3zIHSb8PLzdG4iFSX0HzseNRCCq7xQHBTjqwdBWEUsgl4eL78iKQm2Z2gxpQVijY4YYWGME8gGd%2BnFos2iIdULQszNPmNci5hQB7ZDknp9Ya6sU8sbkJziqM7EUelNx0cPwCPH7S47ZT7u1DWeaZRg75U5%2F2M9R21732J1JONi73HWhD6jPZ%2FZgKzWX4m4XGfirujDYnVwCxkvrTuY50xpHvlRQXRPCWTIMvLC1t1UyI%2BKDxph2qkQkQL9j0eGPI1WkPnewo1vtHItW8AVM88FM1zAVNDytvmyXpS8a8lt%2FG0AfGpP1KNP49V278%2FwvvIiVIQwHdICdPX9cyvdg%2FwjTdbkkSkOxK6Wgs3fAjz4AJq8MTyuFvzwA9bKsAUTRq0h600allrFKKU9sryQ8JCn8IEVSavVzhlVMGjoyGVoNyF9v%2FvEs4S79GbPpMSKvfgnnEOfTIPmGOe2eT1M3xeRi5JA1jL3v2Yv3AT2F01NwtADp681Od97eazBXgxOQ%2FnJJwlIUpDA7m5UzhK1%2BL8HZWa5jJaWI4DBMzJl%2FUfQmbsSo9hkWpelCOXPDYskIkyoCAxOKIBHH33JvMCWAq%2FtI5f%2Bo%2F7KrDWSCSzDQ%2BMrIBjqkAeax8rcRMM7Zij5u5DVKop12BNm7kSbox5NQlmHs7rCAKXLpKj%2BjBvteBzDwfLCAeZYjDAhB93%2FNfHuC9iPEGscWqP%2Fd333nTYL0bvusFbzVV8CbdXUsoLqlMHznbCuv%2FVWLXYs%2BWi8raNYNApnxOmjD6tBfAdIkcuzpgt8OmMCRY1ar4C%2ByOlf23sNwWpBFn7%2FkEGNBJvmUIRit5jx85NNHXxsz&X-Amz-Signature=60339df3654af4bdf2352ac295143aa6e5cba5c49b5187ff838df63782228d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
markdown
CopyEdit
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


![github-actions.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/919ce7fa-5297-4567-a260-4e8ca0407346/051aebda-0ec1-4697-bc1b-386e95817ea2/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKV5BHX%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T052255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDbT0ynPw2NxsQFbTeKOyVRV6rziEsTcbM6W%2BPx1uJ63gIhAKcQiuh4SQny1Hkev2J7mDHmybfc%2BtWQAkhnyoXt1aDoKv8DCBYQABoMNjM3NDIzMTgzODA1IgxVuWf%2FNZDUHFv2ITkq3AO3qhJamSLiBHXjX7k2SidrV3zIHSb8PLzdG4iFSX0HzseNRCCq7xQHBTjqwdBWEUsgl4eL78iKQm2Z2gxpQVijY4YYWGME8gGd%2BnFos2iIdULQszNPmNci5hQB7ZDknp9Ya6sU8sbkJziqM7EUelNx0cPwCPH7S47ZT7u1DWeaZRg75U5%2F2M9R21732J1JONi73HWhD6jPZ%2FZgKzWX4m4XGfirujDYnVwCxkvrTuY50xpHvlRQXRPCWTIMvLC1t1UyI%2BKDxph2qkQkQL9j0eGPI1WkPnewo1vtHItW8AVM88FM1zAVNDytvmyXpS8a8lt%2FG0AfGpP1KNP49V278%2FwvvIiVIQwHdICdPX9cyvdg%2FwjTdbkkSkOxK6Wgs3fAjz4AJq8MTyuFvzwA9bKsAUTRq0h600allrFKKU9sryQ8JCn8IEVSavVzhlVMGjoyGVoNyF9v%2FvEs4S79GbPpMSKvfgnnEOfTIPmGOe2eT1M3xeRi5JA1jL3v2Yv3AT2F01NwtADp681Od97eazBXgxOQ%2FnJJwlIUpDA7m5UzhK1%2BL8HZWa5jJaWI4DBMzJl%2FUfQmbsSo9hkWpelCOXPDYskIkyoCAxOKIBHH33JvMCWAq%2FtI5f%2Bo%2F7KrDWSCSzDQ%2BMrIBjqkAeax8rcRMM7Zij5u5DVKop12BNm7kSbox5NQlmHs7rCAKXLpKj%2BjBvteBzDwfLCAeZYjDAhB93%2FNfHuC9iPEGscWqP%2Fd333nTYL0bvusFbzVV8CbdXUsoLqlMHznbCuv%2FVWLXYs%2BWi8raNYNApnxOmjD6tBfAdIkcuzpgt8OmMCRY1ar4C%2ByOlf23sNwWpBFn7%2FkEGNBJvmUIRit5jx85NNHXxsz&X-Amz-Signature=a35afaf3e2810af1783bd94c17b610f84b6b0dff4581adb4bd4e44330a75a05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
pgsql
CopyEdit
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
