var express = require('express');
const multer = require('multer');
var router = express.Router();
const personaControllers = require("../controllers/personaController");

//para cargar archivos
var fecha = Date.now();

var rutaAlmacen = multer.diskStorage(
    {
        destination:function(request, file, callbask) {
            callbask(null, '../public/images/')
        },
        filename:function(request, file, callbask){
            console.log(file);
            callbask(null, fecha+"_"+file.originalname);
        }
    }
);

var cargar=multer({ Storage:rutaAlmacen });

/* GET home page. */
router.get('/', personaControllers.index);
router.get('/create', personaControllers.create);
router.post('/save', personaControllers.save);
router.post('/delete/:id', personaControllers.delete);
router.get('/drop/:id', personaControllers.drop);

module.exports = router;
