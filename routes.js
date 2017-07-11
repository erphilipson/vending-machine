const express = require('express');
const router = express.Router();
const Item = require('./items.js');

//all currency is in cents
let moneyLeft = 200;

router.get('/api/customer/items', function(req, res) {
  Item.find().then(function(items){
    res.json(items);
  })
})

router.post('/api/customer/items/:itemId/purchases', function(req, res) {
  Item.find().then(function(items){
    let currentItem = items[req.params.itemId]
    if (moneyLeft > currentItem.cost) {
        moneyLeft -= currentItem.cost;
    }
    res.json(currentItem.cost)
  })

})

router.get('/api/vendor/purchases', function(req, res) {

})

router.get('/api/vendor/money', function(req, res) {

})

router.post('/api/vendor/items', function(req, res) {

})

router.put('/api/vendor/items/:itemId', function(req, res) {

})





module.exports = router;
