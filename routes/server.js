express = require('express');
 router = express.Router();
 verifyToken=require('./VariftTokenMw');
 sql=require('mssql');
 const app = express();
 app.use(express.json());

const sqlConfig={
     user:"sa",
     password:"Radixweb@123",
     server:"PC0603",
    database:"DemoDb"

}

function add(sqlquery) {
    let connection=sql.connect(sqlConfig,(err)=>{
        if(err)
        {
         console.log(err);
        }
        else
        {

       
         var request = new sql.Request();
        // sqlquery=query;
         request.query(sqlquery, function (err, result) {
           if (err) {
             console.log(err);
             res.send(err);
           }
           else {
           
             recordSet = JSON.parse(JSON.stringify(result.recordset))
            
             //DemoList=recordSet;
            // console.log(recordSet);
             //res.json(recordSet)
            // console.log("DB Connected in server="+recordSet);
             return recordSet;
           }
         });
       
        }
    })

   
  }
  

  // add the code below
  module.exports = { add }
// router.get("/demo",verifyToken, (req, res) => {
//     let connection=sql.connect(sqlConfig,(err)=>{
//         if(err)
//         {
//          console.log(err);
//         }
//         else
//         {

//          console.log("DB Connected");
//          var request = new sql.Request();
//          sqlquery='Select * from Demo';
//          request.query(sqlquery, function (err, result) {
//            if (err) {
//              console.log(err);
//              res.send(err);
//            }
//            else {
           
//              recordSet = JSON.parse(JSON.stringify(result.recordset))
            
//              DemoList=recordSet;
//              console.log(recordSet);
//              res.json(recordSet)
//            }
//          });
//         // console.log("DB Connected");
//         }
//     })
//   // res.send("welcome");
//    console.log("Call get method");
// });


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