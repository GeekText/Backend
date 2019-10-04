var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://viewer:teampass@cluster0-2eofd.mongodb.net/bookstoreDB?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const assert = require('assert');

/* GET Book listings */
router.get('/', function(req, res, next) {

    client.connect(function(err) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
      
        client.close();
      });

      res.send("KMS")

});

module.exports = router;
