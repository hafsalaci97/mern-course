const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));
require('./config/mongoose.config');
const AllProductRoutes = require('./routes/product.routes');
AllProductRoutes(app);

app.listen(8000, ()=>console.log('Listening on port 8000'));