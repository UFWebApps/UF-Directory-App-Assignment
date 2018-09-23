var should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express'), 
    Listing = require('../models/listings.server.model.js');

/* Global variables */
var app, agent, listing, id;

/* Unit tests for testing server side routes for the listings API */
describe('Listings CRUD tests', function() {

  this.timeout(10000);

  before(function(done) {
    app = express.init();
    agent = request.agent(app);

    done();
  });

  it('should it able to retrieve all listings', function(done) {
    agent.get('/api/listings')
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.body.should.have.length(147);
        done();
      });
  });
  it('should be able to retrieve a single listing', function(done) {
    Listing.findOne({name: 'Library West'}, function(err, listing) {
      if(err) {
        console.log(err);
      } else {
        agent.get('/api/listings/' + listing._id)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.name.should.equal('Library West');
            res.body.code.should.equal('LBW');
            res.body.address.should.equal('1545 W University Ave, Gainesville, FL 32603, United States');
            res.body._id.should.equal(listing._id.toString());
            done();
          });
      }
    });
  });

  it('should be able to save a listing', function(done) {
    var listing = {
      code: 'CEN3035', 
      name: 'Introduction to Software Engineering', 
      address: '432 Newell Dr, Gainesville, FL 32611'
    };
    agent.post('/api/listings')
      .send(listing)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('Introduction to Software Engineering');
        res.body.code.should.equal('CEN3035');
        res.body.address.should.equal('432 Newell Dr, Gainesville, FL 32611');
        id = res.body._id;
        done();
      });
  });

  it('should be able to update a listing', function(done) {
    var updatedListing = {
      code: 'CEN3031', 
      name: 'Introduction to Software Engineering', 
      address: '432 Newell Dr, Gainesville, FL 32611'
    };

    agent.put('/api/listings/' + id)
      .send(updatedListing)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('Introduction to Software Engineering');
        res.body.code.should.equal('CEN3031');
        res.body.address.should.equal('432 Newell Dr, Gainesville, FL 32611');
        done();
      });
  });

  it('should be able to delete a listing', function(done) {
    agent.delete('/api/listings/' + id)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);

        agent.get('/api/listings/' + id) 
          .expect(400)
          .end(function(err, res) {
            id = undefined;
            done();
          });
      })
  });

  after(function(done) {
    if(id) {
      Listing.remove({_id: id}, function(err){
        if(err) throw err;
        done();
      })
    }
    else {
        done();
    }
  });
});
