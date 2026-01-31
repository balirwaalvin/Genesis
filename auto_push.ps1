Write-Host "Starting Git Push Process..."
Set-Location "C:\Users\EduScan\WebstormProjects\Genesis"

Write-Host "Adding all files..."
git add .

Write-Host "Committing changes..."
# We use allow-empty in case there's nothing new to commit
git commit -m "Auto-commit: Preparing to push to GitHub" --allow-empty

Write-Host "Pushing to https://github.com/balirwaalvin/Genesis..."
try {
    git push -u origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host -ForegroundColor Green "✅ Push Successful!"
    } else {
        Write-Host -ForegroundColor Red "❌ Push Failed. You may need to authenticate."
        Write-Host "If prompt for password appears, please enter your Personal Access Token."
    }
} catch {
    Write-Host -ForegroundColor Red "An error occurred: $_"
}

Write-Host "Process Complete."
pause
