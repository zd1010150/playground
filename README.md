# Playground（演武堂）

## 目的

每次看到一个新的技术点，准备尝试一下的时候，发现自己要准备一套实验环境。因为这个实验环境与项目中正式使用的开发环境有很大不同：不需要关注兼容性问题，也不需要考虑性能问题，调试友好。这个项目旨在提供一个这样的实验环境：

1. 可以直接使用各种时髦的技术，比如 ES6、querySelector、classList
2. 直接启动一个静态服务，同时支持 live reload（hot reload 不太现实）
3. 支持测试，（实现一个算法逻辑时，有一个可用的测试环境再好不过了）
4. 配置好 eslint，实时语法提示（IDE 支持）

## 开始

使用下面命令，clone 本仓库到本地，安装依赖包

```sh
git clone playground
cd playground
npm install
```

`npm start` 启动一个静态服务，该服务占用 3000 端口

`npm test` 启动 mocha 测试，所有 `*test.js` 都会被 watch

## 示例

在项目里提供了三个实际例子

1. `src/alg/merge-base` 这个例子是实现 merge-base 的查找最优公共祖先算法，所以需要一个测试环境
2. `src/IntersectionObserver` 基于 IntersectionObserver 做的一个滚动加载 demo
3. `src/three` `three.js` 的试验场
