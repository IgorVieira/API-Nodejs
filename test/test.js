//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Book = require('../server/models/book');

    
    
    // beforeEach((done) => { //Before each test we empty the database
    //     Book.remove({}, (err) => { 
    //        done();         
    //     });     
    // });
/*
  * Test the /GET route
  */
//   describe('/GET book', () => {
//          it('should return a list of books', done => {
//                 request
//                 .get('/api/books')
//                 .end((err, res) =>{
              

//                 done(err)
//         })

//       });
//   });


  describe('/GET book', () => {
      it('it should GET all the books', (done) => {
        request
             .get('/api/books')
            .end((err, res) => {
               expect(res.body).to.be.instanceof(Array);
               expect(res.body).length.should.be.eql(0);
              done();
            });
      });
  });

