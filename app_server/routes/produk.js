const express = require("express");
const router = express.Router();
const produkController = require("../controllers/controllerProduk");
    router.get("/", produkController.Index); //list mahasiswa 
    router.post("/insert", produkController.produkInsert);
    router.post("/tambah", produkController.insertProduk);


module.exports = router;