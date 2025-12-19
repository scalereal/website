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
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/105c63a9-f2ab-415b-84f7-3fed3a9ab813/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYQQMJ4F%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T074602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFHhU9ZtD5rz%2F%2FDMEP40B9WcUYR7GvVQOqVMxMKBjejgIhAJiQw6DQlZ3b1CpP7n81v1Tx8inQp7AUX6MqMAf8B9OnKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJXfnev%2Flue32SvpQq3AMHZNTG%2BmGjMRSIcsfxTOm%2BH8TfSCRdeSs%2FVr4JGpAaAr2WpG3VQaEe6kpHqbAMpH%2Fq9d5zue6TC%2FlOnduujDryjLMisE5ViIs8NsqP1iHbGIumJ4QPArIiUNm7GOfWOxCsa1uWWUwwAp9iNy6F05MeUJlResX07DdEDoy4eCDVGeAw8W35yqgm8Nw%2BmH0%2FCcdBq3vCDyXoyAe8cuxpjssy%2BGdoFBSZ5bH96IIOBmjVOzexpgxwjDdzL%2BEprXICiJY7uOsD25vlsAkqMmlRq5IzejDlAENOUe2CdBOiCcvKW00U8wDNeL%2BiMuCaGcHJ6OROePYEZJ1KvTf8n7FuwggtSBIOzvc1%2B9zMit9tZxQsE1rVuzpPn%2BxMxp%2BlDTqFWJtMLU2cP97MIkh0Q2yuQlDQjE2YxJRe82QbUdKP18LEbVhycyQ70s8G2furuy0eiBanQ5ukm3qJSBS5n25RvtFLSKxC4pTfcLyxEMJRBBiAAuK0HK81Z0NdAeQm6xMt8fnDcr%2B2mLJkf4ckfgy9y5SPXaKGXCXpNy9wuiMm2ejFTfsho628A%2BznKOLQK8ouR1bYPR9s%2BtMASxwtcGyVaDmqxCMuJWOrlCl49UD1ECsuaiBZKCGEmYaKXC58mzC56ZPKBjqkAbAyefJwkCJic04ZytNcju3Es%2FKxSm%2FF%2FBR%2BMzisBdekIIeBwxW7Ogwm8lE9N7rq%2FcUxP2nyASf9jL8qVrhTNRHcCocEposspNp6CN%2F5DQbz%2BiYHTXcRTgLJjeGiYqybjoNhYvxq%2BLbnBaZ2VrDh2P5rJySFX8IjCQOL386tZIQkFenKEEt%2BwypWFIybeMXqTu335HuVyZTsZCMQME4cqaNDLU9A&X-Amz-Signature=7b1370f86d09fbb6fdb7c1f8d8eadf442e90ab53c6bedb73f188ee2b77efaefd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RM6AOYU%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T074603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeFpUjfObTkEv0L5athLFVg0yVohZn7lS3s%2B%2B7LsAK3QIgGxD9cCKEhPQICAO7XuF661Zrv0%2FHbkdlp2FMTFNSWEQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs1mUJ9XsdbeJrNTSrcAz1nfNHqgaroNw28sI50D2aI6YrqEkfBB5U2L3YiN4zC8aq2ga%2B88YH0Yt5%2BnmT7ulcrTJXUhvpW240NI3RzVNeod5shNTny%2F77BBJCsZH%2FxKDd%2BKhbwqk7kco8jxM%2B%2B1DoR4DgGun%2FBUK5HFAIcYerImvqi%2F8ktAMfE4IGj97ImhL71zOjF%2BsDdxE2BVPxOOQ%2FWZqSH9GeFTAMbnZsOpXDUOGf9OmHvknvm3p90DYZwxD%2FapEcGt5Sg%2BEtM62h0I%2F2GFeAhyZIWfx1bhKDuMzN6wR0M347oX%2FB9TKuFLSJ%2BqoH3HNXLEfTJiNAjvmHnHOcM0qfNW76MqtO16CtPAqf3qnCUYXkj%2B%2BaBmPTWiauevUgPJ0qXWeuIC5HzWCgZn7RcJZ1snMZL8DNqBWxliDvr9J%2FR%2BGTwkXoggc1ObSrK9MhZLRwBUMULgYmylDKN0gkSlj4Jx2u8MU3IqoxE5W%2FEARLd1423iUHdWjKRaxFBqOOm7pxsXdQsWMIQT47zw2IQiabw2fyLuXwCuuHBHvaCMpeEZkPfNQl9Go7b4F5255HzRfkHKMS%2B5XQ6sA5I1U9R4IJfRCsx5wgsFQnuSp8dI1FBpRGcuRHuh4lJQ7i42QsrnBrvk04laPUCMPzpk8oGOqUBXbCh3l8hhl6gLDVDX8yTN9of%2Bw6d80VFEsOOyR%2BJ%2BF%2FCIrvF5PO795DXQ0dwLETB8ecG734%2FLoPXR%2F5cBchvzPE66dBPC%2F2gBv6wBECNRdHs7LiDBXlONYarboX6MA7Pzdd2dg%2FvTT8jpHM2xHVtuy%2BK9ZGkNCokMlHf15ty6QYbEjaCcQVsiE4xjv8o%2F%2Fjy2kk31Nygwm%2Bv0l%2Bo9T4YAZ3xNkY9&X-Amz-Signature=97c890e346f1ae7e07a77f430c4a6fc206c33d587f56916e14947a25b6995cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RM6AOYU%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T074604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeFpUjfObTkEv0L5athLFVg0yVohZn7lS3s%2B%2B7LsAK3QIgGxD9cCKEhPQICAO7XuF661Zrv0%2FHbkdlp2FMTFNSWEQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs1mUJ9XsdbeJrNTSrcAz1nfNHqgaroNw28sI50D2aI6YrqEkfBB5U2L3YiN4zC8aq2ga%2B88YH0Yt5%2BnmT7ulcrTJXUhvpW240NI3RzVNeod5shNTny%2F77BBJCsZH%2FxKDd%2BKhbwqk7kco8jxM%2B%2B1DoR4DgGun%2FBUK5HFAIcYerImvqi%2F8ktAMfE4IGj97ImhL71zOjF%2BsDdxE2BVPxOOQ%2FWZqSH9GeFTAMbnZsOpXDUOGf9OmHvknvm3p90DYZwxD%2FapEcGt5Sg%2BEtM62h0I%2F2GFeAhyZIWfx1bhKDuMzN6wR0M347oX%2FB9TKuFLSJ%2BqoH3HNXLEfTJiNAjvmHnHOcM0qfNW76MqtO16CtPAqf3qnCUYXkj%2B%2BaBmPTWiauevUgPJ0qXWeuIC5HzWCgZn7RcJZ1snMZL8DNqBWxliDvr9J%2FR%2BGTwkXoggc1ObSrK9MhZLRwBUMULgYmylDKN0gkSlj4Jx2u8MU3IqoxE5W%2FEARLd1423iUHdWjKRaxFBqOOm7pxsXdQsWMIQT47zw2IQiabw2fyLuXwCuuHBHvaCMpeEZkPfNQl9Go7b4F5255HzRfkHKMS%2B5XQ6sA5I1U9R4IJfRCsx5wgsFQnuSp8dI1FBpRGcuRHuh4lJQ7i42QsrnBrvk04laPUCMPzpk8oGOqUBXbCh3l8hhl6gLDVDX8yTN9of%2Bw6d80VFEsOOyR%2BJ%2BF%2FCIrvF5PO795DXQ0dwLETB8ecG734%2FLoPXR%2F5cBchvzPE66dBPC%2F2gBv6wBECNRdHs7LiDBXlONYarboX6MA7Pzdd2dg%2FvTT8jpHM2xHVtuy%2BK9ZGkNCokMlHf15ty6QYbEjaCcQVsiE4xjv8o%2F%2Fjy2kk31Nygwm%2Bv0l%2Bo9T4YAZ3xNkY9&X-Amz-Signature=b5dafa8b4a4ecf1ef3d77e418e8da7ef547653ae6482062f171ce01aa296b536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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