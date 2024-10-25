const mongoose = require("mongoose");

//Create Collection Schema
const diskonSchema = new mongoose.Schema({
    produk_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Produk',
        required: true,
    },
    
    persentase_diskon : {
        type : Number,
  
    },
    
    tanggal_mulai: {
        type: Date,
    },
    tanggal_selesai: {
        type: Date,
    },
    keterangan: {
        type: String,
    }
    
});

//create Model from Schema

const Diskon = mongoose.model("Diskon", diskonSchema);
module.exports = Diskon;