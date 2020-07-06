const mysql=require("mssql")

            var dbConfig = {
                user:"sa",
                password:"Radixweb@123",
                server:"PC0603",
               database:"SwiggyDb"
           
             
                          };
function executeQuery(query, callback) {
    mysql.close();
    mysql.connect(dbConfig, function (err) {
    console.log(err);
    var request = new mysql.Request();
   // console.log(request);
    request.query(query, function (err, result) {
   // console.log(request);
      console.log(query);
    //  console.log(dbConfig);
    //  console.log(result);
      return callback(null,result);
    //  res.render('index', {count: JSON.parse(JSON.stringify(result.rowsAffected))});
    });
  });
}

function query(sql, callback) {    
    executeQuery(sql,function(err, data) {
        if(err) {
            return callback(err);
        }       
        callback(null, data);
    });
}


module.exports = {
    query: query
}