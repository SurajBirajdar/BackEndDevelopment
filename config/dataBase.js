const mongoose = require('mongoose');

require("dotenv").config();

function dbConnect(){
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(function() {
        console.log("DB connection successful");
    })
    // .catch((error) => {
    // console.log("Error in DB Connection");
    // console.error(error.message);
    // process.exit();
    // });
    .catch(function(error) {
        console.error("Error in Db connection");
        console.error(error.message);
        process.exit();
    });
}

module.exports = dbConnect;

