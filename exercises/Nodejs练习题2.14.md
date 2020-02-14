# 题目1 

## 接口与静态资源有什么相同和不同的地方。 

```js
// 答案 ：都可以通过url来访问、不同点：“静态资源” 服务器直接读出来返还给客户端 “接口”服务器需要去执行接		   口代码 执行后的结果 返还给 客户端
```

# 题目2 

## 如果要实现一个get类型的，名为test的测试接口，下面的代码有什么不对的地方？ 

```js
http.createServer((req,res)=> {
    if(req.url==='test' && req.method==='get') {
        res.end('ok')
    } else {
        res.end('404')
    }    
})
```

* 答案

```js
http.createServer((req,res)=> {
    if(req.url==='/test' && req.method==='GET') { // req.method的接口名应为大写
        res.end('ok')						  //  req.url test 前面应加 /
    } else {
        res.end('404')
    }    
})
```

# 题目3 

## 如何实现一个名为abc的get类型接口，让它以json格式返回所传入的参数。 

```js
http.createServer((req,res)=> {
    if( __ req.method==='GET') {
        // 补全代码
    } else {
        res.end('404')
    }   
})
```

* 答案

```js
// 引入模块
const url = require('url')
http.createServer((req,res)=> {
    if( req.url=="/abc" && req.method==='GET') {
        obj = url.parse(req.url,true)
        let rs ={
            code:200
            data:obj.query
        } 
        res.setHeader("content-type","application/json;charset=utf-8")
        res.end(JSON.stringfy(rs))
    } else {
        res.end('404')
    }   
})
```

# 题目4 

## post方式传参与get方式传参的区别？ 

* 答案

```js
// 用GET方式传参 只能通过请求行中已查询字符串的方式传递，由于GET方式传参有长度有限 不可能无限长
// 用POST传参 参数在请求体中 大小没有限制
```

# 题目5 

## 如何获取post方式传递的参数？ 

* 答案

```js
// 可以用 核心方法 去获得 POST 的传递参数
const querystring = require('querystring')
 let result = "";
        // 监听 前端发过来的数据
        req.on("data", buf => {
            // 隐式转换 数据格式
            result += buf
        })
		// 监听结束 
        req.on("end", () => {
            	      // 用核心模块 querystring方法 拆分参数
            let { name, content } = querystring.parse(result);
           console.log(name, content);  // 这里 就是POST 所传递的参数
            let rs = {
                code: 200,
                msg: "添加成功"
            }
            ser.setHeader("content-type", "application/json;charset=utf-8")
            ser.end(JSON.stringify(rs))
        })
```

# 题目6 

## 如何实现一个名为abc的post类型接口，让它以json格式返回所传入的参数。 

```js
http.createServer((req,res)=> {
    if( __ req.method==='POST') {
        // 补全代码
    } else {
        res.end('404')
    }   
})
```



* 答案

```js
// 引入核心模块
const url = require('url')
const querystring = require('querystring')
http.createServer((req,res)=> {
     let obj = url.parse(req.url, true)
    if( obj.pathname== "/abc"&&.method==='POST') {
         let result = "";
        // 监视 前端发过来的数据
        req.on("data", buf => {
            // 隐式转换 数据格式
            result += buf
        })
        req.on("end", () => {    
            let  content  = querystring.parse(result);
            let rs = {
                code:200,
                data:content
            }
            ser.setHeader("content-type", "application/json;charset=utf-8")
            ser.end(JSON.stringify(rs))
        })
    } else {
        res.end('404')
    }   
})
```

