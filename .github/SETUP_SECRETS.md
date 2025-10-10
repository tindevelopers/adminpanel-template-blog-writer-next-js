# GitHub Secrets Setup for Vercel Deployment

This document explains how to set up the required GitHub secrets for automatic deployment to Vercel.

## Required Secrets

You need to add the following secrets to your GitHub repository:

### 1. VERCEL_TOKEN
Your Vercel authentication token.

**How to get it:**
1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Give it a name (e.g., "GitHub Actions Deploy")
4. Copy the token

### 2. VERCEL_ORG_ID
Your Vercel organization/team ID.

**How to get it:**
Found in `.vercel/project.json` after running `vercel link`:
```json
{
  "orgId": "team_xxx..." // This is your VERCEL_ORG_ID
}
```

Currently: `team_3Y0hANzD4PovKmUwUyc2WVpb`

### 3. VERCEL_PROJECT_ID
Your Vercel project ID.

**How to get it:**
Found in `.vercel/project.json` after running `vercel link`:
```json
{
  "projectId": "prj_xxx..." // This is your VERCEL_PROJECT_ID
}
```

Currently: `prj_Eh8Eu11QMIJiYK1NXLZX5eSVmYdN`

## How to Add Secrets to GitHub

1. Go to your GitHub repository
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret:
   - Name: `VERCEL_TOKEN` | Value: (your token from step 1)
   - Name: `VERCEL_ORG_ID` | Value: `team_3Y0hANzD4PovKmUwUyc2WVpb`
   - Name: `VERCEL_PROJECT_ID` | Value: `prj_Eh8Eu11QMIJiYK1NXLZX5eSVmYdN`

## Deployment Workflow

### Preview Deployments (develop branch)
- Triggered on: Push to `develop` branch or Pull Requests
- Environment: Preview
- URL: Temporary Vercel preview URL

### Production Deployments (main branch)
- Triggered on: Push to `main` branch
- Environment: Production
- URL: Your production domain

## Testing the Setup

After adding the secrets:

1. Make a small change to any file
2. Commit and push to `develop` branch
3. Check the Actions tab in GitHub
4. You should see a successful deployment

## Troubleshooting

### Error: "The specified token is not valid"
- Make sure you copied the entire token from Vercel
- Verify the token is still active at https://vercel.com/account/tokens
- Create a new token if needed

### Error: "Project not found"
- Verify `VERCEL_PROJECT_ID` matches the ID in `.vercel/project.json`
- Make sure you're using the correct organization/team

### Error: "Forbidden"
- Check that the Vercel token has the correct permissions
- Verify you're a member of the Vercel team/organization

