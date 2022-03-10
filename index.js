//Se usa el paquete que instalamos previamente:
const express = require("express");
const app = express();
const pokemon = require("./routes/pokemon")
const morgan = require("morgan")

/*
GET: Obtener recursos
POST: Almacenar / crear recursos
PATCH: Modificar una parte de un recurso
PUT: Modificar un recurso
DELETE: Borrar un recurso
*/
//Se usa cuando una función se quiera usar en todas las peticiones que entra en el servidor
// use = middleware
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Express trabaja de arriba hacia abajo como jerarquia
app.get("/", (req, res, next)=>{
    // const pokemon = pokedex.pokemon;
    return res.status(200).json({
        code: 1,
        message: "Bienvenido al Pokedex"
    })

})

app.use("/pokemon", pokemon);
app.use((req, res, next) =>{
    return res.status(404).json({
        code: 404,
        message: "¡URL no encontrada!"
    })
    })



//Se manda a llamar hacía un puerto en especifico:
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running...")
});
//Con RegEx podemos validar un correo eléctronico