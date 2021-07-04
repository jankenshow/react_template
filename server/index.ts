const path = require('path')
const express = require('express')
const app = express()
const router = express.Router()

/* 3000番ポートで待ち受け */
const server = app.listen(3000, function () {
    console.log(`Node.js is listening to PORT: ${server.address().port}`)
})

// 静的ファイルのルーティング
router.use(express.static('build'))

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.use('/', router)
