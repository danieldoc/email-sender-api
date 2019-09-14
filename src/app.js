const config = require('../.env')
const app = require('express')()

require('./config/middlewares')(app)

app.listen(config.server.port, () => {
    console.log(`Started at port ${config.server.port}!`)
})