class Product {
    
    constructor(Name,Price,StateId,CityId,ResId,Remark,ProId) {
        this.ProId=0;
        this.Name=Name;
        this.Price=Price;
        this.StateId=StateId;
        this.CityId=CityId;
        this.ResId=ResId;
        this.Remark=Remark;
        this.ProId=ProId;
    }
 
    // getAddDemoSQL() {
    //     let sql = `INSERT INTO Demo(FirstName, LastName,EmailId) \
    //                VALUES('${this.firstName}','${this.lastName}',${this.emailId})`;
    //                console.log("query="+sql);
    //     return sql;           
    // }
 
    static getProductByIdSQL(id) {
        let sql = `SELECT * FROM tblProduct WHERE ProductId = ${id}`;
        console.log(sql);
        return sql;  
        
    }
 
    // static deleteDemoByIdSQL(id) {
    //     let sql = `DELETE FROM Demo WHERE Id = ${id}`;
    //     return sql;           
    // }
 
    static getAllProductSQL() {
        let sql = `SELECT * FROM tblProduct`;
        return sql;           
    }    
}
module.exports = Product;