


// 服务器 模块制作
// 引入 核心模块
const fs = require('fs')
const path = require('path')
const http = require('http')
const effect = require('./02effect')
const url = require('url')
const Mulu = "public94"
const querystring = require('querystring')
// 集中管理 静态文件的 请求文本类型
const TYPE_MAP = {
    ".html": "text/html;charset=utf-8",
    ".css": "text/css;charset=utf-8",
    ".png": "image/png",
    ".js": "application/javascript",
    ".jpg": "image/jpg",
}

const server = http.createServer((req, ser) => {
    console.log(`来自${req.connection.remoteAddress}的客户端在${new Date().toLocaleTimeString()}访问了本服务器${req.url}接口`);
    // 获取 网页所需要 处理的地址
    const Dizhi = path.join(__dirname, Mulu, req.url)
    // 获取 地址栏地址  参数
    let obj = url.parse(req.url, true)
    if (obj.pathname == "/getmsg" && req.method == "GET") { // 用GET  方法 获取 msg数据库 数据信息
        let arr = {
            code: 200,
            data: effect.get()
        }
        ser.setHeader("content-type", "application/json;charset=utf-8")
        ser.end(JSON.stringify(arr))
    } else if (obj.pathname == "/addmsg" && req.method == "POST") { // 用POST 方法 向msg数据库发起存储 命令 
        let result = "";
        // 监视 前端发过来的数据
        req.on("data", buf => {
            // 隐式转换 数据格式
            result += buf
        })
        req.on("end", () => {
            let { name, content } = querystring.parse(result);
            // 用POST 接口 在调用方法命令  向msg数据库发存储
            effect.add(name, content)
            let rs = {
                code: 200,
                msg: "添加成功"
            }
            ser.setHeader("content-type", "application/json;charset=utf-8")
            ser.end(JSON.stringify(rs))
        })
    } else if (obj.pathname == "/delmsg" && req.method == "GET") { // 用GET  方法 传参 传入id 删除 一条信息
        let arr = effect.get()
        let id = obj.query.id
        let price = arr.findIndex(item => item.id == id)
        if (price !== -1) {// 传入id传参删除 一条信息
            effect.del(id)
            rs = {
                code: 200,
                msg: "删除成功"
            }
            ser.setHeader("content-type", "application/json;charset=utf-8")
            ser.end(JSON.stringify(rs))
        } else {   // 传入错误id 处理分支
            rs = {
                code: 404,
                msg: "没有此id"
            }
            ser.setHeader("content-type", "application/json;charset=utf-8")
            ser.end(JSON.stringify(rs))
        }

    } else if (obj.pathname == "/deimsg" && req.method == "POST") { // 用POST 方法 传参 传入id 删除 一条信息
        let result = "";
        req.on("data", buf => {
            // 隐式转换 数据格式
            result += buf
        })
        req.on("end", () => {
            let arr = effect.get()
            let { id } = querystring.parse(result)
            let price = arr.findIndex(item => item.id == id)
            if (price !== -1) {
                effect.del(id)
                rs = {
                    code: 200,
                    msg: "删除成功"
                }
                ser.setHeader("content-type", "application/json;charset=utf-8")
                ser.end(JSON.stringify(rs))
            } else {
                rs = {
                    code: 404,
                    msg: "没有此id"
                }
                ser.setHeader("content-type", "application/json;charset=utf-8")
                ser.end(JSON.stringify(rs))
            }
        })
    } else {    // 获取 前端页面 作处理的分支
        try { // 找到 想要的网页 做处理的分支
            let rs = fs.readFileSync(Dizhi)
            // 找出后缀 可以给 文本类型用
            let extName = path.extname(req.url)
            // 通过找出后缀 结合 极简代码 手段 添加 文本标识类型
            TYPE_MAP[extName] && ser.setHeader("content-type", TYPE_MAP[extName])
            ser.end(rs)
        } catch (srr) { // 没找到 网页 做处理分支
            ser.statusCode = 404;
            ser.setHeader("content-type", "text/html;charset=utf-8")
            ser.end("吾随疾风潜行 身后亦需留心  ")
        }
    }
})
server.listen(8000, () => {
    console.log("服务器已启动 端口号为:8000");
})