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
        res.status(200).json({ message: 'Success', data: produk});
    }catch(error){
        res.status(400).json({ message: 'Failed', error});
    }
};
const insertProduk = (req, res, next) => {
    const produk = new Produk({
      nama: req.body.nama,
      deskripsi : req.body.deskripsi,
      harga: req.body.harga,
      stok : req.body.stok,
    });
  
    produk
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: false,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};
module.exports = { Index, produkInsert, insertProduk }
