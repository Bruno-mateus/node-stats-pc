const http = require('http')
const path = require('path')
const fs = require('fs')

http
  .createServer((req, res) => {
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file)

    const extension = path.extname(filePath)

    const allowedFileTypes = ['.js', '.html', '.css']
    const allow = allowedFileTypes.find(extFile => extFile == extension)

    if (!allow) return

    fs.readFile(filePath, (err, content) => {
      if (err) throw err
      res.end(content)
    })
  })
  .listen(3000, console.log('server is running'))
