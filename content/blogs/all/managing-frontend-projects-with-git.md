---
title: Managing Frontend Projects with Git
description: >-
  Establish a consistent, efficient, and scalable Git workflow for frontend developers, enabling streamlined collaboration, code quality, and release practices.
date: '2025-11-11'
tags:
  - Frontend
  - Github
author: ScaleReal User
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/18f5a88c-0ec1-470e-b448-40b9a4cad7f4/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZZFH4YK%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T125452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHhOf9M7lTPVxPuAaktc1UabNrq0ye2WR%2FPSLQneCzuoAiBSpP2D6SHUoH9cw8NK82ZVN5rh0b3bGKGpICfvHRTlQCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMIBMwm8%2BPiCPb9o%2BBKtwDGrzhc3Wf7j16taqQt4X51yKeRPiPzJNwkoPZx5WbIHx4VSh1lkRm%2Fq5mHYXCooQAgqC2BhtMDZiw9O0xERFTqmIBFay81acbN%2BAQ5UyvESAicmRXh1yCLqS5Azws9BbMte2TpbcYO90P4g7MTxUqQVWsXu7mzo7aW1UeuYOWzvT%2FoDF0E9OMFpNik7fspdvvh7ug0vb4UmWOgWV1IIWsIE2f1h5fGDVGg0gFMlIjnBN73lkNloLnaLd10lj5mV0f%2BkkI5zYPvWpz1Us6lYlM5Q%2Fp1s817LuBziNql0nwx%2FTKehenwMlmzSprgeUygYClx9lmpDQSVjmmpzUAdJPY2YbY0Ed3XSp%2BfZTE4AeCEUeXxTTu51XEhL21QoWYBt9oOHUu9um7fb9MCa21kKmx9BFZPt234bR6czOddwAAOd1iKjrc2ww4YdqnPmMA57ESmfom%2FyxxV%2FPRA1F5Cfq6TNmeq7jQdOLH3QA7FMcxYjjzWhN85Fw%2BxYlFC5VJ9gtNOPaAOpviALDV0y0RQqGH8dAx3zvCoZDYkBI0yDbT6g7RJyX%2BR03LBYCZ3nvlTzKiF67dq1aZ%2Fv54WMnAX40HFeQkw26H6aIIww1DCqFuQ2XkTWAPTfFGrGwghaYwkNfMyAY6pgEMPf602%2FoDhQvF7MQEYwYtOeGB1eC7QrLm3sDhA3rAkcZsfSSVCksdmNEsLjkGd%2Fz%2BJrrGXOjhfFgE7hOOGatqAB7%2BRAqMYnfFGNh2eiC4VL2GO%2FVxjD64cb1twePsmIuVZqmsbXqDfRSpFMWANY9PrdE0XinCR6SvUyK6WUn544KA6F3h82YcJwqqHW3rHIPDe6f%2FSCO4Iotk%2FojQSFXn5zEeWK5b&X-Amz-Signature=8db87e79e9c29b337034325a0fcf2e6cdcff04f3d3b89ec17f9fa7b8b64aa076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGMRG3BA%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T125454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCQCablqcAzvrJE8u%2BpcGFqYczlwN9lBR33qfVAnag3wAIhAKYpy1sIqguj9kfwuMmhnDRnAYuHPp%2FaNoVSsyc8wWFkKv8DCB4QABoMNjM3NDIzMTgzODA1IgyqIax50ysTQ0%2B%2BirEq3ANutlFCYlZyN5uDgRm5ALidEYvk2rf%2B4WAcb%2F3FNJrLH7i1hQRbvWK9Ks9zhljZm605VlnZg%2FraVvnw2pQ1o%2FNdLBUvFIPh6NOlfoZlGNU4cf4ptlIBiNedRvz7LN265zm4Gma4r8Q8cWfaUt1L9XsWhHSIdVyBy6t9a272j85FqfOBlQ8wFY3cHy%2Fq3C2DmoT3yELBkPOgW06aujDWNEtCmWiKS%2FbRF8PEDwFJCX58RYosqw8K1N6TU326x6B354jUzr5tIZyBnz30JgAqj17d5OJgG5EwPqcdaWxH3AaMPkRU8Ke2bPgI5yZ6jisMkVLtTh%2Fp71Gjq%2FnsZ5MV1ytQ%2FcPgkB%2BeGsL2E%2FulMDOLuDFtN7%2BRK0GiSzjbMV5vH1APpHNtT%2FUzrOPSVGqPM5RS5hMionDaPYIBDWs28mZ3BsB5kqetrn%2Bpzrt9uIzGK%2Fu56YOwSrG4b4PgzZgQoWxypUlAZYtI%2FkPula4i07UVU4Q%2Bepw%2FX0kgtaCcQOfc0aNsZ%2BykNB%2B17R%2BcekkdHttXeHW9EX9WiNjHsHJo7E%2FERRTYO83VfD8lJbqgH9BnIwocwCUfcQmEfi35NhRKIbqCuZMipTijt%2FkWiMzyodwwUATV4rjmFpvtTHDysTCw1szIBjqkAQnR8c6nc82vp%2F9wcf5gA%2BX6xMfK5qvkbHY5nZtZCvhpJRCNVY1aeCiXb0%2BBTt%2BQsrhtS8gk%2B80EiNFTeTl2X7XVTVcGQfETy5ZJRz8r2MGNvRmIObE2hcqU4CksoN90e7IPEwiQu5M7XQctRL%2BcrGSweqjPnZa059PrvqIuxJmSJy3zhIhKvxzDUVo%2B%2FCnCD1yqGdlJYsqsPaiJ3ToI%2Bz7iZaR2&X-Amz-Signature=4ac0006b349cce7354ea834c83c904a10013c3db4b5e6e7ee6ac1d3113248932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGMRG3BA%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T125455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCQCablqcAzvrJE8u%2BpcGFqYczlwN9lBR33qfVAnag3wAIhAKYpy1sIqguj9kfwuMmhnDRnAYuHPp%2FaNoVSsyc8wWFkKv8DCB4QABoMNjM3NDIzMTgzODA1IgyqIax50ysTQ0%2B%2BirEq3ANutlFCYlZyN5uDgRm5ALidEYvk2rf%2B4WAcb%2F3FNJrLH7i1hQRbvWK9Ks9zhljZm605VlnZg%2FraVvnw2pQ1o%2FNdLBUvFIPh6NOlfoZlGNU4cf4ptlIBiNedRvz7LN265zm4Gma4r8Q8cWfaUt1L9XsWhHSIdVyBy6t9a272j85FqfOBlQ8wFY3cHy%2Fq3C2DmoT3yELBkPOgW06aujDWNEtCmWiKS%2FbRF8PEDwFJCX58RYosqw8K1N6TU326x6B354jUzr5tIZyBnz30JgAqj17d5OJgG5EwPqcdaWxH3AaMPkRU8Ke2bPgI5yZ6jisMkVLtTh%2Fp71Gjq%2FnsZ5MV1ytQ%2FcPgkB%2BeGsL2E%2FulMDOLuDFtN7%2BRK0GiSzjbMV5vH1APpHNtT%2FUzrOPSVGqPM5RS5hMionDaPYIBDWs28mZ3BsB5kqetrn%2Bpzrt9uIzGK%2Fu56YOwSrG4b4PgzZgQoWxypUlAZYtI%2FkPula4i07UVU4Q%2Bepw%2FX0kgtaCcQOfc0aNsZ%2BykNB%2B17R%2BcekkdHttXeHW9EX9WiNjHsHJo7E%2FERRTYO83VfD8lJbqgH9BnIwocwCUfcQmEfi35NhRKIbqCuZMipTijt%2FkWiMzyodwwUATV4rjmFpvtTHDysTCw1szIBjqkAQnR8c6nc82vp%2F9wcf5gA%2BX6xMfK5qvkbHY5nZtZCvhpJRCNVY1aeCiXb0%2BBTt%2BQsrhtS8gk%2B80EiNFTeTl2X7XVTVcGQfETy5ZJRz8r2MGNvRmIObE2hcqU4CksoN90e7IPEwiQu5M7XQctRL%2BcrGSweqjPnZa059PrvqIuxJmSJy3zhIhKvxzDUVo%2B%2FCnCD1yqGdlJYsqsPaiJ3ToI%2Bz7iZaR2&X-Amz-Signature=186d238af2a7c2337527ce46065b2d428d3b8bc51672757ff42e1e4262ab347b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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