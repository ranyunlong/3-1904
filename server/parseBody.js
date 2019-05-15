module.exports = function(req, res, next) {
    if (req.method !== 'POST') next() 
    // 1. req http的req
    // 2. res http的res
    // 3. 交由下一个中间件来处理
    const datas = []
    req.on('data', (data) =>  {
        datas.push(data)
    })

    req.end('end', () => {
        req.body = datas
        next()
    })
}