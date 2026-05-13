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

const registro = async (req, res) => {
    try {
        const { nombre, email, fechaNacimiento, password } = req.body

        if (!nombre || !email || !fechaNacimiento || !password) {
            return res.status(400).json({ msg: "Todos los campos son obligatorios" })
        }

        const data = await fs.readFile(usuariosPath, "utf-8")
        const usuarios = JSON.parse(data)

        const yaExiste = usuarios.find((u) => u.email === email)
        if (yaExiste) {
            return res.status(400).json({ msg: "Ya existe una cuenta con ese email" })
        }

        const nuevoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1

        const nuevoUsuario = {
            id: nuevoId,
            email,
            password,
            nombre,
            fechaNacimiento,
            fechaRegistro: new Date().toISOString().split("T")[0],
            foto: "Assets/img/incognito.jpg"
        }

        usuarios.push(nuevoUsuario)
        await fs.writeFile(usuariosPath, JSON.stringify(usuarios, null, 2), "utf-8")

        res.status(201).json({ msg: "Cuenta creada con éxito" })
    } catch (error) {
        console.error("Error en registro:", error)
        res.status(500).json({ msg: "Error interno del servidor" })
    }
}

module.exports = { login, registro }