## 代码提交流程

### 我们用fetch + rebase的方式同步代码


### 步骤

1. 将项目fork到自己的名下

2. 添加项目的源仓库, 并查看是否添加成功
```
git remote add origin http://git.jc/你的用户名/项目名称.git
git remote add upstream http://git.jc/项目组/项目名称.git
git remote -v
```

3. 设置个人信息,
```
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```
4. 新建特性分支
```
 git checkout -b feature-版本号-特性分支名字/自己的名字
 便于后续快速查找对应的分支
 举例
 // git checkout -b feature-v0.1-init
```

5. 本地开发完成**第一个**功能（或创建了需要的文件） 把本地分支推送到自己远程的特性分支（后续开发需要 fetch/rebase）
```
举例
git push origin feature-v0.1-init
```
6. 进入到 gitlab 项目仓库，点击 Merge Request , 然后点击 New Merge Request , 从 Source branch 选择自己名下正在开发的分支, 从 Target branch 选择想要合并的分支(通常为 develop)，点击 Compare branches and continue, 确认无误后点击提交
7. 后续开发要经常从 develop 分支获取最新代码, 合并到本地
```
git fetch upstream develop
git rebase upstream/develop
```
8. 合并过程中如果遇到冲突，先解决冲突，然后
```
git add . (git add .，不要commit)
git rebase --continue
```
重复步骤5，直到解决全部冲突

9. 将没有冲突的代码 push 到自己远程特性分支
```
举例
git push origin feature-v0.1-init
```
## 引用常用资源

现在在webpack配置了alias方便引用资源，举个例子当你在某个视图组件中需要引用公共组件；不管你与那个组件的相对路径是怎样的，可以直接`import AddButton from 'Components/AddButton'`
目前可以这样引用的有：

- Src: 对应src目录
- Util: 对应'src/utils/'
- Components: 对应'src/components/',
- Assets: 对应'src/assets/',
- Constant: 对应'src/constant/'