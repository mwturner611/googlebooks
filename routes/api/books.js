const Book = require('../../models/book');

module.exports = (app) => {
    app.get('/api/books', (req, res) => {
        Book.find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }),
    app.post('/api/books', (req, res) => {
        Book.create({
            image: req.body.image,
            authors: req.body.authors,
            description: req.body.description,
            link: req.body.link,
            title: req.body.title
        })
        .then((deck) => res.json(deck))
		.catch((err) => console.log(err));
    }),
    app.delete('/api/books/:id', (req,res) => {
        Book.findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    })
}

