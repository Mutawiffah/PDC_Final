const { initTRPC } = require("@trpc/server")
const classify = require("./classifier")

const t = initTRPC.create()

exports.router = t.router({
  uploadImage: t.procedure.mutation(() => classify())
})
