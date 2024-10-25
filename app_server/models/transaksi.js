const mongoose = require("mongoose");

//Create Collection Schema
const transaksiSchema = new mongoose.Schema({
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
    jumlah : {
        type : Number,
  
    },
    total_harga: {
        type: Number,
    },
    tanggal_transaksi: {
        type: Date,
    }
});

//create Model from Schema

const Transaksi = mongoose.model("Transaksi", transaksiSchema);
module.exports = Transaksi;