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
docker build -t vue-vw:1.0 --network=host -f Dockerfile . --no-cache
# docker build -t vue-vw:1.0 -f /Volumes/Mac HDD/machhd/code/vue/vue-vite-vw/Dockerfile . --no-cache
echo '删除旧容器'
docker stop vue-vw
docker rm vue-vw
echo '启动新容器'
docker run -p 9010:80 --name vue-vw -d vue-vw:1.0
echo '脚本结束'
