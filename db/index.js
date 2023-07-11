const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/food-ordering', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
db.once('open', () => {
    console.log('Connected to the database');
    // Your additional code or operations can go here
  });
  
  // Handle connection errors
  db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
module.exports = db