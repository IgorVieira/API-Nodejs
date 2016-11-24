


module.exports = (app) =>{
  
let Book = app.models.book


/*
  var books = [
      {
        _id:1,
        name:"ReactJS",
        price:"60,50"
      },

      {
        _id:2,
        name:"Vue.js",
        price:"82.90"
      }  

  ]

*/


  const controller = {}


  controller.listBooks = (req, res) =>{
    Book.find()
    .then(book => res.json(book))
    .catch(err => console.log(err))
  }

  return controller
}
