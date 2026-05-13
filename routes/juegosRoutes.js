const { Router } = require("express")
const { getJuegos, getJuegosByCategoria } = require("../controllers/juegosController")

const rutas = Router()

rutas.get("/", getJuegos)
rutas.get("/categoria/:categoria", getJuegosByCategoria)

module.exports = rutas