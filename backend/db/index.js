const mySQL = require('mysql2');

const connection = mySQL.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
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