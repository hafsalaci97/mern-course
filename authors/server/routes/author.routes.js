const AuthorController = require("../controllers/author.controller");

//test routes
module.exports = app =>{
    app.get("/check/index", AuthorController.index);
    app.get("/authors/getAll", AuthorController.getAllAuthors);
    app.post("/authors/new", AuthorController.createAuthor);
    app.get("/authors/:id", AuthorController.getOneAuthor);
    app.delete("/authors/:id/delete", AuthorController.deleteAuthor);
    app.put("/authors/:id/update", AuthorController.updateAuthor);
}

