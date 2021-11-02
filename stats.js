const os = require('os')
const { freemem, totalmem } = os

const totalMemory = parseInt(totalmem() / 1024 / 1024)
const freeMemory = parseInt(freemem() / 1024 / 1024)
const percentAvailable = parseInt((freeMemory / totalMemory) * 100)
const percentUsage = parseInt(((totalMemory - freeMemory) / totalMemory) * 100)

setInterval(() => {
  const stats = {
    total: `${totalMemory}mb`,
    free: `${freeMemory}mb`,
    available: `${percentAvailable}%`,
    usage: `${percentUsage}%`
  }
  console.clear()
  console.log('===PC STATS===')
  console.table(stats)
}, 1000)
