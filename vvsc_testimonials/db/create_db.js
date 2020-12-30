var MongoClient = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/vvsc';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log("Database created");
    db.close();
});

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("vvsc");
    dbo.createCollection("testimonials", (err, res) => {
        if (err) throw err;
        console.log("Collection created");
        db.close();
    });
});