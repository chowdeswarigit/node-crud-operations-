const express =  require('express')
const app = express() 
const dotenv =  require('dotenv')

const Port =  process.env.PORT  || 5000
console.log(Port)
app.use(express.json())
const BrandName = require('./modal')
const Employee =  require('./modal2')
const mongoose = require('mongoose')

const DbConection =  require('./config/DbConnection')

DbConection ()
const route = require('./Routes/contacts')
const userRoute  = require('./Routes/User')
// const { json } = require('express/lib/response')
// mongoose.connect('mongodb+srv://chow:chow@cluster0.2py3xrd.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log("Db is connected Successfully")).catch(err =>console.log(err))
app.use('/api/contacts',route)
app.use('/api/user',userRoute)
app.get('/',(req,res) =>{
    res.json({message:"Hello world"})
})
console.log(process.env.MONGO_DB_URL)
console.log(process.env.PORT)
app.post('/addemployee',async(req,res) =>{
    const {employeeName,email} =  req.body
    try{
        const NewData = new Employee({employeeName,email})
        await NewData.save() 
        return res.send(await Employee.find())
    }
    catch(err) {
        console.log(err
            .message)
    }
 })
 app.get('/getallemployees',async(req,res)=>{
    try{
const allData =  await Employee.find() 
return res.json(allData)
    }
    catch(err){
console.log(err.message)
    }
 })
 app.get('/getemployee/:id' ,async(req,res)=>{
    try{
        const Data =  await Employee.findById(req.params.id)
        return res.json(Data)
    }
    catch(err){
        console.log(err.message)
    }
 })
 app.delete('/delete/:id' , async(req,res) =>{
    try{
        await Employee.findByIdAndDelete(req.params.id) 
        return res.json(await Employee.find())
    }
    catch(err) {
        console.log(err.message)
    }
 })
app.post('/addbrand' , async(req,res) =>{
    const { brandName}  = req.body;
    try{
        const newdata=  new BrandName({brandName})
       await  newdata.save()
        return res.send(await BrandName.find())

    }
    catch(err){
        console.log(err.messag+"chow")
    }
})
app.get('/getallbrands' , async(req,res)=>{
    try{
        const allData = await BrandName.find();
        return res.json(allData);
        
    }
    catch(err){
        console.log(err.message )

    }

})
app.get('/getbrand/:id',async(req,res) =>{
    try{
        const Data =  await BrandName.findById(req.params.id)
        return res.json(Data)
    }
    catch(err){
        console.log(err.message)

    }
})
app.delete('/delete/:id',async (req,res)=>{
    try{
   await BrandName.findByIdAndDelete(req.params.id)
   return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message)

    }
})
console.log("helo world")
console.log("he")
console.log("dhee")
app.listen(Port,()=>console.log(`server is running on port ${Port} ........`))