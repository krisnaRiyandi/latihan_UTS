const mongoose = require("mongoose");

//Create Collection Schema
const ulasanSchema = new mongoose.Schema({
    produk_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Produk',
        required: true,
    },
    pengguna_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Pengguna',
        required: true,

    },
    rating : {
        type : Number,
  
    },
    komentar: {
        type: String,
    },
    tanggal_ulasan: {
        type: Date,
    }
});

//create Model from Schema

const Ulasan = mongoose.model("Ulasan", ulasanSchema);
module.exports = Ulasan;