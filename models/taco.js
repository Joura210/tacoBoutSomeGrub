// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var taco = {
    all: function(cb) {
      orm.all("taco", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("taco", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("taco", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("taco", condition, function(res) {
        cb(res);
      });
    }
  };
  



// Export the database functions for the controller (taco_Controller.js).
module.exports = taco;