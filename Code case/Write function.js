










// 引入 fs模块
const fs = require('fs')
// 引入 path 模块
const path = require('path')

// 代码可视化 把数据文件地址放入一个 常量当中 大写命名
const SITE = 'database.json';

// 拼接地址 用path环境 下的join方法拼接
let newsite = path.join(__dirname, SITE)

//封装读取功能  <获取信息>
const gitAndshow = () => {

    // 文件读取功能实现 
    // 文件读取成功 但还是JSON格式文件 case
    let rs = fs.readFileSync(newsite, 'utf8')
    // 转换 文件格式 JSON 转成 普通字符串格式 
    let arr = JSON.parse(rs)
    return arr
}
// 封装 写入功能
const Write = (name, content) => {

    // 拿到的数据取出
    arr = gitAndshow();
    // 创建一个 可以写入的 对象
    let obj = {

        "id": arr.length + 1,
        name,
        content,
        "dt": Date.now()

    }
    arr.push(obj)
    // 覆盖写入 同步方法
    fs.writeFileSync(newsite, JSON.stringify(arr))
    return arr
}
// 快速写入
/* for (let i = 0; i < 10; i++) {
    Write("测试数据", "我只是一句内容");
} */
const delMsg = ID => {
    // 取出 储存库里的数据
    arr = gitAndshow()
    // 循环遍历每条信息
    for (let i = 0; i < arr.length; i++) {
        // 用if查找 传入的Id
        if (arr[i].id == ID) {
            // 找到后 删除这个Id的数据
            arr.splice(i, 1)
            console.log(arr);
            // 删除后重新存入 储存库里
            fs.writeFileSync(newsite, JSON.stringify(arr))
            break
        }
    }
}
delMsg();