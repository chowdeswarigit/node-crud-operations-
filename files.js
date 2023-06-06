const fs  = require('fs') 

const path = require('path') 

const pathDirectory = 'C:\Users\windows\Node\mock\sample.xt'



fs.appendFile("sample.txt" , "hello world" ,function(err){

    if(err){
        throw err
    }
    console.log("saved the file")
})

fs.open('chow.txt' ,'w' ,function(err){
    if(err){
        throw err 
    }
    console.log("file open successfully")
})

fs.writeFile("chow.txt" ,'w',function(err){
    if(err){
        throw err
    }
    console.log("file write suceessfully")
})

fs.unlink("chow.txt" ,function(err){
    if(err){
        throw err
    }

    console.log("file deleted successfully")
})