#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd .nuxt

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
# 第一种： 适合当前项目为private部署，属于另建新库
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master


# 第二种： 适合当前项目为public部署
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# 部署成功后，可在分支下查看博客网址

# 这里我使用为第一种
git push -f git@github.com:DrKaiBin/DrKaiBin.github.io.git master

cd -
```