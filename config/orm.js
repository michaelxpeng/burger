// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: function (tableName, callback) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function (err, result) {
      if (err) throw err;
      console.log(result);
      callback(result);
    });
  },
  insertOne: function (tableName, columnName, value, callback) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableName, columnName, value], function (err, result) {
      if (err) throw err;
      console.log(result);
      callback(result);
    });
  },

  updateOne: function (tableName, columnName, columnValue, condition, conditionValue, callback) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [tableName, columnName, columnValue, condition, conditionValue], function (err, result) {
      if (err) throw err;
      console.log(result);
      callback(result);
    });
  },

};

module.exports = orm;