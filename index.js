// Dependencies
const express = require("express");
const app = express();
const morgan = require("morgan")
// Routers
const pokemon = require("./routes/pokemon")
const user = require("./routes/user")
// Middleware
const auth = require("./middleware/auth")
const notFound = require("./middleware/notFound")
const index = require("./middleware/index")
const  cors = require("./middleware/cors")

/*
GET: Obtener recursos
POST: Almacenar / crear recursos
PATCH: Modificar una parte de un recurso
PUT: Modificar un recurso
DELETE: Borrar un recurso
*/
//Se usa cuando una función se quiera usar en todas las peticiones que entra en el servidor
// use = middleware
app.use(cors)
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Express trabaja de arriba hacia abajo como jerarquia
app.get("/", index)
app.use("/user", user);
app.use(auth);
app.use("/pokemon", pokemon);

app.use(notFound)



//Se manda a llamar hacía un puerto en especifico:
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running...")
});
//Con RegEx podemos validar un correo eléctronico