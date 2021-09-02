import { PrismaClient } from './prisma/generated/client'

const prisma = new PrismaClient()

async function main() {
  const delAuthor = prisma.author.deleteMany({
    where: {
      authorId: 3
    }
  })

  const delBook = prisma.book.delete({
    where: {
      id: 3
    }
  })

  await prisma.$transaction([delAuthor, delBook])
}

main()
