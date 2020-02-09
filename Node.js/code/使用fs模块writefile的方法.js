const fs = require('fs');

// 文件路径，内容，回调
let arr = [{ id: 100, name: '沙雕' }];

fs.writeFile('./test.txt', JSON.stringify(arr), err => {
    if (err) {
        console.log(err)
    } else {
        console.log('完成写入')
    }
})