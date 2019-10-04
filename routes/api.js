var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://viewer:teampass@cluster0-2eofd.mongodb.net/bookstoreDB?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const assert = require('assert');
let data

/* GET Book listings */
router.get('/', function(req, res, next) {

    client.connect(function(err, db) {

        if(err) 
        {
            console.log(err);
            process.exit(0);
        }

        assert.equal(null, err);
        console.log("Connected correctly to server");
      
        let DB = db.db('bookstoreDB')
        let collection = DB.collection('bookCOLLECTION');

        collection.find().toArray(( err, results) => {

            if(err) 
            {
                console.log(err);
                process.exit(0);
            }
            data = results
            console.log(results)
        })

        db.close();
        client.close();
      });

    res.send(data);

});

module.exports = router;
