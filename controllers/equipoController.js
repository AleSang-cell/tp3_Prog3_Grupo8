const path = require("path")
const fs = require("fs").promises

const equipoPath = path.join(__dirname, "../data/equipo.json")

const getEquipo = async (req, res) => {
    try {
        const data = await fs.readFile(equipoPath, "utf-8")
        const equipo = JSON.parse(data)
        res.json(equipo)
    } catch (error) {
        console.error("Error al leer equipo:", error)
        res.status(500).json({ msg: "Error interno del servidor" })
    }
}

module.exports = { getEquipo }