var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {   //select all data
        orm.all("burgers",function(res) {
            cb(res);
        });
    },
    

create: function(cols,vals,cb) {    // insert new burger 
    orm.create("burgers",cols,vals,function(res) {
        cb(res);

    });
  },

update: function (objColVals, condition, cb) { //update an existing burger
    orm.update("burgers",objColVals, condition,function(res) {
        cb(res);
    });
  }
};

// export database functions for the controllers 
module.exports = burger;
    
