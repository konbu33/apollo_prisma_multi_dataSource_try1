import { PrismaClient } from './prisma/generated/client'

const prisma = new PrismaClient()

async function create(args) {
  const { id, name, age } = args
  const insertData = {
    data: {
      id: Number(id),
      name: name,
      age: age,
    }
  }
  const data = await prisma.user.create(insertData)
  console.log('create data: ', data)
  return data
}

async function read() {
  const data = prisma.user.findMany()
  return data
}

async function readid(args) {
  const { id } = args
  const data = prisma.user.findMany({
    where: {
      id: Number(id) 
    }
  })
  return data
}

async function updateName(args) {
  const { id, name } = args
  const data = await prisma.user.update({
    where: {
      id: Number(id)
    },
    data: {
      name: name
    }
  })
  console.log('updateName data: ', data)
  return data
}

async function updateAge(args) {
  const { name, age } = args
  const data = await prisma.user.updateMany({
    where: {
      name: {
        contains: name
      }
    },
    data: {
      age: age
    }
  })
  console.log('updateAge data: ', data)
  console.log('updateAge data.count: ', typeof data.count)
  return data.count
}

async function deleteData(args) {
  const { id } = args
  const data = await prisma.user.delete({
    where: {
      id: Number(id)
    }
  })
  console.log('deleteData data: ', data)
  return data
}

export { 
  create,
  read,
  readid,
  updateAge,
  updateName,
  deleteData
}

