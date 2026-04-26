//! git & github/gitlab/bitbucket
//& git => vcs

//* commands
//!  git config --global --list => list local git global config
//! git config --global user.email "abc@gmail.com"

//! git init => initialize empty git repo at folder

//* WD (working directory) => Staging Area

//! git add <file_path> => wd  -> SA
//! git commit -m "<commit message>" => SA -> local branch/repo
//! git status
//! git add . => all changes -> SA
//! git push

//* branches
//! git branch => list all local branches
//! git branch <branch_name> => create new branch
//! git switch <branch_name> => switches to the branch_name
//! git checkout <branch_name> => same as switch
//! git checkout -b <branch_name> => to create a branch and switch at the same time
//! git merge <branch_name>
// main => git merge feature/login

//* github
//! git remote add origin <github_repo_url>
//? git remote set-url origin https://github.com/ayuushpokharel/mernStack.git => to set the already created repo
//! git remote -v
//! git remote remove origin

//! git push origin <branch_name>
//! git pull origin <branch_name>

//* Delete branch
//! git branch -d <branch_name>

//* Clone Repo
//! git clone <git_remote_repo_link> => copy the github repo to local

// function registerUser() {
//   console.log("user account created");
//   return {
//     _id: 1,
//     userName: "JOHN123",
//     email: "john@gmail.com",
//     pass: "123456",
//   };
// }
