let express =require("express");
let db=require("../db/database")
let Demo=require("../models/demo")
let Product=require("../models/product")
let BillAdd=require("../models/BillAddModel")
 verifyToken=require('./VariftTokenMw');
 sql=require('mssql');
 const app = express();
 app.use(express.json());

const router = express.Router();
 
//handles url http://localhost:6001/products
router.get("/demo",verifyToken, (req, res, next) => {
 
    db.query(Demo.getAllDemoSQL(), (err, data)=> {
        if(!err) {
        //  console.log(data.recordset);
        //  console.log("Hi");
         res.json(data.recordset);
            // res.status(200).json({
            //     message:"Demo listed.",
            //     Id:data.recordset
            // });
        }
    });    
});

router.get("/product",verifyToken, (req, res, next) => {
 
    db.query(Product.getAllProductSQL(), (err, data)=> {
        if(!err) {
        //  console.log(data.recordset);
        //  console.log("Hi");
         res.json(data.recordset);
            // res.status(200).json({
            //     message:"Demo listed.",
            //     Id:data.recordset
            // });
        }
    });    
});
 
 
// //handles url http://localhost:6001/products/add
// router.post("/demo", (req, res, next) => {
 
//     //read product information from request
//     let Demo = new Demo(req.body.firstName, req.body.lastName,req.body.emailId);
 
//     db.query(Demo.getAddDemoSQL(), (err, data)=> {

//       //res.json();      // res.status(200).json({
//         //     message:"Demo added.",
//         //     Id: data.Id
//         // });
//     });
// });
 
// //handles url http://localhost:6001/products/1001
router.get("/product/:id",verifyToken, (req, res, next) => {
    let pid = req.params.id;
 
    db.query(Product.getProductByIdSQL(pid), (err, data)=> {
        console.log(data);
        console.log(err);
        console.log("error");
        console.log(data.length);
        if(!err) {
            if(data) {
                res.json(data.recordset);
                // res.status(200).json({
                //     message:"Product found.",
                //     product: data.recordset
                // });
            } else {
                res.status(200).json({
                    message:"Product Not found."
                });
            }
        } 
    });    
});
 
// //handles url http://localhost:6001/products/delete
// router.post("/delete", (req, res, next) => {
 
//     var pid = req.body.productId;
 
//     db.query(Product.deleteProductByIdSQL(pid), (err, data)=> {
//         if(!err) {
//             if(data && data.affectedRows > 0) {
//                 res.status(200).json({
//                     message:`Product deleted with id = ${pid}.`,
//                     affectedRows: data.affectedRows
//                 });
//             } else {
//                 res.status(200).json({
//                     message:"Product Not found."
//                 });
//             }
//         } 
//     });   
// });
 



module.exports = router;












// express = require('express');
//  router = express.Router();
//  verifyToken=require('./VariftTokenMw');
//  sql=require('mssql');
//  const app = express();
//  app.use(express.json());
// //  const dataPath = "./server";
//  const data = require("./server.js");
// // const sqlConfig={
// //      user:"sa",
// //      password:"Radixweb@123",
// //      server:"PC0603",
// //     database:"DemoDb"

// // }
// var customer=[{Id:1,Name:"anjali",class:"1"},{Id:2,Name:"ram",class:"12"}]

// var DemoList=null;
//   router.get("/demo",verifyToken, (req, res) => {
//     sqlquery='Select * from Demo';
//    var recordSet= data.add(sqlquery);
//    console.log(recordSet);
//    res.json(recordSet);
   
//    //console.log("Get method call data="+recordSet)
//    // res.json(recordSet);
// //res.end();
//     // let connection=sql.connect(sqlConfig,(err)=>{
//     //     if(err)
//     //     {
//     //      console.log(err);
//     //     }
//     //     else
//     //     {

//     //      console.log("DB Connected");
//     //      var request = new sql.Request();
//     //      sqlquery='Select * from Demo';
//     //      request.query(sqlquery, function (err, result) {
//     //        if (err) {
//     //          console.log(err);
//     //          res.send(err);
//     //        }
//     //        else {
//     //          // var data = JSON.stringify(result.recordset)
//     //          // recordSet = JSON.parse(data)
//     //          recordSet = JSON.parse(JSON.stringify(result.recordset))
//     //          // res.render('users', { recordSet: recordSet });
//     //          DemoList=recordSet;
//     //          console.log(recordSet);
//     //          res.json(recordSet)
//     //        }
//     //      });
//     //     // console.log("DB Connected");
//     //     }
//     // })
//   // res.send("welcome");
//    console.log("Call get method");
// });

// // router.get("/demo/:id", (req, res) => {
// //   console.log(req.body);

// //   var book=DemoList.find(x=>x.Id===parseInt(req.params.id));
// //   console.log("Book=" +book)
 
// // res.send(book)

// // console.log("/books Url is invoked get with id method ");

// // });


// // router.post('/demo',verifyToken,function(req,res)
// // {   
// //   console.log("welcome post method");
// //     debugger;
// //     console.log(req.body.firstName);
// // console.log(req.body.firstName);
// //          if (req.body.Name != "") {
// //             var query = "INSERT INTO Demo (FirstName,LastName,EmailId) VALUES ( " + "'" + req.body.firstName + "'" + " ," + "'" + req.body.lastName + "'" + " ," + "'" + req.body.emailId + "'" + " )";
// //             console.log(query);
// //             sql.close();
// //             sql.connect(sqlConfig, function (err) {
// //                 var request = new sql.Request();
// //                 request.query(query, function (err, result) {
// //                    console.log(result);
// //                    //console.log(result.recordset);
// //                    res.send(result.rowsAffected);
// //                 });
// //          });
// //         }
// // });


// // router.put("/demo",verifyToken, function(req , res){
// //   console.log("Call put method");
// //   console.log(req.body);
// //  //var query = "UPDATE [Demo] SET FirstName= " + req.body.firstName  +  "   WHERE Id= "+ req.body.id;
// //    var query = "UPDATE [Demo] SET FirstName= "+"'" + req.body.firstName + "'"  +"   WHERE Id= "+ req.body.id;
// //    console.log(query);
// //   executeQuery (res, query);
// //   res.end("updated");
// // });


// // router.delete("/demo/:id",verifyToken, function(req , res){
// //   var query = "DELETE FROM [Demo] WHERE Id=" + req.params.id;
// //   executeQuery (res, query);
// // });


// // var  executeQuery = function(res, query){             
// //   sql.connect(sqlConfig, function (err) {
// //       if (err) {   
// //                   console.log("Error while connecting database :- " + err);
// //                   res.send(err);
// //                }
// //                else {
// //                       // create Request object
// //                       var request = new sql.Request();
// //                       // query to the database
// //                       request.query(query, function (err, res) {
// //                         if (err) {
// //                                    console.log("Error while querying database :- " + err);
// //                                   // res.send(err);
// //                                   }
// //                                   else {
// //                                   //  res.send(res);
// //                                          }
// //                             });
// //                     }
// //    });           
// // }

//   module.exports=(router);