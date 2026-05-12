const path = require("path")
const fs = require("fs").promises

const usuariosPath = path.join(__dirname, "../data/usuarios.json")

const getPerfilById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await fs.readFile(usuariosPath, "utf-8")
        const usuarios = JSON.parse(data)

        const usuario = usuarios.find((u) => u.id === Number(id))

        if (!usuario) {
            return res.status(404).json({ msg: `Perfil con id ${id} no encontrado` })
        }

        // No devolver la password
        const { password: _, ...usuarioSinPassword } = usuario

        res.json(usuarioSinPassword)
    } catch (error) {
        console.error("Error al leer perfil:", error)
        res.status(500).json({ msg: "Error interno del servidor" })
    }
}

module.exports = { getPerfilById }