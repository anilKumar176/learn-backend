const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    //console.log("DBURL-",`'${process.env.MONGODB_URL}'`);
    mongoose.connect("mongodb+srv://anilkumarchavan76:C6C9HchGL1PK5Nq1@cluster0.udzk1n9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};