import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export  async function handler(event){
    try{
        const body = await JSON.parse(event.body)
        console.log('like Body:',body);
    const res = await prisma.likes.create({
        data: {
            userId: body.userId,
            postId: body.postId,
        }
    })

    return {
        statusCode: 200,
        body: JSON.stringify(res)
    }
    }catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to like post", details: error.message })
        }
    }
    
}