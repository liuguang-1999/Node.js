


// 引入 fs模块
const fs = require('fs')
// 引入 path 模块
const path = require('path')

// 读取文件地址
const SITE = "database.json";
let newsite = path.join(__dirname, SITE)


// 创建 功能模块
/**
 * 获取文件
 */
let get = () => {
    // 文件读取功能实现 
    let rs = fs.readFileSync(newsite, 'utf8')
    // 转换 文件格式 JSON 转成 普通字符串格式 
    let arr = JSON.parse(rs)
    return arr
}
/**
 *  添加文件         arr.length(arr.id - 1).id + 1
 */
let add = (name, content) => {
    let arr = get()
    // let id = arr.length ? (arr[arr.length-1]["id"] + 1) : 1
    // let id = arr.length ? arr[arr.length - 1].id + 1 : 1
    let id = 1;
    // 现在数组中有元素，则length肯定是大于0
    if (arr.length) {
        // 在最后一个元素的id的基础上加1
        id = arr[arr.length - 1].id + 1
    }


    let obj = {
        id,
        name,
        content,
        "dt": Date.now()
    }
    arr.push(obj)

    fs.writeFileSync(newsite, JSON.stringify(arr))
    return arr
}
/**
 * 删除文件
 */
let del = id => {
     if (id == null) {
        return
    } 
    let arr = get()
    let ind = arr.findIndex(item => item.id == id)
    arr.splice(ind, 1)
    fs.writeFileSync(newsite, JSON.stringify(arr))
    return arr
}



// 用module.exports 方法 把以上方法 引出js文件 方便别的 文件调用以及 复用

module.exports = {
    get,
    add,
    del
}