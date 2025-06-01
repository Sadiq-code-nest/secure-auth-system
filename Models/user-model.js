const mongoose = require('mongoose');
// const encrypt = require('mongoose-encryption');
const MongooseSchema = new mongoose.Schema({
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
    }
})
// const encKey = process.env.Enc_Key;
// MongooseSchema.plugin(encrypt, { secret: encKey, encryptedFields: ['password'] });
module.exports = mongoose.model('AuthSchema', MongooseSchema);