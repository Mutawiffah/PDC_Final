const express = require("express")
const { createExpressMiddleware } = require("@trpc/server/adapters/express")
const { router } = require("./router")

const app = express()
app.use("/trpc", createExpressMiddleware({ router }))
app.listen(4000, () => console.log("tRPC running on 4000"))
