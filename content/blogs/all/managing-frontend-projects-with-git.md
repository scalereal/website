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


![PR-lifecycle.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/919ce7fa-5297-4567-a260-4e8ca0407346/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YICLSZLA%2F20251031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251031T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIF4xBZUPzBAdCb%2BLz%2FdeF%2BhkNkkKc0NFx%2FWEwh7YNaiWAiADcwb1Q2II84agAi7fPCgmFZNpaICDOI0bf6JtY6dxHCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwe5bnMFizCfHAdz%2FKtwDjfzqVuoOCfi8AnS%2FegotXkte5VdyjlFYNj3jL1iJXCgAP5H5DW6ZrrOzWSEla59ZRJ3JPa7NH868ZE1ZQFwiVKbv10kzROkoQ2dpEd9LQOgwipXzKlz7vJeyUdEgk6MTjDUnZbnFLyj1bl3KTI1D09bfc1%2B6sXl26TDiN2i7dHJRRMJshTlBsvhC9gZ1KaYgeXz%2FBs3bwryZADRu2s9fTfUS4fj7cGsm1se4n4E1KpkljWrUx4U0Tz9p7d9M5bYj%2BX7pkJZdNemSIpfuCE026UWyCrpUbXkIrz6pljhbvRgigjZn%2BRk0bvLlbCOJNcQCUD2Hi4n3o6zLGsL02xKWZ4Q7uWi68HYPWUnmyQM%2FwpAJBJvzWRnbvXhEqo4TreK3tGcTzF6uzVgKg8%2F9F9w%2BBqcLUpEPRPnD1wbjMH9myGZ9rVwcjQISie5Rne0QoTz9btvPzWagMD7MFS7xsRauJrRKq8E9noNrxMG9v3U%2Fpw%2BBQ0ojXAu2YQB21p9mXvVmT9iOtNGfJA1OLUBD36ECFvTTSYv7fUv2fAVhPrCMCqpNEBbBljn7lv%2B4jsgoKlxR1OVNnjFmRRVmq%2Bj1QR%2BtHYylCcXOoMkXnsN3u2zqqHYsvVafPwew3yqrbN8wxqKRyAY6pgHMAswlqErS3G2DZzBkz%2B3BzTyfvejswGLSwQ5BfNtpQpy83uP76eaGDxl8pr3RdlDXkw4Gyveku1DH2vb3%2FgJEOy1NUGvAplLpLpjlENE8rfXn9vc4uyB72YKvG6Am3VLuK8fWRapxjQGdgDnzwfeUBd%2BFIGtKscLp3Nq%2Fjmt0ZCGMOM3eRmlVuGECDdyWr1s2oiX7B8yc9SV%2FTTeISNuhr59LDbIR&X-Amz-Signature=606ca7ffab08b3232110fbd484896d863e53ff4dbdbd696e7e256bea4ad0fb1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![github-actions.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/919ce7fa-5297-4567-a260-4e8ca0407346/051aebda-0ec1-4697-bc1b-386e95817ea2/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YICLSZLA%2F20251031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251031T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIF4xBZUPzBAdCb%2BLz%2FdeF%2BhkNkkKc0NFx%2FWEwh7YNaiWAiADcwb1Q2II84agAi7fPCgmFZNpaICDOI0bf6JtY6dxHCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwe5bnMFizCfHAdz%2FKtwDjfzqVuoOCfi8AnS%2FegotXkte5VdyjlFYNj3jL1iJXCgAP5H5DW6ZrrOzWSEla59ZRJ3JPa7NH868ZE1ZQFwiVKbv10kzROkoQ2dpEd9LQOgwipXzKlz7vJeyUdEgk6MTjDUnZbnFLyj1bl3KTI1D09bfc1%2B6sXl26TDiN2i7dHJRRMJshTlBsvhC9gZ1KaYgeXz%2FBs3bwryZADRu2s9fTfUS4fj7cGsm1se4n4E1KpkljWrUx4U0Tz9p7d9M5bYj%2BX7pkJZdNemSIpfuCE026UWyCrpUbXkIrz6pljhbvRgigjZn%2BRk0bvLlbCOJNcQCUD2Hi4n3o6zLGsL02xKWZ4Q7uWi68HYPWUnmyQM%2FwpAJBJvzWRnbvXhEqo4TreK3tGcTzF6uzVgKg8%2F9F9w%2BBqcLUpEPRPnD1wbjMH9myGZ9rVwcjQISie5Rne0QoTz9btvPzWagMD7MFS7xsRauJrRKq8E9noNrxMG9v3U%2Fpw%2BBQ0ojXAu2YQB21p9mXvVmT9iOtNGfJA1OLUBD36ECFvTTSYv7fUv2fAVhPrCMCqpNEBbBljn7lv%2B4jsgoKlxR1OVNnjFmRRVmq%2Bj1QR%2BtHYylCcXOoMkXnsN3u2zqqHYsvVafPwew3yqrbN8wxqKRyAY6pgHMAswlqErS3G2DZzBkz%2B3BzTyfvejswGLSwQ5BfNtpQpy83uP76eaGDxl8pr3RdlDXkw4Gyveku1DH2vb3%2FgJEOy1NUGvAplLpLpjlENE8rfXn9vc4uyB72YKvG6Am3VLuK8fWRapxjQGdgDnzwfeUBd%2BFIGtKscLp3Nq%2Fjmt0ZCGMOM3eRmlVuGECDdyWr1s2oiX7B8yc9SV%2FTTeISNuhr59LDbIR&X-Amz-Signature=c6a84422a8d311b0f1f5d0ce60288b53daf65656217b8a3d04dc3fddb02127da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
