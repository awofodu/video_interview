// const express = require('express');
// const app = express();

// const routes = require('./api/routes');
// routes(app);

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
// console.log(`Listening to port http://localhost:${port}`);
// });

const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost:27017/microservice", {useNewUrlParser: true});

const con = mongoose.connection

con.on('open', function(){
    console.log('connected')
})

app.use(express.json());

const userRoutes = require('./routes/user');
app.use('/users', userRoutes);

app.listen(9000, () => {
    console.log('server started')
})