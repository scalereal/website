---
title: Untitled
date: '2025-11-20'
draft: false
---

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EOY6NI5%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T054240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGPn3LMu6tBSDVIDCeMnYsN22E7w3clZoCBfN888QJTGAiBfgIP5QRqPo7vD1sOtEXePhg7K5EiVfzinUccKXsVkmSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI4GjKwWK7AJ8fEUKtwDzho%2BoJQD%2BN1L9yVguPUGaT4hccf6Hf49OoyZGMgqM9o2DkeKo2l6sMEsPPi2I%2FM%2BJEnEFCYl7mWk2OPmJla%2FSMal7%2B%2FxRCfgx9tIaCqbCqSzHawQqtSjXuwT6X9RQzUY9HjZeSUGFZaRLn5CVn7T97mxGSS1BNwFYbXC%2BuHOIcfi8udgLjw0cKwkxAOEsqBhPF5pW85RpAIYmnDemTKT7pGmBizsJVAxPgU66ayrFytn77xQcPWVcW5rdMZ8JieKfa%2Bqjahq8NWJTClRpEDsxH%2FSVX0E68DeU5%2FXKJoz31KQffqvZq4D6JzRjxvZ9Rrr%2F8GdhLMHluVD%2FaCGAqwdeY7PyhuqGUN2Ro%2FW%2FWwWmlHmm%2FmEWhHRzbOul6vrNcECqKY61AKK721gb6iUvNnxiH4pLuYUx3PY3MHAAg7U3ixkdWD8%2Fbk%2F%2BWqArpasYnrsQxPOpDF85gZckk1tWuxzLCbgaeEbR0SMA%2FOkksxOPTzZeEidGWHXz3xdFz1%2BdIuqxQbwa0YHQLdpdUc79LdSFobDdq46wz5EIp6Gd7Ck8Np3U2UvBBdw0nWriaQqVFMeJHJHROMJJGNAU6Q7YpaoP1gsPLQQHC1M6UglE%2Ff4ZJw%2FkhQgsXkFbk923Cowgrz6yAY6pgFKQt5JOejb7l0qDVzEZhhg1Cgir3WGJZPr5wh2f%2FgZBvMvgwdLJraZwgkcR9D2TS%2FtnbVLi29M0TEnWiROTHq3MvlUz%2B8hTcs1NEbAkgcFqjLvf2S%2Fdxkz219eQfsKL%2FGD4%2B35mUmsmXTX9KTEUbWYLFFpogYvcoIAc6UQrxaKvJ60o1kss9iiInLyuxPbj55%2F5UjxlfKO3plxBshusAyMOKFgLR9f&X-Amz-Signature=3cef17d8fb5004806a0c31e9c85696ce71f90a9a664aae301937c3ea7ca10a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EOY6NI5%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T054240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGPn3LMu6tBSDVIDCeMnYsN22E7w3clZoCBfN888QJTGAiBfgIP5QRqPo7vD1sOtEXePhg7K5EiVfzinUccKXsVkmSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI4GjKwWK7AJ8fEUKtwDzho%2BoJQD%2BN1L9yVguPUGaT4hccf6Hf49OoyZGMgqM9o2DkeKo2l6sMEsPPi2I%2FM%2BJEnEFCYl7mWk2OPmJla%2FSMal7%2B%2FxRCfgx9tIaCqbCqSzHawQqtSjXuwT6X9RQzUY9HjZeSUGFZaRLn5CVn7T97mxGSS1BNwFYbXC%2BuHOIcfi8udgLjw0cKwkxAOEsqBhPF5pW85RpAIYmnDemTKT7pGmBizsJVAxPgU66ayrFytn77xQcPWVcW5rdMZ8JieKfa%2Bqjahq8NWJTClRpEDsxH%2FSVX0E68DeU5%2FXKJoz31KQffqvZq4D6JzRjxvZ9Rrr%2F8GdhLMHluVD%2FaCGAqwdeY7PyhuqGUN2Ro%2FW%2FWwWmlHmm%2FmEWhHRzbOul6vrNcECqKY61AKK721gb6iUvNnxiH4pLuYUx3PY3MHAAg7U3ixkdWD8%2Fbk%2F%2BWqArpasYnrsQxPOpDF85gZckk1tWuxzLCbgaeEbR0SMA%2FOkksxOPTzZeEidGWHXz3xdFz1%2BdIuqxQbwa0YHQLdpdUc79LdSFobDdq46wz5EIp6Gd7Ck8Np3U2UvBBdw0nWriaQqVFMeJHJHROMJJGNAU6Q7YpaoP1gsPLQQHC1M6UglE%2Ff4ZJw%2FkhQgsXkFbk923Cowgrz6yAY6pgFKQt5JOejb7l0qDVzEZhhg1Cgir3WGJZPr5wh2f%2FgZBvMvgwdLJraZwgkcR9D2TS%2FtnbVLi29M0TEnWiROTHq3MvlUz%2B8hTcs1NEbAkgcFqjLvf2S%2Fdxkz219eQfsKL%2FGD4%2B35mUmsmXTX9KTEUbWYLFFpogYvcoIAc6UQrxaKvJ60o1kss9iiInLyuxPbj55%2F5UjxlfKO3plxBshusAyMOKFgLR9f&X-Amz-Signature=631ed5c9f0fb76d04bc02b87c3717528b5aa11dfc7be6078fb836bd3f07118dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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