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
date: '2025-11-20'
tags:
  - Frontend
  - Github
author: ScaleReal User
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/105c63a9-f2ab-415b-84f7-3fed3a9ab813/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAEPL2OY%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T050705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDlmBK4yNnPOb4QtJeE3M9HzBSk1TJvfgw2bvSdU5FngwIgVCidETxKoMD8BcXxbNUcbt4KUwsRWehsIFvcnSWrQMAqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBsfCRbmBqTClPEzCrcA1mvRoWLbW%2B7R9HbDBI5rGIg9e8%2FmpYoe61EKoVmFrZ5cEdx91VoylVEI9WWTjApvtif1PzwThaxi%2BU8tj%2BbmFdrJ5rKVoQY0SKkZWJGnQC072lWvmEAt3YXKH6zTkfulAVaeyjEmf5mx%2B%2FxVDrGV%2BAcXMWwsL8ZMyhrBN%2FZ8s02%2Bfss9dnNB6bc2dwo4%2BIpkXBQwvVMcF%2B1pHxJd3reTp1jGsAL0mDfNowrtASOridp2g4qprluQFdV7YhDxiyvVtpGaTvCgJCX3R5nQkH6NZielNy7KGChdKoF32ZRPNDQmLn94sz1vpzit7m7Q5XEcSNaagG6HfpH%2FkJz90khu4hSeGZNHYRpYFOYk7NzPwC8qYVD38ttUQP7xQiHdJGuO76Xmszc8LVIOwGa5U4Cc4hzAXBcCqxGzDgZg%2BVmusRtxW7%2FrnRVgrNU9SRAMTU7XvvjKAdCtpa5sICB8JYYKsymFpfnn%2BaK93ERtmkp1p4yTQOkNXsR%2FBxD5D2XdUAylRMeUI27r0eiIfnd6aPeVvw97GFtEy8NzcjYCKGV2GrZ3qoJufXvjBPvpweqnXSalU5ugggixZmjFbCIzfQJdw%2BAKJC6wRqfuNID6DatAQWywYfGBjFsjGL%2BTsB5MMO7%2BsgGOqUBifNyYvN1tatDlyeoWoKi58NdQjvgeThs%2Bf5ov61zOlrllXO6UudRwb%2B7VKKWbrQUnS%2FWj7GiLdtGd3uYaOAIpBtTzRP838n1id%2FQXDstShwR8ExDMDORSn0WJS2aMeBniM8VXZFThNX3e9C6cAiGSqYQvlF4hLfHi%2Fr2UKOhY5TMERbsy28eNc08Njk%2Fv8OhDPNSjt14wYnGtjtx%2FxqqiLhALTjL&X-Amz-Signature=9ce402d2648b6aacb6a721e37f02f432c6d41feff2c875fb0dda6bcf295b8a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NWF7O34%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T050706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDkuwX20vLUD%2BDhDguhn5juurDnS24UGHWL%2Bqth288wTAiBCt3UmJtcc7qDyCmYTuCM%2Fkw1lG5fzFxy7hrOnNcKVGiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMszpxENxrOBxfDE%2BXKtwD6Z3av%2Bg2ygMyPxKM9oIfj53x27eqnjj9llLyFUWslMK71SYhtf2ckuszyb72tpcB6Ly6gd1ubf4RBEpW1eCIiSNBqDIVvX6PWv3LbMGs2XfKyRvBFISXCTeKUMN9CZxGqmPfjtJRcG9guevrNYROjIB940KqXRLjbODmWIa4xtCO3HPirhcJ%2FhGFTLP6oiL0JBnu1EHSQD%2FCs6MyRLTUtHrnuC85w4qqkuu9k6RJz%2BB3%2FOpyAI59XSWLm0HuyKqHv92GUpsU0LdQpsYvCmGk5NloGOh9pdAcQXEJoDHY0idxvq80g7W0Y%2BMrCF6urduhrk7bxmx6aPSoaXQ84xlSY3gBQJT5KiljkgyiPbgPNRb%2BDDgZFweV8EEZJ0xY3LMPzTuIzavJ7hXo8xbk9%2B4NAYwNNhNVRdjyijW2VWAv4%2FeWQT545KWBmtda5cROUqUyE3RApBI66cfoqLqD1tO8WJjp1KImyQv5xMqjFTOeHbaMNtdowRc9S1T5v267iVfhgzCzI5Lueha98sjcyMfloUsZBKhmckWwDYsqFYJHITkwWZ8qST7sSJ%2Fi%2BiYCL%2B%2FRtxyN1YU4jbAkwyiBumpbzTxX1xUYjcqHFpXHL1baTURyIwr7%2Fn%2FUuSEwBDwworv6yAY6pgEfdRf5b4tUy6p2RnFoJv%2Bxtar8Em3FgeUQTd9QI1eTILJjJDtpRlprvNi2AsLCNB%2BAU9C331l7fZxnTWaMxrycS4Nyo8bq17mFSREVmufktg6YHXPGk3cJ1nvPb%2Fwy9QnljyzC5QZXlK3JZ7kjOvQuy2wrXY0bRYZ5UMzqPWcUYIn3Ptz4%2BCffrj4Dzuyj6ZjSBdELIg%2F8mveG8A0XiyXJ3MXNiylj&X-Amz-Signature=4351c92564b9a80c55cfb49e01e78f08b0bb96e4bcbf534d7f05bc4450425a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NWF7O34%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T050706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDkuwX20vLUD%2BDhDguhn5juurDnS24UGHWL%2Bqth288wTAiBCt3UmJtcc7qDyCmYTuCM%2Fkw1lG5fzFxy7hrOnNcKVGiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMszpxENxrOBxfDE%2BXKtwD6Z3av%2Bg2ygMyPxKM9oIfj53x27eqnjj9llLyFUWslMK71SYhtf2ckuszyb72tpcB6Ly6gd1ubf4RBEpW1eCIiSNBqDIVvX6PWv3LbMGs2XfKyRvBFISXCTeKUMN9CZxGqmPfjtJRcG9guevrNYROjIB940KqXRLjbODmWIa4xtCO3HPirhcJ%2FhGFTLP6oiL0JBnu1EHSQD%2FCs6MyRLTUtHrnuC85w4qqkuu9k6RJz%2BB3%2FOpyAI59XSWLm0HuyKqHv92GUpsU0LdQpsYvCmGk5NloGOh9pdAcQXEJoDHY0idxvq80g7W0Y%2BMrCF6urduhrk7bxmx6aPSoaXQ84xlSY3gBQJT5KiljkgyiPbgPNRb%2BDDgZFweV8EEZJ0xY3LMPzTuIzavJ7hXo8xbk9%2B4NAYwNNhNVRdjyijW2VWAv4%2FeWQT545KWBmtda5cROUqUyE3RApBI66cfoqLqD1tO8WJjp1KImyQv5xMqjFTOeHbaMNtdowRc9S1T5v267iVfhgzCzI5Lueha98sjcyMfloUsZBKhmckWwDYsqFYJHITkwWZ8qST7sSJ%2Fi%2BiYCL%2B%2FRtxyN1YU4jbAkwyiBumpbzTxX1xUYjcqHFpXHL1baTURyIwr7%2Fn%2FUuSEwBDwworv6yAY6pgEfdRf5b4tUy6p2RnFoJv%2Bxtar8Em3FgeUQTd9QI1eTILJjJDtpRlprvNi2AsLCNB%2BAU9C331l7fZxnTWaMxrycS4Nyo8bq17mFSREVmufktg6YHXPGk3cJ1nvPb%2Fwy9QnljyzC5QZXlK3JZ7kjOvQuy2wrXY0bRYZ5UMzqPWcUYIn3Ptz4%2BCffrj4Dzuyj6ZjSBdELIg%2F8mveG8A0XiyXJ3MXNiylj&X-Amz-Signature=9899605034382d33f2a47003f8e988f30c42346e22ca134bf53de2ecfcf23d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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