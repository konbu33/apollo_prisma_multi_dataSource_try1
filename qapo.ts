import fetch from 'cross-fetch'
import axios from 'axios'
import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client'

const getTodo = `
  query {
    todo {
      id
      title
      createdAt
    }
  }
`

// axios.post("http://localhost:4001/graphql", { query: getTodo }).then( (res) => { console.log(res.data.data) })

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: "http://localhost:4001/graphql",
//   link: new HttpLink({ uri: '/graphql', fetch}),
// })

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ 
    uri: 'http://localhost:4001', fetch
  }),
})



client
  .query({
    query: gql`
      query {
        todo {
          id
          title
          createdAt
        }
      }
    ` 
  })
  .then( (res) => {
    console.log('getTodo: ', res.data.todo)
  })
