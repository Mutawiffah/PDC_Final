const express = require("express")
const multer = require("multer")
const classify = require("./classifier")

const app = express()
const upload = multer()

app.post("/uploadImage", upload.single("image"), (req, res) => {
  const start = Date.now()
  const result = classify()
  res.json({
    ...result,
    responseTimeMs: Date.now() - start
  })
})

app.listen(3000, () => console.log("REST running on 3000"))
