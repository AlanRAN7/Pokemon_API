// console.log("Hola Mundo")

//Variables principales:
// const x = 0;
// let  y = 0;
// var z = 0;

//Se usa el paquete que instalamos previamente:
const express = require("express");
const app = express();

app.get("/", (req, res, next)=>{
    res.status(200);
    res.send("Hola mundo!");

})


//Se manda a llamar hacía un puerto en especifico:
app.listen(3000, ()=>{
    console.log("Server is running...")
});
