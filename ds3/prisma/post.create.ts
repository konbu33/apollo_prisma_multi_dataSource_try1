import { PrismaClient } from './client'

const prisma = new PrismaClient()

async function main() {
  const data = await prisma.post.create({
    data: {
      id: 1,
      title: "post1"
    }
  })
  console.log('data: ', data)
}

main()
  .catch( e => { throw e})
  .finally( async () => { await prisma.$disconnect() })
