export function autenticador(req, res, next){
    if(req.headers.autenticador === "admin"){
        next()
    }
    else {
        res.status(403).json({
            erro: true,
            statusCode: 403,
            message: "Usuário não autorizado, necessário privilégios de administrador."
        })
    }
}