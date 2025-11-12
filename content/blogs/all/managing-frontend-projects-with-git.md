---
title: Managing Frontend Projects with Git
description: >-
  Establish a consistent, efficient, and scalable Git workflow for frontend developers, enabling streamlined collaboration, code quality, and release practices.
date: '2025-11-12'
tags:
  - Frontend
  - Github
author: ScaleReal User
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/18f5a88c-0ec1-470e-b448-40b9a4cad7f4/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMH6BRQ%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T074330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIAcDF1kecEA3FOUJvHON2ABD1Zg6DYyXjm0Qad6fiHv0AiEA6JRed%2B%2F%2FOkaQLtClFJ8mqeZxCL0WAt5trPBx%2BXQMRgUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDpBOoeeJXe8SAI6iCrcA0TLx14mPhBWbe1HQhkFFM59QU0JzpKHjpcrgn1IT8JCNj9s2GQugMmpHt9uvjn%2BDTijhkEnJFtfvML%2FQzDriNaTMvO%2B%2FKn4mFnahXvX2eFif4ZIlESwmk5Q2rdex2RNyiO2XuHhI1k6FPWm5Xr7efnn802KpFJIeD4WE6NMaMPWwoZXNqXYVkX%2Fq2gOQBUnRTyFBS8PTC7tNSRzS8cKCicz%2BXCvKi69Kww1JEu8UdXOghI%2BmE2abHhsxe3nd3HEmWZIqo2JhpKpaR4cATngxi9b7ORWDIGzD4u1wCjOs2SqLGIcXm7kkEZSDYU25jzv7qNKsLzEkuyMc%2Bs1iyoy4VJXSliZhgttNw%2Fu4Z%2BsDFR7GBFVEWWW7Idt%2FpFn4AoyJKXHm4aJq3tN1lXdxYMhdKzhB3cBAQHmBtxslOyXyppDA9zhcpxqyKoJXQxPE1kn3cEBPofoEav%2BI6FnnpvJKFnAjxXRsKM2%2BpT4MeojTPt%2FYq1WHI2Qeg5G2IfFQ0Jw3VFd6NLwqa3NNWxojrxQ0iSTjwMKAhqWjiBqvxfmK44yNCGUPoIq%2BO4bHH1kNqkj8v0UiOHhoRo7thtcm25tdfa5bmOVsnzFLPkOdWVGpTIz%2BDWNGxucX4g4NdXoMIry0MgGOqUBR2p0GGBEda%2F7OUaGpAh3lA7NNcye7%2F1%2B9FRonAa9ofwcQO8Q%2Bh3uhAe2UD40gb15YpvodRwSuCxMe5kcUv5EDBt7SrKp2fU15yYaFA5GdeXy%2Fac3ppshr%2Fi9SVahas9qJ9P5mNH%2FXl0jgBnxpg7WuDjD8xqzwthTV1oOePEMcTYWBNPwgwM54ADkqFVj4AtJgOYrslnY66UJtfOyoGAbfgWwQSKQ&X-Amz-Signature=9606a3095e450d6fc395a00ccec935f7da4270e069ae840e35d2264001b2ee32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIW3F5IF%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T074330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHNuqG42PYVwdo6%2FXglOrmqKkQaY4vkde7PhjtJLejATAiEA9kNjpZWWnWyM4RgCFh9dyek%2B6YtcvPltK6Qhl%2FvDgyAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNXPucn1Sk6jY8DSCSrcA0n9BKlZzeaqNyfyRBk9KKYADg4%2B3c%2Bz6mzOfH%2B9YdN3AMntP0JqmkG6%2Bt5Luqe46EhpeuAlMYgqMs8LhX7j53EM75Gp83TDvIImCNR0KvJQcXLgCB6TFcle2Qo9GjLW2r3WWtFDVdu%2Bpxvsdb%2F0L1wBl3y4RirQIl52cYpLHvXq1mrWzK6uO98mUgQ45amlvqlUXgOiGgzhd9f7uQuGhf5cDw8FXD0sj7696PQCx1UI%2FQfhirpqXdl%2B4yhQhVSMgZKJSuraC1Du7o6u31bnV5o69qA6Eq%2Bg9sCglrWNshNzY07Izn%2B2Ar4tzeLqO24BQLdZaSk2mqpqYMUu5pqSKcLsYImBjIBVW0WakTs0%2FQjfgwur4fKqyEfa8rA4fbA1LEAmF1yab6fyWQ1YTGk39LeX4HLTRcK98ScfKdUt3vBenOSZgHAR64bqWHc6RJD8DzWYtBACd%2Bfz4OgIRjJ166kDP9rm7IEusFraVBPkcfaTHagE%2FbeWYRR3eCE57ffAcjY%2F4fVS0dWrKbx3D8AMwQG7U3fyh3QnhJM6zP6G71GPwOKi2HoF0EyGoFrTrdfT%2Fp6yct%2Bpg1WSsx8lld0atce%2F1361DZjcN%2Bv9P5cX4g7uX6M79DDoB3e5f2NgMKvx0MgGOqUBx5tSNE50Uk0yd2%2ByIl%2BJKGx0NL4KjyGetMP04LkjiSSoM%2FsqwQd48pjs1IamtBxodnKTaZcVU%2BijnwgNm46LmfOBJjBC7v%2FogD3tmdV8fx5cf42kNlRjgS94pizNIVD6OgnDYHuHHDmJUNm%2BgAUiIV6CZ5SB68omAx6h8OgRvLFSdLYVnDZqdEGWZD9K4Gs39zju3HkVuX0gegoNd8j%2B44XuCihc&X-Amz-Signature=a28949eb31b2df1a41e2d8179f6f3949e31f80dbeadf3603d1fd616e8a587481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIW3F5IF%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T074330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHNuqG42PYVwdo6%2FXglOrmqKkQaY4vkde7PhjtJLejATAiEA9kNjpZWWnWyM4RgCFh9dyek%2B6YtcvPltK6Qhl%2FvDgyAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNXPucn1Sk6jY8DSCSrcA0n9BKlZzeaqNyfyRBk9KKYADg4%2B3c%2Bz6mzOfH%2B9YdN3AMntP0JqmkG6%2Bt5Luqe46EhpeuAlMYgqMs8LhX7j53EM75Gp83TDvIImCNR0KvJQcXLgCB6TFcle2Qo9GjLW2r3WWtFDVdu%2Bpxvsdb%2F0L1wBl3y4RirQIl52cYpLHvXq1mrWzK6uO98mUgQ45amlvqlUXgOiGgzhd9f7uQuGhf5cDw8FXD0sj7696PQCx1UI%2FQfhirpqXdl%2B4yhQhVSMgZKJSuraC1Du7o6u31bnV5o69qA6Eq%2Bg9sCglrWNshNzY07Izn%2B2Ar4tzeLqO24BQLdZaSk2mqpqYMUu5pqSKcLsYImBjIBVW0WakTs0%2FQjfgwur4fKqyEfa8rA4fbA1LEAmF1yab6fyWQ1YTGk39LeX4HLTRcK98ScfKdUt3vBenOSZgHAR64bqWHc6RJD8DzWYtBACd%2Bfz4OgIRjJ166kDP9rm7IEusFraVBPkcfaTHagE%2FbeWYRR3eCE57ffAcjY%2F4fVS0dWrKbx3D8AMwQG7U3fyh3QnhJM6zP6G71GPwOKi2HoF0EyGoFrTrdfT%2Fp6yct%2Bpg1WSsx8lld0atce%2F1361DZjcN%2Bv9P5cX4g7uX6M79DDoB3e5f2NgMKvx0MgGOqUBx5tSNE50Uk0yd2%2ByIl%2BJKGx0NL4KjyGetMP04LkjiSSoM%2FsqwQd48pjs1IamtBxodnKTaZcVU%2BijnwgNm46LmfOBJjBC7v%2FogD3tmdV8fx5cf42kNlRjgS94pizNIVD6OgnDYHuHHDmJUNm%2BgAUiIV6CZ5SB68omAx6h8OgRvLFSdLYVnDZqdEGWZD9K4Gs39zju3HkVuX0gegoNd8j%2B44XuCihc&X-Amz-Signature=133af877abb4720c7c9145b2c92b1ba65c71a13ed118cd7a3b13414f9cd1fd61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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