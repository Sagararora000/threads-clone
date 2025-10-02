import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function handler(event){  
  try{
     const { id } = event.queryStringParameters;
     const deleted = await prisma.posts.delete({
      where: { id: Number(id) },
    })
    console.log('Deleted Post:', deleted);
    return {
      statusCode: 200,
      body: JSON.stringify(deleted)
    }
  }catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to delete post", details: error.message })
    }
  }
   
}