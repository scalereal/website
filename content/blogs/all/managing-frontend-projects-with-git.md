---
title: Managing Frontend Projects with Git
description: >-
  Establish a consistent, efficient, and scalable Git workflow for frontend developers, enabling streamlined collaboration, code quality, and release practices.
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/919ce7fa-5297-4567-a260-4e8ca0407346/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A3USLN%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T073104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCMelUEyt8OjVCglXjzRZMSTWe8hv1MR%2FQi1CtFSysttgIhAJZAJpiEOrYrrWXgoVPcO3D7hPNKsBryAU%2FD%2FvZp7hcLKv8DCBgQABoMNjM3NDIzMTgzODA1IgxII6fracid0JHXHMQq3AOCdl1jh4MWLTHE%2Fg5FjiEsnXht0O94rx5QFUeyCWiIdiRKarwRSz68Q0qPqdCSDqe4GRnOHwrT%2Ff3j3Qkl%2FvZSoE%2ByogACroD2%2B2zoGFMjRJURqOZtJYwbWc4k9JJh4Ja2uuY70NqyyjQTf3VsnCZpnUnyokId7ZJ4CjAFxjHUIQD0fsyjLrSgfy87BsSc3qqytzlwXy%2B16t8mxiFHryqqmv3TGrA3kuU0SRVAMvMXHhSuOk3euB6r0Tb%2F3gzlK%2F%2BSc2KZjsUMEF7%2FBDLIwbJmUkQrTbMpZ5bkarXY762i2Lc2fS4Ik%2FJQDQ0vw%2FBl04u6wUwui7LW03ESg4wwbMcbtyOwzLno2WiIaxvLjWQ4nXyTRRK3cLiYemO%2FpMr7PHkuCGKd1zaLA36kAohiq36t1De8UGUvvp2oXs%2F9fU9sjE7cqTtsKSrlUnt748347Fb1CaXFjNPELuvJvPMgI6AZOC%2Bkto%2B0JFMu4o1Cxsv6CIrm89hHgqsm8uyzClkc3TlyXQcP9%2B2yJhrB0pOJ1yk5KWaRUBkC7%2FoePy8rcT%2BGxOIE4cADj5sWCOmW8JpWouhf5uk%2BiO52%2Bg%2FEmyM34ne%2FRzLzvQSoTbG2qV4IIl9lyz4GJDz8s0J5qBVsmDDmucvIBjqkAX3U2guD33xQYpNH3APrY%2BSJ57z36JmVLyEoHTI6PfNyGqLeNyrVXVgVW%2FfpFb4kivWZcObKX1RkNLq06J3EgloZs7s6xgWAB6Xjd9T5e86jbDtDGqay0tYR9c3ZoCtDW4G30XacZFhBeY6lDqu6enwxb7HP52n%2Bqr1i42cebzp43t6qpV8%2FmTMJFLqnnr%2FdIG9eEGIc7Qr3zYy0vjmeipOud1YA&X-Amz-Signature=2ea049429e077172fe710855f0b9e30fd1ecd3d0b0d9d54842eda6d3392980f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/919ce7fa-5297-4567-a260-4e8ca0407346/051aebda-0ec1-4697-bc1b-386e95817ea2/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A3USLN%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T073104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCMelUEyt8OjVCglXjzRZMSTWe8hv1MR%2FQi1CtFSysttgIhAJZAJpiEOrYrrWXgoVPcO3D7hPNKsBryAU%2FD%2FvZp7hcLKv8DCBgQABoMNjM3NDIzMTgzODA1IgxII6fracid0JHXHMQq3AOCdl1jh4MWLTHE%2Fg5FjiEsnXht0O94rx5QFUeyCWiIdiRKarwRSz68Q0qPqdCSDqe4GRnOHwrT%2Ff3j3Qkl%2FvZSoE%2ByogACroD2%2B2zoGFMjRJURqOZtJYwbWc4k9JJh4Ja2uuY70NqyyjQTf3VsnCZpnUnyokId7ZJ4CjAFxjHUIQD0fsyjLrSgfy87BsSc3qqytzlwXy%2B16t8mxiFHryqqmv3TGrA3kuU0SRVAMvMXHhSuOk3euB6r0Tb%2F3gzlK%2F%2BSc2KZjsUMEF7%2FBDLIwbJmUkQrTbMpZ5bkarXY762i2Lc2fS4Ik%2FJQDQ0vw%2FBl04u6wUwui7LW03ESg4wwbMcbtyOwzLno2WiIaxvLjWQ4nXyTRRK3cLiYemO%2FpMr7PHkuCGKd1zaLA36kAohiq36t1De8UGUvvp2oXs%2F9fU9sjE7cqTtsKSrlUnt748347Fb1CaXFjNPELuvJvPMgI6AZOC%2Bkto%2B0JFMu4o1Cxsv6CIrm89hHgqsm8uyzClkc3TlyXQcP9%2B2yJhrB0pOJ1yk5KWaRUBkC7%2FoePy8rcT%2BGxOIE4cADj5sWCOmW8JpWouhf5uk%2BiO52%2Bg%2FEmyM34ne%2FRzLzvQSoTbG2qV4IIl9lyz4GJDz8s0J5qBVsmDDmucvIBjqkAX3U2guD33xQYpNH3APrY%2BSJ57z36JmVLyEoHTI6PfNyGqLeNyrVXVgVW%2FfpFb4kivWZcObKX1RkNLq06J3EgloZs7s6xgWAB6Xjd9T5e86jbDtDGqay0tYR9c3ZoCtDW4G30XacZFhBeY6lDqu6enwxb7HP52n%2Bqr1i42cebzp43t6qpV8%2FmTMJFLqnnr%2FdIG9eEGIc7Qr3zYy0vjmeipOud1YA&X-Amz-Signature=1e66bdb986ab9ca287f79079ae5466ca27f0b00f3bbe1effa8949ffca1c14226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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