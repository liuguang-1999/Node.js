



const Modules = require('./Modules')

// 显示功能
Modules.get();   // 不需要传值

// 添加功能
//let b = Modules.add();   // 写入内容的格式 (字符串) "标题","内容""标题", "内容"
//console.log(b);

// 删除功能
let d = Modules.del(3);  // 传入值 为信息ID 进行删除
console.log(d);   
