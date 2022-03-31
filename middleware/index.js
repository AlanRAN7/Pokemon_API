module.exports = (req, res, next)=>{
    // const pokemon = pokedex.pokemon;
    return res.status(200).json({
        code: 1,
        message: "Bienvenido al Pokedex"
    })

}