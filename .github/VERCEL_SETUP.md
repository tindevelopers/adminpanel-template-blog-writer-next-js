# Vercel CI/CD Setup Guide

This guide will help you set up automatic deployments to Vercel when pushing to the `develop` branch.

## Prerequisites

- A Vercel account
- The repository connected to Vercel
- Access to GitHub repository settings

## Step 1: Get Vercel Credentials

### 1.1 Get Vercel Token

1. Go to [Vercel Account Settings](https://vercel.com/account/tokens)
2. Click **"Create"** to create a new token
3. Give it a name like "GitHub Actions"
4. Copy the token (you won't be able to see it again)

### 1.2 Get Vercel Project ID and Org ID

Run these commands in your project directory:

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login to Vercel
vercel login

# Link your project
vercel link

# Get project details
vercel project ls
```

Or you can find them in your project's `.vercel/project.json` file after running `vercel link`.

Alternatively, you can find them in the Vercel dashboard:
- **Project ID**: Go to Project Settings → General → Project ID
- **Org ID**: Go to your account settings or team settings

## Step 2: Add GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

| Secret Name | Description | Where to find |
|------------|-------------|---------------|
| `VERCEL_TOKEN` | Your Vercel authentication token | [Vercel Account Tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Your Vercel organization/team ID | `.vercel/project.json` or Vercel dashboard |
| `VERCEL_PROJECT_ID` | Your Vercel project ID | `.vercel/project.json` or Vercel dashboard |

### Quick Setup with Vercel CLI

```bash
# Navigate to your project
cd blog-writer-only

# Login to Vercel
vercel login

# Link your project (this creates .vercel/project.json)
vercel link

# View the project details
cat .vercel/project.json
```

The `.vercel/project.json` will look like this:

```json
{
  "orgId": "team_xxxxxxxxxxxxx",
  "projectId": "prj_xxxxxxxxxxxxx"
}
```

## Step 3: Configure Vercel Project

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Git**
4. Make sure the repository is connected
5. Set the **Production Branch** to `main` (for manual production deploys)
6. The workflow will handle `develop` branch deployments automatically

## Step 4: Test the Workflow

1. Make a change to your code
2. Commit and push to `develop`:
   ```bash
   git add .
   git commit -m "Test CI/CD workflow"
   git push origin develop
   ```
3. Go to your GitHub repository → **Actions** tab
4. You should see the workflow running
5. Once complete, check the deployment URL in the workflow logs

## Workflow Behavior

### On Push to `develop`:
- ✅ Automatically builds and deploys to production on Vercel
- ✅ Runs `npm ci` to install dependencies
- ✅ Runs `npm run build` to verify the build
- ✅ Deploys to Vercel with production settings
- ✅ Creates a commit status with the deployment URL

### On Pull Request to `develop`:
- ✅ Creates a preview deployment
- ✅ Posts the preview URL in the PR
- ✅ Allows testing before merging

## Troubleshooting

### Error: "Invalid token"
- Make sure `VERCEL_TOKEN` is correctly set in GitHub secrets
- Generate a new token if needed

### Error: "Project not found"
- Verify `VERCEL_PROJECT_ID` is correct
- Make sure the project exists in your Vercel account

### Error: "Organization not found"
- Verify `VERCEL_ORG_ID` is correct
- Make sure you're using the team ID if the project is under a team

### Build fails
- Check the workflow logs in GitHub Actions
- Try building locally with `npm run build`
- Ensure all dependencies are in `package.json`

## Manual Deployment

You can also deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

## Environment Variables

If your project needs environment variables:

1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Add your variables for Production and Preview environments
3. The workflow will automatically pull these during deployment

## Additional Resources

- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Deployment Documentation](https://vercel.com/docs/deployments/overview)

---

**🎉 Your CI/CD pipeline is now ready!** Every push to `develop` will automatically deploy to Vercel.

