



// 引入 fs 模块功能
const fs = require('fs')
// 引入 path 模块
const path = require('path')

// 代码可视化 把数据文件地址放入一个 常量当中 大写命名
const SITE = 'database1.json';

// 拼接地址 用path环境 下的join方法拼接
let newsite = path.join(__dirname, SITE)
//封装读取功能
const gitAndshow = () => {

    // 文件读取功能实现 
    // 文件读取成功 但还是JSON格式文件 case
    let rs = fs.readFileSync(newsite, 'utf8')
    // 转换 文件格式 JSON 转成 普通字符串格式 
    let arr = JSON.parse(rs)
    return arr
}
let a = gitAndshow();
console.log(a);


