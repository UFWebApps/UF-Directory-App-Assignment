# Assignment 3: Persisting data using MongoDB and Mongoose

Our application at this point has a couple of issues: 
- our front-end Angular application does not communicate with the server we built in assignment 1
- each time the server starts, we reload the data from the same JSON file. 
 
It would be better if the data was stored elsewhere in a *persistent* fashion so that even if the server were to crash, our data would remain unharmed.

In this assignment, we will focus on persisting data by moving the JSON file to a dedicated database.  In our case, we will be using [MongoDB](https://www.mongodb.org/), which stores data as **documents**. These documents are very similar to JSON objects, making MongoDB a good candidate for our web application. 

### Mongoose
If you take a look at MongoDB's [introductory documentation](https://docs.mongodb.org/getting-started/node/introduction/), you will notice there's quite a bit of code that has to be written to add, find, update, or delete data using their APIs. [Mongoose]() simplifies the process of communicating with MongoDB and also provides tools to organize/model the data into **schemas**. Schemas are used to pre-define the data's attributes, and the type each attribute will have. [Read this tutorial that discusses how to use Mongoose with Node.js](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications) before continuing with the assignment.

### MLab
MongoLab is an online service that will host your database in the cloud. While you could just run a local instance of MongoDB, registering for an account with MongoLab removes hassles surrounding installing the database on your machine. Make sure to [register for an account](https://mlab.com/signup/) before completing the assignment. 

### Assignment
To port the listing data to MongoDB, you will be doing the following: 
- Defining a schema for the 'Listing' collection 
- Create a script that converts the JSON entries into Mongo documents and saves the documents to your database
- Retrieve/update/delete documents through database queries

Instructions:

1. Clone the repository
2. Define your schema in `ListingSchema.js`
3. Create a `config.js` file (based on `config.example.js`) and add the uri to your MongoLab database.
3. Ensure your schema passes the tests by running `mocha listing.model.test.js`
4. Fill out the `JSONtoMongo.js` script to add the listings to your database
5. Complete the functions in `queries.js`
