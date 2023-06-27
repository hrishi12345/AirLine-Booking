const express=require('express')
const {PORT}=require('./config/serverConfig')
const startandstop=async ()=>{
    const app=express()
    
    app.listen(PORT,()=>{
        console.log(`Server is started ${PORT} `)
    })
}
startandstop()