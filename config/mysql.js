// MYSQL SETUP

const
  mysql = require('mysql'),
  hl = require('handy-log'),
  { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env

// CREATES A DB CONNECTION
const db = mysql.createConnection({
  host:     MYSQL_HOST,
  user:     MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  charset:  'utf8mb4'
})

// CONNECTS DB
db.connect(err => {
  if(err){
    console.log('ohno')
    hl.error(err)
  } else{
    console.log('yay')
  }
})

module.exports = db
