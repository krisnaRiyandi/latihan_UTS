const mongoose = require("mongoose");

//Create Collection Schema
const penggunaSchema = new mongoose.Schema({
    nama:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    alamat:{
        type: String,
    },

    tanggal_daftar: {
        type: Date,
    }
});

//create Model from Schema

const Pengguna = mongoose.model("Pengguna", penggunaSchema);
module.exports = Pengguna;