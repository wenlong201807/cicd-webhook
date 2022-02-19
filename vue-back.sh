#!/bin/bash
WORK_PATH='/opt/cicd-pro/cicd-back'
cd $WORK_PATH
echo '先清除老代码'
git reset --hard origin/main
git clean -f 
echo '拉取最新代码'
git pull origin main
echo '开始执行构建'
docker build -t vue-back:1.0 .
echo '停止旧容器并删除旧容器'
docker stop vue-back-container
docker rm vue-back-container
echo '启动新容器'
docker container run -p 6006:6006 --name vue-back-container -d vue-back:1.0
