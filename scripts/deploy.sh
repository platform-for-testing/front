#!/bin/bash
ssh $DEPLOY_USER@$DEPLOY_HOST
cd /home/deploy/front-dev
rm -rf build
rm server.js
tar -xzf package.tgz
rm package.tgz
node server.js