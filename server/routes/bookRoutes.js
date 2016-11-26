module.exports = (app) =>{

    let controller = app.controllers.bookController
   
    app.route('/api/books')
        .get(controller.listBooks)
        .post(controller.saveBooks)   

    app.route('/api/books/:id')
        .get(controller.getBookForId)
        .put(controller.saveBooks) 
        .delete(controller.deleteBookForId) 

   


      
}




