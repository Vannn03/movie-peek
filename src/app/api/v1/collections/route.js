import prisma from '@/libs/prisma'

// Send Data to Database
export async function POST(request) {
    const { movieId, userEmail, movieImage, movieTitle } = await request.json()

    const data = { movieId, userEmail, movieImage, movieTitle }

    const createCollection = await prisma.collection.create({ data })

    if (!createCollection)
        return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
}

export async function DELETE(request) {
    const { movieId, userEmail } = await request.json()

    const deleteCollection = await prisma.collection.delete({
        where: { userEmail_movieId: { userEmail, movieId } },
    })

    if (!deleteCollection)
        return Response.json({ status: 500, isDeleted: false })
    else return Response.json({ status: 200, isDeleted: true })
}
