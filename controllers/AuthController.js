const path = require("path")
const fs = require("fs").promises

const usuariosPath = path.join(__dirname, "../data/usuarios.json")

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ msg: "Email y contraseña son obligatorios" })
        }

        const data = await fs.readFile(usuariosPath, "utf-8")
        const usuarios = JSON.parse(data)

        const usuario = usuarios.find(
            (u) => u.email === email && u.password === password
        )

        if (!usuario) {
            return res.status(401).json({ msg: "Credenciales inválidas" })
        }

        // Nunca devolver la password al cliente
        const { password: _, ...usuarioSinPassword } = usuario

        res.json({
            msg: "Login exitoso",
            usuario: usuarioSinPassword
        })
    } catch (error) {
        console.error("Error en login:", error)
        res.status(500).json({ msg: "Error interno del servidor" })
    }
}

module.exports = { login }