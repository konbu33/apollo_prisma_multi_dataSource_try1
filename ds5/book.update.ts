import { PrismaClient } from './prisma/generated/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.book.update({
    where: {
      id: 2
    },
    data: {
      id: 3,
      title: "tachikawa"
    }
  })

  const bookList = await prisma.book.findMany()
  console.log(' bookList: ', bookList)
}

main()
