import { ApolloServer, gql } from 'apollo-server'
import getTodo from './ds5/todo.findMany'
import createTodo from './ds5/todo.create'

const typeDefs = gql`
  scalar Date

  type Todo {
    id: ID
    title: String
    createdAt: Date
    updatedAt: Date
  }

  type Query {
    todoList: [Todo]
    todo(title: String): Todo
    todoid(id: ID): Todo
  }

  type Mutation {
    todo(id: ID, title: String): Todo
  }
`

const resolvers =  {
  Mutation: {
    todo: (perent, args, context, info) => {
      const res = {
        data: {
          id: Number(args.id),
          title: args.title
        }
      }
      const result = createTodo(res) 
      return result
    }
  },
  Query: {
    async todoList() {
      const todos = await getTodo
      console.log('todos: ', todos)
      return todos
    },
    async todo(perent, args, context, info) {
      const todos = await getTodo
      console.log('args.title:', args.title)
      return todos.find( todo => todo.title === args.title )
    },
    async todoid(perent, args, context, info) {
      const todos = await getTodo
      console.log('todos:', typeof todos[0].id)
      console.log('args.id:', typeof args.id)
      return todos.find( todo => todo.id === Number(args.id) )

    }
  }
}

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  cacheControl: {
    calculateHttpHeaders: false,
  },
})
server.listen({ port: 4001 }, ()=>{ console.log("start: ")})


