const mongoose =  require('mongoose') 

const DbConection = async() =>{

    try{
        const Connect =  await mongoose.connect('mongodb+srv://chow:chow@cluster0.2py3xrd.mongodb.net/?retryWrites=true&w=majority');
        console.log("Databese Connected")

        console.log(process.env.MONGO_DB_URL)

    }
    catch(err){
        console.log(err)
        process.exit()
    }
}
module.exports = DbConection