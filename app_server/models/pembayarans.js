const mongoose = require("mongoose");

//Create Collection Schema
const pembayaranSchema = new mongoose.Schema({
    transaksi_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Transaksi',
        required: true,
    },
    
    metode_pembayaran: {
        type : String,
    },

    jumlah: {
        type: Number,
    },
    tanggal_pembayaran: {
        type: Date,
    },
    status: {
        type: String,
    }
    
});

//create Model from Schema

const Pembayaran = mongoose.model("Pembayaran", pembayaranSchema);
module.exports = Pembayaran;