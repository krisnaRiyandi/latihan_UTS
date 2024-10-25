const mongoose = require("mongoose");

//Create Collection Schema
const pesananSchema = new mongoose.Schema({
    pengguna_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Pengguna',
        required: true,

    },
    produk_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Produk',
        required: true,
    },
    
    jumlah : {
        type : Number,
  
    },
    status : {
        type: String,
    },
    tanggal_pesanan: {
        type: Date,
    }
});

//create Model from Schema

const Pesanan = mongoose.model("Pesanan", pesananSchema);
module.exports = Pesanan;