# unit-test
单元测试自学

### 学习网址
阮一峰：http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html

### 安装
```js
$ cnpm  i mocha chai coffeescript --save-dev
```


### 使用方法

```js
$ mocha add.test.js
```

### 支持es6
如果需要支持es6需要安装babel-core和babel-preset-es2015
在根目录创建.babelrc文件
```js
{
    "presets": [
        "es2015"
    ]
}
```
用法
```js
$ mocha --require babel-core/register reduce.test.js

注意：有些地方使用的是：【不对】
$ mocha --compilers js:babel-core/register reduce.test.js、

官方将要废除 --compliers 所以需要安装 coffeescript使用上一个命令

```

### 参数
```js
1、--reporter, -R   指定测试报告的格式
$ mocha -R doc>add.test.html  add.test.js
2、--watch，-w  来监视指定的测试脚本。只要测试脚本有变化，就会自动运行Mocha。
很多阮一峰讲解：http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html
```

