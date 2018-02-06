let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server.js');
let should = chai.should();

chai.use(chaiHttp);


describe('server access', () =>{



  describe('GET /vote_up route', ()=> {
    chai.request(server)
      .get('/vote_up')
      .end((err,res)=> {
        res.should.have.status(200);
        res.text.should.be.eql('1');
      // done();
      });
  });

  describe('GET /vote_down route', ()=> {
    chai.request(server)
      .get('/vote_down')
      .end((err,res)=> {
        res.should.have.status(200);
        res.text.should.be.eql('-1');
      // done();
      });
  });
});
