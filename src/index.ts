import express, { json } from "express"
import { prisma } from "./services/prisma"

const app = express()

app.use(json())

app.get("/", async (_, res) => {
  const users = await prisma.teste_tabela.findMany()
  await prisma.$disconnect()
  return res.json(users)
})

app.post("/new", async (req, res) => {
  const { nome, idade, isAdm } = req.body

  const create = await prisma.teste_tabela.create({
    data: { nome, idade, isAdm },
  })
  await prisma.$disconnect()
  return res.json(create)
})

app.listen(3000, () => console.log(`Server is running`))
