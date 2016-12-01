import mongoose from 'mongoose'


module.exports = app =>{

let book = mongoose.Schema({
  name:{
    type:String,
    required:true,
    index:{
      unique:true
    }

  },
  price:{
    type:String,
    required:true

  }

})


return mongoose.model('Book', book)


}
