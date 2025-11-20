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
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/105c63a9-f2ab-415b-84f7-3fed3a9ab813/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7QHPN4R%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T054951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDI9YpBKjUePkjKqwO%2FKKTTuYhtOCPUNvpfWhAp8dMCQAIgR9JmSyWeiEvQC0Jzk36C9BBZfadkJ4sRx0n1HRAjbuwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6uiQgt%2B1JXpo48YyrcAzCh8shTJj0vqwHCJj%2FCghC7AjkwRuZSXnvu9igMCu1kF5ttyBc9FKmA5RjyijSMSEcmeDbQY%2FSp3awM99qK4rZeTL%2B2xy3hhBA6Y42er07MpmTbJPd1mZDPHFA2BQDLwNpJIXZQRMYZ9QwrTdo5HDIBGhDOmxde4M5NndaBBPeaYXTCB63dnO0H7U5rluvURiOnnypeQkea8PKuCrg6IgLHanvlonbJsMM%2F2WhJjoMKIcxxGEHfsIzBtVt7zEanyW8UamhKaq5hJGeJm1Zl8T034MByhW3eSJT54i3klTT%2FyUqQXYFZbxrNJKWd%2BJ5ExGHeSEvGXvpbF0NXxCAHsZ4V4HMlUDQ9spnFu4k6rpOk2OO%2FFhBaz4Q0hDM89TniEwvoNE5tX7S5nxAx4XOsMb8hx3STCRco69uJIrTc80tZAhytqnSGvtbWFanjBPHKYrWdDU%2BDpi6IxD3gMrQZ4%2FwZBssN9jkxiK4hrBKbTt7qXwtH%2BcLn%2BCOi7iUaAoLNJFW5WyNmRT%2BlbzNJDybZ%2FoWE0mInXKuRwgNCBdfW%2F9mAi%2FR2mW60mT1eSCnUAnxBxcDLHqayiLSFBCMPVq6RXcth9sFCV3elrusP9OFOnrNwrLeJHBXU3Gx0AlmIMKa7%2BsgGOqUB7Fo7x2MtHSixF%2FDGP%2FZ8tBcwxBBh6EG5janhj3rQKTg4WkM8%2BWelevSBHu7RE7%2FSaiXTRIQ1DJOabSJRWi7eBb8VgpjB%2FPoYhVMaGC%2FCkRu%2FemlUB4mS72NK1QVLTEUyom01Jf273OaaGK3XpdUsSBYI4HP%2BagEcyCkYu4cayQmDViLrV%2BiAgeauzaJ1DbTXT8zdTMqvxLzuEjkx7y%2BlTPWoYgDQ&X-Amz-Signature=15d9a2e6789df08631203e19e2d0ce76a4d10fe76e96964bad649ac09fcd9a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYW32JF%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T054951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCID013OuwT2efc9NEBmEsM%2F%2BvD1cBir9%2FPAygUSYa%2FO4jAiBxlbLXc5AXnA8JXnechdlaq20CzhJzTo9DIFYDG3duEyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsN93qrQAYd1TcY3uKtwDmgLzPMOYMwk%2FLKi7O1c9ttIWqv3nH75dGOjgRYjcCb%2FaUiFqGah0V%2BSx7VsPz2cFXxnNb%2BsJ6I4uZzk1Os2og3p76FgOXEBpbrmwMBjvWP67%2BhzrumrZwSis7kcxJopiBtF%2F8VoWekHk84GdnLvkErbvZQ2lwIIQuSdXDqJUdt8HMT6MrUwCjK7SXoDG0dud8P8Nxjl0EbqL%2BXDGupvPrXfu0tPMkppreUvKn%2FXkZap271m1ygesC%2BNoJTQUH5WjAEdJS5LNNU2Z8jgSdpdfE1%2B%2FSEfsxseK2KRMtjgl9IjuyRVjN9d6zq0U%2B96a7Ufj3KsSdGVGtyBxQaRyTo7ShK53hWmmscZ5JB7dXWJIz7hPiLhSoIX6VgSHDDjSp8kd3%2BtyhJmP%2BRsaayiUo9sS7M%2BdJ0hMVlv2J66W7oxThwLP3D1CqC0MDRBksQsO9I%2Bbbqn2H7y%2FBW2MJ6RatmFP4uUZHUDtNcFxBfNpBoqGeuvN2rLEWqTpOTPqcvoYiY173olgJ1Up0%2BrSuRXVWzhnSHNZj6f8k%2Fr59c57ux7PyMkjVSjiuw5XXY1VtWcTcGkCnQtz%2F7rNAi0%2BhWnEmlHp9ffkejMW1%2FXGDh5ZJPW4BfyZ0WlpLUZ1vPaxOawwm7z6yAY6pgHCRSkYVJqcSbtHaaE60LHM1Q6MafsNk%2BbdcNSKJdG7w6gJA8y60vUXJqUaezeZsAwRux7d7Y%2FQqRmL3X85LQ5CbyUJOMJBhx4%2FdPqNoSLEA%2B3pF7WEdgcJr3OG9tYLYxsZljxbMLs2pzgl75fuEymLCCPmXizLvfw3oOl%2F4QKnrmEDoddr8yJLpfr6y808Yxg25eNvq6ZsSVoJknbeH77TcryQTMlI&X-Amz-Signature=71457d64164a749c21d2661b75addb9796501d64b56f72aaf48038317b619ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYW32JF%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T054951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCID013OuwT2efc9NEBmEsM%2F%2BvD1cBir9%2FPAygUSYa%2FO4jAiBxlbLXc5AXnA8JXnechdlaq20CzhJzTo9DIFYDG3duEyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsN93qrQAYd1TcY3uKtwDmgLzPMOYMwk%2FLKi7O1c9ttIWqv3nH75dGOjgRYjcCb%2FaUiFqGah0V%2BSx7VsPz2cFXxnNb%2BsJ6I4uZzk1Os2og3p76FgOXEBpbrmwMBjvWP67%2BhzrumrZwSis7kcxJopiBtF%2F8VoWekHk84GdnLvkErbvZQ2lwIIQuSdXDqJUdt8HMT6MrUwCjK7SXoDG0dud8P8Nxjl0EbqL%2BXDGupvPrXfu0tPMkppreUvKn%2FXkZap271m1ygesC%2BNoJTQUH5WjAEdJS5LNNU2Z8jgSdpdfE1%2B%2FSEfsxseK2KRMtjgl9IjuyRVjN9d6zq0U%2B96a7Ufj3KsSdGVGtyBxQaRyTo7ShK53hWmmscZ5JB7dXWJIz7hPiLhSoIX6VgSHDDjSp8kd3%2BtyhJmP%2BRsaayiUo9sS7M%2BdJ0hMVlv2J66W7oxThwLP3D1CqC0MDRBksQsO9I%2Bbbqn2H7y%2FBW2MJ6RatmFP4uUZHUDtNcFxBfNpBoqGeuvN2rLEWqTpOTPqcvoYiY173olgJ1Up0%2BrSuRXVWzhnSHNZj6f8k%2Fr59c57ux7PyMkjVSjiuw5XXY1VtWcTcGkCnQtz%2F7rNAi0%2BhWnEmlHp9ffkejMW1%2FXGDh5ZJPW4BfyZ0WlpLUZ1vPaxOawwm7z6yAY6pgHCRSkYVJqcSbtHaaE60LHM1Q6MafsNk%2BbdcNSKJdG7w6gJA8y60vUXJqUaezeZsAwRux7d7Y%2FQqRmL3X85LQ5CbyUJOMJBhx4%2FdPqNoSLEA%2B3pF7WEdgcJr3OG9tYLYxsZljxbMLs2pzgl75fuEymLCCPmXizLvfw3oOl%2F4QKnrmEDoddr8yJLpfr6y808Yxg25eNvq6ZsSVoJknbeH77TcryQTMlI&X-Amz-Signature=cc81393551aa4f4387941ead4017ca35dfcbb6639842f6ec4f82b7e3ea6eed5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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