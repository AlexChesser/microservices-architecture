const express = require('express')
const app = express()
const port = 3000

const PROTO_PATH = __dirname + "/../protos/helloworld.proto"
// const PROTO_PATH = __dirname + "../../../ms1/protos/helloworld.proto"
const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader")
const target = "grpc-ms1:5000"
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    })
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld

function main(res) {
    const client = new hello_proto.Greeter(target, grpc.credentials.createInsecure())
    const name = "GRPC"
    client.sayHello({ name }, function (err, response) {
        res.send(response.message)
    })
}

app.get('/', (req, res) => {
    main(res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})