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

* 答案：__dirname

1. 获取文件夹绝对路径

```js
const fs = require('fs')
let rs = fs.readFileSync(__dirname + "文件名", 'utf8') // 解析编码为 utf8
console.log(rs);
```

* 答案：__filename

1. 获取文件的绝对路径

```js
const fs = require('fs')
let rs = fs.readFileSync(__filename + "文件名", 'utf8') // 解析编码为 utf8
console.log(rs);
```

## 使用fs读取文件时，为什么不推荐使用相对路径？ 

* 答案

```js
// ∵相对路径 会随着读取文件的位置所改变 ∴ 推荐用绝对路径更为保险
```

## fs模块中的writeFile和appendFile有什么区别？ 

* 答案

1. **writeFile覆盖写入文件**

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

2. **appendFile 从数组后面追加写入一条信息**

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

## 请说如明如下代码中 `fs.readFile('./a.txt','utf8',(err,data)=>{})` utf8,err,data的意义？ 

* 答案

```js
// 1、utf8 的意义是 解析目标编码为 utf8可读取编码 默认编码为 2进制的Buffer硬盘编码
// 2、err 的意义是 错误报告 代码解析发生了错误 会被传入err 这个变量中 可以用 log(err) 打印出来
// 3、data 的意义是 代码读取成功后的 返回报告 会被写入data这个 变量中可以用 log(data) 打印出来
```

## 定义模块 代码题 ！！！ 

```js
// yourModule.js	
exports.a = 1;
使用模块。请问，如下代码中会输出什么结果？

//index.js
const yourModule = require('./yourModule');
console.log(yourModule)
```

* **答案**

```js
// 会输出 报错语句 ∵ const yourModule = require('./yourModule'); 这代码后半步 没有写后坠 .js
              //  ∴ 代码执行 会报错
```



## 题目16 

```js
// yourModule.js	
exports = {a : 1 };
使用模块。请问，如下代码中会输出什么结果？

//index.js
const yourModule = require('./yourModule');
console.log(yourModule)
```

* **答案**

```js
// 输出结果是一个 {a:1}
```

## 题目17 

```js
// yourModule.js	
exports.a = 1;
module.exports.b = 2
使用模块。请问，如下代码中会输出什么结果？

//index.js
const yourModule = require('./yourModule');
console.log(yourModule)
```

* **答案**

```js
// 输出结果为 {a:1,b:2}
```

## 题目18 

```js
// yourModule.js	
exports = {a:1}
module.exports = {b:2}
使用模块。请问，如下代码中会输出什么结果？

//index.js
const yourModule = require('./yourModule');
console.log(yourModule)
```

* 答案

```js
// 输出结果为 {b:2}
```

































