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
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/105c63a9-f2ab-415b-84f7-3fed3a9ab813/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH7QJACP%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T055238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDN%2B37%2FHy2cOUZFcOnyzNvYawsjbYJo48E%2FxMckKWMU5gIhANzNmInp8nFBxxE2RzNvF0GBIgs3odZNRp05K1nTngK%2FKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPOaJQHJ42dhNAx7Eq3ANDaPBSbSJCMqMJHPzBnSKEdu1Ie6F1BduH4tZyHr3G%2FzFL41HUBbmYGY%2Fo5RUv638at%2FiYWAMb55e%2FVz8ZqFnv7yJEuC%2Fcgrn%2FefJdJRf1sAhwJ%2B728yiwtw90%2F13zo%2FQapxH6IqdpXa3uFV1lPBuI7otVmMMKenLMroGLSyqy90ymfvKMXDJC1NJptvpFKzmyzc2pPkDGhlgnRRkx1gck9zXwl2Of1KVGTLtCd5W6ZJv8ddugRIc2r3uXWfdXh%2Bprm94%2FAkTOBKFrtvEyCZ1ATSblnW%2BatWTarsOdtfCH73deA3lF6udcyx14716mhyxMOYF186iYUizzpxLRs2MKUMFMYpp1uROhxOxRUKtGrnN1%2BBv%2BcXWnzJRm0OgacHXqZfCL9l%2FB45QP0SFuWciFro5uZ9nmr9PiegMrR3kGyUT4htSuqr55%2BNlXbsz%2Bt6E3YvQKcQhfrFVJhVNf5oBOAPyV2l3uyUKX3w2WyTRSIrnn6tGfRdoNOSjinuG6mAo6ZRNXkbtB5K2RWz8L1lFqaIZXmezpr7XaJZk5O1br8kAgZ1%2FdSOU69vXIwqB%2Bi%2BtU2IEDdJyJHf6JWATHiM9UA%2BdqYVC2MfUpz2Fy91yzq7hFs7tEhqFXhukH4jCcu%2FrIBjqkAX46Y6hxN7X5tv%2FPAsy4wCf%2BKAqjatEX0pqXtB9Vq991b7Yadyel1xgBdsBl93u2I%2Fndr2x08CUcQTIXNuIXOBCxtv3BuLQdhG%2F3ZgbPbGzQmPEjoQbG1YdqmtEkOTVIBL5rEU%2FOZqkqvVfElYeblyp1klraQRPewSGVgCfTlsMnvDATTTlef1clXG3J2akxi1fMdZ4IqEc3knwoV7zxKn3wY%2Fie&X-Amz-Signature=f827e8e1a24bea096e4e4ddc29a419f62c92fd0590b0d203e62fa7a0d53a42db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3RBNKVY%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T055240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCbl2QmgUjTVInh4nDVAzQQ7iqW%2BlrmAtbRSIdD8RGSagIhAO8IjDec8dc6jh9KLN5ka2Irar6Fop29ZfnwokKVNtkoKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1SlmPWRc6PcYcnpUq3ANl1IDB2iuXnwLkg9jZTl8VF5lUX8zgGZpivUeqcRhjjECRDWenfB6GgpiFNnjrW8U3UvWW7qtL4sSEHdeDogG6YudeDn6uI%2Bvt2vYPnzP7cxEJDigc9grmq3x4l09HQh3jfuC%2Bedq1b%2FNOlCNQkaO5STRN6Gk3jU000gkL8o%2BdZ7kBb2B6dgGLqI05RtgmPaOt3T%2FjxWKDRdOj%2B%2BnRg3f79NAZN2t7sgYh7GH5sAUzsAYfIJG4QTgXFjwp10LQphM7AeY07FSpaubF0ZFXkQowYYtnzl2T2q2LmMpeoVj1FtTWo4jIOPwxVayKDFAuWXvqORTX6kjsAeiU27xsxSkoDX69MeGAfn8fkzpbMXHtW8NBYCieb7oVM%2FrLy5sw2T9fjnWpHZHaMliMYURVDp2GB5Tk52HdsKPyUl1AHBX3D%2By8AUG%2BjYN1fh6nHhGfEQrmRm8VBiR0x86c0cVFKddrlXfRLA%2Bu3wjZZkHacufRUhQzWVh70RTQhXIj6gUkwDLnhypcBq3W%2B56RwVICmf%2BF83EPd3wc%2B5NIQcwAg6mSN4L9TMf8Sbz%2FpsAAwDQz0dQr1CM2ffO3%2BloW3vQkFq7PT%2Fyj36%2FUyghfJMm%2BjyzobjXz4COIHeE5QSnvlTCm2PrIBjqkAVXSJ4h7H31TuUNvObclEF0ONOPDcwAOHl%2BBqlJzzlm%2FoqAEM199U%2FEecYSyDyAtnUtQaF1PHokqHe8ojmaUEemCUPoZAWu0pKrlymbc7EN%2BPoE%2FmTdDaoHFORLa8ESfnfm5YMHTt1awBU8k2GWxBGiiU72aP2w5W759cM%2BHiiy6zTjUzWe43DMsqBQp7U7stnHUEglvQEC3S%2BETqLvYVEjDR4ui&X-Amz-Signature=069fd875640d74d5d51e67e7b61e9ce1433a9cbfc1466d9214de783f9521d024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3RBNKVY%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T055240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCbl2QmgUjTVInh4nDVAzQQ7iqW%2BlrmAtbRSIdD8RGSagIhAO8IjDec8dc6jh9KLN5ka2Irar6Fop29ZfnwokKVNtkoKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1SlmPWRc6PcYcnpUq3ANl1IDB2iuXnwLkg9jZTl8VF5lUX8zgGZpivUeqcRhjjECRDWenfB6GgpiFNnjrW8U3UvWW7qtL4sSEHdeDogG6YudeDn6uI%2Bvt2vYPnzP7cxEJDigc9grmq3x4l09HQh3jfuC%2Bedq1b%2FNOlCNQkaO5STRN6Gk3jU000gkL8o%2BdZ7kBb2B6dgGLqI05RtgmPaOt3T%2FjxWKDRdOj%2B%2BnRg3f79NAZN2t7sgYh7GH5sAUzsAYfIJG4QTgXFjwp10LQphM7AeY07FSpaubF0ZFXkQowYYtnzl2T2q2LmMpeoVj1FtTWo4jIOPwxVayKDFAuWXvqORTX6kjsAeiU27xsxSkoDX69MeGAfn8fkzpbMXHtW8NBYCieb7oVM%2FrLy5sw2T9fjnWpHZHaMliMYURVDp2GB5Tk52HdsKPyUl1AHBX3D%2By8AUG%2BjYN1fh6nHhGfEQrmRm8VBiR0x86c0cVFKddrlXfRLA%2Bu3wjZZkHacufRUhQzWVh70RTQhXIj6gUkwDLnhypcBq3W%2B56RwVICmf%2BF83EPd3wc%2B5NIQcwAg6mSN4L9TMf8Sbz%2FpsAAwDQz0dQr1CM2ffO3%2BloW3vQkFq7PT%2Fyj36%2FUyghfJMm%2BjyzobjXz4COIHeE5QSnvlTCm2PrIBjqkAVXSJ4h7H31TuUNvObclEF0ONOPDcwAOHl%2BBqlJzzlm%2FoqAEM199U%2FEecYSyDyAtnUtQaF1PHokqHe8ojmaUEemCUPoZAWu0pKrlymbc7EN%2BPoE%2FmTdDaoHFORLa8ESfnfm5YMHTt1awBU8k2GWxBGiiU72aP2w5W759cM%2BHiiy6zTjUzWe43DMsqBQp7U7stnHUEglvQEC3S%2BETqLvYVEjDR4ui&X-Amz-Signature=f2900ead3b12dee8ef4f666c15648c294cf9b3211aae2adea4644167f3188638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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