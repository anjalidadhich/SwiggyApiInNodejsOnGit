class OrderDetail {
    
    constructor(ProId,Qty,Price,Total,ResId,OrderId) {
        this.ProId=ProId;
        this.Qty=Qty;
        this.Price=Price;
        this.Total=Total;
      
        this.OrderId=OrderId;
        this.ResId=ResId;
        this.OrderDtlId=OrderDtlId;
        
    }
 
    getAddOrderDetailSQL() {
        let sql = `INSERT INTO tblOrderDetails(ProId, Qty,Price,Total,OrderId,ResId) \
                   VALUES('${this.ProId}','${this.Qty}',${this.Price},${this.Total},${this.OrderId},${this.ResId})`;
                   console.log("query="+sql);
        return sql;           
    }
 
    static getOrderDetailByIdSQL(id) {
        let sql = `SELECT * FROM tblOrderDetails WHERE OrderDtlId = ${id}`;
        console.log(sql);
        return sql;  
        
    }
 
    static deleteOrderDetailByIdSQL(id) {
        let sql = `DELETE FROM tblOrderDetails WHERE OrderDtlId = ${id}`;
        return sql;           
    }
 
    static getAllOrderDetailSQL() {
        let sql = `SELECT * FROM tblOrderDetails`;
        return sql;           
    }    
}
module.exports = OrderDetail;