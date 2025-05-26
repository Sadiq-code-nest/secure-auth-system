const mongoose = require('mongoose');
const MongooseSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
})
module.exports = mongoose.model('AuthSchema', MongooseSchema);