#!/bin/bash
WORK_PATH='/opt/cicd-pro/vue-cicd-front'
cd $WORK_PATH
echo '先清除老代码'
git reset --hard origin/main
git clean -f 
echo '拉取最新代码'
git pull origin main
echo '安装依赖包 [暂时跳过]'
# npm install
echo '编译'
npm run build
echo '开始执行构建docker镜像 -> 前台页面'
docker build -t vue-front:1.0 .
echo '停止旧容器并删除旧容器'
docker stop vue-front-container
docker rm vue-front-container
echo '启动新容器'
docker container run -p 6008:6008 --name vue-front-container -d vue-front:1.0
