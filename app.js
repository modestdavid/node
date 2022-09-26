const os = require('os')

const osVersion = os.version()

const userInfo = os.userInfo()

console.log(osVersion)

console.log(userInfo)

// method return the system uptime in seconds

console.log(`The system is running on ${os.uptime()} seconds`)

const osInfo = {
    name: os.type(),
    release: os.release(),
    totaMemory: os.totalmem(),
    freememory: os.freemem(),
}

console.log(osInfo)