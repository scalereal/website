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
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/105c63a9-f2ab-415b-84f7-3fed3a9ab813/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBXIVNQ%2F20251119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T071354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCVxR5KoFpBLOABdxGDyECiNQQ8Qg%2Bw63tTttWNjnux2QIhAPiM2DBnoziDNM4ixrhUuFwWj7i9niaKs5TvKjW5facoKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQxB9%2FOzJnWNI1Stsq3APJJ9XKb7AYCCMeaKtOE87cn3B43o40xUF3vJs8sPwMmpnLqwAhw9lItQtUS6qQPfIi1idrApwS8To0zIKN3ZknvcDy6xbQ33LV%2FzYHZZjed8kBmS8igs92G%2BMb1tLT4p0VPI0oPh0P3hioiN87owKQXtoM6Hi63SHbOihiGC1v06cdYqUPxCrmP2kef%2FTf5eUoqU5MKEpAKbHpO9oRJy2BJpAxzlnA7kFzPDeYHHfpfWFnCYHPH3TVpeUqALrFtHKgauvP4%2B2kf8mhWMtzhEPvJ4kdcJcUZsEMeB7WkOqtxSwsB9KmJBRBsJR2hFjfHjjmJE%2FsKKLqF2aEJ8RyMLNp0viyYO%2F7lRlggfJqKr1YU0%2BCD%2BlBff8051pGv%2FNcIpmk4kkOqYWmFjqxEgrYosI2KuSxqJa5u0rOAV%2FB2eEMvHHaufhyLwG0FDTe2ufJeJkato3%2Fv3lMzqSHQLlQPfj%2BTCY2jmSqtyNa76oZx8q6jf2cI7l9pMY2SA1Yggw8V3cxudz9YXSpHRpu3BVjA%2Bv2Lzw7FSdLIli6Lbmqiu%2FS%2BrwI3MF9NRF1fW30%2BZwFkYGBl6w%2B1FGRwBiAaKcZCiMtnpn3f86QtwL5wSVfMp6HD1qK7f2z%2FQgA3hP2pzDN0vXIBjqkAUJSf9lHPKxda%2FqMZebyN9n8dsS%2B0FnFDzxCEQ63m7THAiDsastrP1Yz5a1Ucd6pSXvJnSMKPNhDX3NTlvfwN76L3yzkTs%2BoY4W5YOfqVZNUwaG5M%2B9wY8dJn2aV9a%2BhfMJAAua40Pi40HVJP%2FMLF1O3s98N9fAGi%2BvP0NCJ9LG7CWSOg0rsmkHFRBN29Se5IRQGnSQIn4IbBXBH2GKPYfX6LzQ4&X-Amz-Signature=4c64cb3aa40c9d36bfa0c58db1f5078e3ed2f7d6199589f4be4eb094d3394432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5R6RIN%2F20251119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T071354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEz2ElAaeOW4%2Bul3ldE3rgtBS27NgULRUkmRpQcrhhxzAiEA1JhnkO0et1C2Lkzx83rF06y8tspPPx18Ys0IqKA9POkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkMGfsswOj6RPQf9ircA00h%2BYm3hmQuJTVj4k0ualA9QQPQQvF2lYy%2FugXzT5BHMb5edlGAIJ6Ze4TKdMGk24lZLlAQqBkKiGn%2F%2Fjr7gjK%2B7KEjfBebYKZsiXAGEtuHV0RRk0zZpUhIGcSHkYDiZuE57zgevWQEp5CqgmF9LkiNi1bjXCV9cO3it0%2FZvjLd4GtfoM9Uii6jmSg2EQaVvJOU4ofUEIBgdHxueGuYLTs%2BXnzXEzt8SeOXa4cjURAExFKlDwPjSpIRGMzPRje1AtQU2ZOHTLzBRjftI7w%2BE0zbzlfKG6qJWhrmFQGHBTcAAwtgAG711%2BHVwcMxXd3bnU7f3WkT3ky47WV8m1fqtLM5pQS5h8z9Waj4rJ3EsUe9xVjsgg3FcrPIJsXoeYdWx8OuUHz4NYLfAVqLTQssfhSlTCH0ImfcdxqBBAXOrDmvaXWr627H3ohjooX7EozWH2%2FERaTxqKlqotuYRWkVnyiy28l5QYdaVocKPF2t761ZvQn%2FTxieBsw4NWM5SrTU9IeosPBTYfe2oUKTBlkUzfhRwbWdtdK86gL0nCuNGm6Uw9W2F8gp1GvOsWScNf77dSafAMkfgwEpJQWm5mCSGBVwc9Ua8JPRRNuxpfNnpUqJnx7GFHaU3sooilWEMIzS9cgGOqUBE1HceCPimajYYEzQMGofTDZpt3ZdAv7zcrbqWWutAuaDGesc05erm0zLn6lriSA5beys0n%2FSkobllUDZ0D6FJpRAVyWRb%2BquJtxhOM%2F6Dht9A2NVBn4IxFcAOBtumxoMqki3SH%2B5y5lr8IkCJAJuNWMxl66%2BSr%2BGEkQbUOmq3acts5dPh1vIuz%2FbjcALHNSEhUwkzshK8qhKk6MAwxNlq7yocoRC&X-Amz-Signature=c5dc7329477cc1678054bea90f77fadbe36136dc935ac6f465e313af8353eb35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR5R6RIN%2F20251119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T071354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEz2ElAaeOW4%2Bul3ldE3rgtBS27NgULRUkmRpQcrhhxzAiEA1JhnkO0et1C2Lkzx83rF06y8tspPPx18Ys0IqKA9POkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkMGfsswOj6RPQf9ircA00h%2BYm3hmQuJTVj4k0ualA9QQPQQvF2lYy%2FugXzT5BHMb5edlGAIJ6Ze4TKdMGk24lZLlAQqBkKiGn%2F%2Fjr7gjK%2B7KEjfBebYKZsiXAGEtuHV0RRk0zZpUhIGcSHkYDiZuE57zgevWQEp5CqgmF9LkiNi1bjXCV9cO3it0%2FZvjLd4GtfoM9Uii6jmSg2EQaVvJOU4ofUEIBgdHxueGuYLTs%2BXnzXEzt8SeOXa4cjURAExFKlDwPjSpIRGMzPRje1AtQU2ZOHTLzBRjftI7w%2BE0zbzlfKG6qJWhrmFQGHBTcAAwtgAG711%2BHVwcMxXd3bnU7f3WkT3ky47WV8m1fqtLM5pQS5h8z9Waj4rJ3EsUe9xVjsgg3FcrPIJsXoeYdWx8OuUHz4NYLfAVqLTQssfhSlTCH0ImfcdxqBBAXOrDmvaXWr627H3ohjooX7EozWH2%2FERaTxqKlqotuYRWkVnyiy28l5QYdaVocKPF2t761ZvQn%2FTxieBsw4NWM5SrTU9IeosPBTYfe2oUKTBlkUzfhRwbWdtdK86gL0nCuNGm6Uw9W2F8gp1GvOsWScNf77dSafAMkfgwEpJQWm5mCSGBVwc9Ua8JPRRNuxpfNnpUqJnx7GFHaU3sooilWEMIzS9cgGOqUBE1HceCPimajYYEzQMGofTDZpt3ZdAv7zcrbqWWutAuaDGesc05erm0zLn6lriSA5beys0n%2FSkobllUDZ0D6FJpRAVyWRb%2BquJtxhOM%2F6Dht9A2NVBn4IxFcAOBtumxoMqki3SH%2B5y5lr8IkCJAJuNWMxl66%2BSr%2BGEkQbUOmq3acts5dPh1vIuz%2FbjcALHNSEhUwkzshK8qhKk6MAwxNlq7yocoRC&X-Amz-Signature=716033f41ae435be8a51bcda6ce435350c602e6399096b8dac86b1cda65546bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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