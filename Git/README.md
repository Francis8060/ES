# git流程图
![Image](https://user-gold-cdn.xitu.io/2020/6/15/172b390eab77fcbd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
- 工作区    `workspace`
- 暂存区    `index / stage`
- 本地仓库  `repository`
- 远程仓库  `remote`

# 1.修改和提交
``` js
// 查看工作区和暂存状态
git status 
```

## workspace => stage  
``` js
// 添加指定的文件到暂存区
git add [file1] [file2]

// 添加制定文件夹到暂存区，包括子目录
git add [dir]

// 添加所有文件到暂存区
git add .
```

## stage => repository
``` js
// 将暂存区的文件提交到本地仓库并添加提交书名
git commit -m "本次提交说明"

// add和commit的合并
git commit -am "本次提交说明"
```

## repository => remote
``` js
// 本地仓库推送到远程仓库，如果远程仓库没有该分支，会新建一个同名的远程分支
git push

```





- 查看远程所有分支`git branch -a`
- 查看本地分支`git branch`
- 切换分支`git checkout 分支名`

- 本地创建分支并推送到git上
``` js
// 创建创建分支
git checkout -b 分支名称\
// 将本地分支推送到远程服务器
git push --set-upstream origin 分支名称
```

- 删除本地分地和远程分支
``` js
// 删除本地分支
git branch -d 分支名称
// 删除远程分支
git push origin --delete 分支名称
```

- 将分支A上的修改同步到分支B
``` js
// 切换到B分支
git checkout B
// 将A分支合并到B
git merge A
```
