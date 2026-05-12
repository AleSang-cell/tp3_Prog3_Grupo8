const path = require("path")
const fs = require("fs").promises

const equipoPath = path.join(__dirname, "../data/equipo.json")

const getPerfilById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await fs.readFile(equipoPath, "utf-8")
        const equipo = JSON.parse(data)

        const perfil = equipo.find((p) => p.id === Number(id))

        if (!perfil) {
            return res.status(404).json({ msg: `Perfil con id ${id} no encontrado` })
        }

        res.json(perfil)
    } catch (error) {
        console.error("Error al leer perfil:", error)
        res.status(500).json({ msg: "Error interno del servidor" })
    }
}

module.exports = { getPerfilById }