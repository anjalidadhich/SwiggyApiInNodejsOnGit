var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', function(req, res, next) {
  debugger;
  let userdata={
    username:req.body.username,password:req.body.password
  }
  if(userdata.username=="test" && userdata.password=='test')
  {
    console.log("SignIn");
    console.log(global.config.secretKey);
    let token=jwt.sign(userdata,global.config.secretKey,{
      algorithm:global.config.algorithm,
      expiresIn:'5m'
    });
   
    res.status(200).json({
      message:"Login Successfully",
      jwttoken:token
  });
    
  }
  else{
    res.status(400).json({message:"Login failed"});
  }
 
});
module.exports = router;
