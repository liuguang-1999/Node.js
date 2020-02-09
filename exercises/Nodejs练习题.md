# node.js练习题 

## nodejs是什么？

* **答案**

```js
// Node.js是一个软件
```

## 在nodejs下，如何执行js代码？ 

* 答案

```js
// 可以在Cmd 控制面板里面 输入 node 文件名 敲回车 就可以 运行.js文件里面的代码了
```

## nodejs和浏览器有何相似之处？ 

* 答案

```js
// 都可以运行 .js文件里的代码
```

## nodejs和javascript有什么关系？ 

* 答案

```js
// 都拥有 谷歌V8引擎 node可以运行ES6的代码  还可以在不太严格的语境下，我们可以说在nodejs环境下运行js代码 。
```

## nodejs中可以使用window.alert()来弹出一个警告框吗？为什么 ？ 

* 答案

```js
// 不可以 弹出警告框  ∵Node中没有Window对象 ∴不能再Node中弹出警告框
```

## 如何确定本机上已经安装了nodejs 

* 答案

```js
// 在Cmd 控制面板中 输入 node -v 查看版本号, 输入 npm -v 查看npm的 版本号。
```

## nodejs中的模块可以分成哪几大模块？ 

* 答案

```js
// 1、核心模块 2、自定义模块 3、第三方模块
```

## 使用一个核心模块的步骤是什么？ 

* 答案

```js
// 第一步引入 核心模块  代码：const fs = require('fs')  也可以用 let变量和var变量来声明
```

## fs中的同步方法和异步方法有什么区别？举例说明？ 

1. **同步方法和异步方法区别是**

```js
// fs的同步方法在名字上有sync关键字,在使用中,异步方法需要传入回调函数,同步的方法不需要回调。
```

## 使用fs读取文件和写入文件分别可以使用什么方法？ 

### 读取文件

1.  读取文件 ：方式一 > 异步指令

```js
const fs = require('fs');

fs.readFile('用Node运行JS文件.js', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
}); 
```

2. 读取文件：方式二 > 异步指令

```js
    fs.readFile("01.js1111",function (err, data) {
        // 回调函数，自动调用
        // 如果有错误，则错误信息会保存第一个参数中
        // 如果没有错误，则数据会保存在第二个参数中
        if (err)  {
            console.log(err)
        }
        else{
            // 整个读取没有错误
            // 如果不设置utf8，则读出来的内容是Buffer格式的。
            // Buffer转字符串 ，直接使用 toString()方法 
            console.log(data);
            console.log(data.toString());
        }

    })
```

### 写入文件

1. 写入文件 ：方式一 覆盖式写入

```js
// 文件路径，内容，回调
let arr = [{ id: 100, name: '哈哈' }];

fs.writeFile('./test.txt', JSON.stringify(arr), err => {
    if (err) {
        console.log(err) // 错误 打印
    } else {
        console.log('完成写入')
    }
})
```

2. 写入文件 ：方式二  追加式写入

```js
// 文件路径，内容，回调
let arr = [{ id: 1, name: 'test' }];
// 加个\n是换行					// 转成JSON字符串存入JSON.stringify(arr)
fs.appendFile('./test.txt', '\n' + JSON.stringify(arr), err => { 
    if (err) {
        console.log(err)
    } else {
        console.log('完成写入')
    }
})
```

## __dirname和__filename有什么用处？ 

* 答案

```js

```

