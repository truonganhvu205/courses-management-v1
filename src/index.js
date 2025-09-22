// Vu Truong Anh
// truonganhvu205@gmail.com

const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const routes = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')

db.connect()

const app = express()
const port = 3000

app.use(morgan('combined'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    },
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.use(express.static(path.join(__dirname, 'public')))

routes(app)

app.listen(port)
