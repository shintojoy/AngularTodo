# Github quick start
## Information commands

1. "q" to exit "git log" screen.

2. "git status" check the status.

3. "git log " to check the log.

4. "clear" to clear the screen.

5."git branch" or "git branch -a" to get all branches.

## Staging, commit and delete

1. Initialize a directory using git init.

2. Add a file to staging using - git add filename.extension or git add .

3.Commit staged changes using -git commit -m "comment".

4.Ovewrite the local changes with the staged files - git checkout filename.extension.

5.Overwrite the staged changes with the committed version - git reset HEAD filename.extension.

6.Overwrite the local with changes with the committed verions
	1. git reset HEAD filename.extension (unstage from commiited).
	2. git checkout filename.extension (stage to local).
7. Remove files 
	1. Delete manually add using the "git add filename.extension or git add ." to stage the 			delete then "git commit -m "comment".
	2. Use "git rm filename.extension" to remove locally and stage the deleted file in one 				command. Then "git commit -m "comment".
8. Use "git checkout filename.extension" and "git reset HEAD filename.extension" respectively to 		undo deletion.

## Roll back and branching

**In order to roll back to a previous version follow the below procedure**

1. Issue "git log" and note the hash key represents the revison number.

2. Then Issue a "git checkout hashkey". When you roll back to a previous revision, it will create a 	temp branch and you 	will be in that temp brach.
3. If you wanted to switch to the orginal branch where the version before reviosn use the command 
	"git checkout branch name(master)". You local directory will have all the changes prior to rollback. 
4. After roll back, when you switch to the orginal branch from the temporary branch, git will provide the command 
	"git branch <branch-name> hashkey" to create a new brach to store the rolled back changes. 
5. You can switch between branches using "git checkout branchname".


## Cloning from github

1. get the url (https://github.com/planetoftheweb/angulardata.git) from github.com.

2. Issue the command "git clone url(https://github.com/planetoftheweb/angulardata.git)".

3. A repository with multiple branches will clone only the base repository (master) if you issue 	the above command.

4. In order to get the individual branches under the main branch(master), issue the following command 
	"git checkout -b localfoldername-inside-the-main-folder-name github branch name" (eg.git checkout -b 02-01 orgin/02-	01).

5. In order to get all the branches under the master while cloning issue the following commands.
	1. "git clone --mirror url-of-the-gitdirectory .git".
	2. switch to the repository and issue the command "git config --bool core.bare false".
	3. issue the command "git reset --hard", then check by issueing a "git branch" command.

## Cloning and removing all git reference

**Below steps helps us to create a brand new git repository from and existing branch**

1. Issue "git clone -b github-branch-name  url-of-the-gitdirectory" 
2. Remove all git references using "rm -dfr .git" (not a git command). Now the directory becomes a 		brand new directory can be added to github with usual git commands.
