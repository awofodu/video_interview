const express = require('express');
const mongoose = require('mongoose');
const con = mongoose.connection
const cors = require('cors')
const app = express();
const userRoutes = require('./routes/user');
const questionRoutes = require('./routes/questions');

mongoose.connect("mongodb://localhost:27017/microservice", {useNewUrlParser: true});

con.on('open', function(){
    console.log('connected')
})

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);

// Handle production
if(process.env.NODE_ENV === 'production'){
    // Static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    }); // It refers to any route at all
}

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})