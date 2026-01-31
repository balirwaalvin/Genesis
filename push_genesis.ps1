#!/usr/bin/env pwsh

# Genesis Push Script - Handles GitHub authentication
# This script will push your Genesis code to GitHub

$GenesisPath = "C:\Users\EduScan\WebstormProjects\Genesis"
$LogFile = "$GenesisPath\push_log.txt"

function Log {
    param([string]$Message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "$timestamp - $Message" | Tee-Object -FilePath $LogFile -Append
}

Log "=== GENESIS PUSH TO GITHUB ==="
Log "Repository: https://github.com/balirwaalvin/Genesis"
Log "Path: $GenesisPath"

try {
    Set-Location $GenesisPath

    # Verify git repository
    Log "Checking git repository..."
    $gitDir = Join-Path $GenesisPath ".git"
    if (-not (Test-Path $gitDir)) {
        Log "ERROR: Git repository not found!"
        Log "Reinitializing git..."
        git init
        git config user.email "sanyukalvin@gmail.com"
        git config user.name "balirwaalvin"
        git remote add origin "https://github.com/balirwaalvin/Genesis.git"
        git branch -M main
        git add .
        git commit -m "Initial commit: Genesis AI Platform"
    }

    # Check git status
    Log "Git status:"
    $status = git status 2>&1
    Log $status

    # Check remote
    Log "Remote configuration:"
    $remote = git remote -v 2>&1
    Log $remote

    # Try to push
    Log "Pushing to GitHub..."
    Log "Command: git push -u origin main"

    $pushOutput = git push -u origin main 2>&1
    Log "Push output:"
    Log $pushOutput

    # Check if push was successful
    if ($LASTEXITCODE -eq 0) {
        Log "SUCCESS! Code pushed to GitHub!"
        Log "Repository: https://github.com/balirwaalvin/Genesis"
    } else {
        Log "Push encountered an issue (exit code: $LASTEXITCODE)"
        Log "This usually means authentication is needed."
        Log "Please run manually: git push -u origin main"
        Log "When prompted, use your Personal Access Token."
    }
}
catch {
    Log "ERROR: $_"
}

Log "Push attempt complete. Check GitHub to verify."
Log "Repository: https://github.com/balirwaalvin/Genesis"
