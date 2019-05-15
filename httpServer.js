const path = require('path');
const qs = require('querystring');
const url = require('url');

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    // req 用来收集客户端传递过来的信息

    /**
     * 1. 获取路径信息
     * 2. 通过路径信息处理查询字符串
     */

    // 根据地址 查询字符串来连接服务器
    // headers 数据直接收到

    // body 异步得到的
    let index = 0;
    let datas =  []

    // 如果说客户端的请求里携带了body req 的data事件会持续收到 数据 buffer类型
    req.on('data', (data) => {
        datas.push(data);
    })

    // 表示请求结束了 如果body数据传送完毕 req 的end事件将会被触发
    req.on('end', () => {
        // 请求结束了 说明文件也传送结束了
        // 把所有的buffer 连接起来

       
        // let length = 0;
        // datas.forEach(item => {
        //     length += item.length
        // })
        const data = Buffer.concat(datas)
        console.log(req.headers["content-type"])
        if (data.length > 0) {
            fs.writeFile(path.resolve('1.zip'), data, () => {
                console.log('保存完毕')
            })
        }
        
    })
     

    // res 用来给客户端响应信息

    // 写入状态码
    res.statusCode = 200
    // 给响应程序写入数据
    res.write('<h1>111</h1>')
    // 结束响应的
    res.end()


})

server.listen(3000, () => {
    console.log('http已启动, port:', 3000)
})