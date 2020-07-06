let express =require("express");
let db=require("../db/database")
let Order=require("../models/orderModel")
let OrderDetail=require("../models/orderDetailModel")
 verifyToken=require('./VariftTokenMw');
 sql=require('mssql');
 const app = express();
 app.use(express.json());

const router = express.Router();
 


router.get("/order",verifyToken, (req, res, next) => {
 
    db.query(Order.getAllOrderMasterSQL(), (err, data)=> {
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
 
router.get("order/MaxOrderId",verifyToken, (req, res, next) => {
 
    db.query(Order.getMaxOrderMasterIdSQL(), (err, data)=> {
        if(!err) {
        //  console.log(data.recordset);
        //  console.log("Hi");
         res.json(data.recordset);
          
        }
    });    
});
 
// //handles url http://localhost:6001/products/add
router.post("/order", (req, res, next) => {
  
    //read product information from request
    let Order = new Order(req.body.TotAmout, req.body.TotQty,req.body.SignId,req.body.ResId);
 
    db.query(Order.getAddOrderMasterSQL(), (err, data)=> {

      //res.json();      // res.status(200).json({
        //     message:"Demo added.",
        //     Id: data.Id
        // });
    });
});
 
// //handles url http://localhost:6001/products/1001
router.get("/order/:id",verifyToken, (req, res, next) => {
    let pid = req.params.id;
 
    db.query(Order.getOrderMasterByIdSQL(pid), (err, data)=> {
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
                    message:"Order Not found."
                });
            }
        } 
    });    
});
 

module.exports = router;

