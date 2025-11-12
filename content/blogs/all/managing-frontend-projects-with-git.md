---
title: Managing Frontend Projects with Git
description: >-
  Establish a consistent, efficient, and scalable Git workflow for frontend developers, enabling streamlined collaboration, code quality, and release practices.
date: '2025-11-12'
tags:
  - Frontend
  - Github
author: ScaleReal User
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/18f5a88c-0ec1-470e-b448-40b9a4cad7f4/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q3KWVAH%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T074037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCh8PfGtxxvV9ElhF40l31PuYqmVuu1YeJGi4jV0j6gfAIhAJw%2FuYaL68w2ElgpecCaSMVowDHv2j25O0CPBGbm11mFKv8DCDEQABoMNjM3NDIzMTgzODA1IgwcjzmjwZutqlv%2FQWAq3ANXqOkYBRexwIkkBFdwnOqPN9vQoNd6nDnkO8eE6FXSZZP7DP88BVQDfqph79zUEnDayv9z5HpOnABmiZ2OpRUHu1SQcLGahVduqRQirPKsk5wL%2F2UnbLsW6gKs7f%2BmMFv2kY9Fw4ukkqWzGz7Z013TCy4XmbBWbs2IhPJEoNRY8OIFgGMeMUqjvhyhIBwUTKMDCdGVXeq9DD2lsF143IgLWC4%2FIH0Wh7ngx4oansnpAEUhmCkNzjGKa1M1Cou0HBT7BBOyLpX1wOGgcuVA6EtvslB1aUe9UO3iTUcc5lmqezMJsbQ4GnOKOogqZgZ1NEQ97FI%2Fc0Kc8WRBtruWv40pFmFYqLDQDCI%2BFDCfTVUIGgGmWt%2FmU15FjpM1bkqTCX2rsjwYednnrxunXBMABI7v4%2Bikb89ywgFnpl%2BiPdQAsf%2FT3M%2BAVdEu2aji%2FcwspEve%2FvlmV5AXQZhYdMieuDnG3bQBTipDG8EUjIjlMzuPnlZIJwnmgzxCDaD5d7BJYd0S4SnTFb69eEsI8os97s82%2FjK%2FuIUn%2FQdB7iaqMnz7E9rtFowwTgGwfcd7CeNWoxAPK%2BiFOD5XTSNSA4Uuvf4dZ%2BeFwc3RVtoQyAImcIBfJ5gLg6JT%2FvaVTMWs7zCR89DIBjqkAcEZ%2FU8UFvzCuh%2FR2GimIw0qzH%2FOcgSkvTosKsgmmKNpnaKlF8xpY8tdg5v4SZd6le%2B10Lc%2BYYFRKQGpuHAHCXffbN2N5jbucx87w494RZ%2BPdeFDfwPeFl5OrRdlSjB16BbysfcBR2bdZ%2BBvp1ToAqtvhmGY2AN%2BnAT6oIxqXmRvXrYhumoaMVkgWbU3o4rtcguaWlJJd8q6CZ27U4vMQ%2BTnPoFq&X-Amz-Signature=26b06c50babd8beba1e090bf42d7734f482099e640ad86f94e034fe4b2b31f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCS5PDYH%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T074039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDlVN7SbDZtpv1LUxQK6tYEENMWB4bG4I63caqrfb9aKQIhALgo1qD5p81M32RmDPtD%2BWqwrdE%2BUnJm%2F1Cuig61Ndu0Kv8DCDEQABoMNjM3NDIzMTgzODA1Igzl6wS9rAh6D%2B0u35Eq3AMIJgNSvDsloHlO%2BU7bZTggU0rKBE8eY%2Fll0zL8ajSbP%2FKkcJfaS05IACwQ5Q1muqkwVpDgHkXE9SriF8VkZsSAheQ55h%2FuQwzUUrSBf42f4RsRmFPYMH3DAIbA4DSapz3FlXfl7LAsGwD8glca1Z5K%2F0m49PwBAAPyKPFeCsLHUKOjjK1b6PtNZT%2FOH0wpDZQ9V7uxRfeMeTMVwxUoXVZbaC%2B0E9AmeZl3eKnCicmwHuer0OmrbRFuIvnVDIQOHY1vF%2FWYb5RrXRoj46%2FnHTQP3yISf1LBfB3TSfFsL7LYYG02D4%2Bkp7qJpdR7lNBPvYp01JWUilPwWflguffmkbI0AJRly%2FBAOjXKnnZ2HwVttlsX5pI1X7Rqg30UxxtG6lDR5OYCQEARTUT5ezI5pV4DV1%2BOWnX18UpRjJucrN4n4aVAiU7Xix0Oect108dC9zmXmxkaql9p4jkE6eY9cW4WTzusECs0QgGJmzyLr2EdXdONjYaOBVxu%2FdGOzuH6SPTLRV3zdhu3Ryh3iONd7HPlvWPAM9wR22rIrOKvgkb5%2BIv8s0F%2FJlNjHZjRwcr%2BF1bmKO5Fyk7Aui%2F9t5QFeoRUjIIbnFRr9uvVK2uzuK2q5CY8JcOpWgiwHWCYUDDQ8tDIBjqkAV1QoUAsqrjhlCquEiy3JD4txa90HQ29KuyWJkbqn3GZoQFBR%2F6tEAqPUxKxgYydH8dA7km1E13l5%2Bo9XMbpQXZHP7N5zA2RQxHbBWrWW9Rv3W0i7Lf8O6vs3ZZpLoLLtUhfnjVukfvLv0aZluNxPWQ2xY2%2FGZFxyozNcUncRJ9Z2x8hb%2B%2BEdAR8x3jHfAEoJa%2FwzaYYPaW3A6NqyhOAtpvKjz33&X-Amz-Signature=316e6534af26117a52305b4d29d08adb9daf13438e90305a6d6c68e61fcaa8f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCS5PDYH%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T074039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDlVN7SbDZtpv1LUxQK6tYEENMWB4bG4I63caqrfb9aKQIhALgo1qD5p81M32RmDPtD%2BWqwrdE%2BUnJm%2F1Cuig61Ndu0Kv8DCDEQABoMNjM3NDIzMTgzODA1Igzl6wS9rAh6D%2B0u35Eq3AMIJgNSvDsloHlO%2BU7bZTggU0rKBE8eY%2Fll0zL8ajSbP%2FKkcJfaS05IACwQ5Q1muqkwVpDgHkXE9SriF8VkZsSAheQ55h%2FuQwzUUrSBf42f4RsRmFPYMH3DAIbA4DSapz3FlXfl7LAsGwD8glca1Z5K%2F0m49PwBAAPyKPFeCsLHUKOjjK1b6PtNZT%2FOH0wpDZQ9V7uxRfeMeTMVwxUoXVZbaC%2B0E9AmeZl3eKnCicmwHuer0OmrbRFuIvnVDIQOHY1vF%2FWYb5RrXRoj46%2FnHTQP3yISf1LBfB3TSfFsL7LYYG02D4%2Bkp7qJpdR7lNBPvYp01JWUilPwWflguffmkbI0AJRly%2FBAOjXKnnZ2HwVttlsX5pI1X7Rqg30UxxtG6lDR5OYCQEARTUT5ezI5pV4DV1%2BOWnX18UpRjJucrN4n4aVAiU7Xix0Oect108dC9zmXmxkaql9p4jkE6eY9cW4WTzusECs0QgGJmzyLr2EdXdONjYaOBVxu%2FdGOzuH6SPTLRV3zdhu3Ryh3iONd7HPlvWPAM9wR22rIrOKvgkb5%2BIv8s0F%2FJlNjHZjRwcr%2BF1bmKO5Fyk7Aui%2F9t5QFeoRUjIIbnFRr9uvVK2uzuK2q5CY8JcOpWgiwHWCYUDDQ8tDIBjqkAV1QoUAsqrjhlCquEiy3JD4txa90HQ29KuyWJkbqn3GZoQFBR%2F6tEAqPUxKxgYydH8dA7km1E13l5%2Bo9XMbpQXZHP7N5zA2RQxHbBWrWW9Rv3W0i7Lf8O6vs3ZZpLoLLtUhfnjVukfvLv0aZluNxPWQ2xY2%2FGZFxyozNcUncRJ9Z2x8hb%2B%2BEdAR8x3jHfAEoJa%2FwzaYYPaW3A6NqyhOAtpvKjz33&X-Amz-Signature=2251c5b7609b4148eac997776e90951da0c5252622a59fd79d185280a80cc17c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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