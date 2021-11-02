const EventEmitter = require('events')
const emitter = new EventEmitter()
const fs = require('fs')
const path = require('path')

emitter.on('log', message => {
  fs.appendFile(path.join(__dirname, 'log.txt'), message, error => {
    if (error) throw error
  })
})

function log(message) {
  emitter.emit('log', message)
}

module.exports = log
