We use git-commands in order to send/receive code in github repo

git clone -> to get the repo in local (if not present)
Command -> git clone <git-clone-url>

git status -> to find the differences between repo-remote and repo-local

To send files from local to remote:
 1. git add <filename1> <filename2> ...
  OR
 1. git add <filename1>
  git add <filename2>
  git add <filename3>
  ...
  OR
 1. git add . (if you would like to add all modified and Untracked file/folder)

 2. git commit -m "commit msg"

 3. git push
