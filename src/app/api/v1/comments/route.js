import prisma from '@/libs/prisma'

// Send Data to Database
export async function POST(request) {
    const { movieId, userEmail, comment, userImage, userName, movieTitle } =
        await request.json()

    const data = {
        movieId,
        userEmail,
        comment,
        userImage,
        userName,
        movieTitle,
    }

    const createComment = await prisma.comment.create({ data })

    if (!createComment) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
}

export async function DELETE(request) {
    const { commentId, userEmail } = await request.json()

    const deleteCollection = await prisma.comment.delete({
        where: { userEmail: userEmail, id: commentId },
    })

    if (!deleteCollection)
        return Response.json({ status: 500, isDeleted: false })
    else return Response.json({ status: 200, isDeleted: true })
}
