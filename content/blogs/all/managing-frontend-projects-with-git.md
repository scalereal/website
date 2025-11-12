---
title: Managing Frontend Projects with Git
description: >-
  Establish a consistent, efficient, and scalable Git workflow for frontend developers, enabling streamlined collaboration, code quality, and release practices.
date: '2025-11-12'
tags:
  - Frontend
  - Github
author: ScaleReal User
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/18f5a88c-0ec1-470e-b448-40b9a4cad7f4/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKYG7BQ%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T055413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIB0Vynre71gQPGXos6SFINCC%2Fm2yBrF60UmJ9J8n7dA0AiEAuigK1PNiF5zPXKgtculCKFflLQIhfVi94QCoHFO1y%2Fgq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPkovEUK18aXXBGB%2FircA0HOOyjS%2FOnNraTBZfG0H4y3tPbVdshiphYQsQvvaB0auuMEI9eDrfMxZIPzrcMjco1EHUuQ%2FDoVjw7tGc7efFuRJDdnu8T2boeXsyjbU7tlN9RMZ1pnC9RYHq0B4cj5WK%2FY8m20lk2OTAWn2rrZzG2%2F6ojVuD%2FN3W7it2n091scF3Pz7c8ttezHymjOMI5gcq2JHU6U%2FperNZaS2zDBxMcDVX6SLmjEXrKWIq4LPgKe5%2FkmhcYlseTGO1H3Qhrw%2B5vMWaGDEJU%2FUuFeCytgbMTpl8%2BxnhD1rzGgEbiHvni6bQY5GxZdMQP2HTBwTsyjvYgCUvhqtlc6s7jJoYZSa4qkfiftGL%2F7zzQWdXM7IRS4puSkyUQ%2Be%2FFtGvXDuGqiYmKa%2BjfVBPGsyjDQZRfJWnKQf%2BjwRWw1Hc2MX9L6NUk%2BvlsvICjlw04pOM4bhsYxJeEFyX%2Fbvn8dzFVujO%2FUZtF%2Bf%2BHAzSXrgdHqIAMdyicyvjcmRcVW%2BMFjhAZDdt0c6AyDhgDFN%2Fy4v0vlGxeDeRNDhhYdkRiFL8jB60mVKoARceR%2BoDNA6Wf3Eo5BGRBMvUi78qfkemnRbGwcIanrRg7GhmdSsKTER5xnZpaknKkidRa3%2BALkrpuUdFcTMOq00MgGOqUB%2FV0qjMRkYickbgBiZnMpWQrg2MoYW%2F0EYjdu3%2BFtMbjSkqqtyfOpAVx8%2Br19KesbTuo1RjLWN%2BJQCzsLM%2Bwm12fFe4kcmggq%2B1j6I098Ohmt9svjcFjJcQCKde%2FmpqctRcicy1DCb44%2FVsB%2F1MuuZWm%2FPaGmfpXCWbQQziPEBUypexwyHw3w7m7LjBogoqRnydvTldoMqv1GTLQMHOMJF5%2FL8vuS&X-Amz-Signature=807e4fefe647e1060c908a019dabb2fecce2427c8055cfff211f1e1274598b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTVW7YO%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T055415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEZki3ns%2BGJAjgNy8N3ddjV9uQHVsrQcLJcBcbEAcXxkAiEAk1UxvNPPW%2FYAYRd8BreozroQMaMfHSNgCaoNSJxWa9Aq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKXjKKlHOcrjRI06cSrcAyq3Zk5UfZk8Ke29ajGHEBRA6F4HiYDrOpxVw3WIqd6Oopy1OToCb65ecYmnMDmw6%2FDn3xhA1F2ixcl5cyhrHc3DXs7Za7W3FoiBFmql6%2FOT0eQaojp4tgRcfA429lW%2FkcQ6bTnpnnuaieLtvdGraIuQ1XXzwouw9aeRB3B7foR6AEsz%2FH9HVlbZrJYVOgpW5nRL3Wf9PqtBlgtKdWFYGGnFLkBjbdDkvTW8nJVWCjY5uyysQ2N1hEG8gkYaJjaNDr27ABZAlDzPJMyua0axbSqT9c5DzICmT975lfr3T7Cipi1pIFQ03TguLFWr%2BZNC%2F4o8B6mu8MuQ5jDT7ScWrJY9LhqQ3oHlRX2ybcuzeQqLVkTxxu3RvtSPBfotMdplh08MTAAJLplFVAHVfc57fR4Y8a46TvNR6KH5EwpiS9UJMVryAhDb%2FWjaLAj%2F0ubCJZQfZVMK1MSOR6Y2nHhMQEDmO0zt5XtjaIZhSQGxLrE40a9XQX0ctCmxmYd9fLK4Yu%2FCMiP1XiWIuVuPv%2FAxudnKgroIe5%2B08zCtZIY82j6%2BJf8R%2BtVNcwfNK73dC%2F%2BzTbZNx%2BOVr0tp6X38fJTGXZtRFF2r%2BGJv%2B%2BLdoiRfmPpyV%2FQ75L0A1rPG5t2PMIi10MgGOqUB7JSOJ%2Fd6sukyouYkqelA6kOlo%2BGRZQbtRs%2FC4N2cap37tagSNFlNsComdZo3e3ftWove03G9Jue4KjAHjgTlPas1hytBKnmJ9U%2FBkvs3ErQPca5VOpaKwnrznES4f0fdndDuKcwjxiK4pp3LKObashJLYTzXyJ%2FVDcEJ41U5ENYcoLXZ3r8d7crVwqEzKxsgaSeblhL%2B9PuYYawOPJ4WngKEoj%2FK&X-Amz-Signature=b45c280161acc227be2320b5c0bbf48d41324d9c4b9a917381e923172b2198db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTVW7YO%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T055416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEZki3ns%2BGJAjgNy8N3ddjV9uQHVsrQcLJcBcbEAcXxkAiEAk1UxvNPPW%2FYAYRd8BreozroQMaMfHSNgCaoNSJxWa9Aq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKXjKKlHOcrjRI06cSrcAyq3Zk5UfZk8Ke29ajGHEBRA6F4HiYDrOpxVw3WIqd6Oopy1OToCb65ecYmnMDmw6%2FDn3xhA1F2ixcl5cyhrHc3DXs7Za7W3FoiBFmql6%2FOT0eQaojp4tgRcfA429lW%2FkcQ6bTnpnnuaieLtvdGraIuQ1XXzwouw9aeRB3B7foR6AEsz%2FH9HVlbZrJYVOgpW5nRL3Wf9PqtBlgtKdWFYGGnFLkBjbdDkvTW8nJVWCjY5uyysQ2N1hEG8gkYaJjaNDr27ABZAlDzPJMyua0axbSqT9c5DzICmT975lfr3T7Cipi1pIFQ03TguLFWr%2BZNC%2F4o8B6mu8MuQ5jDT7ScWrJY9LhqQ3oHlRX2ybcuzeQqLVkTxxu3RvtSPBfotMdplh08MTAAJLplFVAHVfc57fR4Y8a46TvNR6KH5EwpiS9UJMVryAhDb%2FWjaLAj%2F0ubCJZQfZVMK1MSOR6Y2nHhMQEDmO0zt5XtjaIZhSQGxLrE40a9XQX0ctCmxmYd9fLK4Yu%2FCMiP1XiWIuVuPv%2FAxudnKgroIe5%2B08zCtZIY82j6%2BJf8R%2BtVNcwfNK73dC%2F%2BzTbZNx%2BOVr0tp6X38fJTGXZtRFF2r%2BGJv%2B%2BLdoiRfmPpyV%2FQ75L0A1rPG5t2PMIi10MgGOqUB7JSOJ%2Fd6sukyouYkqelA6kOlo%2BGRZQbtRs%2FC4N2cap37tagSNFlNsComdZo3e3ftWove03G9Jue4KjAHjgTlPas1hytBKnmJ9U%2FBkvs3ErQPca5VOpaKwnrznES4f0fdndDuKcwjxiK4pp3LKObashJLYTzXyJ%2FVDcEJ41U5ENYcoLXZ3r8d7crVwqEzKxsgaSeblhL%2B9PuYYawOPJ4WngKEoj%2FK&X-Amz-Signature=30c3779b24a9cc61026cee624373cce41c0bc75af2c53d7b4310578b8a9e1515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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