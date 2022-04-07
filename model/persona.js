module.exports={
    obtener:function(conexion, funcion){
        conexion.query("SELECT * FROM Users", funcion)
    },

    insert:function(conexion, data, funcion){
        console.log(data);
        conexion.query("INSERT INTO Users(CI, Nombre, Paterno, Materno, Telefono) VALUES(?, ?, ?, ?, ?)", [data.CI, data.nombre, data.paterno, data.materno, data.telefono], funcion)
    },

    returnDataID:function(conexion, id, funcion){
        conexion.query("SELECT * FROM Users WHERE id=?", [id], funcion);
    },

    drop: function(conexion, id, funcion){
        conexion.query("")
    }
    
}