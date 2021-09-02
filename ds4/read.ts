import { PrismaClient } from './prisma/generated/client'
const prisma = new PrismaClient()

const createData = {
	data: {
	id: 1,
	name: "akira",
	age: 10,
	}
}

async function main() {
	const data = await prisma.user.findMany()
	console.log("data: ", data)
	return data
}

main()
	.catch( e => { throw e })
	.finally( () => { prisma.$disconnect() })

export default main
