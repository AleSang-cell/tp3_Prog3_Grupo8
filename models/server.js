const express = require('express')
const cors = require('cors')
require('dotenv').config()

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3000
        this.middleware()
        this.rutas()
    }

    middleware() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    rutas() {
        this.app.use("/auth", require("../routes/authRoutes"))
        this.app.use("/servicios", require("../routes/serviciosRoutes"))
        this.app.use("/equipo", require("../routes/equipoRoutes"))
        this.app.use("/perfil", require("../routes/perfileRoutes"))
        this.app.use("/juegos", require("../routes/juegosRoutes"))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}

module.exports = Server