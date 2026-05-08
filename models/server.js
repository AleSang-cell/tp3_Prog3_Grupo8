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
    }

    rutas() {
        this.app.use("/servicios", require("../routes/serviciosRoutes"))
        this.app.use("/equipo", require("../routes/equipoRoutes"))
        this.app.use("/perfil", require("../routes/perfileRoutes"))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}

module.exports = Server