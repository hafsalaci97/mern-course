const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('connection OK'))
.catch((err)=>console.log('connection NOT OK', err));