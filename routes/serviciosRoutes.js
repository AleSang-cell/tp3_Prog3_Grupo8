const { Router } = require("express")

const {
        getServicios,getServicioById
} = require("../controllers/serviciosController")

const rutas = Router()

rutas.get("/", getServicios)
rutas.get("/:id", getServicioById)

module.exports = rutas