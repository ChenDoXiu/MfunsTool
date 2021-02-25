
###
 # @Author: your name
 # @Date: 2021-02-24 16:50:05
 # @LastEditTime: 2021-02-25 12:42:59
 # @LastEditors: Please set LastEditors
 # @Description: In User Settings Edit
 # @FilePath: \html\deyloy.sh
### 
# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/ChenDoXiu/MfunsTool master:gh-pages

cd -
 # @FilePath: \html\deyloy.sh
### 
