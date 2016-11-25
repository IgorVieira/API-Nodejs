




module.exports =  (app) =>{
  
let Book = app.models.book
 var options = { promiseLibrary: require('bluebird') };

 const controller = {}


  controller.listBooks = (req, res) =>{
    Book.find().exec().constructor, option)
    .then(book => res.json(book))
    .catch(err => console.log(err))
  }

  return controller
}
