import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function handler(event) {
    try{
        const body = await JSON.parse(event.body);

    console.log('Received Body:',body);
    
    const res = await prisma.posts.create({
        data: {
            userId: body.userId,
            name: body.name,
            image: body.image,
            text: body.text,
            picture: body.picture,
        }
    })

    return {
        statusCode: 200,
        
        body: JSON.stringify(res)
    }
    }catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to create post", details: error.message })
        }
    }
    
}