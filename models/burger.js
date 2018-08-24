var orm = require('../config/orm.js');

var burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (res) {
      callback(res);
    });
  },

  insertOne: function (value, callback) {
    orm.insertOne("burgers", value, function (res) {
      callback(res);
    });
  },
  updateOne: function (idValue, callback) {
    orm.updateOne("burgers", idValue, function (res) {
      callback(res);
    });
  },
};

module.exports = burger;