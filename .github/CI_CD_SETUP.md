# CI/CD Setup Documentation

This repository uses a hybrid approach for CI/CD:
- **GitHub Actions** - Handles Continuous Integration (testing, linting, quality checks)
- **Vercel Git Integration** - Handles Continuous Deployment (automatic deployments)

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Developer Workflow                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Push to GitHub  │
                    └──────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
                    ▼                   ▼
          ┌──────────────────┐  ┌──────────────────┐
          │  GitHub Actions  │  │ Vercel Webhook   │
          │   (CI Pipeline)  │  │  (CD Pipeline)   │
          └──────────────────┘  └──────────────────┘
                    │                   │
                    ▼                   ▼
          ┌──────────────────┐  ┌──────────────────┐
          │  • Run Tests     │  │  • Build App     │
          │  • Lint Code     │  │  • Deploy        │
          │  • Type Check    │  │  • Update DNS    │
          │  • Security Scan │  │                  │
          └──────────────────┘  └──────────────────┘
                    │                   │
                    └─────────┬─────────┘
                              ▼
                    ┌──────────────────┐
                    │   Deployment     │
                    │   Complete ✅    │
                    └──────────────────┘
```

## GitHub Actions (CI)

### What It Does:
- ✅ Runs on every push and pull request
- ✅ Tests code on multiple Node.js versions (18.x, 20.x)
- ✅ Runs ESLint for code quality
- ✅ Performs TypeScript type checking
- ✅ Builds the application to verify no build errors
- ✅ Runs security audits on dependencies
- ✅ Checks for outdated packages

### Workflow File:
`.github/workflows/ci.yml`

### Jobs:
1. **test** - Runs linting, type checking, and builds on Node 18 & 20
2. **security-audit** - Checks for security vulnerabilities
3. **code-quality** - Additional code quality checks
4. **ci-success** - Summary job that ensures all checks pass

### Status Badges:
Add this to your README.md:
```markdown
![CI](https://github.com/tindevelopers/adminpanel-template-blog-writer-next-js/workflows/CI/badge.svg)
```

## Vercel Git Integration (CD)

### What It Does:
- ✅ Automatically deploys when CI passes
- ✅ Creates preview deployments for PRs
- ✅ Deploys to production from `main` branch
- ✅ Deploys to preview from `develop` branch

### Setup:
1. Repository is already linked to Vercel project: `blog-writer-admin-panel-deploy`
2. Vercel watches the GitHub repository: `tindevelopers/adminpanel-template-blog-writer-next-js`
3. No manual configuration needed!

### Deployment Rules:
| Branch | Environment | URL Type |
|--------|-------------|----------|
| `main` | Production | Production domain |
| `develop` | Preview | `*.vercel.app` |
| `feature/*` | Preview | `*.vercel.app` |
| Pull Requests | Preview | `*.vercel.app` |

## Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes
# ...

# Commit and push
git commit -m "feat: add new feature"
git push origin feature/my-feature

# Create PR to develop
# → CI runs automatically
# → Vercel creates preview deployment
```

### 2. Preview Deployment (develop)
```bash
# Push to develop
git checkout develop
git merge feature/my-feature
git push origin develop

# → CI runs and validates code
# → Vercel deploys to preview environment
```

### 3. Production Deployment (main)
```bash
# Merge to main
git checkout main
git merge develop
git push origin main

# → CI runs final validation
# → Vercel deploys to production
```

## CI Pipeline Details

### Test Job
- Runs on Node.js 18.x and 20.x
- Installs dependencies with `npm ci`
- Runs `npm run lint`
- Runs `npm run type-check`
- Runs `npm run build`
- Verifies build artifacts exist

### Security Audit Job
- Checks for high severity vulnerabilities
- Lists outdated dependencies
- Continues even if issues found (non-blocking)

### Code Quality Job
- Runs TypeScript type checking
- Can be extended with prettier, additional linters, etc.

## Vercel Deployment Details

### Build Configuration
Vercel automatically:
1. Detects Next.js framework
2. Installs dependencies
3. Runs `next build`
4. Optimizes for production
5. Deploys to CDN

### Environment Variables
Set in Vercel Dashboard → Settings → Environment Variables:
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_API_URL`
- Any other public or secret variables

## Monitoring & Debugging

### GitHub Actions
- View workflow runs: https://github.com/tindevelopers/adminpanel-template-blog-writer-next-js/actions
- Each push shows CI status
- Failed jobs show detailed logs

### Vercel Deployments
- View deployments: https://vercel.com/tindeveloper/blog-writer-admin-panel-deploy
- Each deployment shows:
  - Build logs
  - Runtime logs
  - Performance metrics
  - Error tracking

## Troubleshooting

### CI Fails But Code Looks Fine
1. Check Node.js version compatibility
2. Clear cache: Delete `node_modules` and reinstall
3. Check for breaking changes in dependencies

### Vercel Deployment Fails
1. Check build logs in Vercel dashboard
2. Verify environment variables are set
3. Check if CI passed (Vercel may skip if CI fails)

### Preview Deployment Not Created
1. Verify Vercel Git integration is connected
2. Check Vercel project settings
3. Ensure branch name follows patterns

## Benefits of This Approach

### ✅ Separation of Concerns
- CI focuses on code quality
- Vercel focuses on deployment

### ✅ Faster Feedback
- CI runs independently
- Don't wait for deployment to see test results

### ✅ Simplified Maintenance
- No VERCEL_TOKEN to manage
- No manual deployment scripts
- Vercel handles all deployment complexity

### ✅ Better Developer Experience
- Automatic preview deployments
- Easy rollbacks
- Real-time collaboration on PRs

### ✅ Cost Effective
- GitHub Actions: Free for public repos
- Vercel: Free tier includes automatic deployments

## Next Steps

### Optional Enhancements
1. Add unit tests (Jest, Vitest)
2. Add E2E tests (Playwright, Cypress)
3. Add code coverage reporting
4. Add performance budgets
5. Add visual regression testing
6. Add automated dependency updates (Dependabot)

### Recommended Reading
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Git Integration](https://vercel.com/docs/git)
- [Next.js CI/CD Best Practices](https://nextjs.org/docs/deployment)

