var connection = require('../config/dbconnection');
var express = require('express');
var router = express.Router();

  router.post('/createProj', function(req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
      var data = {
        projName: input.projName,
        user_id:  input.id
      };
      console.log(data);
      var qry="INSERT INTO userProj(projName, user_id) VALUES ? ";
      var values=[[data.projName, data.user_id]];
      connection.query(qry, [values], function(err, result){
        if(err){
          res.send({"resp":"database error"});
        }
        else{
          res.send({"resp":"data saved into database"})
        }
      });

  });
  router.get('/getProj/:id', function(req,res){
    var id= req.params.id;

    console.log(id+'hh');
    console.log(typeof(id));
  
      var qry = "SELECT * FROM userProj where user_id=?";
      connection.query(qry,id,function(err,result){
        if(err){
          res.send({"resp":"database error"});
        }
        else{
          res.send(result);
        }
      });

  });
    module.exports = router;
