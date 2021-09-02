// import { PrismaClient } from '@prisma/client'
import { PrismaClient } from './client'

const prisma = new PrismaClient()

async function main () {
  const data = await prisma.user.create({
    data: {
      id: 2,
      name: "izumi"
    }
  })
  console.log('data: ', data)
}

main()
  .catch( e => { throw e })
  .finally( async () => { await prisma.$disconnect() })
