---
title: Managing Frontend Projects with Git
description: >-
  Establish a consistent, efficient, and scalable Git workflow for frontend developers, enabling streamlined collaboration, code quality, and release practices.
date: '2025-11-12'
tags:
  - Frontend
  - Github
author: ScaleReal User
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/18f5a88c-0ec1-470e-b448-40b9a4cad7f4/1_peDWXGlasJUdwTXtTtXSGA.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKVCO6SJ%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDx9AfQ%2BtD9X7k1Hhhrl4FqnpxOQhrCQupd56OAXeJwPAIhALAofHkbQPkvP3dLip0qvxhmAR2aMniz3fp6xhZAWfArKv8DCDEQABoMNjM3NDIzMTgzODA1Igyr%2Ba6IQvBuSwT8E20q3AMSDcFGfavznNWOsep9ip3E8%2Bm2zdETZooujj1M1z6qWAPq0sTshaK7x2K3daxUXoX7NS0Qte2hFY5A%2BDZnWNZvqvmkeoJNXTSFWO%2BFA%2F67tIGjS7ZCe%2BeZa6n9hjz%2FrVVz%2FwGkk4MMapeCYsSrgP0heGQ7zRB1I5VPvuO%2FOsdkNnIWu51HOG1PyrE79a9OVX8MxRpWtGQBN7asssBe8t3pjCjhQffPRB9d0WJEl%2FxhG3perfN0sockjFYl1JZtPuCmTOdKacEelDCmrXWapkm6as410HU9rvxzWbHsm2%2BDeM4UNsW3XwMO9pErOx%2B%2Ffji5LY2LagMi9Grubzc4iKaz9TRiZBJSM1x4A%2FxJa0v2H3TwB6okv3JubeLB1xNlPSXZ5NBIdIObM9ee7YhXvBW0GWHE4nyeJkvBuMXFmphqOr44aZaqqa2o5yAfFuSCXAbQxEoSI46y4AmILOkcCfWNObNOegydudBuPBYMcqggen1e0UjU97TB4PQa6sFHyIBqsaw%2Fz7e%2FL2hRwJJM%2FiljzONUd4TRfqTU9nui2qK22OqZrAn2D2moTty4qgBCffAen7knnkUpLact%2Fal1Y2iib94dqwRDAYG3b6I3%2FmzXRIGVH47CE%2BckzrL3EjCO8tDIBjqkATorSJH%2F3xCNgvyqBgP4k0nDSQYX6fuAvpCcYelewJO5J%2F5c0m3vQIbv4mgiGfh1RBXrlG6hrMEgoD%2BQZQ4%2BBc9%2FOb5mBctwNK4BOpmMhmT5Xqifld21GBlnePMsarVvDv9RWtf6%2FXrMs2CqcDDTN4oilMhBUaqdZ42rmeYuLr1%2B7nZfL6ysC4KP%2BVeSPtyf5%2FmnFFPXcBD7m1Vkdhg4DgfLwpY0&X-Amz-Signature=66b359e7fec1986b43053e7efb432b2342f0d62bc42740ae6a3d62e83463c2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XLVLCX%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBjors6qsLx%2FOzEiGw69DI8x1FpJlf4xBq2HfOcP5uTbAiEAm6msYY3yAqwBShPdIfKvjpojCA%2Bx9mu%2FQjAm3IcOnSMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJzp2h4dMZWtJznnLCrcA%2BKrWLAEMKLQj4WhsVy0PU7YubM9DlUTmuC0kSFMwbc1XeEtjOaW4rE9BWgyWp4UyvW3MJK2H4OzRBPeK%2BpLJmHuYn%2F4%2BYGVkaJp0frsmNUtuuWvL9S8%2BKkaT%2B8ObJDQiLdxIFXqofEaGa0tyaRmoWu9FJm%2Brjo2NlF2nRozvKl3TiL0mRpXQwmdVVhlcURHcCuH6%2FdFnwc7i2wrAH12OEak4XgpzqM%2Bdofhd4eLTf89wKm87mviT1xObAwEaLPnpzyLFbdBdDCoGPkRFxACqhybULIqz2hFVU%2F%2FCk0vkFIiHrUPic1w8rrW5SFpT6ec%2BOAWAgiDTFD%2FBInDrGvzFnTW0aEoP%2B5Rf1ATs31xVW%2BIcVFOmN1fBrMGO%2FlF1TCtlEf5pUHGsw8Z2MsQmU3mxBa6NSUU2XRNp6I8a0cFD7inQSmhgyw3YKA6HGXFjtOhaGzZ3AvcD5OPTrr%2BI%2BIXalnHsNzayW%2F4WiUJqQ9gARBjLHYND3c1dy%2FCgGBuWmSaUqVxQxbDPASoeWIv6BmUAZw3TT8iWd6Evyn6OicDSIwA4vhCrN0TBKMVQwSwppuqycxm%2B67nXhyg4tLh9kTqhJlIaeINhn1%2FmAkxmPTgnjZ0KJ3wdYjHxI5kvVsHMKHy0MgGOqUBgMH7F9kT05F0w8W0VHrtCVolQYo8t%2FQzHG4Z99LMlnfj7k9hqbACgMsg6Z0V3keaXmDU4L3l6UJgB4GXnOg0bF7TYqoP4LW4CW1%2B6oKzRgNZF7sCnITwrnT9lRxIrVY4tzLQeznwZVAIaJ%2BD%2B0CsV2XSiGGqlN6WZMC6a%2BtwKyYRxYvew7nQYRX1%2FSiEFH%2FqbIG%2BJkfeSWLg%2FCi76Ar7fJKeTpc1&X-Amz-Signature=cdb5e0d306ac007a7fb12651bbb809d792a95d9817610dc9e9c39db77b1fbbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/7f3c0563-a042-4a1e-8428-ea9c30ac45e4/59955aea-5718-4efa-9ebf-41637d76ec32/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7XLVLCX%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBjors6qsLx%2FOzEiGw69DI8x1FpJlf4xBq2HfOcP5uTbAiEAm6msYY3yAqwBShPdIfKvjpojCA%2Bx9mu%2FQjAm3IcOnSMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJzp2h4dMZWtJznnLCrcA%2BKrWLAEMKLQj4WhsVy0PU7YubM9DlUTmuC0kSFMwbc1XeEtjOaW4rE9BWgyWp4UyvW3MJK2H4OzRBPeK%2BpLJmHuYn%2F4%2BYGVkaJp0frsmNUtuuWvL9S8%2BKkaT%2B8ObJDQiLdxIFXqofEaGa0tyaRmoWu9FJm%2Brjo2NlF2nRozvKl3TiL0mRpXQwmdVVhlcURHcCuH6%2FdFnwc7i2wrAH12OEak4XgpzqM%2Bdofhd4eLTf89wKm87mviT1xObAwEaLPnpzyLFbdBdDCoGPkRFxACqhybULIqz2hFVU%2F%2FCk0vkFIiHrUPic1w8rrW5SFpT6ec%2BOAWAgiDTFD%2FBInDrGvzFnTW0aEoP%2B5Rf1ATs31xVW%2BIcVFOmN1fBrMGO%2FlF1TCtlEf5pUHGsw8Z2MsQmU3mxBa6NSUU2XRNp6I8a0cFD7inQSmhgyw3YKA6HGXFjtOhaGzZ3AvcD5OPTrr%2BI%2BIXalnHsNzayW%2F4WiUJqQ9gARBjLHYND3c1dy%2FCgGBuWmSaUqVxQxbDPASoeWIv6BmUAZw3TT8iWd6Evyn6OicDSIwA4vhCrN0TBKMVQwSwppuqycxm%2B67nXhyg4tLh9kTqhJlIaeINhn1%2FmAkxmPTgnjZ0KJ3wdYjHxI5kvVsHMKHy0MgGOqUBgMH7F9kT05F0w8W0VHrtCVolQYo8t%2FQzHG4Z99LMlnfj7k9hqbACgMsg6Z0V3keaXmDU4L3l6UJgB4GXnOg0bF7TYqoP4LW4CW1%2B6oKzRgNZF7sCnITwrnT9lRxIrVY4tzLQeznwZVAIaJ%2BD%2B0CsV2XSiGGqlN6WZMC6a%2BtwKyYRxYvew7nQYRX1%2FSiEFH%2FqbIG%2BJkfeSWLg%2FCi76Ar7fJKeTpc1&X-Amz-Signature=8b724d5a2e64d38bb7af36ba50b7e6ea14a939c9357250047be63322e4ffd9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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