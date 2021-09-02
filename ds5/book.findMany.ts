import { PrismaClient } from './prisma/generated/client'

const prisma = new PrismaClient()

async function main() { 
  const bookList = await prisma.book.findMany()
  console.log('bookList: ', bookList)

  const authorList = await prisma.author.findMany()
  console.log('authorList: ', authorList)
}

main()

