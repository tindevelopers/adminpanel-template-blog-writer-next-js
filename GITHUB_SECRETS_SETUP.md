# 🔑 GitHub Secrets Setup - Required for CI/CD

## ⚠️ IMPORTANT: Add These Secrets to GitHub

To enable automatic Vercel deployments, you need to add the following secrets to your GitHub repository.

---

## 📋 Required Secrets

### 1. VERCEL_ORG_ID
```
team_3Y0hANzD4PovKmUwUyc2WVpb
```

### 2. VERCEL_PROJECT_ID
```
prj_zyYmG4AMa2vCgDHJGHjgnAijoAGu
```

### 3. VERCEL_TOKEN
- Go to: https://vercel.com/account/tokens
- Click **"Create"**
- Name it: "GitHub Actions"
- Copy the token (you won't see it again!)

---

## 🚀 How to Add Secrets to GitHub

### Step 1: Go to Repository Settings
1. Navigate to: https://github.com/tindevelopers/adminpanel-template-blog-writer-next-js
2. Click **Settings** (top right)

### Step 2: Access Secrets
1. In the left sidebar, click **Secrets and variables**
2. Click **Actions**

### Step 3: Add Each Secret
Click **New repository secret** and add each of these:

#### Secret 1: VERCEL_ORG_ID
- **Name**: `VERCEL_ORG_ID`
- **Value**: `team_3Y0hANzD4PovKmUwUyc2WVpb`

#### Secret 2: VERCEL_PROJECT_ID
- **Name**: `VERCEL_PROJECT_ID`
- **Value**: `prj_zyYmG4AMa2vCgDHJGHjgnAijoAGu`

#### Secret 3: VERCEL_TOKEN
- **Name**: `VERCEL_TOKEN`
- **Value**: [Get from https://vercel.com/account/tokens]

---

## ✅ Verify Setup

After adding the secrets:

1. Make a commit and push to `develop`:
   ```bash
   git add .
   git commit -m "Test CI/CD workflow"
   git push origin develop
   ```

2. Check GitHub Actions:
   - Go to: https://github.com/tindevelopers/adminpanel-template-blog-writer-next-js/actions
   - Watch the workflow run
   - It should complete successfully and deploy to Vercel

3. Check deployment URL:
   - The workflow will post the deployment URL in the commit status
   - You can also check: https://vercel.com/tindeveloper/blog-writer-only

---

## 🔍 Current Project Info

- **Project Name**: blog-writer-only
- **Vercel Dashboard**: https://vercel.com/tindeveloper/blog-writer-only
- **Organization**: tindeveloper
- **Branch**: develop (auto-deploys on push)

---

## 🛠️ Troubleshooting

### Workflow Fails with "Invalid token"
- Make sure `VERCEL_TOKEN` is set correctly
- Generate a new token if needed

### Workflow Fails with "Project not found"
- Verify `VERCEL_PROJECT_ID` matches the value above
- Check that the project exists in Vercel dashboard

### Workflow Fails with "Organization not found"
- Verify `VERCEL_ORG_ID` matches the value above
- Ensure you have access to the team/organization

---

## 📚 More Information

See `.github/VERCEL_SETUP.md` for comprehensive setup guide.

---

**🎯 Once you add these three secrets, every push to `develop` will automatically deploy to Vercel!**

