const { Router } = require("express")

const { login, registro } = require("../controllers/authController")

const rutas = Router()

rutas.post("/login", login)
rutas.post("/registro", registro)

module.exports = rutas