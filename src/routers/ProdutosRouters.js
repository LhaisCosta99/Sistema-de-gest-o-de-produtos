import { Router } from "express";
import Produtos from "../controller/Produtos.js";

const produtosRouter = Router()

produtosRouter.get("/", Produtos.get)
produtosRouter.get("/:id", Produtos.getId)
produtosRouter.post("/", Produtos.post)
produtosRouter.patch("/:id", Produtos.patch)
produtosRouter.delete("/:id", Produtos.delete)

export default produtosRouter;