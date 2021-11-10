const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/smartdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection
    .once('open', () => {
        console.log('mongoDB database connection established');
    })
    .on('error', (err) => {
        console.log('Error: ', err);
    });

module.exports = mongoose.connection;