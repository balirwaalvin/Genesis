@echo off
REM Script to push Genesis to GitHub
cd C:\Users\EduScan\WebstormProjects\Genesis

REM Check remote
git remote -v

REM Ensure main branch
git branch -M main

REM Try to push to GitHub
echo Pushing to GitHub...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo SUCCESS! Your code has been pushed to GitHub!
    echo Repository: https://github.com/balirwaalvin/Genesis
    pause
) else (
    echo.
    echo Push requires authentication.
    echo Please enter your GitHub Personal Access Token when prompted.
    echo You can create one at: https://github.com/settings/tokens
    pause
)
