const mysql = require("mysql");
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'CRUD'
});

con.connect((err)=>{
    if (!err){
        console.log('Conecion establecida');
    }else{
        console.error('Erro en la conexion');
    }
});

module.exports=con;