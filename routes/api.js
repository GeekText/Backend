var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<USER>:<PASS>@cluster0-2eofd.mongodb.net/admin?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
var database, collection;

const DATABASE_NAME = 'bookstoreDB'
const COLLECTION_NAME = 'bookCOLLECTION'

/* GET Book listings */
router.get('/', function(req, res, next) {

    client.connect(err => {
        collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
      });

    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });

});

module.exports = router;
