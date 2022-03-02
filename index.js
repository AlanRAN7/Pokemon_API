// console.log("Hola Mundo")

//Variables principales:
// const x = 0;
// let  y = 0;
// var z = 0;

//Se usa el paquete que instalamos previamente:
const express = require("express");
const app = express();
// const pokedex = require("./pokedex.json");
const {pokemon} = require("./pokedex.json")

//Express trabaja de arriba hacia abajo como jerarquia
app.get("/", (req, res, next)=>{
    // const pokemon = pokedex.pokemon;
    res.status(200);
    // res.send(pokemon);
    res.send("Bienvenido al Pokedex")

})

app.get("/pokemon/all", (req,res,next)=>{
    res.status(200);
    res.send(pokemon);
})

//:id - Variable
// ([rango entre 0 y 9]{json de valores, entre 1 y 3 digitos})
app.get("/pokemon/:id([0-9]{1,3})", (req,res,next)=>{
    const id = req.params.id - 1;
    if(id >= 0 && id<=150){
        res.status(200);
        res.send(pokemon[req.params.id - 1])
    } else{
        res.status(404);
        res.send("¡Pokémon no encontrado!")
    }


})

app.get("/pokemon/:name", (req, res, next)=>{
    const name = req.params.name;
    for(i =0; i < pokemon.length; i++){
       if(pokemon[i].name == name){
        res.status(200);
        res.send(pokemon[i]);
       } 
    }
    res.status(404);
    res.send("Pokémon no encontrado")
})

//Dejamos que el usuario ponga cualquier dato
// app.get("/:name", (req, res, next) =>{
    //req: petición
//     console.log(req.params.name);
//     res.status(200);
//     res.send("Hola, "+ req.params.name);
// });

// app.get("/:name/edad", (req, res, mext) =>{
//     res.status(200);
//     res.send("Estás en la página 'edad' sobre u nombre raro, o ¿común?")
// })

//Se manda a llamar hacía un puerto en especifico:
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running...")
});
//Con RegEx podemos validar un correo eléctronico