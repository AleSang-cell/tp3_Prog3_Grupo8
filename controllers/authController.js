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

        if (!nombre || !email || !password) {
            return res.status(400).json({ msg: "Nombre, email y contraseña son obligatorios" })
        }

        // Leer archivo actual
        let usuarios = []
        try {
            const data = await fs.readFile(usuariosPath, "utf-8")
            const parsed = JSON.parse(data)
            usuarios = Array.isArray(parsed) ? parsed : []
        } catch (readError) {
            console.warn("No se pudo leer usuarios.json, se inicia vacío:", readError.message)
            usuarios = []
        }

        // Verificar email duplicado
        const emailExiste = usuarios.find((u) => u.email === email)
        if (emailExiste) {
            return res.status(400).json({ msg: "El email ya está registrado" })
        }

        const nuevoId = usuarios.length > 0
            ? Math.max(...usuarios.map((u) => u.id || 0)) + 1
            : 1

        const nuevoUsuario = {
            id: nuevoId,
            nombre,
            email,
            fechaNacimiento: fechaNacimiento || null,
            fechaRegistro: new Date().toISOString().split("T")[0],
            password,
            foto: "Assets/img/perfil-placeholder.png",
            pedidos: []
        }

        usuarios.push(nuevoUsuario)

        await fs.writeFile(usuariosPath, JSON.stringify(usuarios, null, 2), "utf-8")

        console.log(`Nuevo usuario registrado: ${email} (id: ${nuevoId})`)

        res.status(201).json({ msg: "Usuario registrado con éxito" })
    } catch (error) {
        console.error("Error en registro:", error)
        res.status(500).json({ msg: "Error interno del servidor" })
    }
}

module.exports = { login, registro }