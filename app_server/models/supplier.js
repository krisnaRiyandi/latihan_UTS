const mongoose = require("mongoose");

//Create Collection Schema
const supplierSchema = new mongoose.Schema({
    nama_supplier :{
        type: String,
    },
    alamat:{
        type: String,
    },
    kontak :{
        type: String,
    },
    email:{
        type: String,
    },

    tanggal_mendaftar: {
        type: Date,
    }
});

//create Model from Schema

const Supplier = mongoose.model("Supplier", supplierSchema);
module.exports = Supplier;