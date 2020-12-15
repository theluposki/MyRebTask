const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running in > <http://localhost:3000>`)
})