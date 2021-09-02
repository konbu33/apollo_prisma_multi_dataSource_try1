import { PrismaClient } from './prisma/generated/client'

const prisma = new PrismaClient()

// const insertData = {
//   data: {
//     id: 2,
//     title: "task2"
//   }
// }

async function main(insertData) {
  const data = await prisma.todo.create(insertData)
  console.log('data: ', data)
  return data
}

// main(insertData)
//   .catch( e => { throw e})
//   .finally( async () => await prisma.$disconnect() )

export default main
