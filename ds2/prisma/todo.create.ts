// import { PrismaClient } from '@prisma/client'
import { PrismaClient } from './client'

const prisma = new PrismaClient()

async function main() {
  const data = await prisma.todo.create({
    data: {
      id: 2,
      title: "task2"
    }
  })
  console.log('date: ', data)
}

main()
  .catch( e => { throw e })
  .finally( async () => { await prisma.$disconnect() })
