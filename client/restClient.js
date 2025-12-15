const axios = require("axios")
const FormData = require("form-data")
const fs = require("fs")

async function sendImage() {
  const form = new FormData()
  form.append("image", fs.createReadStream("sample.jpg"))

  const start = Date.now()
  const res = await axios.post("http://localhost:3000/uploadImage", form)
  console.log(res.data, "Time:", Date.now() - start)
}

sendImage()
