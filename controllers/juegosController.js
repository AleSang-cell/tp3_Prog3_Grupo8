const path = require("path")
const fs = require("fs").promises

const juegosPath = path.join(__dirname, "../data/juegos.json")

const getJuegos = async (req, res) => {
    try {
        const data = await fs.readFile(juegosPath, "utf-8")
        const juegos = JSON.parse(data)
        res.json(juegos)
    } catch (error) {
        console.error("Error al leer juegos:", error)
        res.status(500).json({ msg: "Error interno del servidor" })
    }
}

const getJuegosByCategoria = async (req, res) => {
    try {
        const { categoria } = req.params
        const data = await fs.readFile(juegosPath, "utf-8")
        const juegos = JSON.parse(data)

        const filtrados = juegos.filter(
            (j) => j.categoria.toLowerCase() === categoria.toLowerCase()
        )

        if (filtrados.length === 0) {
            return res.status(404).json({ msg: `No hay juegos en la categoría "${categoria}"` })
        }

        res.json(filtrados)
    } catch (error) {
        console.error("Error al filtrar juegos:", error)
        res.status(500).json({ msg: "Error interno del servidor" })
    }
}

module.exports = { getJuegos, getJuegosByCategoria }