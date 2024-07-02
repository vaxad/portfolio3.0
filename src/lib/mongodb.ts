import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  //@ts-ignore
  const globalMongo = global._mongoClientPromise ? global._mongoClientPromise : false
  if (!globalMongo && uri) {
    client = new MongoClient(uri, options)
    //@ts-ignore
    global._mongoClientPromise = client.connect()
  }
  //@ts-ignore
  clientPromise = global._mongoClientPromise
} else if (uri) {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}
console.log("connected")
export default clientPromise as Promise<MongoClient>