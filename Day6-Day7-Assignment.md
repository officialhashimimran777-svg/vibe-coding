# Day 6–7 Assignment: Git Locally and Why GitHub Is Used

## 1. Assignment Overview

This document describes the work completed for Day 6 and Day 7: creating a Git branch, making a focused change to a JavaScript file, committing the change, pushing the branch to GitHub, and opening a Draft Pull Request.

## 2. Task Objectives

- Practice working with Git branches locally.
- Make and review a focused code change.
- Create a commit with a descriptive message.
- Push the branch to GitHub.
- Open a Draft Pull Request and document the change clearly.

## 3. What I Did

- Worked on the `profile-card.js` file.
- Created and used the branch `feat/profile-card-final`.
- Updated the profile-card example.
- Created a commit with the message `feat(ui): improve profile card component`.
- Pushed the branch to GitHub.
- Opened a Draft Pull Request targeting `main`.

## 4. How I Did It

The Git workflow used for this task was:

1. Created or checked out a working branch.
2. Edited `profile-card.js`.
3. Reviewed the changes with `git diff`.
4. Staged the relevant file.
5. Created a commit with a descriptive message.
6. Pushed the feature branch to GitHub.
7. Opened a Draft Pull Request from `feat/profile-card-final` into `main`.

Commands used in the workflow included:

```bash
git status
git diff
git add profile-card.js
git commit -m "feat(ui): improve profile card component"
git push -u origin feat/profile-card-final
```

These commands are included as a record of the workflow. Only claim commands you personally ran and verify the final repository state before submitting.

## 5. Code Explanation

The `profile-card.js` file contains a JavaScript function named `createProfileCard(name, role)`.

- It accepts a person's name and role as arguments.
- It returns an object containing the `name`, `role`, and a formatted `display` string.
- The example creates a profile for `Hashim` with the role `Developer`.
- `console.log(profile)` prints the resulting object to the console.

The current example returns a JavaScript object. It does not render a visual profile card in a browser and does not include HTML or CSS.

## 6. AI Usage

I used ChatGPT for guidance on understanding the assignment requirements, Git workflow concepts, documentation structure, and how to explain the JavaScript example.

I should be able to explain the code and commands myself. Any AI-suggested code or text should be reviewed and adjusted to match the work actually completed.

## 7. Testing and Verification

The work was reviewed using Git's change/status tools, including `git diff` and `git status`. The Git workflow was checked for a successful commit and push.

**Important:** This documentation does not claim that the JavaScript program was executed successfully. If I run it before submission, I will record the actual command used and its observed output here.

- JavaScript runtime test: Not confirmed in this report.
- Git change review: `git diff`.
- Working-tree check: `git status`.
- Commit and push: verify in the repository before final submission.

## 8. Issues and Resolutions

During the branch workflow, a comparison issue occurred because the branches did not contain different changes, so GitHub had nothing new to compare. A separate feature branch, `feat/profile-card-final`, was then used for the profile-card change and pushed to GitHub.

Before submitting, verify that the Pull Request still exists, targets `main`, and shows the intended file changes.

## 9. Known Limitations

- The example returns a JavaScript object only.
- It does not contain an HTML/CSS interface.
- Runtime execution is not confirmed by this report.
- The example uses sample profile data rather than a form or external data source.

## 10. GitHub Pull Request

- Repository: https://github.com/officialhashimimran777-svg/vibe-coding
- Pull Request: https://github.com/officialhashimimran777-svg/vibe-coding/pull/1
- Source branch: `feat/profile-card-final`
- Base branch: `main`
- Commit message: `feat(ui): improve profile card component`

## 11. Screenshots to Include

Add actual screenshots of your work to the final submission, for example:

1. Git Bash showing the commit and push.
2. GitHub Pull Request overview showing its title, branches, and description.
3. Pull Request “Files changed” view showing `profile-card.js`.

Do not claim screenshots are attached unless you have actually added them to this document or submission.

## 12. Conclusion

This task provided practice with local Git branches, reviewing code changes, creating commits, pushing a branch to GitHub, and documenting a Draft Pull Request. The documentation should be checked against the actual repository and updated before submission.
