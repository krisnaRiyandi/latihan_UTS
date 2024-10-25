const mongoose = require("mongoose");

//Create Collection Schema
const produkSchema = new mongoose.Schema({
    nama : {
        type : String,
    },
    deksripsi : {
        type: String,

    },
    harga : {
        type : Number,
  
    },
    stok: {
        type: Number,
    },
    kategori_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Kategori',
        required: true,
    }
});

//create Model from Schema

const Produk = mongoose.model("Produk", produkSchema);
module.exports = Produk;