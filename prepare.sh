#!/bin/sh
set -e

tsUpstream='https://github.com/Microsoft/TypeScript.git'
tsClone='https://github.com/basarat/TypeScript.git'

git submodule update --recursive --init

# Official Microsoft/TypeScript clone
cd ./TypeScript

git remote rm origin
git remote rm upstream
# Set upstream
git remote add -f upstream $tsUpstream
# Set origin
git remote add -f origin $tsClone

git fetch upstream
git reset --hard upstream/master
npm install

# add custom extension
# node ../extensions/addExtensions.js

cd ..
