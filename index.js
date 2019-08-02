const express = require('express')
const fs = require('fs')
const shot = require('screenshot-desktop')

/**
 * 参数配置
 */
const conf = {
  port: 2333
}

const app = express()

app.get('/', (req, res) => {
  res.append('Content-Type', 'text/html; charset=utf-8')
  res.send(fs.readFileSync('./page/index.html'))
})

app.get('/shot', (req, res) => {
  shot({ format: 'png' }).then(img => {
    res.append('Content-Type', 'image/png')
    res.send(img)
  })
})

console.log('Serving! local port is ' + conf.port)
app.listen(conf.port)
