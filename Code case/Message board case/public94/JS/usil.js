


// 功能模块

const usil = {
    // 获取内容
    load: () => {
        return $.get(APILIST.gettingdata)
    },
    // 添加内容
    add: (name, content) => {
        return $.post(APILIST.memoryinterface, { name, content })
    }
}