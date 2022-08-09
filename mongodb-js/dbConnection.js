const client = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/myDb";

client.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created");
    db.close();
});
