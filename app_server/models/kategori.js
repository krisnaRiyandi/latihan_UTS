const mongoose = require("mongoose");

//Create Collection Schema
const kategoriSchema = new mongoose.Schema({
    nama_kategori : {
        type : String,
    },
    deksripsi : {
        type: String,

    },
    created_at : {
        type : Date,
  
    },
    updated_at: {
        type: Date,
    },
    status: {
        type: Boolean,
    }
});

//create Model from Schema

const Kategori = mongoose.model("Kategori", kategoriSchema);
module.exports = Kategori;