// Set up MySQL connection.
var mysql = require("mysql");

// Local Connection =====================
// var connection = mysql.createConnection({
//   host: "localhost",
//   // allows access to connection by port num
//   port: 3306,
//   user: "root",
//   password: "5632MgH!",
//   database: "burgers_db"
// });

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '5632MgH!',
        database: 'burgers_db'
    })
};

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;