
//基地址
const BASEURL = "http://192.168.1.4:8000"


//  功能接口地址
let APILIST = {
    // 获取 数据接口
    gettingdata: BASEURL + "/getmsg",
    // 向数据库 发起存储 接口
    memoryinterface: BASEURL + "/addmsg",
    // 用 GET方式 传入id 删除 信息
    delinterface: BASEURL + "/delmsg",
    // 用POST 方式传入id 删除 信息
    delmessage: BASEURL + "/deimsg"
}
