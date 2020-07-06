express = require('express');
 router = express.Router();
 verifyToken=require('./VariftTokenMw');
var customer=[{Id:1,Name:"anjali",class:"1"},{Id:2,Name:"ram",class:"12"}]

  router.get('/demo',verifyToken, function(req, res, next) {
    res.json(customer);
  });

  app.get('/', (req, res) => {
    let connection=sql.connect(sqlConfig,(err)=>{
        if(err)
        {
         console.log(err);
        }
        else
        {

         console.log("DB Connected");
         var request = new sql.Request();
         sqlquery='Select * from Demo';
         request.query(sqlquery, function (err, result) {
           if (err) {
             console.log(err);
             res.send(err);
           }
           else {
             // var data = JSON.stringify(result.recordset)
             // recordSet = JSON.parse(data)
             recordSet = JSON.parse(JSON.stringify(result.recordset))
             // res.render('users', { recordSet: recordSet });
             console.log(recordSet);
             res.json(recordSet)
           }
         });
        // console.log("DB Connected");
        }
    })
  // res.send("welcome");
   console.log("Call get method");
});


  app.post('/demo',function(req,res)
{   
    

         if (req.body.Name != "") {
            var query = "INSERT INTO Demo (FirstName) VALUES ( " + "'" + req.body.FirstName + "'" + " )";
            console.log(query);
            sql.close();
            sql.connect(sqlConfig, function (err) {
                var request = new sql.Request();
                request.query(query, function (err, result) {
                   console.log(result);
                   //console.log(result.recordset);
                   res.send(result.rowsAffected);
                });
         });
        }
});

app.get("/demo", function(req , res){
    var query = "select * from [Demo]";
    executeQuery (res, query);
});

//POST API
app.post("/api/user", function(req , res){
    var query = "INSERT INTO [user] (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password”);
    executeQuery (res, query);
});
  app.delete("/demo/:id", function(req , res){
    var query = "DELETE FROM [Demo] WHERE Id=" + req.params.id;
    executeQuery (res, query);
  });
  
  app.put("/demo/:id", function(req , res){
    var query = "UPDATE [Demo] SET FirstName= " + req.body.FirstName  +  "   WHERE Id= " + req.params.id;
    executeQuery (res, query);
    res.end("updated");
  });
  
  var  executeQuery = function(res, query){             
    sql.connect(sqlConfig, function (err) {
        if (err) {   
                    console.log("Error while connecting database :- " + err);
                    res.send(err);
                 }
                 else {
                        // create Request object
                        var request = new sql.Request();
                        // query to the database
                        request.query(query, function (err, res) {
                          if (err) {
                                     console.log("Error while querying database :- " + err);
                                    // res.send(err);
                                    }
                                    else {
                                    //  res.send(res);
                                           }
                              });
                      }
     });           
  }
  
  module.exports=(router);