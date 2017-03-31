# Playground（演武堂）
> 不要 fork 本项目，使用 yo 初始化自己的项目

## 目的

每次看到一个新的技术点，准备尝试一下的时候，发现自己要准备一套实验环境。因为这个实验环境与项目中正式使用的开发环境有很大不同：不需要关注兼容性问题，也不需要考虑性能问题，调试友好。这个项目旨在提供一个这样的实验环境：

1. 可以直接使用各种时髦的技术，比如 ES6、querySelector、classList
2. 直接启动一个静态服务，同时支持 live reload（hot reload 不太现实）
3. 支持单元测试，（实现一个算法逻辑时，有一个可用的测试环境再好不过了）
4. 配置好 eslint，实时语法提示（IDE 支持）

## 开始

```sh
npm install yo -g
npm install generator-next-playground -g
```
在新文件夹下 执行 `yo next-playground`，会得到下面这些文件：

```sh
tree -I node_modules -L 3
├── dist // server base directory
├── gulp
├── src // 一些示例
│   ├── IntersectionObserver
│   │   ├── index.html
│   │   └── main.js // entry point of js
│   ├── alg
│   │   └── merge-base
│   ├── three
│   │   ├── drinkbird
│   │   ├── hello
│   │   └── .DS_Store
│   └── .DS_Store
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .gitignore
├── README.md
├── gulpfile.babel.js
└── package.json
```


`npm start` 启动 gulp 任务，该任务会启动一个静态服务默认使用 3000 端口，同时任务会同步 src 目录下除 `.js` 的所有文件。所有的 `*main.js` 会被 bundle 到服务目录下。
不过若需添加一个页面，新添加的 main.js 不会被 watch，需要重启任务。

`npm test` 启动 mocha 测试，所有 `*test.js` 都会被 watch

## 示例

在项目里提供了三个实际例子

1. `src/alg/merge-base` 这个例子是实现 merge-base 的查找最优公共祖先算法，所以需要一个测试环境
2. `src/IntersectionObserver` 基于 IntersectionObserver 做的一个滚动加载 demo
3. `src/three` `three.js` 的试验场

在项目启动之后，在浏览器访问 `localhost:3000/three/drinkbird/` 可查看 demo
