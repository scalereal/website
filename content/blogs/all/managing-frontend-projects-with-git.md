---
title: Managing Frontend Projects with Git
description: >-
  Establish a consistent, efficient, and scalable Git workflow for frontend developers, enabling streamlined collaboration, code quality, and release practices.
date: '2025-11-12'
tags:
  - Frontend
  - Github
author: ScaleReal User
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/18f5a88c-0ec1-470e-b448-40b9a4cad7f4/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJM7WRLG%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T055046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIB6vpeVcSDACHag3ceSWG90bp0%2BprjCF8bqY9Znn%2FAW5AiEA2NosxGXBCS74dijBxb0p7tL%2FvObh1rUBVgyzoUSC4Csq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLFcZjYF5mMdqUa4oCrcA0TZbcAtBNpySIsZs4dIeDZjUuAbFPKqWNLagAgLDQIlY0yhYgmIE3bpGOpEvTNdhzlpzJsUbb1wIILXviF1BcVWa58FHd9C9401No5ZHbEDxmV%2BY2VaYUA%2B1SFloRexTEgb9WeSVn4uKr5eAEG6wPM0DcdKnOgAAGqxNCl5deYf%2BlKRLT0wPBHUnktd7CuH%2BbfvnqyZETpsUKqXbZATlv1xCvpXMPsRELGZcxzUEFZddWtmO%2BQkyyjkiIuboinUt9unv7RohAuG8v9rS7C3SMy0rfAR%2B0ClZxYSXvbgy1huh0WazcS%2BlYlzFW2CUv3HiKgujtZ23SLskYDzWMzwqrxJ1Y6KlFbOo%2FgoYlIXHTT9bsdxiyMPamZryGQ5sArf1hHu%2BwwCuegsuti4b2FnMvFQ2ryr6qvsbmLwESqbIQcEe%2BFC6ODcYhyQ7m6s9DaaHCBuSSIHhNAMWkQaE4V2VK50sv7JL59LNKXCJjRIOZfABDU4uHzvZzdZiIr5JEbqaNq2PGQIbrc%2F1H2LP3B4Qs%2FNrso%2BauwOJbBKsxC01KFA5qc2UVkSXxi7Sb1FqyNuLMLpG9hy6wF9FrfoFZ60LARxz4luSUF%2BNksMw83UN3gYWIWMBzM4SCdwIc3NMLO00MgGOqUBpIL8X7m5%2BgY7nvEHzuwmnyhQ4RylJgap91wNz3844qzGvY0W%2Brf8hRJLmbmveFjnfHiijIa1WkR%2BcFGYI2qcDKXOR2%2BgCsolaf13SONZb%2Fo3B1Eo3XVchgNg7Trs0RdqlMV5u5gMTF4TyPRYDK60AYdWgVKnUQfnTA9eQ9ZPlGT2vyQ5U9imW54IwKuAtKgcCSL445fMIq9lr8uUf9cADL%2FPEskW&X-Amz-Signature=c8e66c693c6f1a1130d4e574ec535e6ac3db484884db79428e94b8e5e96d2a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657N25MCX%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T055047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHCAo4uzstNMAgrSmlRDjwSlF1MLn02cIjuKu3Wzd4f5AiADcBHIAhmXInegpGrERxMb6qZ%2F3q%2FVrIpIgFiLEsqCAir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMhQ5Y1aUiu9jQ9G7%2BKtwDoZXw2nyY%2Fc56c%2F%2B4l6T1NniYCpKcLnMThtFAbAG6t4ZsVgtel%2Fw3Tn9NuLm%2FO1dapBPfNDdzWKV%2BZBRxh2%2FusrlVck0OWdVTVeGT2ovGziUZyht9WJXlnh2za6RhxgC2lBQvbifanh0oc7hoO5pofOwOKxrS%2Bxfdigt2E9ZYGpCG%2FpV2DkedEht9vDMyM8mbLcfKwmxSxCKHWiv5QksbTak1KvCAiAVlG3B26fVl6w3IsOj%2FogtTS8ioMJOI1n3tqEamw0PrrkSGNwxzUSVEMgeR2zlMBVtkUTaUyEvsrZuBqy35w95Oel63VmBwcE5rmbBtmg1Qw8qqIHGca8StUVahzNjIsAQ5rlq4mRY8qs%2BTk0uJoMSAR36Vi0ocmLSD891RAhqIRQlGA%2Bh%2B047vV5hmYz2dv%2B59fJz%2BbFE%2BiN36jKr83583MTyGn9r%2FKrxCv8XEQVEblRce7%2B8ZmF6cQ%2B%2F1MPphzAOZa46gL2NIjGDluMKHaNc4H2lFsNn3Y2qD2vJFFjbVQY8W2pwSc66K7Dkpj3kuHA2ENnFbaULdFcy39W7G4Wr%2BlSVgjQNOCkj6KKlfQ%2FWW%2FUbpkdG%2FlnWK9u9zu6jezCWfR38d4OgqziHhUoxIUWUassAiQm8wjLXQyAY6pgHbvmtVtpM07BMoqH9eDCkNKmQ%2F0MeN53iFwpo57Ta%2Bg8%2FaDEnoCgNSKXII8g8iVyu65SZpfzfnSL%2B%2F6RdSZ8nrB58iIzqO7SaUmcjN9mTUOs70tY3nj0Cw8R2LrjiDfkfmTgBqZbxF%2FYFn2KOEPILE2kmKqcN6Rwxk9WkRW%2FF5Hwm7gCQwppNurAGsaIrYLYej9Oqei6PNIx%2B98HxanHQPx%2FVPPssh&X-Amz-Signature=0d89eea5675f1a07931bac09b407dc01be756a4a83426860dfaad8b1deb1d320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657N25MCX%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T055047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHCAo4uzstNMAgrSmlRDjwSlF1MLn02cIjuKu3Wzd4f5AiADcBHIAhmXInegpGrERxMb6qZ%2F3q%2FVrIpIgFiLEsqCAir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMhQ5Y1aUiu9jQ9G7%2BKtwDoZXw2nyY%2Fc56c%2F%2B4l6T1NniYCpKcLnMThtFAbAG6t4ZsVgtel%2Fw3Tn9NuLm%2FO1dapBPfNDdzWKV%2BZBRxh2%2FusrlVck0OWdVTVeGT2ovGziUZyht9WJXlnh2za6RhxgC2lBQvbifanh0oc7hoO5pofOwOKxrS%2Bxfdigt2E9ZYGpCG%2FpV2DkedEht9vDMyM8mbLcfKwmxSxCKHWiv5QksbTak1KvCAiAVlG3B26fVl6w3IsOj%2FogtTS8ioMJOI1n3tqEamw0PrrkSGNwxzUSVEMgeR2zlMBVtkUTaUyEvsrZuBqy35w95Oel63VmBwcE5rmbBtmg1Qw8qqIHGca8StUVahzNjIsAQ5rlq4mRY8qs%2BTk0uJoMSAR36Vi0ocmLSD891RAhqIRQlGA%2Bh%2B047vV5hmYz2dv%2B59fJz%2BbFE%2BiN36jKr83583MTyGn9r%2FKrxCv8XEQVEblRce7%2B8ZmF6cQ%2B%2F1MPphzAOZa46gL2NIjGDluMKHaNc4H2lFsNn3Y2qD2vJFFjbVQY8W2pwSc66K7Dkpj3kuHA2ENnFbaULdFcy39W7G4Wr%2BlSVgjQNOCkj6KKlfQ%2FWW%2FUbpkdG%2FlnWK9u9zu6jezCWfR38d4OgqziHhUoxIUWUassAiQm8wjLXQyAY6pgHbvmtVtpM07BMoqH9eDCkNKmQ%2F0MeN53iFwpo57Ta%2Bg8%2FaDEnoCgNSKXII8g8iVyu65SZpfzfnSL%2B%2F6RdSZ8nrB58iIzqO7SaUmcjN9mTUOs70tY3nj0Cw8R2LrjiDfkfmTgBqZbxF%2FYFn2KOEPILE2kmKqcN6Rwxk9WkRW%2FF5Hwm7gCQwppNurAGsaIrYLYej9Oqei6PNIx%2B98HxanHQPx%2FVPPssh&X-Amz-Signature=7172cdf2047058844287e0a8afb94970eb84bc9fcc30fe15468127a5aef53f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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