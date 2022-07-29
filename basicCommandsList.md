## Below are some of the basic commands used in mongo-shell

1. ### First of all ensure that mongod (mongo daemon) is running
2. ### Then open the mongo shell

> This file doesn't list out all the commands available. I have only included a few very basics commands to start playing around MongoDB in this file.
If you want more, then refer to the [official documentation](https://www.mongodb.com/docs/manual/reference/command/#database-operations).

## Database Related Commands

- Show Databases
  ```shell
  show dbs
  ```

- Switch to a Database or create a new one
  ```shell
  use <database_name>
  ```

- Check which database you are using
  ```shell
  db
  ```
- Delete a Database
  ```shell
  # First, ensure that you are using the correct database
  use <database_name>
  
  # Then delete the database
  db.dropDatabase()
  ```

## Collection Related Commands

- Create a collection inside a database
  ```shell
  db.createCollection('<collection_name>')
  ```

- Check available collections
  ```shell
  show collections
  ```

- Drop a collection
  ```shell
  db.<collection_name>.drop()
  ```
