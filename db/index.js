const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://shindemaanav:uZogViP58lqdaHxk@cluster0.uvizoia.mongodb.net/', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
