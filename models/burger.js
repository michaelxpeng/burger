var orm = require('../config/orm.js');

var burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (res) {
      callback(res);
    });
  },
  insertOne: function (tableName, columnName, value, callback) {
    orm.insertOne("burgers", "burger_name", value, function (res) {
      callback(res);
    });
  },
  updateOne: function (tableName, columnName, columnValue, condition, conditionValue, callback) {
    orm.updateOne("burgers", "devoured", columnValue, "id", conditionValue, function (res) {
      callback(res);
    });
  },
};

module.exports = burger;