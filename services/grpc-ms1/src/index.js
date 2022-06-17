const PROTO_PATH = __dirname + "/../protos/helloworld.proto"

const port = 5000
const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader")
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

/**
 * Implements the SayHello RPC method.
 */
const sayHello = (call, callback) => {
    callback(null, { message: "Hello " + call.request.name })
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
const main = () => {
    const server = new grpc.Server()
    server.addService(hello_proto.Greeter.service, { sayHello: sayHello })
    server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), () => {
        server.start()
        console.log(`Example server listening on port ${port}`)
    })
}

main()
