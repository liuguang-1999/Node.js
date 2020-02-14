

const fs = require('fs')
const path = require('path')
const Mlu = "01msgsjk.json"
const Dizhi = path.join(__dirname, Mlu)
// 获取 内容
// 封装 获取功能
const get = () => {
    let rs = fs.readFileSync(Dizhi, 'utf8')
    let arr = JSON.parse(rs)
    return arr
}
// 写入 添加功能
// 封装写入功能
const add = (name, content) => {
    // 把数据库内容获取过来
    let arr = get()
    // 用三元表达式 来传递id值 修复id值的Bug
    let id = arr.length ? arr[arr.length - 1].id + 1 : 1
    // 创建模板
    let obj = {
        id,
        name,
        content,
        "dt": Date.now()
    }
    arr.push(obj)
    fs.writeFileSync(Dizhi, JSON.stringify(arr))
    return arr
}

// 删除功能 实现
// 封装 删除功能
const del = (ID) => {
    if (ID == null) { return }
    let arr = get()
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == ID) {
            arr.splice(i, 1)
        }
    }
    fs.writeFileSync(Dizhi, JSON.stringify(arr))
    return arr
}

// 把模块 功能 暴露给 需要的人
module.exports = {
    get,
    add,
    del
}