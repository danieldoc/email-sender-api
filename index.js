const app = require('express')()

const HTTP_PORT = 3000

app.listen(HTTP_PORT, () => {
    console.log(`Started at port ${HTTP_PORT}!`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})