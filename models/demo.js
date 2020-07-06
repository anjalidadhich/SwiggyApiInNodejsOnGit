class Demo {
    
    constructor(firstName,lastName,emailId) {
        this.id=0;
        this.firstName=firstName;
        this.lastName=firstName;
        this.emailId=emailId;
    }
 
    getAddDemoSQL() {
        let sql = `INSERT INTO Demo(FirstName, LastName,EmailId) \
                   VALUES('${this.firstName}','${this.lastName}',${this.emailId})`;
                   console.log("query="+sql);
        return sql;           
    }
 
    static getDemoByIdSQL(id) {
        let sql = `SELECT * FROM Demo WHERE Id = ${id}`;
        return sql;           
    }
 
    static deleteDemoByIdSQL(id) {
        let sql = `DELETE FROM Demo WHERE Id = ${id}`;
        return sql;           
    }
 
    static getAllDemoSQL() {
        let sql = `SELECT * FROM Demo`;
        return sql;           
    }    
}
 

module.exports = Demo;