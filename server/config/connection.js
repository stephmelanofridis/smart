const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || 3000, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;
