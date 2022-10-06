/**
 * Install brew (ONLY for Mac):
 * 1. Go to brew.sh
 * 2. Copy Install Homebrew link
 * 3. Open Terminal
 * 4. Paste Install Homebrew link in Terminal
 * 5. Press Enter
 * 6. When ask for, Press RETURN to Continue -> Press Enter
 * 7. when ask for Passphrase, Press Enter
 * 
 * 
 * Install Git Bash (ONLY for Windows):
 * https://www.educative.io/answers/how-to-install-git-bash-in-windows
 * 
 * 
 * Install git in machine:
 * https://github.com/git-guides/install-git
 * 
 * 
 * Create github account:
 * 1. Go to https://www.github.com
 * 2. Click on Sign Up
 * 3. Complete the Sign Up steps
 * 4. Verify your email address
 * 
 * 
 * Connect github account with machine:
 * 1. Create a secret password (SSH-Key) in machine
 *      a) Open Terminal/Gitbash
 *      b) Enter command -> ssh-keygen -t rsa -b 4096 -C "yourEmailAddress@company.com"
 *      c) when ask for "Enter file in which to save the key", Press ENTER
 * 2. To view the generated SSH key
 *      a) Open Terminal/Gitbash
 *      b) Enter command -> cat .ssh/id_rsa.pub
 * 3. Add the SSH-Key in Github profile.
 *      a) Login in Github.com
 *      b) Click on Profile icon
 *      c) Click on Settings
 *      d) Click on SSH and GPG Keys
 *      e) Click on New SSH Key
 *      f) Enter Title
 *      g) Paste ssh-key
 *      h) Click "Add SSH Key"
 * 
 * 
 * Create repository in Github:
 * 1. Log in github.com
 * 2. Click "New" button
 * 3. Enter "Repository Name" -> Js-Fall-2022
 * 4. Select 'Add a README file'
 * 5. Click 'Create Repository' button
 * 
 * 
 * Download VS-Code:
 * 1. Go to https://nodejs.org/en/download/
 * 2. Click on the operating system
 * 3. Double click the downloaded installer
 * 4. Complete the installation flow
 * 5. Open Terminal/GitBash application
 * 6. Verify node is installed successfully, command -> node -v
 * 7. Verify npm is installed successfully, command -> npm -v
 * 
 * 
 * Create Node-Js project:
 * 1. Open Terminal/Gitbash
 * 2. cd to repo-local
 * 3. Enter command -> npm init -y
 * 
 * 
 * Let's start working in local-repo using VS-Code with Javascript:
 * 1. Open local-repo through VS-Code
 * 2. Create a folder
 * 3. Create a file (eg: File1.js) in above created folder
 * 4. Add Js-code in the file
 * 5. Drag and open terminal in the VS-Code
 * 6. Execute the file using node-command
 *      Command -> node file-path
 *
 * 
 */