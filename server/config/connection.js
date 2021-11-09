const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://stephmelanofridis:Chinquapin42@cluster0.fwqzx.mongodb.net/smartdb?retryWrites=true&w=majority' || 'mongodb://localhost/smartdb', {
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