const mongoose = require('mongoose');
const mongoConfig = require('../config/mongoConfig.json');

mongoose.connect(mongoConfig.url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

mongoose.connection.on('error', (err) => {
    //"_comment": "mongodb://localhost/adminbackendDB",
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to: ' + mongoConfig.url);
    
});

module.exports = mongoose;