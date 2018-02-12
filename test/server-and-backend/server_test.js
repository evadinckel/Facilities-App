let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../src/server.js').server;
let app = require('../../src/server.js').app;
let should = chai.should();

chai.use(chaiHttp);


describe('server access', () =>{

  after(function (done) {
      server.close();
      done();
  });



  it('GET /vote_hot route', (done)=> {
    chai.request(app)
      .get('/vote_hot')
      .end((err,res)=> {
        res.should.have.status(200);
        res.text.should.be.equal('{"votes":1}');
        done();
      });
  });

  it('GET /vote_hot route AND store session cookie', (done)=> {
    chai.request(app)
      .get('/vote_hot')
      .end((err,res)=> {
        chai.reqest(app)
        .get('/check-cookies')
        .end((err,res)=>{
          console.log(res)
        })
      });
  });

  // it('GET /vote_cold route', (done)=> {
  //   chai.request(app)
  //     .get('/vote_cold')
  //     .end((err,res)=> {
  //       res.should.have.status(200);
  //       res.text.should.be.eql('0');
  //     done();
  //     });
  // });
  //
  // it('GET /vote_neutral route', (done)=> {
  //   chai.request(app)
  //     .get('/vote_neutral')
  //     .end((err,res)=> {
  //       res.should.have.status(200);
  //       res.text.should.eql('0')
  //     done();
  //   });
  // });

});
