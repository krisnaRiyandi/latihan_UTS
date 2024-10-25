const mongoose = require("mongoose");

//Create Collection Schema
const produkSchema = new mongoose.Schema({
    nama : {
        type : String,
    },
    deskripsi : {
        type: String,

    },
    harga : {
        type : Number,
  
    },
    stok: {
        type: Number,
    }
});

//create Model from Schema

const Produk = mongoose.model("Produk", produkSchema);
module.exports = Produk;