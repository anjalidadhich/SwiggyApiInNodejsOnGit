class OrderMaster {
    
    constructor(TotAmout,TotQty,SignId,ResId) {
        this.TotQty=TotQty;
        this.TotAmout=TotAmout;
        this.OrderNoPre="Ord";
        this.SignId=SignId;
        let date_ob = new Date();
        this.OrderDate=date_ob;
        this.ResId=ResId;
        // this.Remark=Remark;
        // this.ProId=ProId;
    }
 
    getAddOrderMasterSQL() {
        let sql = `INSERT INTO tblOrderMaster(OrderNo, OrderDate,TotAmout,TotQty,OrderNoPre,SignId,ResId) \
                   VALUES('${this.OrderNo}','${this.OrderDate}',${this.TotAmout},${this.TotQty},'${this.OrderNoPre}',${this.SignId},${this.ResId})`;
                   console.log("query="+sql);
        return sql;           
    }
 
    static getOrderMasterByIdSQL(id) {
        let sql = `SELECT * FROM tblOrderMaster WHERE OrderId = ${id}`;
        console.log(sql);
        return sql;  
        
    }
 
    static getMaxOrderMasterIdSQL() {
        let sql = `SELECT Top 1 * FROM tblOrderMaster order by 1 desc`;
        console.log(sql);
        return sql;  
        
    }
    static deleteOrderMasterByIdSQL(id) {
        let sql = `DELETE FROM tblOrderMaster WHERE OrderId = ${id}`;
        return sql;           
    }
 
    static getAllOrderMasterSQL() {
        let sql = `SELECT * FROM tblOrderMaster`;
        return sql;           
    }    
}
module.exports = OrderMaster;