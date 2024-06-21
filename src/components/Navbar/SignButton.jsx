import { useEffect, useState } from 'react'
import { authUserSessionClient } from '@/libs/auth-libs'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'

const SignButton = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            const user = await authUserSessionClient()
            setUser(user)
        }

        fetchUser()
    }, [])

    return (
        <>
            {user ? null : (
                <Link
                    href={'/api/auth/signin'}
                    className="rounded-full bg-color-light-accent px-4 py-2 text-sm  transition-all hover:brightness-105 sm:px-6 sm:text-base md:text-lg"
                >
                    Sign in
                </Link>
            )}
            {user && (
                <Link href={'/users/dashboard'}>
                    <CldImage
                        deliveryType="fetch"
                        src={user.image}
                        alt="..."
                        width={50}
                        height={50}
                        className="w-8 rounded-full sm:w-11"
                    />
                </Link>
            )}
        </>
    )
}

export default SignButton
