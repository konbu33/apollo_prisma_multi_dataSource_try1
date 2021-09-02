import { PrismaClient } from './prisma/generated/client'

const prisma = new PrismaClient()

async function create() {

  // const insertData = {
  //   data: {
  //     posts: {
  //       create: [
  //         { title: "post1" },
  //         { title: "post2" }
  //       ],
  //     },
  //   },
  // }

  // const data = await prisma.user.create(insertData)
  // console.log('data: ', data)

  const userAndPosts = await prisma.user.create({
    data: {
      id: 10,
      name: "akiko",
      age: 30, 
      posts: {
        create: [
          { title: "tutrial1"}
        ]
      },
      reserve: {
        create: [
          { name: "bike1" }
        ]
      }
    }
  })

  console.log('data: ', userAndPosts)
}

create()

