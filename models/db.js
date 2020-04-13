var mongoose = require('mongoose');

const uri = "mongodb+srv://dingh2:unimelb@cluster0-lvw0q.mongodb.net/test?retryWrites=true&w=majority";
// unimelb
mongoose.connect(uri,
    function (err) {
        if (!err) {
            console.log('Connected to mongo.');
        } else {
            console.log('Failed to connect to mongo!', err);
        }
    });

require('./cafe.js');
