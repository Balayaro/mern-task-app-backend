const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${connect.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);

    }


}
module.exports = connectDB;

//const startServer = async () =>{
    //     try{
    //         await connectDB();
            
    //         app.listen(PORT, () =>{
    //             console.log(`server running on port ${PORT}`)
    //         });
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    
    // startServer();