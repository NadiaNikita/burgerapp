var connection = require("./connection.js");

 var orm = {
     all: function(tableInput, cb) {
         var queryString = "SELECT * FROM ??";
         connection.query(queryString, [tableInput], function(err,result) {
             console.log(result);
             cb(result);
         });   
     },
 
     update: function(table,value,condition,cb) {
         var queryString = "UPDATE ?? SET devoured = ? WHERE id =?";
         connection.query(queryString, [table,value,condition],function(err,result) {
            console.log(result);
            cb(result);
         });
     },

    create : function(table,columns,values, cb) {
        var queryString = "INSERT INTO ?? (??,devoured,date) VALUES (?,0 NOW())";
        console.log(queryString);
        connection.query(queryString,[table,columns,values], function (err, result) {
            if (err) console.log(err);
            console.log(result);
            cb(result);

        });
    }
};

    module.exports = orm;