const client = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/myDb";

const singleUserData = {
    name: "John Rock",
    age: 42,
    address: "Random address over here",
    contact: "Random contact number",
    email: "random@random.com",
};

client.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created");

    // creating a collection
    let databaseObject = db.db("myDb");
    databaseObject.createCollection("users", function (err, res) {
        if (err) throw err;
        console.log("Collection has been create successfully");
    });

    // inserting into a collection
    databaseObject
        .collection("users")
        .insertOne(singleUserData, function (err, res) {
            if (err) throw err;
            console.log("One document has successfully been added");
            db.close();
        });

    // close the database connection
});
