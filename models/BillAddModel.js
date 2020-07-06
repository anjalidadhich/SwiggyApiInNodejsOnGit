class BillAddModel {
   
    constructor(Address,FlatNo,Landmark,Type,UserId) {
        this.BillAddId=0;
        this.Address=Address;
        this.FlatNo=FlatNo;
        this.Landmark=Landmark;

        this.Type=Type;
        this.Extra=Null;
        this.UserId=UserId;
    }
 
    getAddBillingAddSQL() {
        let sql = `INSERT INTO tblBillingAddress(Address, FlatNo,Landmark,Type,Extra,UserId) \
                   VALUES('${this.Address}','${this.FlatNo}','${this.Landmark}','${this.Type}','${this.Extra}',${this.UserId})`;
                   console.log("query="+sql);
        return sql;           
    }
 
    static getBillingAddByIdSQL(id) {
        let sql = `SELECT * FROM tblBillingAddress WHERE BillAddId = ${id}`;
        return sql;           
    }
 
    static deleteBillingAddByIdSQL(id) {
        let sql = `DELETE FROM tblBillingAddress WHERE BillAddId = ${id}`;
        return sql;           
    }
 
    static getAllBillingAddSQL() {
        let sql = `SELECT * FROM tblBillingAddress`;
        return sql;           
    }    
}
 

module.exports = BillAddModel;