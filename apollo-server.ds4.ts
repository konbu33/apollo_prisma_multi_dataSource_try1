import { ApolloServer, gql } from 'apollo-server'
import { create, deleteData, read, readid, updateAge, updateName } from './ds4/crud'

const typeDefs = gql`
  type User {
    id: ID
    name: String
    age: Int
  }

  type Query {
    user: [User]
    userid(id: ID): [User]
  }

  type Mutation {
    userCreate(id: ID, name: String, age: Int): User
    userDelete(id: ID): User
    userUpdateAge(name: String, age: Int): User
    userUpdateName(id: ID, name: String): User
  }
`
const resolvers = {
  Query: {
    user: (perent, args, context, info) => read(),
    userid: (perent, args, context, into) => readid(args)
  },
  Mutation: {
    userCreate: (perent, args, context, info) => create(args),
    userDelete: (perent, args, context, info) => deleteData(args),
    userUpdateAge: (perent, args, context, info) => updateAge(args),
    userUpdateName: (perent, args, context, info) => updateName(args),
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen({ port: 4001 }, () => { console.log( 'server started : ')})

