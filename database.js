const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(
    'mongodb+srv://vulcanizadora:qwe123@cluster0.uvxut.mongodb.net/restaurant?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology : true,
    }
).then(() => {console.log('Database is running');});