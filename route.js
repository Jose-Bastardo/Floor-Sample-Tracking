const { MongoClient } = require("mongodb");
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port);
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://employee:employeepassword@cluster0.fiiqv.mongodb.net/Database?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {

  await client.connect()

  app.get('/Customers', (req, res) => {
    const agg = [
    {
      '$lookup': {
        'from': 'Samples',
        'localField': 'borrowed_samples.object.sample_id',
        'foreignField': 'sample_id',
        'as': 'sampledata'
        }
      }
    ];
    const database = client.db('Database')
    const customerCollection = database.collection('Customers')
    var customers = customerCollection.aggregate(agg)
    console.log(customers)
    res.send(customers)
  });
  client.close()
}
run().catch(console.dir);
