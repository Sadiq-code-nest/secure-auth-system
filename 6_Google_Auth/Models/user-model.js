const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    // password removed cause for google auth no need to set password
    googleId: {
        type: String,
        require: true,
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;