const path = require("path")
const fs = require("fs").promises

// Ruta al archivo de servicios

const serviciosPath = path.join(__dirname, "../data/servicios.json")

const getServicios = async (req, res) => {
    try {
        const data = await fs.readFile(serviciosPath, "utf-8")
        const servicios = JSON.parse(data)
        res.json(servicios)
    } catch (error) {
        console.error("Error al leer servicios:", error)
        res.status(500).json({ msg: "Error interno del servidor" })
    }
}

const getServicioById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await fs.readFile(serviciosPath, "utf-8")
        const servicios = JSON.parse(data)

        const servicio = servicios.find((s) => s.id === Number(id))

        if (!servicio) {
            return res.status(404).json({ msg: `Servicio con id ${id} no encontrado` })
        }

        res.json(servicio)
    } catch (error) {
        console.error("Error al leer servicio:", error)
        res.status(500).json({ msg: "Error interno del servidor" })
    }
}

module.exports = { getServicios, getServicioById }