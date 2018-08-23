// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: function (tableName, callback) {
    var queryString = "SELECT * FROM " + tableName + ";";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      // console.log(result);
      callback(result);
    });
  },

  insertOne: function (tableName, value, callback) {
    var queryString = "INSERT INTO " + tableName + " (burger_name) VALUES (" + value + ") ;";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      // console.log(result);
      callback(result);
    });
  },

  updateOne: function (tableName, idValue, callback) {
    var queryString = "UPDATE " + tableName + " SET devoured=true WHERE id=" + idValue + ";";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      // console.log(result);
      callback(result);
    });
  },

};

module.exports = orm;