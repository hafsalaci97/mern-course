const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/jokes_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => console.log('Connection OK'))
.catch( () => console.log('Connection NOT OK', err));