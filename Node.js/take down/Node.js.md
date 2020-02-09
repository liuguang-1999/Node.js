# 删除文件操作

1. 已知：只能删除文件

```js
const fs = require('fs');

fs.unlink('用Node运行JS文件.js', (err) => {
    if (err) throw err;
    console.log('已成功删除 /tmp/hello');
});
```

# 启动假服务器

```js
// 引入http模块
const http = require('http');

// 创建服务
const server = http.createServer(function (req, res) {
    console.log(`来自${req.connection.remoteAddress}的客户端在${new Date().toLocaleTimeString()}访问了本服务器`);
    res.end(`<h1>Hhei ma cheng xu yuan iT elite!!- </h1> <p>${req.connection.remoteAddress}</p>`);
});
// 启动服务
server.listen(8081, function () {
    console.log('服务器启动成功，请在http://localhost:8081中访问....');
});
```

# 读文件、查看文件

## 这是个 异步指令

* **快捷写法**

```js
//require

const fs = require('fs');

fs.readFile('用Node运行JS文件.js', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
}); 
```

* **或**

```js
fs.readFile("01.js1111",function (err, data) {
    console.log(2)
    // 回调函数，自动调用
    // 如果有错误，则错误信息会保存第一个参数中
    // 如果没有错误，则数据会保存在第二个参数中
    if (err)  {
        // 在读的过程，发生了错别
        // throw err :把这个错误 抛出来 交给上一级来处理 
        // throw err;
        console.log(err)
    }
    else{
        // 整个读取没有错误
        // 如果不设置utf8，则读出来的内容是Buffer格式的。
        // Buffer格式：理解为这个一段文本内容在硬盘中保存编码
        // <Buffer 76 61 72 20 61 20 3d 20 31 3b 0d 0a 63 6f 6e 73 6f 6c 65 2e 69 6e 66 6f 28 61 20 2b 20 32 29 3b>
        // Buffer转字符串 ，直接使用 toString()方法 
        console.log(data);
        console.log(data.toString());
    }

})
```



## 这是个 同步指令

*  **快捷写法**

```js
let rs = fs.readFileSync("./01.js",'utf8')
    console.log(rs);
```

* **如果遇到了错误了，需要额外使用 try {   } catch(err) { } 结构来处理错误。**

```js
try {
    let rs = fs.readFileSync("./01.js",'utf8')
    console.log(rs);
} catch(err){
    console.log("有错误：");
    
    console.log(err);
}
```

# 写入文件 或 添加内容

##  (覆盖式)：写入内容

* **fs.writeFile**

```js
// 文件路径，内容，回调
let arr = [{ id: 100, name: '沙雕' }];

fs.writeFile('./test.txt', JSON.stringify(arr), err => {
    if (err) {
        console.log(err) // 错误 打印
    } else {
        console.log('完成写入')
    }
})
```

##  (追加式)：写入内容

* **fs.appendFile**

* **从数组后面追加 填入数组内**

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

# 获取路径

## 文件的绝对路径

* ​		**__filename**

```js
const fs = require('fs')
let rs = fs.readFileSync(__filename + "/test.txt", 'utf8')
console.log(rs);
```

## 文件夹的绝对路径	

* ​	       **__dirname**

```js
const fs = require('fs')
let rs = fs.readFileSync(__dirname + "/test.txt", 'utf8')
console.log(rs);
```

# Path环境模块

1. **截取 路径中的 文件名。**

```js
const path = require('path');

// - path.basename（）
// 此方法返回 `path` 的最后一部分。一般可用来获取路径中的文件名。
// - path.join() ：路径拼接。
// - path.parse(path) ：把一个路径转成一个对象

// console.log(path);
var filePath = 'D:/94/server94/code/nodejs/abc.txt';
console.log( path.basename(filePath) ) //abc.txt
// console.log( path.join('D:/94','./a','/c','./1.html')) // D:\94\a\c\1.html
// console.log( path.parse(filePath) )
```

2. **路径拼接。** 

```js
const path = require('path');
// - path.join() ：路径拼接。
var filePath = 'D:/94/server94/code/nodejs/abc.txt';

// console.log( path.join('D:/94','./a','/c','./1.html')) // D:\94\a\c\1.html

```

3. **把一个路径转成一个对象的格式** 

![1581249986379](C:\Users\div\AppData\Local\Temp\1581249986379.png)

1. root：根目录
2. dir：目录列表
3. base：基地址
4. name：文件名
5. ext：文件类型

# 用Path绝对地址读取文件

```js
const fs = require('fs')
const path = require('path')

// 用核心模块path提供的join方法来拼接生成绝对地址。

let filePath = path.join(__dirname, "test.txt") // 拼接地址给变量

console.log( filePath  )
let rs = fs.readFileSync(filePath,'utf8') // 同步方式读取文件
console.log(rs); // 输出读取结果

```

