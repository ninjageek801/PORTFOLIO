var pg = require('pg')

module.exports = {
  read: function(req, res){
    pg.connect(function(){
      pg.query("")
    })
  },
  create: function(req, res){

  },
  update: function(req, res){

  },
  delete: function(req, res){

  }
};
