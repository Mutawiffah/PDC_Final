import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"

const client = createTRPCProxyClient({
  links: [httpBatchLink({ url: "http://localhost:4000/trpc" })]
})

const start = Date.now()
const res = await client.uploadImage.mutate()
console.log(res, Date.now() - start)
