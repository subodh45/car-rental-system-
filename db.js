 const mongoose = require("mongoose");

 function connectDB(){
    mongoose.connect('mongodb+srv://dbsubodh:dbsubodh@cluster0.gwrisdw.mongodb.net/CarRental-cars' , {useNewUrlParser: true , useUnifiedTopology: true } )

     const connection = mongoose.connection

     connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
     })
     connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
     })

    
}

 connectDB() 

 module.exports = mongoose 


/*const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/CarRentalDB" , {useNewurlparser: true ,useUnifiedTopology: true });*/
