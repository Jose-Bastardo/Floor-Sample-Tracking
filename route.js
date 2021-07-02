const { MongoClient } = require("mongodb");
const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors())
const port = process.env.PORT || 3000;
app.listen(port);

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://employee:employeepassword@cluster0.fiiqv.mongodb.net/Database?retryWrites=true&w=majority";

app.get('/Customers', async(req, res) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect(async(err, client) => {
    if (err) console.log('failed to connect')
    else {
      const database = client.db('Database')
      const customerCollection = database.collection('Customers')
      const documentcursor = await customerCollection.find()
      customers = await documentcursor.toArray()
      res.send(customers)
      //console.log(customers)
      //res.send(customers)
      documentcursor.close()
      console.log("Complete")
    }
  })

  client.close()
});

app.get('/Samples', async(req, res) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect(async(err, client) => {
    if (err) console.log('failed to connect')
    else {
      const database = client.db('Database')
      const samplesCollection = database.collection('Samples')
      const documentcursor = await samplesCollection.find()
      samples = await documentcursor.toArray()
      res.send(samples)
      //console.log(customers)
      //res.send(customers)
      documentcursor.close()
      console.log("Complete")
    }
  })

  client.close()
});
