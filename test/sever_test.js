let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server.js');
let should = chai.should();

chai.use(chaiHttp);


describe('server access', () =>{



  it('GET /vote_hot route', ()=> {
    chai.request(server)
      .get('/vote_hot')
      .end((err,res)=> {
        res.should.have.status(200);
        res.text.should.be.eql('1');
      // done();
      });
  });

  it('GET /vote_cold route', ()=> {
    chai.request(server)
      .get('/vote_cold')
      .end((err,res)=> {
        res.should.have.status(200);
        res.text.should.be.eql('0');
      // done();
      });
  });

  it('GET /vote_neutral route', () => {
    chai.request(server)
    .get('/vote_neutral')
    .end((err, res) => {
      res.should.have.status(200);
      res.text.should.be.eql('0');
    });
  });


});
