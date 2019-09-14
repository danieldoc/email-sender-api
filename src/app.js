const config = require('../.env')
const app = require('express')()

app.listen(config.server.port, () => {
    console.log(`Started at port ${config.server.port}!`)
})