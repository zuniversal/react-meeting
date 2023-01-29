#!/bin/bash
WORKDIR='/code/react-meeting'
cd $WORKDIR
pwd && ls
echo '拉取前端代码'
git pull
# echo '编译打包'
# npm i
# npm run build
echo '打包镜像'
pwd && ls
docker build -t react-meeting:1.0 --network=host -f Dockerfile . --no-cache
# docker build -t react-meeting:1.0 -f /Volumes/Mac HDD/machhd/code/vue/vue-vite-vw/Dockerfile . --no-cache
echo '删除旧容器'
docker stop react-meeting
docker rm react-meeting
echo '启动新容器'
docker run -p 9010:80 --name react-meeting -d react-meeting:1.0
echo '脚本结束'

