const path = require("path")
const fs = require("fs").promises

const usuariosPath = path.join(__dirname, "../data/usuarios.json")
const juegosPath = path.join(__dirname, "../data/juegos.json")

const getPerfilById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await fs.readFile(usuariosPath, "utf-8")
        const usuarios = JSON.parse(data)

        const usuario = usuarios.find((u) => u.id === Number(id))

        if (!usuario) {
            return res.status(404).json({ msg: `Perfil con id ${id} no encontrado` })
        }

        // Leer ofertas (juegos)
        let ofertas = []
        try {
            const juegosData = await fs.readFile(juegosPath, "utf-8")
            ofertas = JSON.parse(juegosData)
        } catch (err) {
            console.warn("No se pudo leer juegos.json:", err.message)
        }

        const pedidos = Array.isArray(usuario.pedidos) ? usuario.pedidos : []
        const ultimos3Pedidos = pedidos.slice(-3).reverse()

        const { password: _, pedidos: __, ...datosPerfil } = usuario

        res.json({
            ...datosPerfil,
            ultimos3Pedidos,
            ofertas
        })
    } catch (error) {
        console.error("Error al leer perfil:", error)
        res.status(500).json({ msg: "Error interno del servidor" })
    }
}

module.exports = { getPerfilById }