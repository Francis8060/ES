- 查看远程所有分支`git branch -a`
- 查看本地分支`git branch`
- 切换分支`git checkout 分支名`

- 本地创建分支并推送到git上
``` js
// 创建创建分支
git checkout -b 分支名称
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

这是版本v1.0
