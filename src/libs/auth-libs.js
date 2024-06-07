import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'

export const authUserSessionClient = async () => {
    const session = await getSession()
    return session?.user
}

export const authUserSessionServer = async () => {
    const session = await getServerSession(authOptions)
    return session?.user
}
