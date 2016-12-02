import sanitize from 'mongo-sanitize'

module.exports =  (app) =>{
  
let Book = app.models.book


 const controller = {}


  controller.listBooks = (req, res) =>{
    Book.find().exec()
    .then(book => res.json(book))
    .catch(err => console.log(err))
  }

  

  controller.saveBooks = (req, res) =>{

      let _id = req.body._id


      let data = {
        "name":req.body.name,
        "price":req.body.price
      }

      if(_id){
        
        Book.findByIdAndUpdate(_id, data).exec()
        .then((book=>res.json(book)))
            .catch((err => {
                res.status(500).json(err)
                console.log(err)
            }))


      }else{

        Book.create(data)
        .then((book=>res.json(book)))
        .catch((err => {
              res.status(500).json(err)
              console.log(err)
          }))
 
      }





  }
  
  controller.getBookForId = (req,res) =>{
    let _id = req.params.id
    Book.findById(_id).exec()
      .then(book =>{
        if(!book) throw new Error("Book is not found")
        res.json(book)
      })
    .catch(err => console.error(err))

  }

  controller.deleteBookForId = (req, res) =>{
       let _id = sanitize(req.params.id)
        Book.remove({"_id":_id}).exec()
        .then(()=> res.end())
        .catch(err => console.error(er))
  }


  return controller
}
