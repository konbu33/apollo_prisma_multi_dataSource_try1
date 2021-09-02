import { PrismaClient } from './prisma/generated/client'

const prisma = new PrismaClient()
async function main() {
  // const data = await prisma.book.create({
  //   data: {
  //     title : "info2",
  //     author: {
  //       create: [
  //         { name : "akiko"}
  //       ]
  //     }
  //   }
  // })

  const data = await prisma.book.create({
    data: 
      {  
        id: 4,
        title: "akebono", 
        author: {
          createMany: {
            data: [
              { id: 4, name: "akiko" }
            ]
          }
        }
      }
  })

  const bookList = await prisma.book.findMany()
  console.log('book: ', bookList) 

  const authorList = await prisma.author.findMany()
  console.log('author: ', authorList) 

}

main()
  .catch( e => { throw e })
  .finally( async () => { await prisma.$disconnect() })
