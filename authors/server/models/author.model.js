const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
    //let's add some mongoose schema validations based on the mongoose doc. I will add also the timestamps.
    authorName: {
        type: String,
        required: [true, "Title is mandatory!"],
        minLength: [3, "Author's name can't be less three characters!"]
    }
}, {timestamps: true});

const Author = mongoose.model("Author", AuthorSchema);
    module.exports = Author;