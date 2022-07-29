## Below are some of the basic commands related to documents handling

1. ### First of all ensure that mongod (mongo daemon) is running
2. ### Then open the mongo shell

## Documents Related Commands

- Add a single document to a collection
  ```shell
  db.<collection_name>.insertOne({<document_content>})

  # For eg: inside a collection named `users`, we can add a entry with details as:
  db.users.insertOne({
    "name": "Kiran Adhikari",
    "age": 22,
    "email": "dummy@dummy.com",
    "city": "Pokhara",
    "country": "Nepal"
  })

  # Note that the `insertOne` method has an object as an argument.
  # We pass an object as an argument to the `insertOne` method.
  # This object is the document that we want to `insert` into the collection.
  ```
  > `db.<collection_name>.insert` method is no longer supported.

- Add multiple documents to a collection
  ```shell
  # We use `insertMany` method to insert multiple documents into a collection.
  db.<collection_name>.insertMany([<document_content>])

  # Remember how we provided one object as an argument to the `insertOne` method?
  # we provide an array of objects as an argument to the `insertMany` method.

  # Example:
  db.users.insertMany([
    {
      "name": "Tom Cruise",
      "age": 56,
      "email": "foreveryoung@cruise.com"
    },
    {
      "name": "Dwayne Johnson",
      "age": 56,
      "email": "therock@wwe.com"
    }
  ])
  ```

- Display all the documents in a collection
  ```shell
  db.<collection_name>.find()
  ```

- Find specific document/s in a collection matching a certain criteria
  ```shell
  db.<collection_name>.find({<document_content>})

  # For eg: In the collection 'users', we want to find a user with email as 'therock@wwe.com'
  db.users.find({
    "email": "therock@wwe.com"
  })
  ```

- Find a single document in a collection matching a certain criteria
  ```shell
  db.<collection_name>.findOne({<document_content>})
  ```

> Upcoming: Find and Delete, Update, Replace,etc