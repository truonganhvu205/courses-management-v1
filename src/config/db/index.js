const mongoose = require('mongoose')
const URI = 'mongodb://127.0.0.1/petprojects'

async function connect(req, res, next) {
    try{
        await mongoose.connect(URI)
    } catch(error) {
        next(error)
    }
}

module.exports = {connect}
