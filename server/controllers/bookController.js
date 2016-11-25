

module.exports =  (app) =>{
  
let Book = app.models.book


 const controller = {}


  controller.listBooks = (req, res) =>{
    Book.find().exec()
    .then(book => res.json(book))
    .catch(err => console.log(err))
  }

  return controller
}
