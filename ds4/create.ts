import { PrismaClient } from './prisma/generated/client'
const prisma = new PrismaClient()

const createData = {
	data: {
	id: 2,
	name: "ito",
	age: 11,
	}
}

async function main() {
	const result = await prisma.user.create(createData)
	console.log("result: ", result)
}

main()
	.catch( e => { throw e })
	.finally( () => { prisma.$disconnect() })

export default main
