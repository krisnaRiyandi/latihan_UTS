const express = require("express");
const router = express.Router();
const produkController = require("../controllers/controllerProduk");

//const mahasiswaController = require('../controllers/mahasiswa'); 
    router.get("/", produkController.Index); //list mahasiswa 
    router.post("/insert", produkController.produkInsert); //insert mahasiswa 


module.exports = router;