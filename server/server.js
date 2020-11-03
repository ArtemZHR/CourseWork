const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
// const Record = require('./models/Record.js');
const app = express()
const cors = require('cors')

app.set('port', 3000)
app.use(cors())

// app.use(express.json({ limit: '50mb' }))
// app.use(express.urlencoded({ limit: '50mb' }))
//
// const bodyParser = require('body-parser')
// app.use(bodyParser.json({ limit: '50mb' }))
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`)
})

mongoose.connect('mongodb+srv://admin:root@cluster0.xfdgm.mongodb.net/News?retryWrites=true&w=majority', { useNewUrlParser: true }).then((db) => console.log('[OK] DB is connected')).catch((err) => console.error(err))
// mongoose.connect('mongodb://localhost:27017/News', { useNewUrlParser: true }).then((db) => console.log('[OK] DB is connected')).catch((err) => console.error(err))

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb' }))
app.use(morgan('dev'))
app.use('/api/news', require('./routes/records'))

app.use('/', express.static(path.join(__dirname, '../dist')))
