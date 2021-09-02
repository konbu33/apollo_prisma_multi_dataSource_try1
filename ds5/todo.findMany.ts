import { PrismaClient } from './prisma/generated/client'

const prisma = new PrismaClient()

async function main() {
//  const data = await prisma.todo.findMany({
//    where: { id: 1 },
//  })
//  console.log('data: ', data)
  const data = await prisma.todo.findMany()
  console.log('data: ', data)
  return data
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

export default main()
