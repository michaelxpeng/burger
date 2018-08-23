var orm = require('../config/orm.js');

var burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (res) {
      callback(res);
    });
  },

  insertOne: function (tableName, value, callback) {
    orm.insertOne("burgers", value, function (res) {
      callback(res);
    });
  },
  updateOne: function (tableName, idValue, callback) {
    orm.updateOne("burgers", idValue, function (res) {
      callback(res);
    });
  },
};

module.exports = burger;