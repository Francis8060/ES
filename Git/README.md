# git流程图
![Image](https://user-gold-cdn.xitu.io/2020/6/15/172b390eab77fcbd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
- 工作区    `workspace`
- 暂存区    `index / stage`
- 本地仓库  `repository`
- 远程仓库  `remote`

> 对于用户名和密码经常修改的可以在.git/config文件中修改加入用户名和密码`https://[用户名]:[密码]@github.com/Francis8060/DOC.git`

# 1.修改和提交
``` js
// 查看工作区和暂存状态
git status 
```

## workspace => stage (add)
``` js
// 添加指定的文件到暂存区
git add [file1] [file2]

// 添加制定文件夹到暂存区，包括子目录
git add [dir]

// 添加所有文件到暂存区
git add .
```

## stage => repository (commit)
``` js
// 将暂存区的文件提交到本地仓库并添加提交书名
git commit -m "本次提交说明"

// add和commit的合并
git commit -am "本次提交说明"
```

## repository => remote (push)
``` js
// 本地仓库推送到远程仓库，远程仓库存在改分支
git push

// 如果远程仓库没有该分支，会新建一个同名的远程分支
git push origin [分支名称]

// 删除远程分支
git push origin --delete [分支名称]   或  git push origin :[分支名称] 

// 建立当前分支和远程分支的追踪关系
git push -u  origin [分支名称]
```

## branch
``` js
// 查看本地分支
git branch 或 git branch -l

// 查看远程分支
git branch -r

// 查看所有分支（远程分支+本地分支）
git branch -a

// 查看所有分支并带上最新的提交信息
git branch -av

// 查看当前本地分支对应的远程分支
git branch -vv

// 创建本地分支
git branch [分支名称]

// 删除本地分支
git branch -d [分支名称]

// 强制删除一个本地分支
git branch -D [分支名称]

// 修改本地分支名称
git branch -m [分支名称]

// 切换本地分支
git checkout [分支名称]

// 创建一个本地分支并切换到创建新的分支
git checkout -b [分支名称]

// 基于master分支创建一个新的分支并切换到新的分支
git checkout -b [分支名称] master

// 创建一个本地分支并关联拉取远程分支
git chekout -b [分支名称] origin/[分支名称]
```

## merge
``` js
// 切换到B分支，讲A分支合并到B
git checkout B
git merge A
```

## stash
``` js
// 将所有未提交的修改保存到堆栈中
git stash

// 给本次存储加个备注，以防时间久了忘记
git stash save "备注"

// 查看堆栈中的存储记录
git stash list

// 把堆栈中的数据回复，但stash记录并不会删除
git stash apply "stash@{index}"

// 把堆栈中的数据恢复并删除stash记录
git stash pop "stash@{index}"

// 删除stash记录
git stash drop "stash@{index}"

// 删除所有存储的记录
git stash clear
```

## diff
``` js
// 查看工作区和暂存区单个文件的对比
git diff [文件名称]

// 查看工作区和暂存区的所有文件对比
git diff

// 查看工作区和暂存区有差异的文件列表
git diff --stat

// 查看暂存区和本地本地仓库的差异
git  diff --staged/--cached

// 查看工作去和本地仓库的文件差异
git diff [分支名称]

// 查看工作区与默认当前分支最新提交的差异
git diff HEAD
```

## remote
``` js
// 查看所有远程主机
git remote

// 查看关联的远程仓库的详细信息
git remote -v
```

## tag
-  常用于发布版本
``` js
// 默认在HEAD上创建一个标签
git tag [tag名称]

// 推送一个本地tag到远程仓库
git push origin [tag名称]

// 切换到指定tag所对应的代码
git checkout [tag名称]

// 删除本地tag
git tag -d [tag名称]

// 删除远程tag
git push origin :refs/tags/[tag名称]

// 查看所有tag
git tag
```

## 版本切换、重设、撤销
- checkout可以撤销工作区的文件
``` js
// 恢复暂存区的制定文件到工作区
git checkout [文件名称]

// 恢复暂存区的所有文件到工作区
git checkout .

// 没有提交暂存区，恢复暂存区的文件到工作区
git checkout HEAD -- [filename]

// 回滚到最近一次提交的上一个版本
git checkout HEAD^

// 回滚到最近一次提交的上两个版本
git checkout HEAD^^

// 切换到指定的commit版本
git checkout [commit_id]
```

- reset可以撤销工作区/暂存区的文件 `git reset [--hard|soft|mixed|merge|keep] [<commit>|HEAD]`
``` js
// 撤销暂存区的文件并不改变工作区
git reset [文件名称]

// 重置暂存区最近的一次提交，但并不改变工作区
git reset 或 git reset HEAD

// 重置工作区与暂存区，回退到最近一次提交的内容
git reset --hard

// 提交到本地仓库，并未提交到远程仓库，恢复工作区和暂存区
git reset --hard HEAD~1 或 git reset --hard HEAD^
```

## 参考
[https://juejin.im/post/5ee649ff51882542ea2b5108#heading-21](https://juejin.im/post/5ee649ff51882542ea2b5108#heading-21)
[https://juejin.im/post/5ee8e7d9518825432a35b0f2#heading-4](https://juejin.im/post/5ee8e7d9518825432a35b0f2#heading-4)