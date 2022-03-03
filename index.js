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

/*
GET: Obtener recursos
POST: Almacenar / crear recursos
PATCH: Modificar una parte de un recurso
PUT: Modificar un recurso
DELETE: Borrar un recurso
*/
//Se usa cuando una función se quiera usar en todas las peticiones que entra en el servidor
// use = middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Express trabaja de arriba hacia abajo como jerarquia
app.get("/", (req, res, next)=>{
    // const pokemon = pokedex.pokemon;
    return res.status(200).send("Bienvenido al Pokedex")

})

app.post("/pokemon", (req, res, next)=>{
    return res.status(200).send(req.body)
})

app.get("/pokemon", (req,res,next)=>{
    return res.status(200).send(pokemon);
})

//:id - Variable
// ([rango entre 0 y 9]{json de valores, entre 1 y 3 digitos})
app.get("/pokemon/:id([0-9]{1,3})", (req,res,next)=>{
    const id = req.params.id - 1;
    if(id >= 0 && id<=150){
        return res.status(200).send(pokemon[req.params.id - 1])
    } else{
        return res.status(404).send("¡Pokémon no encontrado!")
    }


})

app.get("/pokemon/:name([A-Za-z]+)", (req, res, next)=>{
    const name = req.params.name;
//For:
    // for(i =0; i < pokemon.length; i++){
    //    if(pokemon[i].name.toUpperCase() == name.toUpperCase()){
    //     return res.status(200).send(pokemon[i]);
    //    } 
    // }
//Filter: 
    const pk = pokemon.filter((p)=>{
        // condicion ? valor si verdadero : valor si falso
        return (p.name.toUpperCase() == name.toUpperCase()) ? p : null;
    })

     return  (pk.length > 0) ? res.status(200).send(pk) :  res.status(404).send("Pokémon no encontrado")

    // res.status(404).send("Pokémon no encontrado")
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