const express = require('express');
const axios = require('axios');
const path = require('path');
const db = require('../db');

const app = express();
const PORT = 3000;

app.use('/', express.static('frontend/dist'));
app.use(express.json());

app.get('/api/groceries', (req, res) => {
  db.query('SELECT * FROM groceries', (err, data) => {
    if (err) {
      throw new Error(err);
      res.send(err);
      return;
    }
    console.log('GET REQUEST SUCCESSFUL');
    res.send(data);
  })
});

app.post('/api/groceries', (req, res) => {
  const {name, quantity, best_before, purchased} = req.body;
  db.query('INSERT INTO groceries (name, quantity, best_before, purchased) VALUES(?, ?, ?, ?)',
  [name, quantity, best_before, purchased], (err, data) => {
    if (err) {
      throw new Error (err);
      console.log(err);
      res.send(err);
      return;
    }
    console.log('POST REQUEST SUCCESSFUL');
    res.send('POST REQUEST SUCCESSFUL');
  })
});

app.delete('/api/groceries', (req, res) => {
  const {name} = req.body;
  db.query('DELETE FROM groceries WHERE name = (?)', [name], function (err, result, fields) {
    if (err) {
      throw new Error (err);
      console.log(err);
      res.send(err);
      return;
    }
    console.log('DELETE REQUEST SUCCESSFUL');
    res.send(result);
  });
});


app.listen(PORT, () => {
  console.log(`I'm listening on port: ${PORT}`);
});