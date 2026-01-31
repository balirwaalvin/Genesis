param(
    [string]$GitHubToken = "",
    [string]$GitHubEmail = "sanyukalvin@gmail.com",
    [string]$GitHubUser = "balirwaalvin"
)

$GenesisPath = "C:\Users\EduScan\WebstormProjects\Genesis"
$OutputFile = "$GenesisPath\push_results.txt"

Set-Location $GenesisPath

# Write header
"=== Genesis Push to GitHub ===" | Out-File $OutputFile
"Date: $(Get-Date)" | Out-File $OutputFile -Append
"" | Out-File $OutputFile -Append

# Check git status
"--- Git Status ---" | Out-File $OutputFile -Append
git status | Out-File $OutputFile -Append -Encoding UTF8

# Check log
"" | Out-File $OutputFile -Append
"--- Recent Commits ---" | Out-File $OutputFile -Append
git log --oneline -5 | Out-File $OutputFile -Append -Encoding UTF8

# Check remote
"" | Out-File $OutputFile -Append
"--- Remote Configuration ---" | Out-File $OutputFile -Append
git remote -v | Out-File $OutputFile -Append -Encoding UTF8

# Check branch
"" | Out-File $OutputFile -Append
"--- Current Branch ---" | Out-File $OutputFile -Append
git branch -v | Out-File $OutputFile -Append -Encoding UTF8

# Try to push
"" | Out-File $OutputFile -Append
"--- Push Attempt ---" | Out-File $OutputFile -Append
try {
    git push -u origin main 2>&1 | Out-File $OutputFile -Append -Encoding UTF8
    "Push completed!" | Out-File $OutputFile -Append
} catch {
    "Push failed with error: $_" | Out-File $OutputFile -Append
}

# Final message
"" | Out-File $OutputFile -Append
"Check this file for detailed push information: $OutputFile" | Out-File $OutputFile -Append

# Display results
Get-Content $OutputFile
