describe('Route books', ()=>{

/*
    const defaultBook = {
      _id:1,
      name:'ReactJs'
    }

*/  

  describe('Route GET /books', () =>{
    it('should return a list of books', done => {
      request
        .get('/api/books')
        .end((err, res) =>{
          expect(res.body).to.be.instanceof(Array);
          done(err)
        })


    })


  })







})
