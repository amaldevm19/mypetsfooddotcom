var mongoose = require('mongoose');
var mongoDB = process.env.DB_HOST || "mongodb+srv://amaldevm19:KMahadevAn@cluster0.i38xu.mongodb.net/mypetsfooddotcom?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));