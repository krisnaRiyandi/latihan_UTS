let mongoose = require("mongoose");
// pawII-si52 -> nama db nyaa
let dbURI= "mongodb://localhost:27017/latihan_uts"

mongoose.connect(dbURI,{
   //useNewURLParser: true
});

mongoose.connection.on("connected",() =>{
    console.log("Connected To MongoDB");
});

mongoose.connection.on("error",(error) =>{
    console.log("Connection Error : " + error);
});

mongoose.connection.on("disconected",() =>{
    console.log("Disconnected From MongoDB");
});