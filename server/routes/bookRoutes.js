module.exports = (app) =>{

    let controller = app.controllers.bookController
   
    app.route('/api/books')
        .get(controller.listBooks)
   


      
}




