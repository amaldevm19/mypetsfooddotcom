const mongoose = require('mongoose');

exports.db = mongoose.connect('mongodb+srv://amaldevm19:KMahadevAn@cluster0.i38xu.mongodb.net/mypetsfooddotcom?retryWrites=true&w=majority', {useNewUrlParser: true},(err)=>{
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});


