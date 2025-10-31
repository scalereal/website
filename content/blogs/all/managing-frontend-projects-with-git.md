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


![PR-lifecycle.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/919ce7fa-5297-4567-a260-4e8ca0407346/0aaa00ee-2ade-4fb2-b693-d34f1c8547c5/PR-lifecycle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXZRYIC%2F20251031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251031T060546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDmGLJdT4u9uwkveI%2BqxULHOtxW5QkBUgJLGYWJ3OMkWQIgNEsZV3%2BIjqCkVGSaHjqFWnTR%2F1jOblSIrdX3NYQW4tgqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ85IO5WntnJ5k0f0CrcAwn94nTsGzZj1fATL3KGMOFlgbSXMAop91cuRSK8%2BjdRopOCwIesyn%2BNSVlLuTshsq4VvCuGTCPYOzeA%2BmLJm2N%2FRfEqE3Q7AlSr1cfirp7nb084C2h4WTTGNMECe1yIPAZLUR8zUv2xQuyebn1b82ywOK%2FaEAkTSOASmrbBi14uf2q5PJyrMp%2BSZMgIn1KCyf4fnqJ5AVcclQwB89kp5nVIuM9%2BD0NkW2HpMRD9Rz90DHaXMN%2B2OQm2NwmsjaBa6vHys2PnDa%2FPGE9z7rTJJinOW3hxJ5JbjuJLqpv0AOj2kUCYb%2BDlziHGrK%2F4nA454Fk2FubKPpAygmlsjGrW2gW%2FGjJAX4at4L1NivAu4YBXMV9XasbH4zZQ9FZcrY1WKeXL%2FiRc90IHXGsi%2FaqtmhjBNKOA2KSI2g3NXhbKoahoJeWjilotvEoeccpuziwRGYdIW6pNviB1mHRbE2K5S0KD7ID8oEQCtSqg2FvmpcjfCuKErJA6L4scwXTbFNZ9kXQENXgwDrrPRQRieIfWTgRPVk8wo%2B%2BIE3Eca85Ni0DwZ2EcP0dRtkBeCPCjCaTLoYLudWWwMppuP1YF0pU%2FXCS%2FoWjvnKV%2FwgjrtdIat5UkxqUo5A2gr3a6YGFsMKiikcgGOqUBz4BYpp3vAjaHLHVLZgMdo17wGH74MRguwh3La6KRA0ATzuSvYX23xNXTbj45vVacaNof092DxKGBIqgZuYmmuImA4qOatx%2F3pWxbjumx%2BFv9fltXzLDVcxQYDTllW9InPQFYETf9UsgMurVc%2FDKEMkQUzf7NcgADe9lD9K1NlBR5%2BwwVfUZCHUe0SeRbMdFxQNHXxJCpf%2F2e%2FOOisUleE7ToBGw0&X-Amz-Signature=c97c9a9f3a183230a531da41d62259707d241a9ce0cd4a5dca07ecf6d8306140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![github-actions.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/919ce7fa-5297-4567-a260-4e8ca0407346/051aebda-0ec1-4697-bc1b-386e95817ea2/github-actions.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXZRYIC%2F20251031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251031T060546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDmGLJdT4u9uwkveI%2BqxULHOtxW5QkBUgJLGYWJ3OMkWQIgNEsZV3%2BIjqCkVGSaHjqFWnTR%2F1jOblSIrdX3NYQW4tgqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ85IO5WntnJ5k0f0CrcAwn94nTsGzZj1fATL3KGMOFlgbSXMAop91cuRSK8%2BjdRopOCwIesyn%2BNSVlLuTshsq4VvCuGTCPYOzeA%2BmLJm2N%2FRfEqE3Q7AlSr1cfirp7nb084C2h4WTTGNMECe1yIPAZLUR8zUv2xQuyebn1b82ywOK%2FaEAkTSOASmrbBi14uf2q5PJyrMp%2BSZMgIn1KCyf4fnqJ5AVcclQwB89kp5nVIuM9%2BD0NkW2HpMRD9Rz90DHaXMN%2B2OQm2NwmsjaBa6vHys2PnDa%2FPGE9z7rTJJinOW3hxJ5JbjuJLqpv0AOj2kUCYb%2BDlziHGrK%2F4nA454Fk2FubKPpAygmlsjGrW2gW%2FGjJAX4at4L1NivAu4YBXMV9XasbH4zZQ9FZcrY1WKeXL%2FiRc90IHXGsi%2FaqtmhjBNKOA2KSI2g3NXhbKoahoJeWjilotvEoeccpuziwRGYdIW6pNviB1mHRbE2K5S0KD7ID8oEQCtSqg2FvmpcjfCuKErJA6L4scwXTbFNZ9kXQENXgwDrrPRQRieIfWTgRPVk8wo%2B%2BIE3Eca85Ni0DwZ2EcP0dRtkBeCPCjCaTLoYLudWWwMppuP1YF0pU%2FXCS%2FoWjvnKV%2FwgjrtdIat5UkxqUo5A2gr3a6YGFsMKiikcgGOqUBz4BYpp3vAjaHLHVLZgMdo17wGH74MRguwh3La6KRA0ATzuSvYX23xNXTbj45vVacaNof092DxKGBIqgZuYmmuImA4qOatx%2F3pWxbjumx%2BFv9fltXzLDVcxQYDTllW9InPQFYETf9UsgMurVc%2FDKEMkQUzf7NcgADe9lD9K1NlBR5%2BwwVfUZCHUe0SeRbMdFxQNHXxJCpf%2F2e%2FOOisUleE7ToBGw0&X-Amz-Signature=b318d1a6cd667176cc69d3c8ad84d0243a08e36952e65b46cb2959aad83674f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
