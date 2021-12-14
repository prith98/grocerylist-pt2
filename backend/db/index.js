const mySQL = require('mysql');

const connection = mySQL.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'password',
  database: 'GroceryList'
})

connection.connect((err) => {
  if (err) {
    throw new Error (err);
  } else {
    console.log('Successfully connected to database');
  }
})

module.exports = connection;