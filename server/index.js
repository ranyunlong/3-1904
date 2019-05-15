const path = require('path');
const fs = require('fs');

// 他是一个服务器应用
const express = require('express');
const parseBody = require('./parseBody')

// 创建服务器应用
const app = express()

// 用来启动一个静态文件服务器的中间件
/**
 * express.static(root)
 * 1.root 静态文件的目录
 */

app.use(express.static(path.resolve('public')))

/**
 * 只接收get 请求 路径名称必须是user路径
 */
app.get('/user', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('您请求了user路径')
})


app.get('/login', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('您请求了login路径')
})


app.post('/login', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    const { username, password } = req.query;
    if (username === '张三') {
        res.end('登录成功')
    } else {
        res.end('账号不正确')
    }
    
    // res.end('您请求了post/login路径')
})

app.put('/login', (req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('put/login路径')
})


// 注册中间件的方法
// app.use((req, res, next) => {
//     console.log('1')
//     fs.readFile('./package.json', (e, data) => {
//         req.file = data.toString()
//         // 调用next 表示已经处理完了 如果没有调用程序会在这个环节卡住
//         next()
//     })
    
// })
// app.use((req, res, next) => {
//     res.setHeader('Content-Type', 'appliction/json')
//     res.end(req.file)
// })

// app.use(parseBody)



app.listen(3000, () => {
    console.log('express is runing, port: 3000')
})


// 中间件是一个处理函数
// (req, res, next) => {}

// 工厂
// 流水线
// a工人组装玩具的腿 => b工人组装玩具的手 .....
// 中间件类似不同的工人 做不同的工作