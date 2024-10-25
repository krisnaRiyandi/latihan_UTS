const Produk = require("../models/produk");

//untuk menghandle request get all mahasiswa
//List data mahasiswa
const Index = async (req, res) => {
    try{
        const produk = await Produk.find({});
        res.status(200).json({message: 'Success'}).json(produk);
    }catch (error) {
        res.status(400).json({ message: "Failed", error});
    }
    
};
const produkInsert = async (req, res) =>{
    try{
        const{nama, deskripsi, harga,stok,kategori_id} = req.body;
        const produk = new Produk({
            nama,
            deskripsi,
             harga,
             stok,
             kategori_id
        });
        await produk.save();
        res.status(200).json({ message: Success, data: produk});
    }catch(error){
        res.status(400).json({ message: 'Failed'});
    }
};

module.exports = { Index, produkInsert }
