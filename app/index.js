const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const { connection } = require('../database');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('An alligator approaches!');
});

connection.authenticate().then(success => {
  console.log('Connected to DB', success);
  app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
  });
});
