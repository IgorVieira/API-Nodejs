import mongoose from 'mongoose'

module.exports = uri =>{

 
  mongoose.Promise = require('bluebird') 
 
  mongoose.connect(uri);

  mongoose.connection.on('connected', function(){
    console.log('Mongoose! Conectado em:'+ uri);
  });


  mongoose.connection.on('disconnect', function(){
    console.log('Mongoose! Desconectado em:'+ uri);
  });

  mongoose.connection.on('error', function(erro){
    console.log('Mongoose!Erro na conexão'+ erro);
  });

  process.on('SIGINT', function(){
    mongoose.connection.close(function(){
      console.log('Mongoose! Desconectado pelo término da aplicação');
      process.exit(0);
    }); 
  });




}
