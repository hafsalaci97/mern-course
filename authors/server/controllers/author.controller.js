const Author = require("../models/author.model");

//test function to check routes
module.exports.index = (req, res) =>{
    res.json({message: "Hello Dojo!"});
}

module.exports.getAllAuthors = (req, res) =>{
    Author.find({}).sort({authorName: 1})
        .then((allAuthors)=>res.json({results: allAuthors}))
        .catch((err)=> res.status(400).json({message: "Couldn't get all Authors!", err}));
}

module.exports.getOneAuthor = (req, res) =>{
    Author.findOne({_id: req.params.id})
        .then((oneAuthors)=>res.json({results: oneAuthors}))
        .catch((err)=> res.status(400).json({message: "Couldn't get the Author!", err}));
}

module.exports.deleteAuthor = (req, res) =>{
    Author.deleteOne({_id: req.params.id})
        .then(deletedAuthor=>res.json({results: deletedAuthor}))
        .catch((err)=>res.status(400).json({message: "Couldn't delete the Author!", err}));
}

module.exports.updateAuthor = (req, res) =>{
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
        .then(updatedAuthor => res.json({results:updatedAuthor}))
        .catch(err =>res.status(400).json({message: "Couldn't update the Author!", err}));
}

module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
    .then(newAuthor =>res.json({results: newAuthor}))
    .catch(err=>res.status(400).json({message: "Couldn't create the Author!", err}));
}