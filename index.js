const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))

app.listen(process.env.server_port || 3000, () => {
    console.log(`Server running in > <http://localhost:3000>`)
})