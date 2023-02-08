import { Router } from "express"
import Categorias from "../controller/Categorias.js"

const categoriasRouter = Router()

categoriasRouter.get("/", Categorias.get)
categoriasRouter.get("/:id", Categorias.getId)
categoriasRouter.post("/", Categorias.post)
categoriasRouter.patch("/:id", Categorias.patch)
categoriasRouter.delete("/:id", Categorias.delete)

export default categoriasRouter
