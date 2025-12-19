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
date: '2025-12-19'
tags:
  - Frontend
  - Github
author: ScaleReal User
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/105c63a9-f2ab-415b-84f7-3fed3a9ab813/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSC3TR7N%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T091431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj%2BpfZtLAuirI06Ir%2B%2Bawoum%2F3N7bo3DHoH1Ub6FrsYQIgKAB1G9d8Pylrb9NxbQwibIF44lvfG9q%2BNEZrdXuQ38YqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOCTi9VSKFmQ1lrvyrcAy1v0ZQyAa5tXU0tl5N58GYx%2B3RbirVC4VmVT32nmcdOBLpJ%2B1%2FURmsFGoXGm%2BUQmXxkJ2buNQ44bFG5R%2FbWMjF8gkv6AGKGN09edd0azUDgxl3otHtaI5jAN%2F6l744IyvOfcBlNuD4UU4twnLcWq0UrlSEBpKFWOy2jFbgMlHxn9tLFHth70TZZnBnnBHroUlFhluJDQJPFzOQcDACbRoWyRnpCCYdlg%2BYJS2pArBaFiV78VWDzdBrB2Ny1SCx6fso3k8eWAjkciPGuS2MItSak9liMG9NMyk1amXhm9H5DRjZSiOGuoVv3Fm76Vjt9nFnpsSWk20Th7loawdola%2F784%2FVIY1bmCV3eUuzPqMwH5tYGIBRjPdxnkkYyywARLmKnauIlLeskgzTyMbdZZJnGyjlR%2FN5ZqmyRimxMe%2FbmUoUJn%2B3aRPytUGkzmRktYzYlt8GXq8OwzrUv27S39RC5X03rhnN9mv7N4xdCldxRaoAF0uBACBBqqBg0pmS%2BrwXli8FvWsl%2F%2BVyiCsCMNarR2tywjJwbzfkorK9QijWLVKtGP5hQDmH5vNmpIpxlycGBsd0nUi8qvzVjVzx7pOlZCYAcowMqGlj%2Bb1FaPNBQ%2FiEzdo4hxZKtThOMMNKelMoGOqUBeEL7YWGKwYgSZzkzwu%2F6Kr2F%2B5I6QB%2F%2FVwkC1jw6%2BbPLKm%2FLe848oRI5gKloMvV%2BoL7Vs1Sd3LXW4rc0cdnmjS2D79ImiRgEX74Ymvf8OCyYY%2Fme0fi27gPUwgumA%2BznKvurYnqBxlwnrBb6QN4k9FOOwEQjqjmqyxZU3C%2B6Bxs%2F32ID3m50%2FBqiWM2l7OjEJMzVELiebF6mVYdibyvsehl8e0e8&X-Amz-Signature=a1804d42fd5250b1a34b6f1865a4a06ff6eb4ba061ec855a7aea1160321161ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIX33AH4%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T091432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBba7BeyeM0%2FIPcwTmKOHuHWRd%2FE9E99ZmDB4p08y9PgIgX2Cj9nbhGs1MjAPf4ApOBCVSSL6cAGNaKrTUAm7DfK8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9y4XjHR2hmRhfp1SrcAxT%2FUw%2Bns0kYqfje0ggiU27cOqg97HNR0fI1sDQbFtVIbRMjc0VES6%2BpPhMsGK2MMhWiGEReM5FXx4fZf4wDBG07cxZU9pEpQRrFAB%2FWF%2FvKEvaJrO7n2rNbY6ciX4yzfHc%2F49dwn7wMZXD6si8sSew18Kseu%2FSRm%2FngRBGU3dJTr84WuOxHmp7FtfyHx5Y3hYWcvW%2BSX029UHWIaWD9YmYtpO4hO%2F0bMAwHto3s8tVlNJe3YW%2FpyAYAcY8fW5EuAHY6pYkdxKjle7FL%2F5wfGCcDMTWftFjgRf0o7iwgCA6mwG0SHXP5uxfybqzPPv%2Fi%2B0zbe4%2Fz63sHcmn0MiICClMi8AWH6nymnZbc2nMyhAkVYFG6ldYtbPbNO7yPKY7Do4lgYIkXEvdm6rGxzZvzEKEzAjGtiPY2wiPuWP8pbEeNgrDdkEhSo2nWyaeigQf7QbGeCoCD%2F0TCimHPh1Xhi4Dz98aQCllRsR3cmB3%2F8exiQWgT7O2TFR2uWoR2g355q3puo%2FX%2BzR0lcyZWXwdOGC3hZNalsUSFTjZam%2BFmR2N%2FUGkAjhLm48LPuFGkarBtrkLFeG4huL0fcd0d9s2VR2JMyTjVqcYrknU4mO9nX0%2BdY8QvEMP8jkTwiOrAMJ6flMoGOqUB2U69aTFk8aVqtkXrdmxyLAZ6S%2FWyYl0OdmMke3j0R%2BIqkLbAJ%2Fsfk3mgm%2FrZ1FS07zt%2FXHxvNF8ZB5tDzH6R3oenPyXi1ndS%2FyDB0ZzdYXP4cBjB%2Bs7FNGXvfD8jtUg3dqN7fk0BrEHb%2BOskthpi7UW%2F60Vi29mt18V49ckq6L58Jp8ZkLYL%2FJ2HZFvxm8umMa8sWkzC57BOUWsA5fs%2Fu2IbqFiz&X-Amz-Signature=99513ffccbbdec79fa2b41bb410b965746d5170d161a1a408193602e68ae0af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIX33AH4%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T091432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBba7BeyeM0%2FIPcwTmKOHuHWRd%2FE9E99ZmDB4p08y9PgIgX2Cj9nbhGs1MjAPf4ApOBCVSSL6cAGNaKrTUAm7DfK8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9y4XjHR2hmRhfp1SrcAxT%2FUw%2Bns0kYqfje0ggiU27cOqg97HNR0fI1sDQbFtVIbRMjc0VES6%2BpPhMsGK2MMhWiGEReM5FXx4fZf4wDBG07cxZU9pEpQRrFAB%2FWF%2FvKEvaJrO7n2rNbY6ciX4yzfHc%2F49dwn7wMZXD6si8sSew18Kseu%2FSRm%2FngRBGU3dJTr84WuOxHmp7FtfyHx5Y3hYWcvW%2BSX029UHWIaWD9YmYtpO4hO%2F0bMAwHto3s8tVlNJe3YW%2FpyAYAcY8fW5EuAHY6pYkdxKjle7FL%2F5wfGCcDMTWftFjgRf0o7iwgCA6mwG0SHXP5uxfybqzPPv%2Fi%2B0zbe4%2Fz63sHcmn0MiICClMi8AWH6nymnZbc2nMyhAkVYFG6ldYtbPbNO7yPKY7Do4lgYIkXEvdm6rGxzZvzEKEzAjGtiPY2wiPuWP8pbEeNgrDdkEhSo2nWyaeigQf7QbGeCoCD%2F0TCimHPh1Xhi4Dz98aQCllRsR3cmB3%2F8exiQWgT7O2TFR2uWoR2g355q3puo%2FX%2BzR0lcyZWXwdOGC3hZNalsUSFTjZam%2BFmR2N%2FUGkAjhLm48LPuFGkarBtrkLFeG4huL0fcd0d9s2VR2JMyTjVqcYrknU4mO9nX0%2BdY8QvEMP8jkTwiOrAMJ6flMoGOqUB2U69aTFk8aVqtkXrdmxyLAZ6S%2FWyYl0OdmMke3j0R%2BIqkLbAJ%2Fsfk3mgm%2FrZ1FS07zt%2FXHxvNF8ZB5tDzH6R3oenPyXi1ndS%2FyDB0ZzdYXP4cBjB%2Bs7FNGXvfD8jtUg3dqN7fk0BrEHb%2BOskthpi7UW%2F60Vi29mt18V49ckq6L58Jp8ZkLYL%2FJ2HZFvxm8umMa8sWkzC57BOUWsA5fs%2Fu2IbqFiz&X-Amz-Signature=d36c9e3ca97144f7c109e84b800dafdef20d4bdb9ff8167a416b6974b617ad28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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