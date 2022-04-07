const con=require('../config/conexion');
const persona = require("../model/persona");

module.exports={

    index:function(req, res) {

        persona.obtener(con, function(err, data){
            //console.log(data);
            res.render('CRUD/index', {title: 'CRUD', personas:data});
        });
    },

    create: function(req, res) {
        res.render("CRUD/create");
    },

    save: function(req, res) {
        //console.log(req.body);
        
        persona.insert(con, req.body, function(err){
            if(err){
                res.send(err)
            } else {
                res.redirect('/persona');
            }
        });
    },

    delete: function(req, res) {
        console.log("recepcion de datos");
        console.log(req.params.id);
        persona.returnDataID(con, req.params.id, function(err, data){
             res.render('CRUD/delete', {persona:data[0]});
        })
    },

    drop: function(rep, res) {
        console.log('drop estoy aqui')
    }

};