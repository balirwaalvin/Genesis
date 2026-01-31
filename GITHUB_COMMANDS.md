# 💻 COPY-PASTE COMMANDS FOR GITHUB

## Step 1: Create Repository on GitHub

### Go Here (manually in browser):
```
https://github.com/new
```

Enter:
- Repository name: `Genesis`
- Description: `An AI Platform with Stunning UI and Animations`
- Select: Public
- Click: "Create repository"

---

## Step 2: You'll See This Screen

GitHub will show you commands. Look for the section:
```
…or push an existing repository from the command line
```

**Copy this URL from that section:**
```
https://github.com/YOUR_USERNAME/genesis.git
```

(Replace YOUR_USERNAME with your actual GitHub username)

---

## Step 3: Run These Commands

### Open PowerShell/Command Prompt and copy-paste:

```bash
cd C:\Users\EduScan\WebstormProjects\Genesis
git remote add origin https://github.com/YOUR_USERNAME/genesis.git
git branch -M main
git push -u origin main
```

### When prompted for "Password":
Paste your Personal Access Token (from https://github.com/settings/tokens)

---

## Done! ✅

Your code is now on GitHub at:
```
https://github.com/YOUR_USERNAME/genesis
```

---

## Future Updates

Whenever you make changes:

```bash
cd C:\Users\EduScan\WebstormProjects\Genesis
git add .
git commit -m "Your commit message"
git push
```

---

## Common Commands

### See your changes
```bash
git status
```

### See commit history
```bash
git log --oneline
```

### Undo last commit (be careful!)
```bash
git reset --soft HEAD~1
```

### Create a feature branch
```bash
git checkout -b feature/my-feature
git push -u origin feature/my-feature
```

---

## That's it! 🎉

Your Genesis code is now on GitHub and ready to share!

