const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb+srv://master:sDAPGCpJnohmv8fV@cluster0.2bpef.mongodb.net/list2do?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error: '))

db.once('open', ()=>{
    console.log("Database Connected");
    
})






