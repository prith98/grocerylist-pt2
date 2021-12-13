const express = require('express');
const axios = require('axios');
const path = require('path');
const db = require('../db');

const app = express();
const PORT = 3000;

app.use('/', express.static('frontend/dist'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`I'm listening on port: ${PORT}`);
})