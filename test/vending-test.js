const request = require("supertest");
const assert = require("assert");
const Item = require('../items.js');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/vending');
const app = require("../app");


describe('reset and list items', function() {

  describe("GET list of items", function () {
    before(function(done) {
      Item.remove({}, function(err) {

      });

      Item.insertMany([{
        "id": 1,
        "description": "Corn chips",
        "cost": 65,
        "quantity": 4
      }, {
        "id": 2,
        "description": "Gum",
        "cost": 35,
        "quantity": 10
      }], function(err){}),
      done()
    })

    it("gives list of items", function (done){
      request(app)
        .get("/api/customer/items")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function(res) {
          assert.equal(res.body[0].description, 'Corn chips')
          assert.equal(res.body[1].description, 'Gum')
        })
        .end(done)
    })
  })
})

describe("buy an item using money", function() {
  it("allows customer to buy an item", function (done) {
    request(app)
      .post("/api/customer/items/1/purchases")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(function(res) {
        assert.equal(something)
      })
      .end(done)
  })
})

describe('buy item and get change', function() {
  it('gives customers back change after purchase', function(done){
    request(app)
    .expect('Content-Type', /json/)


    .end(done)
  })
})
