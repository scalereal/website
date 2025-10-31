---
title: Managing Frontend Projects with Git
description: >-
  Establish a consistent, efficient, and scalable Git workflow for frontend
  developers, enabling streamlined collaboration, code quality, and release
  practices.
categories:
  - web
date: '2025-10-31'
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


![PR-lifecycle.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/919ce7fa-5297-4567-a260-4e8ca0407346/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QRBFKIC%2F20251031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251031T062748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDbZiCBgKmMg1Ot5W853OlXcTea3M0TWetX7BVQeVqOEwIgC3mUbPM2Xgh%2Fv3JDPCnDXekd8Ao9yUuS7GlavukkRCgqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0p%2B1H47Br8WD2ECircA18mk4pYc%2BMAoSk90qGqTLNeumP6d87qNstOBjaautJGRw4glL0%2F2pUryeu54lW0TNcZdmplBIjMe%2BxzqnFksX9eaGZAfDawdkDCUNA5b4lybdDukk3V9Ee72FVAjoYTWvBGtrcNY%2FajOkVL4vq2SsxVehqDbN3o8ZOu9QMHFDB3PktiLx6wxT8YAQ7SyDXL031AY%2FCW8IgWuSV2OSdjQJHi4bcKD%2BKAni%2BEVNpy%2BD1wOrDC4hPwx0CW4U6CEtatgxHrVfh6wJKxhWFJHiqV%2FHk512Y8gB4W78MXXBNMvdhg0w98cRWGZdutvBrvFsURIhTiMuLWmqKbYbnxE0Ddt0tSLa1JiPOqctJL%2FsTal3SNgasSqOVAkNGq9t85lnueQ0xzzDD77Wdvaz2NpHvckxs1kndQdaCCN%2FYJ5tXA%2F90Rnzb6cZUmyhvh%2FgR%2FJMPYUq%2BNUB7CsKJp5ox0mQfxlIogt8zBEu%2F1UOT2Al2egGCWMv8QJvUo6zz2XZmIe5CuPmC3FnA1shxKdQMTYtIbr%2FuFH1bTIFz7WuamIwFJ%2F4WnNDzCgykD2ra9Ea2FD3XGPpqQ6jsigdx%2Fl9BiJQPTMG2RfqZzwem6%2BhVwDGs7dYchWyEqa5KCsx6cUGl6MKaikcgGOqUB%2BDTITUu0DeLen6SB8SSyL7c7%2Fl3m5JtEJBnoa5k8Y6rm8ZN6H%2BtHThAhUTvv2X5ioXXnGopgxVqfC%2BIGMAoff8Y0ZNn45dPeDKVvrPDK7NYwZAffCQ69eqGPF5x9D80E8U%2F64nQ8%2Fr1G4DtyDc7Tvu9K8V8g0p1Du6o8A6GU8vNhwrSiq07%2BgcZtQgBW3QAdo%2FEsH0lRuhpAGqybwxbKMXefbzUd&X-Amz-Signature=37fb980c53a240d4be73d958fa4fcb540fd1d117a10f132d952bce46601697f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![github-actions.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/919ce7fa-5297-4567-a260-4e8ca0407346/051aebda-0ec1-4697-bc1b-386e95817ea2/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QRBFKIC%2F20251031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251031T062748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDbZiCBgKmMg1Ot5W853OlXcTea3M0TWetX7BVQeVqOEwIgC3mUbPM2Xgh%2Fv3JDPCnDXekd8Ao9yUuS7GlavukkRCgqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0p%2B1H47Br8WD2ECircA18mk4pYc%2BMAoSk90qGqTLNeumP6d87qNstOBjaautJGRw4glL0%2F2pUryeu54lW0TNcZdmplBIjMe%2BxzqnFksX9eaGZAfDawdkDCUNA5b4lybdDukk3V9Ee72FVAjoYTWvBGtrcNY%2FajOkVL4vq2SsxVehqDbN3o8ZOu9QMHFDB3PktiLx6wxT8YAQ7SyDXL031AY%2FCW8IgWuSV2OSdjQJHi4bcKD%2BKAni%2BEVNpy%2BD1wOrDC4hPwx0CW4U6CEtatgxHrVfh6wJKxhWFJHiqV%2FHk512Y8gB4W78MXXBNMvdhg0w98cRWGZdutvBrvFsURIhTiMuLWmqKbYbnxE0Ddt0tSLa1JiPOqctJL%2FsTal3SNgasSqOVAkNGq9t85lnueQ0xzzDD77Wdvaz2NpHvckxs1kndQdaCCN%2FYJ5tXA%2F90Rnzb6cZUmyhvh%2FgR%2FJMPYUq%2BNUB7CsKJp5ox0mQfxlIogt8zBEu%2F1UOT2Al2egGCWMv8QJvUo6zz2XZmIe5CuPmC3FnA1shxKdQMTYtIbr%2FuFH1bTIFz7WuamIwFJ%2F4WnNDzCgykD2ra9Ea2FD3XGPpqQ6jsigdx%2Fl9BiJQPTMG2RfqZzwem6%2BhVwDGs7dYchWyEqa5KCsx6cUGl6MKaikcgGOqUB%2BDTITUu0DeLen6SB8SSyL7c7%2Fl3m5JtEJBnoa5k8Y6rm8ZN6H%2BtHThAhUTvv2X5ioXXnGopgxVqfC%2BIGMAoff8Y0ZNn45dPeDKVvrPDK7NYwZAffCQ69eqGPF5x9D80E8U%2F64nQ8%2Fr1G4DtyDc7Tvu9K8V8g0p1Du6o8A6GU8vNhwrSiq07%2BgcZtQgBW3QAdo%2FEsH0lRuhpAGqybwxbKMXefbzUd&X-Amz-Signature=e550216ded4cde781d436d9991eac18bec9624e593bfdbba3fde8b9785314b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
