---
title: Managing Frontend Projects with Git
description: >-
  Establish a consistent, efficient, and scalable Git workflow for frontend developers, enabling streamlined collaboration, code quality, and release practices.
date: '2025-11-12'
tags:
  - Frontend
  - Github
author: ScaleReal User
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/18f5a88c-0ec1-470e-b448-40b9a4cad7f4/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUMBPMW%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T081025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDlO%2BUCPsdkwBeiy6gvmmUpgz%2FKmrh8O08o4e6wQ35VeQIhAOumYXnJIT1mcdVfqTx5PuSS%2Bhji2wJODsURLGcHe0AEKv8DCDEQABoMNjM3NDIzMTgzODA1IgyZ31Mb3uIpSXYNWjMq3APbouF4qfBwSt%2BfsO56fFsYH%2BCkE16cKk2tFyI69qfN1RxbzzE0%2FNz0snxACExfBU11pC%2FyRDfNl14TLCFU7QzlYc149VEj1iW1mtoCMyVMhuITrRHG3%2FWRxGqejxyOXDDWonwWURgbLBix7EKTIK6ICrk%2Bs1ZeUz74ScrELkCfsMAkHBKjkrNJu2s657n9f16Hfjm%2BF%2B0TV8S98qCodBQNT8zHJIe3ejgxsTaFuqA%2B0Hq4%2FXjEQTGREim%2BSBDJFOYNf829AzfuvBAOPZHKbGAUKpYoRH30cdHTR4qNZznVyPC3jwQHg2LPRBB0qhrWjyhtB8mvsR08stJihA%2BQu9jxPUe1DOi9aEVzsP8dMBRhn9OvT%2F44LCipLVnXKFLwBbDZ8r2zwuNy3S%2B%2FaKdzvCSEmR624SUYWawFIo2NP0URUX%2FCe7Y524XAPZ8U0cqzZRTC9cQMCy60ovl586WWS3AfOBn7b9ZdCHQaeblbMVK47NC1ceu3XyuM5cjNC3v2R4%2BlYwOEYlOxrOUVqiwYayrKEGvUb7xOXPS7vVEuMy0Fy6RmuRB%2FubDd7dtxKpl1yxw2PCpDAgJEaS2k9LA%2FUiHJzHfduv%2FelIGxTQl%2F5Mcr2nrBRo3qeLaV3ADqizDI8tDIBjqkAVYN%2Bw551q5DFdQI7vfL4Liu9SvodFZbhKMmpZvs2TdehkAApkspzNhKN4qQ9NuV45R1bZNNtctelY%2F4jfvXEjqRkEadHKLY1aq5dEMan1CJzjXR1tUX5%2Bqt4WpKTi6BuVOkjOP%2FGDV1sY0hthZ2n6588PBACuzcMrX0oTe2%2BPnxoPfhFE8bOQxDs9mYC%2FfKdyqUvQXndmItK%2B6QpJXNlm1FLMsz&X-Amz-Signature=b2c3329fed61adb534795fff6d597d40e5ec25e38bfe88c8b995cbe2f1cd1177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOTHHK3%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T081025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCobCyLNA1Xnqd0f%2FSOx62tbxmKY7xSrd1xDVaBiLWK7wIhAIjFQjbQuJqBny3jS7%2FQwMMIWskgQnVHdFuDVB6ZpridKv8DCDEQABoMNjM3NDIzMTgzODA1IgwZebxUUc3AS5sTC44q3ANQffBQYhweIJshIhcGfIzvopXEpBUW0Di92SyEEjvjOPapMUzT0VIuF4uce18u2lGoAu7G1OoqqS9kpPfr8OikvOXwqrihvXP42mtONJbRyy2yw4wwg1YOOtINY24T85w17wY4sjLo%2BQBDcqVzErPHyOyyagBUkUMKY77KoYbvsxQvVrFJJcnPrx2%2F1JTB6G5UyMzYOEdVYvFFHCZOWtgLiLpB0%2BAZoLeyL0Dfm8BOqNj1P%2BWgtA%2BD5uVlEp%2FG%2BQXKaVNP9BzagHP3Hkm7QZ3WR3C%2B%2FBhqfiReL7IDgreRKCjhq%2FFnkwuB%2BzEs2z83TyYW2XascuvBKQxrQ1jOUVwvs5hRHh%2BTboHXFdEzS7Gjaj1b8ivvllIvg2hqS0m6vQ9eqBLWSsZ0To4OUtQsu%2BZEhMvqRDRn58KcdPRaoEbT88YQqBWKB3NV10eZdhk6QrCDl5lBjgYWWsXXdjF0Kv2CRzf8q5V37UIbqq7QGIeicD%2B38J2SZIzHxQZYKHVbAN3WUrc0ftgWKYTJYvVdCWpTskB9iVZQ2uZeuidQKkeVAj0lLZdNK%2B3uLvZmeeLrxmlKdcFXNa4N7Xjr7kKdyI5KS%2FYRJICEnLJwvZPvPGXnrxQ3SXWDIhWhm%2BZpwzC%2B8tDIBjqkASyFCPkhG7y%2BdMnZDdk7P0ZZysOzjFp%2Bce%2FkvBmKI1ZFNsqXgmSm9tu44DVWdBmrSUXYZxBBZ2r1Z0cpvrOFXODU5rJQwtgIvhY9sEl7gFDyOBIzOkMuDC7H%2BdsqWCnJpdQvR0ariFRioyk04XS9YEPYcigYdvpFjiPKhoaD3PGi54uCCfHzhyv1mz%2FfbTYMxFV7xREIa62GV51kLyu0LlrqXmh5&X-Amz-Signature=07a215dcd9bf3b9ff9d9363a78fcc3751610e79dae918b902d3054d1043221d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOTHHK3%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCobCyLNA1Xnqd0f%2FSOx62tbxmKY7xSrd1xDVaBiLWK7wIhAIjFQjbQuJqBny3jS7%2FQwMMIWskgQnVHdFuDVB6ZpridKv8DCDEQABoMNjM3NDIzMTgzODA1IgwZebxUUc3AS5sTC44q3ANQffBQYhweIJshIhcGfIzvopXEpBUW0Di92SyEEjvjOPapMUzT0VIuF4uce18u2lGoAu7G1OoqqS9kpPfr8OikvOXwqrihvXP42mtONJbRyy2yw4wwg1YOOtINY24T85w17wY4sjLo%2BQBDcqVzErPHyOyyagBUkUMKY77KoYbvsxQvVrFJJcnPrx2%2F1JTB6G5UyMzYOEdVYvFFHCZOWtgLiLpB0%2BAZoLeyL0Dfm8BOqNj1P%2BWgtA%2BD5uVlEp%2FG%2BQXKaVNP9BzagHP3Hkm7QZ3WR3C%2B%2FBhqfiReL7IDgreRKCjhq%2FFnkwuB%2BzEs2z83TyYW2XascuvBKQxrQ1jOUVwvs5hRHh%2BTboHXFdEzS7Gjaj1b8ivvllIvg2hqS0m6vQ9eqBLWSsZ0To4OUtQsu%2BZEhMvqRDRn58KcdPRaoEbT88YQqBWKB3NV10eZdhk6QrCDl5lBjgYWWsXXdjF0Kv2CRzf8q5V37UIbqq7QGIeicD%2B38J2SZIzHxQZYKHVbAN3WUrc0ftgWKYTJYvVdCWpTskB9iVZQ2uZeuidQKkeVAj0lLZdNK%2B3uLvZmeeLrxmlKdcFXNa4N7Xjr7kKdyI5KS%2FYRJICEnLJwvZPvPGXnrxQ3SXWDIhWhm%2BZpwzC%2B8tDIBjqkASyFCPkhG7y%2BdMnZDdk7P0ZZysOzjFp%2Bce%2FkvBmKI1ZFNsqXgmSm9tu44DVWdBmrSUXYZxBBZ2r1Z0cpvrOFXODU5rJQwtgIvhY9sEl7gFDyOBIzOkMuDC7H%2BdsqWCnJpdQvR0ariFRioyk04XS9YEPYcigYdvpFjiPKhoaD3PGi54uCCfHzhyv1mz%2FfbTYMxFV7xREIa62GV51kLyu0LlrqXmh5&X-Amz-Signature=7c1f5e6787499a1b16cf6220bdb7e495f1ff7d13628e8f5bd3a46588fca9bd86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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