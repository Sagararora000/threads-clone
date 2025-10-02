import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function handler() {
    try{
        let posts = await prisma.posts.findMany({
        orderBy: { id: "desc" },
        include: { likes: true }
    })
    return {
        statusCode: 200,
        header:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(posts)
    }
    }catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch posts" })
        }
    }
    
}