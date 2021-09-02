import { PrismaClient } from './prisma/generated/client'

const prisma = new PrismaClient()

async function main() {
  const data = await prisma.todo.update({
    where: { id: 1},
    data: { title: "task1.update" },
  })

  console.log('daa: ', data)
  return data
}

main() 
  .catch( e => { throw e })
  .finally( async () => { await prisma.$disconnect() })

  